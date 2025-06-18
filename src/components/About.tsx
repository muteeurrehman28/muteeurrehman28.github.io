import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 dark:bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Motivated and curious AI student seeking an internship in AI design to apply theoretical knowledge to real-world problems. Passionate about intelligent systems, machine learning, and creative AI applications. Eager to learn and contribute to innovative projects.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/CV.pdf"
                  download="Mutee-Ur-Rehman-CV.pdf"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                >
                  <FiDownload className="mr-2" />
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Companies Worked', value: '10+' },
              { label: 'Happy Clients', value: '30+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-dark-100 rounded-xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 