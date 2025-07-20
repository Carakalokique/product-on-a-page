# Operations Autopilot Presentation

A professional presentation built with React and Tailwind CSS for the Operations Autopilot service.

## Features

- 7-slide interactive presentation
- Responsive design
- Smooth transitions
- Professional animations
- GitHub Pages ready

## Development

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Building for Production

### Build the project:
```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Install gh-pages if not already installed:
```bash
npm install --save-dev gh-pages
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Option 2: Manual Upload

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `build` folder to your GitHub repository's `gh-pages` branch

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Save the settings

Your presentation will be available at: `https://[your-username].github.io/[repository-name]`

## Project Structure

```
├── public/
│   ├── index.html          # Main HTML file
│   └── manifest.json       # Web app manifest
├── src/
│   ├── App.js             # Main React component
│   ├── index.js           # React entry point
│   └── index.css          # Global styles with Tailwind
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## Customization

- Edit `src/App.js` to modify the presentation content
- Update `tailwind.config.js` to customize the design system
- Modify `public/index.html` to change the page title and meta tags

## Technologies Used

- React 18
- Tailwind CSS
- PostCSS
- GitHub Pages 