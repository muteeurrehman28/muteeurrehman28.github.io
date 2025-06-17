import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiGithub,
  SiVite,
  SiAmazon,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: 'React',
      icon: SiReact,
      level: 90,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      level: 85,
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      level: 90,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      level: 85,
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      level: 80,
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      level: 75,
    },
    {
      name: 'Git',
      icon: SiGit,
      level: 85,
    },
    {
      name: 'GitHub',
      icon: SiGithub,
      level: 85,
    },
    {
      name: 'Vite',
      icon: SiVite,
      level: 80,
    },
    {
      name: 'AWS',
      icon: SiAmazon,
      level: 70,
    },
    {
      name: 'Docker',
      icon: SiDocker,
      level: 65,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      level: 70,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900 dark:text-primary-50">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-primary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center">
                  <skill.icon className="w-12 h-12 text-primary-700 dark:text-primary-300 mb-4" />
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-50 mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-primary-200 dark:bg-primary-700 rounded-full h-2.5">
                    <div
                      className="bg-secondary-600 dark:bg-secondary-400 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-primary-700 dark:text-primary-300 mt-2">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 