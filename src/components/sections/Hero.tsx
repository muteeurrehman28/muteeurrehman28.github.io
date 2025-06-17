import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import Particles from 'react-tsparticles';
import { loadSlim } from '@tsparticles/slim';
import { useCallback } from 'react';

const Hero = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#F97316", // Secondary-600
            },
            links: {
              color: "#9CA3AF", // Primary-400 or a subtle grey
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full"
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-accent-600 dark:from-secondary-400 dark:to-accent-400"
            >
              Hi, I'm <span className="text-primary-900 dark:text-primary-50">Mutee Ur Rehman</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-8 text-primary-700 dark:text-primary-300"
            >
              Aspiring AI Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl mb-12 text-primary-600 dark:text-primary-400 max-w-2xl mx-auto"
            >
              Motivated and curious AI student seeking an internship in AI design to
              apply theoretical knowledge to real-world problems. Passionate about
              intelligent systems, machine learning, and creative AI applications. Eager to
              learn and contribute to innovative projects.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-3 rounded-lg bg-secondary-600 hover:bg-secondary-700 text-white font-medium shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-3 rounded-lg bg-primary-200 dark:bg-primary-700 hover:bg-primary-300 dark:hover:bg-primary-600 text-primary-900 dark:text-primary-50 font-medium shadow-lg hover:shadow-xl"
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/muteeurrehman28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mutee-ur-rehman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/muteeurrehman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FiTwitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:muteeurrehman28@gmail.com"
              className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors duration-300"
              aria-label="Email"
            >
              <HiOutlineMail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 