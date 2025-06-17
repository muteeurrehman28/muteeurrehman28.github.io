import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900 dark:text-primary-50">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-primary-700 dark:text-primary-300">
                I'm a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating elegant solutions to complex problems. With expertise
                in both frontend and backend development, I strive to build applications that are
                not only functional but also provide an exceptional user experience.
              </p>
              <p className="text-lg text-primary-700 dark:text-primary-300">
                My journey in web development started with a curiosity about how things work on the
                internet, which led me to dive deep into various technologies and frameworks. I
                believe in continuous learning and staying up-to-date with the latest industry
                trends and best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary-600 hover:bg-secondary-700 text-white font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <FiDownload className="mr-2" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-200 dark:bg-primary-700 hover:bg-primary-300 dark:hover:bg-primary-600 text-primary-900 dark:text-primary-50 font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 