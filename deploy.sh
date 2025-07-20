#!/bin/bash

# Operations Autopilot Presentation Deployment Script

echo "🚀 Starting deployment process..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "📁 Build files are ready in the 'build' directory"
    echo ""
    echo "📋 Next steps:"
    echo "1. Create a GitHub repository"
    echo "2. Push this code to the repository"
    echo "3. Run 'npm run deploy' to deploy to GitHub Pages"
    echo "4. Or manually upload the contents of the 'build' folder to the gh-pages branch"
    echo ""
    echo "🌐 Your presentation will be available at:"
    echo "   https://[your-username].github.io/[repository-name]"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi 