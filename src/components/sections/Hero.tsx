import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-accent-600 dark:from-secondary-400 dark:to-accent-400">
              Hi, I'm <span className="text-primary-900 dark:text-primary-50">Mutee Ur Rehman</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary-700 dark:text-primary-300">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl mb-12 text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
              I build exceptional digital experiences that make an impact. Specializing in creating
              beautiful, functional, and user-centered digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-secondary-600 hover:bg-secondary-700 text-white font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary-200 dark:bg-primary-700 hover:bg-primary-300 dark:hover:bg-primary-600 text-primary-900 dark:text-primary-50 font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
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