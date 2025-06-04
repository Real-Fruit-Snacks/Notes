---
title: Cybersecurity
emoji: 🔐
order: 1
---

# Cybersecurity

Security best practices, penetration testing notes, and defensive strategies.

## OWASP Top 10 Checklist

- [x] SQL Injection prevention
- [x] Cross-Site Scripting (XSS) protection
- [x] Authentication & session management
- [ ] XML External Entity (XXE) prevention
- [ ] Security misconfiguration audit
- [ ] Sensitive data exposure review

## Security Headers

### Nginx Configuration

```nginx title="Essential Security Headers for Nginx"
# Essential security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

> 🚨 **Danger:** Never store sensitive data in plain text - always use proper encryption!