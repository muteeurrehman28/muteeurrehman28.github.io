import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/muteeurrehman28', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/your-profile', label: 'LinkedIn' },
    { icon: <FiTwitter />, url: 'https://twitter.com/your-handle', label: 'Twitter' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-dark-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Link
                to="home"
                className="text-2xl font-bold text-primary-600 dark:text-primary-400 cursor-pointer"
              >
                Portfolio
              </Link>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Building digital experiences that make an impact.
              </p>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                >
                  <span className="text-2xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>

              <button
                onClick={scrollToTop}
                className="mt-4 md:mt-0 flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Scroll to top"
              >
                <span className="mr-2">Back to top</span>
                <FiArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 