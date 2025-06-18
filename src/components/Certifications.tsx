import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiCalendar, FiShield } from 'react-icons/fi';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    credentialId: 'AWS-123456',
    date: 'December 2023',
    image: '/certifications/aws.png',
    url: 'https://aws.amazon.com/certification/',
    category: 'Cloud Computing',
    level: 'Professional',
    validUntil: 'December 2026',
  },
  {
    name: 'Google Professional Cloud Architect',
    organization: 'Google Cloud',
    credentialId: 'GCP-789012',
    date: 'October 2023',
    image: '/certifications/gcp.png',
    url: 'https://cloud.google.com/certification',
    category: 'Cloud Computing',
    level: 'Professional',
    validUntil: 'October 2026',
  },
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    organization: 'Microsoft',
    credentialId: 'AZ-204-123456',
    date: 'August 2023',
    image: '/certifications/azure.png',
    url: 'https://www.microsoft.com/en-us/learning/',
    category: 'Cloud Computing',
    level: 'Associate',
    validUntil: 'August 2026',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    organization: 'Cloud Native Computing Foundation',
    credentialId: 'CKA-456789',
    date: 'June 2023',
    image: '/certifications/kubernetes.png',
    url: 'https://www.cncf.io/certification/cka/',
    category: 'DevOps',
    level: 'Professional',
    validUntil: 'June 2026',
  },
  {
    name: 'Professional Full Stack Developer',
    organization: 'Meta',
    credentialId: 'META-789012',
    date: 'May 2023',
    image: '/certifications/meta.png',
    url: 'https://www.meta.com/careers/',
    category: 'Web Development',
    level: 'Professional',
    validUntil: 'May 2026',
  },
  {
    name: 'React Developer Certification',
    organization: 'Meta',
    credentialId: 'REACT-345678',
    date: 'April 2023',
    image: '/certifications/react.png',
    url: 'https://www.meta.com/careers/',
    category: 'Frontend Development',
    level: 'Professional',
    validUntil: 'April 2026',
  },
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'professional':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'associate':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'foundational':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cloud computing':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'devops':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300';
      case 'web development':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'frontend development':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="certifications" className="section bg-gradient-to-br from-neutral-50 via-blue-50 to-cyan-50 dark:from-neutral-900 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Certifications & Awards
          </h2>
          <p className="section-subtitle">
            Professional certifications that validate my expertise and commitment to continuous learning in the ever-evolving tech landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="card card-hover h-full overflow-hidden">
                {/* Header with gradient background */}
                <div className={`${getLevelColor(cert.level)} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <FiAward className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm opacity-90">
                    {cert.organization}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`badge ${getCategoryColor(cert.category)}`}>
                      {cert.category}
                    </span>
                    <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                      <FiCalendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Credential Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Credential ID:</span>
                      <span className="font-mono font-medium text-neutral-900 dark:text-neutral-100">
                        {cert.credentialId}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Valid Until:</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">
                        {cert.validUntil}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline w-full group-hover:btn-primary transition-all duration-300"
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {certifications.length}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Total Certifications
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
                3
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Cloud Platforms
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                100%
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Valid Certifications
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                4
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Categories
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 