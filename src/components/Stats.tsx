import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUser, FiAward, FiHeart } from 'react-icons/fi';

const stats = [
  {
    icon: <FiCode className="w-8 h-8" />,
    value: 75,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across various industries',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FiUser className="w-8 h-8" />,
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied clients who trust my expertise',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    description: 'Professional experience in web development',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FiHeart className="w-8 h-8" />,
    value: 1000,
    suffix: '+',
    label: 'Lines of Code',
    description: 'Clean, efficient, and well-documented code',
    color: 'from-orange-500 to-red-500',
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold">
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-blue-50 to-cyan-50 dark:from-primary-900/20 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Numbers That Speak
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A glimpse into my journey and achievements in the world of web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>

                  {/* Animated Counter */}
                  <div className="text-primary-600 dark:text-primary-400 mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  100%
                </div>
                <div className="text-gray-900 dark:text-white font-medium mb-1">
                  Client Satisfaction
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Every project delivered on time
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-900 dark:text-white font-medium mb-1">
                  Support Available
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Always here when you need me
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  15+
                </div>
                <div className="text-gray-900 dark:text-white font-medium mb-1">
                  Technologies Mastered
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  From frontend to backend
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats; 