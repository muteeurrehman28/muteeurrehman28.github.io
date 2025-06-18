import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-primary-50 dark:bg-primary-900 text-center">
    <motion.h1
      className="text-7xl font-extrabold text-secondary-600 mb-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      404
    </motion.h1>
    <motion.p
      className="text-2xl mb-8 text-primary-700 dark:text-primary-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Oops! The page you are looking for does not exist.
    </motion.p>
    <Link to="/" className="btn-primary">Return to Homepage</Link>
  </section>
);

export default NotFound; 