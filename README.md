# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a Full Stack Web Developer.

## 🚀 Features

- 🌓 Dark/Light mode with system preference detection
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Modern UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📧 Contact form with EmailJS integration
- 🔍 SEO optimized
- ♿ Accessibility features
- 📱 Mobile-first approach

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [EmailJS](https://www.emailjs.com/) - Contact Form
- [React Router DOM](https://reactrouter.com/) - Routing
- [AOS](https://michalsnik.github.io/aos/) - Scroll Animations
- [React Helmet Async](https://github.com/staylor/react-helmet-async) - SEO

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muteeurrehman28/muteeurrehman28.github.io.git
   ```

2. Install dependencies:
   ```bash
   cd muteeurrehman28.github.io
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🎨 Customization

1. Update personal information in the components
2. Replace images in the `/public` directory
3. Modify colors in `tailwind.config.js`
4. Update EmailJS configuration in the Contact component
5. Add your own projects in the Projects component

## 📝 Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── NotFound.tsx
│   │   ├── Projects.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Skills.tsx
│   ├── hooks/
│   │   └── useDarkMode.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following in `Contact.tsx`:
   ```typescript
   await emailjs.sendForm(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formRef.current!,
     'YOUR_PUBLIC_KEY'
   );
   ```

### GitHub Pages Deployment

1. Update `package.json`:
   ```json
   {
     "homepage": "https://muteeurrehman28.github.io",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - your.email@example.com

Project Link: [https://github.com/muteeurrehman28/muteeurrehman28.github.io](https://github.com/muteeurrehman28/muteeurrehman28.github.io) 