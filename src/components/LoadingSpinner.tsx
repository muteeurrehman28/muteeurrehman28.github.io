import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50 dark:bg-primary-900">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 border-4 border-secondary-600/20 dark:border-secondary-400/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-t-secondary-600 dark:border-t-secondary-400 rounded-full" />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner; 