---
title: React Framework
emoji: ⚛️
order: 1
tags: [javascript, frontend, framework, react, ui-library]
author: John Doe
date: 2024-01-15
updated: 2024-06-03
description: Comprehensive guide to React.js - components, hooks, state management, and best practices
related: [vue.md, nodejs.md]
---

# React Framework

React is a JavaScript library for building user interfaces, particularly single-page applications.

## Core Concepts

### Components

Components are the building blocks of React applications:

```javascript title="Function and Class Component Examples"
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Class component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### Hooks

React Hooks let you use state and other React features without writing a class:

```javascript title="useState and useEffect Hook Example"
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## State Management

### Context API

```javascript title="Context API Theme Provider"
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

> 💡 **Tip:** Use Context API for cross-component state that doesn't change frequently.

## Best Practices

- [ ] Keep components small and focused
- [ ] Use functional components with hooks
- [ ] Implement proper error boundaries
- [ ] Optimize with React.memo and useMemo
- [ ] Follow the Rules of Hooks