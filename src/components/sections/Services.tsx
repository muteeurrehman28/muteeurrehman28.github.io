import { motion } from 'framer-motion';
import {
  FiCode,
  FiLayout,
  FiShoppingCart,
  FiSearch,
  FiServer,
  FiSmartphone,
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies and best practices.',
      icon: FiCode,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
      icon: FiLayout,
    },
    {
      title: 'E-commerce Solutions',
      description: 'Developing secure and scalable e-commerce platforms with seamless payment integration.',
      icon: FiShoppingCart,
    },
    {
      title: 'SEO Optimization',
      description: 'Implementing SEO best practices to improve your website\'s visibility and ranking.',
      icon: FiSearch,
    },
    {
      title: 'Backend Development',
      description: 'Building robust and scalable backend systems with proper security and performance optimization.',
      icon: FiServer,
    },
    {
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications with a native feel and optimal performance.',
      icon: FiSmartphone,
    },
  ];

  return (
    <section id="services" className="py-20 bg-primary-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900 dark:text-primary-50">
            Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-primary-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-700 rounded-lg group-hover:bg-secondary-100 dark:group-hover:bg-secondary-900/20 transition-colors">
                  <service.icon className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2 text-primary-900 dark:text-primary-50">
                  {service.title}
                </h3>
                <p className="text-primary-700 dark:text-primary-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 