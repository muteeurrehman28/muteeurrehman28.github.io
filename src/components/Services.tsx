import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiSearch, 
  FiEdit, 
  FiCloud,
  FiZap,
  FiShield
} from 'react-icons/fi';

const services = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Node.js, and TypeScript. Focus on performance, scalability, and user experience.',
    features: ['Responsive Design', 'Progressive Web Apps', 'API Integration', 'Performance Optimization'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native and Flutter. Native performance with shared codebase for iOS and Android.',
    features: ['React Native', 'Flutter', 'Native APIs', 'App Store Deployment'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FiDatabase className="w-8 h-8" />,
    title: 'Backend Development',
    description: 'Robust server-side applications with Node.js, Python, and cloud services. Database design, API development, and system architecture.',
    features: ['REST APIs', 'GraphQL', 'Database Design', 'Microservices'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FiSearch className="w-8 h-8" />,
    title: 'SEO Optimization',
    description: 'Search engine optimization to improve your website\'s visibility and ranking. Technical SEO, content optimization, and analytics.',
    features: ['Technical SEO', 'Content Strategy', 'Analytics', 'Performance'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <FiEdit className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive user experiences. Wireframing, prototyping, and design systems.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: <FiCloud className="w-8 h-8" />,
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure and deployment solutions using AWS, Google Cloud, and Azure. Scalable, secure, and cost-effective solutions.',
    features: ['AWS', 'Google Cloud', 'Azure', 'DevOps'],
    color: 'from-teal-500 to-blue-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-100">
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
              Services I Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive web development and digital solutions to help your business grow and succeed in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group-hover:border-transparent">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Why Choose My Services?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FiZap className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Fast and efficient development process</span>
                  </div>
                  <div className="flex items-center">
                    <FiShield className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Secure and scalable solutions</span>
                  </div>
                  <div className="flex items-center">
                    <FiCode className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code</span>
                  </div>
                  <div className="flex items-center">
                    <FiSearch className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">SEO-optimized websites</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Ready to start your next project?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 