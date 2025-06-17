import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import NavLink from './NavLink';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Articles', href: '#articles' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-primary-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary-900 dark:text-primary-50"
          >
            <NavLink href="/" className="hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors">
              Portfolio
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                className="text-primary-700 dark:text-primary-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
              >
                {item.name}
              </NavLink>
            ))}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    className="text-primary-700 dark:text-primary-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors text-left"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header; 