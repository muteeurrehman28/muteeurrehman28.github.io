import { motion, useScroll, useTransform } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Adjust values for desired parallax intensity

  return (
    <section id="about" className="py-20 bg-primary-900 text-primary-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-50 dark:text-primary-50">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <motion.img
                style={{ y }}
                src="/profile.jpg"
                alt="Your Name"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg leading-relaxed mb-6"
              >
                Motivated and curious AI student seeking an internship in AI design to
                apply theoretical knowledge to real-world problems. Passionate about
                intelligent systems, machine learning, and creative AI applications. Eager to
                learn and contribute to innovative projects.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <a
                  href="/mutee-ur-rehman-cv.jpg"
                  download="Mutee-Ur-Rehman-CV.jpg"
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
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 