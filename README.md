# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a Full-Stack Web Developer.

## Features

- 🎨 Modern and clean design
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive
- ⚡ Fast and optimized performance
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form with EmailJS integration
- 🔍 SEO optimized
- ♿ Accessibility features
- 🚀 GitHub Pages deployment

## Tech Stack

- React (with Vite)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- React Helmet Async
- EmailJS
- AOS (Animate On Scroll)
- React Router DOM
- gh-pages

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muteeurrehman28/muteeurrehman28.github.io.git
   cd muteeurrehman28.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Customization

1. Update personal information in the components
2. Replace images in the `public` directory
3. Modify the color scheme in `tailwind.config.js`
4. Add your own projects in the Projects section
5. Update social media links in the Footer component

## Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)
