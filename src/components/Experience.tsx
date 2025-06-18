import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Led development of enterprise web applications using React, Node.js, and AWS. Managed team of 5 developers and implemented CI/CD pipelines.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
    link: 'https://techcorp.com',
    logo: '/companies/techcorp.png',
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Built scalable web applications from scratch. Implemented real-time features and optimized performance for 100k+ users.',
    technologies: ['React', 'TypeScript', 'Firebase', 'GraphQL'],
    link: 'https://startupxyz.com',
    logo: '/companies/startupxyz.png',
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'Los Angeles, CA',
    period: '2018 - 2020',
    description: 'Created responsive websites and web applications for various clients. Collaborated with designers and backend developers.',
    technologies: ['JavaScript', 'Vue.js', 'CSS3', 'WordPress'],
    link: 'https://digitalagency.com',
    logo: '/companies/digitalagency.png',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-dark-100 z-10"></div>

                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 text-sm">
                            <span className="font-medium">{exp.company}</span>
                            <div className="flex items-center">
                              <FiMapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                            <div className="flex items-center">
                              <FiCalendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 