import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Certifications />
      <Contact />
    </main>
  );
};

export default Home; 