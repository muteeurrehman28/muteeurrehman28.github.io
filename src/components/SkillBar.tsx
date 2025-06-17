import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillBarProps {
  name: string;
  icon: IconType;
  level: number;
}

const SkillBar = ({ name, icon: Icon, level }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-primary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="p-3 bg-primary-100 dark:bg-primary-700 rounded-lg group-hover:bg-secondary-100 dark:group-hover:bg-secondary-900/20 transition-colors"
        >
          <Icon className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
        </motion.div>
        <h3 className="text-lg font-semibold mt-4 mb-2 text-primary-900 dark:text-primary-50">
          {name}
        </h3>
        <div className="w-full bg-primary-200 dark:bg-primary-700 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-secondary-600 dark:bg-secondary-400 h-2.5 rounded-full"
          />
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm text-primary-700 dark:text-primary-300 mt-2"
        >
          {level}%
        </motion.span>
      </div>
    </motion.div>
  );
};

export default SkillBar; 