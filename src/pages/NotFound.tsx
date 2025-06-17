import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50 dark:bg-primary-900">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-primary-900 dark:text-primary-50 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-primary-800 dark:text-primary-100 mb-4">
            Page Not Found
          </h2>
          <p className="text-primary-700 dark:text-primary-300 text-xl mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; 