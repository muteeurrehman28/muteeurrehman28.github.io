import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      credentialId: 'AWS-123456',
      date: 'December 2023',
      image: '/certifications/aws.png',
      url: 'https://aws.amazon.com/certification/',
    },
    {
      title: 'Professional Full Stack Developer',
      organization: 'Meta',
      credentialId: 'META-789012',
      date: 'October 2023',
      image: '/certifications/meta.png',
      url: 'https://www.meta.com/careers/',
    },
    {
      title: 'Google Cloud Professional Developer',
      organization: 'Google Cloud',
      credentialId: 'GCP-345678',
      date: 'August 2023',
      image: '/certifications/gcp.png',
      url: 'https://cloud.google.com/certification',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-primary-100 dark:bg-primary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900 dark:text-primary-50">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ rotateY: 10, scale: 1.05 }}
                className="bg-white dark:bg-primary-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="p-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-primary-900 dark:text-primary-50">
                    {cert.title}
                  </h3>
                  <p className="text-primary-700 dark:text-primary-300 mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 text-sm mb-2">
                    Credential ID: {cert.credentialId}
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 text-sm mb-4">
                    Issued: {cert.date}
                  </p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
                  >
                    View Certificate
                    <FiExternalLink className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 