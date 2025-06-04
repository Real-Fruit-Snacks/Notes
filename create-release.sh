#!/bin/bash

# Create Release Script for Notes
# This script creates a complete release package as a tar.gz file

set -e  # Exit on error

echo "🚀 Creating Notes Release Package..."

# Get version from package.json
VERSION=$(node -p "require('./package.json').version")
RELEASE_NAME="notes-v${VERSION}"
RELEASE_DIR="release/${RELEASE_NAME}"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Version: ${VERSION}${NC}"

# Clean up any previous release
echo "🧹 Cleaning up previous releases..."
rm -rf release/
mkdir -p "${RELEASE_DIR}"

# Copy essential files
echo "📄 Copying application files..."
cp -r notes/ "${RELEASE_DIR}/"
cp package.json "${RELEASE_DIR}/"
cp package-lock.json "${RELEASE_DIR}/"
cp build.js "${RELEASE_DIR}/"
cp template-enhanced.html "${RELEASE_DIR}/"
cp README.md "${RELEASE_DIR}/"
cp create-release.sh "${RELEASE_DIR}/"
cp .gitlab-ci.yml "${RELEASE_DIR}/"
cp .gitignore "${RELEASE_DIR}/"

# Copy GitHub workflows if they exist
if [ -d ".github" ]; then
    cp -r .github "${RELEASE_DIR}/"
fi

# Copy setup documentation
cp GITLAB_SETUP.md "${RELEASE_DIR}/" 2>/dev/null || true

# Create a quick start script
cat > "${RELEASE_DIR}/quick-start.sh" << 'EOF'
#!/bin/bash
echo "📝 Notes - Quick Start"
echo "================================"
echo ""
echo "1️⃣  Installing dependencies..."
npm install

echo ""
echo "2️⃣  Building the application..."
npm run build

echo ""
echo "✅ Build complete!"
echo ""
echo "📁 Generated files:"
ls -la index.html

echo ""
echo "🚀 To serve locally, run: npm run serve"
echo "📝 To watch for changes: npm run watch"
echo ""
echo "Happy note-taking! 🎉"
EOF

chmod +x "${RELEASE_DIR}/quick-start.sh"

# Create a minimal setup guide
cat > "${RELEASE_DIR}/QUICK_START.md" << 'EOF'
# 🚀 Notes - Quick Start Guide

## Option 1: Automatic Setup
```bash
./quick-start.sh
```

## Option 2: Manual Setup
```bash
# Install dependencies
npm install

# Build the site
npm run build

# Serve locally (optional)
npm run serve
```

## 📝 Adding Notes
1. Create `.md` files in the `notes/` folder
2. Run `npm run build` to regenerate
3. Open `index.html` in your browser

## 🌐 Deployment
- **GitLab Pages**: Push to GitLab (auto-deploys)
- **GitHub Pages**: Push to GitHub (auto-deploys)
- **Static Host**: Upload `index.html` anywhere

That's it! Your knowledge base is ready to use. 🎉
EOF

# Create release info
cat > "${RELEASE_DIR}/RELEASE_INFO.txt" << EOF
Notes v${VERSION}
========================
Release Date: $(date +"%Y-%m-%d")
Build Type: Full Application Package

Contents:
- Complete source code
- Build system
- Example notes
- Documentation
- CI/CD configurations

Requirements:
- Node.js 18+ (for building only)
- No runtime dependencies

Quick Start:
Run ./quick-start.sh or see QUICK_START.md

License: MIT
EOF

# Build the application for the release
echo "🔨 Building application..."
cd "${RELEASE_DIR}"
npm install --production
npm run build
cd - > /dev/null

# Include the built index.html
echo "✅ Including pre-built index.html"

# Create the tarball
echo "📦 Creating release archive..."
cd release/
tar -czf "${RELEASE_NAME}.tar.gz" "${RELEASE_NAME}/"
cd - > /dev/null

# Calculate sizes
TARBALL_SIZE=$(ls -lh "release/${RELEASE_NAME}.tar.gz" | awk '{print $5}')
EXTRACTED_SIZE=$(du -sh "${RELEASE_DIR}" | awk '{print $1}')

# Create a standalone single-file version
echo "📄 Creating standalone HTML file..."
cp "${RELEASE_DIR}/index.html" "release/${RELEASE_NAME}-standalone.html"

# Clean up the extracted directory (keep only the tarball and standalone)
rm -rf "${RELEASE_DIR}"

echo ""
echo -e "${GREEN}✅ Release package created successfully!${NC}"
echo ""
echo "📦 Release files:"
echo -e "  ${BLUE}release/${RELEASE_NAME}.tar.gz${NC} (${TARBALL_SIZE})"
echo -e "  ${BLUE}release/${RELEASE_NAME}-standalone.html${NC} (ready to use)"
echo ""
echo "📊 Package info:"
echo "  - Compressed size: ${TARBALL_SIZE}"
echo "  - Extracted size: ${EXTRACTED_SIZE}"
echo "  - Version: ${VERSION}"
echo ""
echo "🚀 To use the release:"
echo "  1. Extract: tar -xzf release/${RELEASE_NAME}.tar.gz"
echo "  2. Enter: cd ${RELEASE_NAME}"
echo "  3. Run: ./quick-start.sh"
echo ""
echo "💡 Or just use the standalone HTML file directly!"