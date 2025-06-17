import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-primary-100 dark:bg-primary-800"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDarkMode ? 180 : 0,
          scale: isDarkMode ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FiMoon className="w-5 h-5 text-primary-700 dark:text-primary-300" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDarkMode ? -180 : 0,
          scale: isDarkMode ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FiSun className="w-5 h-5 text-primary-700 dark:text-primary-300" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeSwitcher; 