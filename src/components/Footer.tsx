import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://twitter.com/yourusername",
    },
  ];

  return (
    <footer className="bg-primary-900 text-primary-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-secondary-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-center">
              <p className="text-primary-400">
                © {currentYear} Your Name. All rights reserved.
              </p>
              <p className="text-primary-500 text-sm mt-2">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 