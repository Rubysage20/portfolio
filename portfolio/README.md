# Valerie Dawson - Portfolio Website

A modern, responsive single-page portfolio website built with React showcasing full-stack development projects and technical skills.

## Live Demo

 https://rubysage20.github.io/portfolio

## Features

- **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- **Modern UI** - Clean, professional design with smooth animations
- **Project Showcase** - Detailed project cards with tech stacks and live demos
- **Skills Display** - Organized technical skills by category
- **Contact Section** - Easy ways to get in touch

## Built With

- **React** - JavaScript library for building user interfaces
- **Lucide React** - Beautiful icon library
- **CSS-in-JS** - Inline styling for component-based architecture

## Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── index.js            # React entry point
│   └── App.js              # Main portfolio component
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

##  Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Download the project files** to a folder called `portfolio`

2. **Navigate to the project directory**
   ```bash
   cd portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser** to `http://localhost:3000`

##  Deployment

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a new GitHub repository** called `portfolio`

2. **Initialize git and push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/Rubysage20/portfolio.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

4. **Your site will be live at:** https://rubysage20.github.io/portfolio

5. **Enable GitHub Pages** (if needed)
   - Go to your repository settings
   - Navigate to "Pages"
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Click Save

### Option 2: Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   npm run build
   vercel
   ```

3. **Follow the prompts** and your site will be live!

### Option 3: Deploy to Netlify

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Drag and drop the `build` folder** to [Netlify Drop](https://app.netlify.com/drop)

3. **Your site is live!**

## Customization

### Update Your Information

All personal information is in `src/App.js`:

- **Line 13-14**: Update project information
- **Line 44-52**: Update skills
- **Contact links**: Lines in the contact section

### Add More Projects

Add new projects to the `projects` array (around line 13):

```javascript
{
  title: "Your Project Name",
  description: "Project description",
  tech: ["React", "Node.js", "MongoDB"],
  features: [
    "Feature 1",
    "Feature 2"
  ],
  github: "https://github.com/yourusername/repo",
  live: "https://your-live-demo.com",
  image: "🎨"
}
```

### Change Colors

Main colors are defined in the gradient backgrounds:
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (purple)

Search and replace these hex codes to change the color scheme.

##  Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## Troubleshooting

### "npm start" doesn't work
- Make sure Node.js is installed: `node --version`
- Delete `node_modules` and run `npm install` again

### Deployment fails
- Check that your repository name matches in `package.json` homepage field
- Make sure you've committed all changes before deploying

### Icons not showing
- Lucide React icons require the package to be installed
- Run `npm install lucide-react`

##  License

This project is open source and available for personal use.

##  Contact

**Valerie Dawson**
- Email: Valeriedawson513@gmail.com
- LinkedIn: [linkedin.com/in/valerie-dawson-se](https://www.linkedin.com/in/valerie-dawson-se)
- GitHub: [@Rubysage20](https://github.com/Rubysage20)

---

Built with ❤️ using React
