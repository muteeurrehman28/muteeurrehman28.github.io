import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A modern portfolio website built with React, TypeScript, and Tailwind CSS. Features include dark mode, smooth animations, and responsive design.',
      image: '/projects/portfolio.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/muteeurrehman28/portfolio',
      live: 'https://muteeurrehman28.github.io',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      image: '/projects/taskmanager.jpg',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/muteeurrehman28/taskmanager',
      live: 'https://taskmanager-demo.com',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/muteeurrehman28/ecommerce',
      live: 'https://ecommerce-demo.com',
    },
  ];

  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (id: number) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-20 bg-primary-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900 dark:text-primary-50">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col bg-white dark:bg-primary-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full cursor-pointer"
              >
                <div className="relative group aspect-video bg-primary-200 dark:bg-primary-700 animate-pulse">
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-10 w-10 border-4 border-secondary-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="absolute inset-0 bg-primary-900 bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-secondary-100 transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="w-6 h-6 text-primary-900" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-secondary-100 transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="w-6 h-6 text-primary-900" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary-900 dark:text-primary-50">
                    {project.title}
                  </h3>
                  <p className="text-primary-700 dark:text-primary-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 