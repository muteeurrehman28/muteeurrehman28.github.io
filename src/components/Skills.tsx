import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
} from 'react-icons/si';
import { FiCloud } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'Express', icon: <SiExpress className="text-[#000000]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
      { name: 'AWS', icon: <FiCloud className="text-[#232F3E]" /> },
      { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-gradient-to-br from-neutral-50 via-blue-50 to-cyan-50 dark:from-neutral-900 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Skills & Expertise
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit of technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="card card-hover h-full p-6 lg:p-8">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {category.category}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="group/skill relative"
                    >
                      <div className="flex items-center space-x-3 p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 dark:border-neutral-700 group-hover/skill:border-primary-300 dark:group-hover/skill:border-primary-600">
                        <div className="flex-shrink-0">
                          <span className="text-2xl lg:text-3xl">{skill.icon}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-sm lg:text-base font-medium text-neutral-900 dark:text-neutral-100 truncate block">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I'm constantly learning and exploring new technologies to stay at the forefront of web development. 
              My goal is to create efficient, scalable, and user-friendly applications that make a positive impact 
              on users' lives.
            </p>
            
            {/* Skill Level Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { label: 'Frontend', level: 95, color: 'from-blue-500 to-cyan-500' },
                { label: 'Backend', level: 90, color: 'from-green-500 to-emerald-500' },
                { label: 'DevOps', level: 85, color: 'from-purple-500 to-pink-500' },
                { label: 'Design', level: 80, color: 'from-orange-500 to-red-500' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                    {item.level}%
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.label}
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 mt-2">
                    <div
                      className={`h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 