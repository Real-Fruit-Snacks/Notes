---
title: Code Examples with Titles
emoji: 📋
order: 10
tags: [examples, code-blocks, demonstration]
author: Developer
date: 2024-06-03
description: Examples of code blocks with custom titles
---

# Code Examples with Titles

This note demonstrates the new code block title feature.

## Basic Code Block (No Title)

```javascript
console.log("This is a basic code block without a title");
```

## Code Block with Title

```javascript title="Hello World Example"
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("World");
```

## Multiple Examples

```python title="File Organization Script"
import os
import shutil

def organize_files(directory):
    """Organize files by extension"""
    for file in os.listdir(directory):
        if os.path.isfile(file):
            ext = os.path.splitext(file)[1]
            folder = ext[1:] if ext else 'no_extension'
            os.makedirs(folder, exist_ok=True)
            shutil.move(file, folder)
```

```bash title="Git Commands Cheatsheet"
# Initialize a new repository
git init

# Add all files
git add .

# Commit with message
git commit -m "Initial commit"

# Push to remote
git push origin main
```

## Complex Example with Long Title

```javascript title="React Component with State Management and Side Effects"
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`/api/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });
    }, [userId]);
    
    if (loading) return <div>Loading...</div>;
    
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}
```

## Notes
- Code blocks are now **collapsed by default**
- Click on the header to expand/collapse
- Use `title="Your Title"` after the language to add a title
- Titles help identify code blocks when collapsed