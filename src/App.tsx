import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Blog from './components/Blog';
import Stats from './components/Stats';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-dark-100 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Services />
          <Projects />
          <Testimonials />
          <Certifications />
          <Blog />
          <Stats />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
};

export default App; 