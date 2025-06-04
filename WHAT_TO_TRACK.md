# Files to Track in Git

## ✅ MUST Track (Essential files)
- `package.json` - Project configuration and dependencies
- `package-lock.json` - Locked dependency versions for reproducible builds
- `build.js` - Build script
- `template-enhanced.html` - HTML/CSS/JS template
- `notes/` directory - All markdown content
- `README.md` - Main documentation
- `create-release.sh` - Release creation script
- `.gitignore` - Git ignore rules
- `.gitlab-ci.yml` - GitLab CI/CD configuration
- `.github/workflows/` - GitHub Actions workflows
- `GITLAB_SETUP.md` - GitLab setup documentation
- `index.html` - Pre-built output (for convenience)

## ❌ DO NOT Track (Generated/Temporary)
- `node_modules/` - Dependencies (reinstalled from package.json)
- `release/` - Generated release packages
- `public/` - GitLab Pages output directory
- Build artifacts and logs
- Editor/OS specific files
- Environment files

## 📦 Release Package Contents
The `create-release.sh` script includes all essential files plus:
- `quick-start.sh` - Generated setup script
- `QUICK_START.md` - Generated quick guide
- `RELEASE_INFO.txt` - Generated release metadata
- Pre-built `index.html`

## 🔍 Commands in README
These commands are mentioned and work correctly:
- `npm install` - Installs dependencies
- `npm run build` - Builds the site
- `npm run watch` - Watches for changes
- `npm run serve` - Serves locally
- `npm run release` - Creates release package
- `./quick-start.sh` - One-command setup (in releases only)