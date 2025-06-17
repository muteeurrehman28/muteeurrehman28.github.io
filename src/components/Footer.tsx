import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-primary-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-primary-700 dark:text-primary-300">
              © {currentYear} Mutee Ur Rehman. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/muteeurrehman28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mutee-ur-rehman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/muteeurrehman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:muteeurrehman28@gmail.com"
              className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
              aria-label="Email"
            >
              <HiOutlineMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 