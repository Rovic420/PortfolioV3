# Modern Portfolio Website

A fully responsive, modern portfolio website built with React, Vite, and Tailwind CSS. This template features advanced animations, dark mode, and a sleek design to help you stand out.

---

## 🚀 Features

### Design & UI
- **Glassmorphism**: Modern glass effects and UI patterns
- **Framer Motion Animations**: Smooth transitions and micro-interactions
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Auto-detects system preference, easy toggle
- **Particle & Gradient Backgrounds**: Interactive and animated backgrounds
- **Loading Screen**: Animated loader with progress indicator

### Sections & Content
- **Hero**: Animated profile, typing effect, and call-to-action buttons
- **About**: Personal story, stats, services, and interactive elements
- **Skills**: Categorized skills with animated progress bars
- **Experience**: Timeline-based showcase of your work and achievements
- **Projects**: Filterable gallery with project details
- **Contact**: Advanced contact form with validation and feedback

### Technical Features
- **Scroll Progress Indicator**
- **Intersection Observer**: Triggers animations on scroll
- **Type Animation**: Engaging dynamic text
- **Smooth Scrolling**: Seamless navigation
- **SEO Optimized**: Semantic HTML and meta tags
- **Performance Optimized**: Fast loading and efficient assets

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS (custom config)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: React Intersection Observer, React Type Animation
- **Build Tool**: Vite
- **Package Manager**: npm

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Quick Start

1. **Clone the repository**
  ```bash
  git clone https://github.com/yourusername/portfolio.git
  cd portfolio
  ```

2. **Install dependencies**
  ```bash
  npm install
  ```

3. **Start development server**
  ```bash
  npm run dev
  ```

4. **Open in browser**
  - Visit `http://localhost:3000`

---

## 🎯 VS Code Setup Guide

### Recommended Extensions

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- Auto Rename Tag
- Bracket Pair Colorizer 2
- GitLens
- Thunder Client (API testing)
- Live Server (static file serving)

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
   "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
   "javascript": "javascriptreact"
  },
  "tailwindCSS.includeLanguages": {
   "javascript": "javascript",
   "html": "html"
  },
  "editor.quickSuggestions": {
   "strings": true
  },
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false
}
```

### Useful Shortcuts

- `Ctrl + `` - Integrated terminal
- `Ctrl + Shift + P` - Command palette
- `Ctrl + P` - Quick file open
- `Alt + Shift + F` - Format document
- `Ctrl + /` - Toggle comment

---

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🎨 Customization Guide

### Update Your Information

Edit these files to personalize your site:

- **src/sections/Hero.jsx**: Name, title, description, profile image, social links, CTA buttons
- **src/sections/About.jsx**: Story, background, skills, stats, services
- **src/sections/Skills.jsx**: Skills, proficiency, stack, certifications
- **src/sections/Experience.jsx**: Work experience, roles, achievements, companies
- **src/sections/Projects.jsx**: Projects, descriptions, tech, links
- **src/sections/Contact.jsx**: Contact info, form config, availability

### Design Customization

#### Colors & Themes

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
   colors: {
    primary: {
      500: "#your-color",
      600: "#your-color"
    },
    secondary: {},
    accent: {}
   }
  }
}
```

#### Typography

```js
fontFamily: {
  sans: ["Your Font", "system-ui", "sans-serif"],
  display: ["Your Display Font", "system-ui", "sans-serif"],
}
```

#### Animations

```js
animation: {
  "your-animation": "your-keyframes 2s ease-in-out infinite",
},
keyframes: {
  "your-keyframes": {
   "0%": { transform: "scale(1)" },
   "50%": { transform: "scale(1.1)" },
   "100%": { transform: "scale(1)" },
  }
}
```

### Images & Assets

- **Profile Photos**: Update in Hero/About
- **Project Screenshots**: Add to Projects
- **Favicon**: Replace `public/favicon.svg`
- **OG Image**: Add `public/og-image.jpg` for social sharing

---

## 🌐 Deployment Options

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to Vercel
3. Deploy (zero config)

```bash
npm i -g vercel
vercel
```

### Netlify

1. `npm run build`
2. Upload `dist` to Netlify
3. Configure SPA redirects

### GitHub Pages

1. `npm install --save-dev gh-pages`
2. Add to `package.json`:
  ```json
  {
    "homepage": "https://yourusername.github.io/portfolio",
    "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
    }
  }
  ```
3. `npm run deploy`

### Custom Domain

Add a `CNAME` file to `public`:

```
yourdomain.com
```

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔧 Performance Optimization

### Built-in

- Code splitting (Vite)
- Tree shaking
- Asset optimization
- Lazy loading
- Caching

### Tips

- Use WebP images
- Minimize dependencies
- Use CDN for assets/fonts
- Enable Gzip/Brotli
- Audit with Lighthouse

---

## 🆘 Troubleshooting

### Common Issues

- **Port in Use**
  ```bash
  npx kill-port 3000
  # Or change port in vite.config.js
  # server: { port: 3001 }
  ```
- **Dependencies Not Installing**
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- **Build Errors**
  ```bash
  npm run lint
  rm -rf dist
  npm run build
  ```
- **Styling Issues**
  - Check Tailwind config
  - Look for conflicting classes
  - Verify dark mode setup

### Getting Help

- Check inline code documentation
- Open GitHub issues for bugs/requests
- Join React/Tailwind communities
- Search Stack Overflow

---

## 🎉 What's Next?

### Potential Enhancements

- Blog section (markdown)
- CMS integration
- Analytics (Google Analytics, Plausible)
- Performance/error monitoring
- Internationalization (multi-language)
- PWA features (offline support)
- Backend integration (Node.js/Express)
- Database (MongoDB/PostgreSQL)
- Authentication (user/admin)
- API integrations

### Advanced Features

- 3D elements (Three.js)
- WebGL effects
- Voice commands
- AI chatbot
- Real-time features (WebSocket)
- Video backgrounds
- Advanced animations (GSAP)

---

## 📄 License

Open source under the [MIT License](LICENSE).

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📞 Support

- **Email**: Deloy371@pm.me
- **GitHub Issues**: For bugs or feature requests
- **Documentation**: See inline code comments

---

**Built with ❤️ and lots of ☕ by Rovic Deloy**

*Showcase your skills and make a lasting impression. Customize this portfolio, make it yours, and unlock new opportunities!*
