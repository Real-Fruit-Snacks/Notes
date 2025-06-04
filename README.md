# 📝 Notes v2.0

A self-contained personal knowledge base with advanced features. Zero external dependencies at runtime - everything compiles into a single HTML file!

![Version](https://img.shields.io/badge/Version-2.0-ff0080?style=for-the-badge)
![Zero Runtime Dependencies](https://img.shields.io/badge/Runtime_Dependencies-Zero-00ffff?style=for-the-badge)
![Self Contained](https://img.shields.io/badge/Self_Contained-100%25-8000ff?style=for-the-badge)

## ✨ Features

### 🎨 Modern UI/UX
- **One Dark Pro Theme** - Professional dark/light mode toggle
- **Responsive Design** - Mobile-first with collapsible sidebar
- **Smooth Animations** - Polished transitions and effects
- **Professional Typography** - Clean, readable fonts

### 🔍 Advanced Search & Organization
- **Full-Text Search** - Search content including code blocks (Ctrl/Cmd+K)
- **Tag Filtering System** - Professional tag cloud with multi-select
- **Recent Search History** - Quick access to previous searches
- **Search Highlighting** - Visual feedback for search matches
- **Smart Breadcrumbs** - Easy navigation path tracking

### 📝 Enhanced Content Features
- **Collapsible Code Blocks** - With custom titles and syntax highlighting
- **Table of Contents** - Auto-generated with scroll spy
- **Task Lists** - Interactive checkboxes
- **Related Notes** - Link between related content
- **Note Metadata** - Author, dates, descriptions
- **Copy Link Button** - Share specific notes easily

### 🚀 Zero External Dependencies
- **100% Self-Contained** - No CDNs, external fonts, or API calls
- **Single HTML Output** - Everything embedded inline
- **Works Offline** - No internet required after build
- **~220KB Total Size** - Fast loading with all features

## 🚀 Quick Start

### 1. Install Build Dependencies

```bash
npm install
```

**Note**: These are only needed for building. The generated site has ZERO runtime dependencies.

### 2. Add Your Notes

Create markdown files in the `notes/` folder:

```
notes/
├── audio-visual/
│   ├── music-production.md
│   └── synthesizers.md
├── development/
│   ├── programming.md
│   ├── code-examples.md
│   ├── backend/
│   │   ├── nodejs.md
│   │   └── python-api.md
│   └── frontend/
│       ├── react.md
│       └── vue.md
├── cyberpunk-tech/
│   └── cybersecurity.md
└── personal-projects/
    ├── project-ideas.md
    ├── mobile/
    │   └── app-development.md
    └── web/
        └── portfolio-website.md
```

### 3. Build the Site

```bash
npm run build
```

This generates `index.html` with all your notes compiled into a single, self-contained file.

### 4. Deploy

The generated `index.html` works anywhere - no server required!

## 📝 Writing Notes

### Markdown Front Matter

```markdown
---
title: Your Note Title
emoji: 📌
order: 1
tags: [javascript, tutorial, web-development]
author: Your Name
date: 2024-01-15
updated: 2024-06-03
description: Brief description of the note
related: [other-note.md, another-note.md]
---

# Your Note Title

Your content here...
```

### Supported Features

#### Code Blocks with Titles
```markdown
```javascript title="React Component Example"
function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
}
```
```

#### Task Lists
```markdown
- [x] Completed task
- [ ] Pending task
- [ ] Another todo
```

#### Alert Boxes
```markdown
> 💡 **Tip:** This becomes a blue tip box
> ⚠️ **Warning:** This becomes a yellow warning box  
> 🚨 **Danger:** This becomes a red danger box
```

## 🎯 Key Features Explained

### Collapsible Code Blocks
- All code blocks start collapsed to save space
- Click the header to expand/collapse
- Add custom titles: ````language title="Your Title"`
- Copy button works without expanding

### Tag Filtering
- Click "Tags" button in search bar
- Select multiple tags to filter
- Search within tags
- Clear all or apply filters
- Selected tags persist in UI

### Dark/Light Mode
- Toggle with moon/sun icon
- Preference saved in localStorage
- Smooth color transitions
- Optimized for readability

### Table of Contents
- Auto-generated for notes with 4+ headings
- Scroll spy highlights current section
- Smooth scroll navigation
- Responsive hiding on small screens

## 🛠️ Customization

### Folder Icons
All root folders use the same icon (📁). To customize, edit `build.js` line 249:

```javascript
if (level === 0) {
    icon = '📁'; // Change this emoji
}
```

### Theme Colors
Edit CSS variables in `template-enhanced.html`:

```css
:root {
    /* Dark mode colors */
    --bg-primary: #282c34;
    --accent-blue: #61afef;
    /* ... etc */
}

[data-theme="light"] {
    /* Light mode colors */
    --bg-primary: #fafafa;
    /* ... etc */
}
```

## 📦 Deployment Options

### GitLab Pages (Automatic)
1. Push to GitLab
2. CI/CD pipeline builds and deploys automatically
3. Available at: `https://username.gitlab.io/repo-name/`

### GitHub Pages (Automatic)
1. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
2. Push to GitHub
3. GitHub Actions builds and deploys automatically

### Manual Deployment
1. Build locally: `npm run build`
2. Upload `index.html` anywhere (Netlify, Vercel, S3, etc.)
3. That's it! No server configuration needed

## 🔧 Development

### Watch Mode
```bash
npm run watch
```
Auto-rebuilds when markdown files change.

### Local Server
```bash
npm run serve
```
Serves on `http://localhost:8080`

### File Structure
```
notes/
├── build.js              # Build script
├── template-enhanced.html # HTML/CSS/JS template
├── notes/                # Your markdown files
├── index.html           # Generated output (don't edit)
├── package.json         # Build dependencies
└── README.md           # This file
```

## 💡 Tips & Best Practices

1. **Organization**: Use folders to categorize notes logically
2. **Naming**: Use descriptive filenames (they become URL fragments)
3. **Tags**: Use consistent tag names across notes
4. **Titles**: Add descriptive titles to code blocks
5. **Related Notes**: Link related content using the `related` field

## 🚨 Important Notes

### Zero External Dependencies
- **Build Time**: Requires Node.js and npm packages
- **Runtime**: ZERO external dependencies
- **No CDNs**: All assets embedded inline
- **No External Fonts**: Uses system fonts
- **No API Calls**: Completely self-contained
- **Works Offline**: Once built, no internet needed

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features used
- CSS Grid and Flexbox for layout
- LocalStorage for preferences

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js 18+ is installed
- Run `npm ci` for clean install
- Check markdown syntax if build fails

### Display Issues
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors
- Verify JavaScript is enabled

### Search Not Working
- Minimum 2 characters required
- Search includes code blocks
- Case-insensitive matching

## 📄 License

MIT License - Use freely for personal or commercial projects.

---

**Built with ❤️ using zero runtime dependencies** 🚀