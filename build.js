const fs = require('fs');
const path = require('path');
const marked = require('marked');
const matter = require('gray-matter');
const hljs = require('highlight.js');

// Global data storage
const globalData = {
  allTags: new Set(),
  allNotes: [],
  tagIndex: {}, // tag -> [noteIds]
  noteMap: {}, // noteId -> note data
};

// Configure marked with syntax highlighting
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (err) {}
    }
    return code;
  },
  breaks: true,
  gfm: true
});

// Custom renderer for task lists
const renderer = new marked.Renderer();
const originalListitem = renderer.listitem.bind(renderer);
renderer.listitem = function(text, task, checked) {
  if (task) {
    // Remove the default checkbox input that marked adds
    const cleanText = text.replace(/<input.*?type="checkbox".*?>/i, '').trim();
    return `<li class="${checked ? 'completed' : ''}">${cleanText}</li>`;
  }
  return originalListitem(text, task, checked);
};

renderer.list = function(body, ordered, start) {
  const type = ordered ? 'ol' : 'ul';
  const hasTask = body.includes('class="completed"') || body.includes('class=""');
  const className = hasTask ? ' class="task-list"' : '';
  return `<${type}${className}>${body}</${type}>`;
};

// Custom renderer for blockquotes to create alerts
renderer.blockquote = function(quote) {
  // Check for special alert markers
  if (quote.includes('💡')) {
    return `<div class="alert alert-tip">${quote.replace(/<\/?p>/g, '')}</div>`;
  } else if (quote.includes('⚠️')) {
    return `<div class="alert alert-warning">${quote.replace(/<\/?p>/g, '')}</div>`;
  } else if (quote.includes('🚨')) {
    return `<div class="alert alert-danger">${quote.replace(/<\/?p>/g, '')}</div>`;
  }
  return `<blockquote>${quote}</blockquote>`;
};

// Custom renderer for code blocks with copy button and line numbers
renderer.code = function(code, infostring, escaped) {
  const lang = (infostring || '').match(/\S*/)[0];
  const langDisplay = lang || 'text';
  
  // Parse title from infostring (e.g., javascript title="Example Code")
  let title = '';
  const titleMatch = (infostring || '').match(/title=["']([^"']+)["']/);
  if (titleMatch) {
    title = titleMatch[1];
  }
  
  // Apply syntax highlighting
  let highlightedCode = code;
  if (lang && hljs.getLanguage(lang)) {
    try {
      highlightedCode = hljs.highlight(code, { language: lang }).value;
    } catch (err) {}
  }
  
  // Add line numbers
  const lines = highlightedCode.split('\n');
  const numberedCode = lines.map((line, i) => 
    `<span class="line-number">${i + 1}</span><span class="line-content">${line}</span>`
  ).join('\n');
  
  // Start collapsed by default
  return `<div class="code-block collapsed" data-language="${lang}">
    <div class="code-header" onclick="toggleCodeBlock(this)">
      <span class="code-language">
        <span class="code-toggle">▼</span>
        ${langDisplay.toUpperCase()}
        ${title ? `<span class="code-title">- ${title}</span>` : ''}
      </span>
      <div class="code-actions">
        <button class="copy-button" onclick="event.stopPropagation(); copyCode(this)">Copy</button>
      </div>
    </div>
    <pre class="code-content"><code class="hljs language-${lang}">${numberedCode}</code></pre>
  </div>`;
};

// Track headings for TOC generation
let currentHeadings = [];

// Simple slug function
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

// Custom renderer for headings with IDs
renderer.heading = function(text, level, raw) {
  const id = createSlug(text);
  
  // Track headings for TOC
  if (level >= 2 && level <= 4) {
    currentHeadings.push({ text, level, id });
  }
  
  return `<h${level} id="${id}">${text}</h${level}>`;
};

marked.use({ renderer });

// Function to generate TOC HTML
function generateTOC(headings) {
  if (headings.length < 4) return ''; // Only generate TOC for documents with 4+ headings
  
  let tocHTML = '<nav class="table-of-contents"><h3>Table of Contents</h3><ul>';
  let currentLevel = 2;
  
  headings.forEach(heading => {
    while (currentLevel < heading.level) {
      tocHTML += '<ul>';
      currentLevel++;
    }
    while (currentLevel > heading.level) {
      tocHTML += '</ul>';
      currentLevel--;
    }
    tocHTML += `<li><a href="#${heading.id}" onclick="smoothScroll('${heading.id}')">${heading.text}</a></li>`;
  });
  
  while (currentLevel > 2) {
    tocHTML += '</ul>';
    currentLevel--;
  }
  
  tocHTML += '</ul></nav>';
  return tocHTML;
}

// Function to format date
function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Function to walk through directories and build hierarchy
function buildFolderHierarchy(dir, basePath = '') {
  const items = [];
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Process subdirectory
      const subItems = buildFolderHierarchy(filePath, path.join(basePath, file));
      if (subItems.length > 0) {
        items.push({
          type: 'folder',
          name: file,
          path: path.join(basePath, file),
          items: subItems
        });
      }
    } else if (path.extname(file) === '.md') {
      // Process markdown file
      const content = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdown } = matter(content);
      const id = path.join(basePath, path.basename(file, '.md')).replace(/[\/\\]/g, '-');
      
      // Reset headings for new document
      currentHeadings = [];
      
      // Parse markdown to get headings
      const html = marked.parse(markdown);
      
      // Generate TOC
      const toc = generateTOC(currentHeadings);
      
      // Process tags
      const tags = data.tags || [];
      tags.forEach(tag => {
        globalData.allTags.add(tag);
        if (!globalData.tagIndex[tag]) {
          globalData.tagIndex[tag] = [];
        }
        globalData.tagIndex[tag].push(id);
      });
      
      // Create note object
      const note = {
        type: 'file',
        id: id,
        filename: path.basename(file, '.md'),
        title: data.title || path.basename(file, '.md'),
        emoji: data.emoji || '📄',
        order: data.order || 999,
        content: html,
        toc: toc,
        path: path.join(basePath, file),
        // Enhanced metadata
        tags: tags,
        author: data.author || 'Anonymous',
        date: data.date,
        updated: data.updated || data.date,
        description: data.description || '',
        related: data.related || [],
        breadcrumb: basePath.split(path.sep).filter(Boolean)
      };
      
      items.push(note);
      globalData.allNotes.push(note);
      globalData.noteMap[id] = note;
    }
  });
  
  // Sort items: folders first, then by order/name
  items.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'folder' ? -1 : 1;
    }
    if (a.type === 'file') {
      if (a.order !== b.order) return a.order - b.order;
    }
    return a.name < b.name ? -1 : 1;
  });
  
  return items;
}

// Function to generate sidebar HTML from hierarchy
function generateSidebarFromHierarchy(items, level = 0, isFirstSection = false) {
  let html = '';
  let isFirst = isFirstSection;
  
  items.forEach((item, index) => {
    if (item.type === 'folder') {
      const folderClass = isFirst ? 'active' : '';
      let icon = '';
      
      // Only assign icons to top-level folders
      if (level === 0) {
        icon = '📁'; // Same icon for all root folders
      }
      
      html += `
        <div class="sidebar-section ${folderClass}">
            <div class="sidebar-header" style="padding-left: ${20 + level * 15}px" title="${item.name.toUpperCase().replace(/-/g, ' ')}">
                ${icon ? `<span>${icon}</span>` : ''}
                <span>${item.name.toUpperCase().replace(/-/g, ' ')}</span>
                <span class="sidebar-arrow">▶</span>
            </div>
            <div class="sidebar-content">`;
      
      html += generateSidebarFromHierarchy(item.items, level + 1, isFirst);
      isFirst = false;
      
      html += `
            </div>
        </div>`;
    } else if (item.type === 'file') {
      const isActive = isFirst ? 'active' : '';
      isFirst = false;
      html += `
                <div class="sidebar-item ${isActive}" data-note="${item.id}" title="${item.title}" style="padding-left: ${35 + level * 15}px">
                    ${item.title}
                    ${item.tags.length > 0 ? `<span class="sidebar-tags">${item.tags.length}</span>` : ''}
                </div>`;
    }
  });
  
  return html;
}

// Function to generate TOCs HTML separately
function generateTOCsFromHierarchy(items) {
  let html = '';
  
  function processItems(items) {
    items.forEach(item => {
      if (item.type === 'folder') {
        processItems(item.items);
      } else if (item.type === 'file' && item.toc) {
        // Add data-note attribute to link TOC with its note
        const tocWithAttributes = item.toc.replace(
          '<nav class="table-of-contents">', 
          `<nav class="table-of-contents" data-note="${item.id}" style="display: none;">`
        );
        html += tocWithAttributes;
      }
    });
  }
  
  processItems(items);
  return html;
}

// Function to generate content HTML from hierarchy
function generateContentFromHierarchy(items) {
  let html = '';
  let isFirst = true;
  
  function processItems(items) {
    items.forEach(item => {
      if (item.type === 'folder') {
        processItems(item.items);
      } else if (item.type === 'file') {
        const isActive = isFirst ? 'active' : '';
        isFirst = false;
        
        // Generate breadcrumb
        const breadcrumb = item.breadcrumb.length > 0 
          ? `<nav class="breadcrumb">
              <a href="#" onclick="goHome()">Home</a>
              ${item.breadcrumb.map(b => `<span>›</span><span>${b}</span>`).join('')}
              <span>›</span><span>${item.title}</span>
            </nav>` 
          : '';
        
        // Generate tags HTML
        const tagsHTML = item.tags.length > 0
          ? `<div class="note-tags">
              ${item.tags.map(tag => `<span class="tag" onclick="filterByTag('${tag}')">${tag}</span>`).join('')}
            </div>`
          : '';
        
        // Generate metadata HTML
        const metadataHTML = `
          <div class="note-metadata">
            <span class="author">By ${item.author}</span>
            ${item.date ? `<span class="date">Published: ${formatDate(item.date)}</span>` : ''}
            ${item.updated && item.updated !== item.date ? `<span class="updated">Updated: ${formatDate(item.updated)}</span>` : ''}
          </div>
        `;
        
        // Generate related notes
        const relatedHTML = item.related.length > 0
          ? `<div class="related-notes">
              <h3>Related Notes</h3>
              <ul>
                ${item.related.map(relatedId => {
                  const relatedNote = globalData.noteMap[relatedId.replace('.md', '')];
                  return relatedNote 
                    ? `<li><a href="#" onclick="navigateToNote('${relatedNote.id}')">${relatedNote.emoji} ${relatedNote.title}</a></li>`
                    : '';
                }).join('')}
              </ul>
            </div>`
          : '';
        
        html += `
        <div class="note-section ${isActive}" id="${item.id}" data-tags="${item.tags.join(',')}">
            ${breadcrumb}
            <div class="note-header">
                <h1>${item.emoji} ${item.title}</h1>
                <button class="copy-link-btn" onclick="copyNoteLink('${item.id}')" title="Copy link to this note">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                </button>
            </div>
            ${tagsHTML}
            ${metadataHTML}
            ${item.description ? `<p class="note-description">${item.description}</p>` : ''}
            <div class="note-content">
                ${item.content}
            </div>
            ${relatedHTML}
        </div>`;
      }
    });
  }
  
  processItems(items);
  return html;
}

// Generate global JavaScript data
function generateGlobalData() {
  return `
    <script>
      window.notesData = {
        allTags: ${JSON.stringify(Array.from(globalData.allTags))},
        tagIndex: ${JSON.stringify(globalData.tagIndex)},
        noteMap: ${JSON.stringify(
          Object.fromEntries(
            Object.entries(globalData.noteMap).map(([id, note]) => [
              id,
              {
                id: note.id,
                title: note.title,
                tags: note.tags,
                description: note.description,
                path: note.path
              }
            ])
          )
        )}
      };
    </script>
  `;
}

// HTML template
function generateHTML(hierarchy) {
  const templatePath = path.join(__dirname, 'template-enhanced.html');
  const template = fs.existsSync(templatePath) 
    ? fs.readFileSync(templatePath, 'utf8')
    : fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
  
  // Generate sidebar and content HTML
  const sidebarHTML = generateSidebarFromHierarchy(hierarchy, 0, true);
  const contentHTML = generateContentFromHierarchy(hierarchy);
  const tocsHTML = generateTOCsFromHierarchy(hierarchy);
  const globalDataScript = generateGlobalData();
  
  // Replace placeholders in template
  let html = template
    .replace('<!-- SIDEBAR_CONTENT -->', sidebarHTML)
    .replace('<!-- MAIN_CONTENT -->', contentHTML)
    .replace('<!-- TOC_CONTENT -->', tocsHTML)
    .replace('</body>', globalDataScript + '</body>');
  
  return html;
}

// Function to count notes in hierarchy
function countNotes(items) {
  let count = 0;
  items.forEach(item => {
    if (item.type === 'file') {
      count++;
    } else if (item.type === 'folder') {
      count += countNotes(item.items);
    }
  });
  return count;
}

// Function to print hierarchy summary
function printHierarchySummary(items, indent = '') {
  items.forEach(item => {
    if (item.type === 'folder') {
      const noteCount = countNotes(item.items);
      console.log(`${indent}📁 ${item.name.toUpperCase()}: ${noteCount} notes`);
      printHierarchySummary(item.items, indent + '   ');
    }
  });
}

// Main build function
function build() {
  console.log('🔨 Building Enhanced Notes System...');
  
  try {
    // Clear global data
    globalData.allTags.clear();
    globalData.allNotes = [];
    globalData.tagIndex = {};
    globalData.noteMap = {};
    
    // Build folder hierarchy
    const notesDir = path.join(__dirname, 'notes');
    const hierarchy = buildFolderHierarchy(notesDir);
    
    // Generate HTML
    const html = generateHTML(hierarchy);
    
    // Write output
    fs.writeFileSync(path.join(__dirname, 'index.html'), html);
    
    console.log('✅ Build complete! Generated index.html');
    console.log('📄 Processed notes:');
    printHierarchySummary(hierarchy, '   ');
    console.log(`   Total: ${countNotes(hierarchy)} notes`);
    console.log(`📏 Tags collected: ${globalData.allTags.size} unique tags`);
    console.log(`🏷️  Tags: ${Array.from(globalData.allTags).join(', ')}`);
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Run build
build();