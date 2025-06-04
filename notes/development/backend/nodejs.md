---
title: Node.js Development
emoji: 🟢
order: 1
tags: [javascript, backend, nodejs, express, api]
author: Jane Smith
date: 2024-02-10
updated: 2024-06-03
description: Building scalable backend applications with Node.js and Express.js
related: [react.md, python-api.md]
---

# Node.js Development

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## Express.js Framework

### Basic Server Setup

```javascript title="Express.js Server with Basic Routes"
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Process user creation
  res.status(201).json({ id: 1, name, email });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Async/Await Patterns

### Database Operations

```javascript title="Mongoose Schema and Async Database Operations"
const mongoose = require('mongoose');

// Define schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

// Async controller
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
```

## Authentication with JWT

```javascript title="JWT Authentication Implementation"
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

// Middleware
const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};
```

> 🚨 **Danger:** Never store sensitive data like passwords in plain text. Always use bcrypt or similar hashing libraries.

## Performance Tips

- [ ] Use clustering for multi-core systems
- [ ] Implement caching with Redis
- [ ] Use compression middleware
- [ ] Enable CORS properly
- [ ] Implement rate limiting