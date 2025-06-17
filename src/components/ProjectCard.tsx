import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

const ProjectCard = ({ title, description, image, technologies, github, live }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const springConfig = { damping: 15, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative group bg-white dark:bg-primary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
        className="w-full h-full"
      >
        <div className="relative aspect-video bg-primary-200 dark:bg-primary-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/75 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-secondary-100 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub Repository"
              >
                <FiGithub className="w-6 h-6 text-primary-900" />
              </motion.a>
              <motion.a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-secondary-100 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Live Demo"
              >
                <FiExternalLink className="w-6 h-6 text-primary-900" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-primary-900 dark:text-primary-50">
            {title}
          </h3>
          <p className="text-primary-700 dark:text-primary-300 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
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
    </motion.div>
  );
};

export default ProjectCard; 