#!/bin/bash

# Build script for Life's For Living website
# This script builds the Next.js app and copies the output to dist/

echo "🚀 Building Life's For Living website..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the Next.js app
echo "🔨 Building Next.js application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful! Copying files to dist..."
    
    # Copy the built files to dist directory
    cp -r out/* ../dist/
    
    echo "🎉 Build complete! Files are ready in the dist/ directory."
else
    echo "❌ Build failed! Using static fallback..."
    
    # If Next.js build fails, use the static HTML version
    cd ..
    cp static-deploy/index.html dist/
    
    echo "📄 Static fallback deployed to dist/"
fi

echo "✨ Deployment ready!"
