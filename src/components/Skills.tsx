import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import SkillBar from './SkillBar';

const skills = [
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'TypeScript', icon: SiTypescript, level: 85 },
  { name: 'Node.js', icon: FaNodeJs, level: 80 },
  { name: 'Next.js', icon: SiNextdotjs, level: 85 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
  { name: 'Database', icon: FaDatabase, level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-50 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-primary-700 dark:text-primary-300 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with. I'm constantly learning and adding new skills to my repertoire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 