---
title: Portfolio Website
emoji: 🌐
order: 1
tags: [web-development, portfolio, design, css, javascript]
author: John Doe
date: 2024-03-15
updated: 2024-06-03
description: Complete guide to building a modern portfolio website with performance optimization and SEO
related: [react.md, vue.md]
---

# Portfolio Website

Design and development notes for creating a modern portfolio website.

## Design Concept

### Color Scheme
- Primary: #2D3748 (Dark blue-gray)
- Secondary: #4A5568 (Medium gray)
- Accent: #3182CE (Bright blue)
- Background: #1A202C (Very dark)
- Text: #E2E8F0 (Light gray)

### Typography
```css
/* Font Stack */
--font-heading: 'Inter', -apple-system, sans-serif;
--font-body: 'Fira Code', 'Monaco', monospace;

/* Font Sizes */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
```

## Project Structure

```
portfolio/
├── index.html
├── css/
│   ├── main.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── projects.js
│   └── animations.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── documents/
└── projects/
    ├── project1.html
    └── project2.html
```

## Key Sections

### Hero Section
```html
<section class="hero">
  <div class="hero-content">
    <h1 class="glitch" data-text="John Doe">John Doe</h1>
    <p class="subtitle">Full Stack Developer</p>
    <div class="cta-buttons">
      <a href="#projects" class="btn btn-primary">View Work</a>
      <a href="#contact" class="btn btn-secondary">Get in Touch</a>
    </div>
  </div>
  <div class="hero-animation">
    <!-- Three.js canvas -->
  </div>
</section>
```

### Projects Grid
```javascript
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack online store with payment integration",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/assets/images/project1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project"
  },
  // More projects...
];

function renderProjects() {
  const grid = document.querySelector('.projects-grid');
  projects.forEach(project => {
    const card = createProjectCard(project);
    grid.appendChild(card);
  });
}
```

## Performance Optimization

### Lazy Loading
```javascript
// Intersection Observer for images
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

### Animation Performance
```css
/* Use transform instead of position */
.animate-slide {
  transform: translateX(0);
  transition: transform 0.3s ease;
}

/* Enable GPU acceleration */
.gpu-accelerated {
  will-change: transform;
  transform: translateZ(0);
}
```

> 💡 **Tip:** Always test your portfolio on different devices and connection speeds!

## SEO Checklist

- [ ] Meta tags optimization
- [ ] Open Graph tags
- [ ] Structured data (JSON-LD)
- [ ] XML sitemap
- [ ] robots.txt
- [ ] Page speed optimization
- [ ] Mobile responsiveness
- [ ] Accessibility (ARIA labels)