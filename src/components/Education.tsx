import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    location: 'Stanford, CA',
    period: '2018 - 2020',
    gpa: '3.9/4.0',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Completed thesis on "Deep Learning Applications in Natural Language Processing".',
    achievements: [
      'Graduated with Distinction',
      'Research Assistant in AI Lab',
      'Published 2 research papers',
    ],
    logo: '/universities/stanford.png',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    period: '2014 - 2018',
    gpa: '3.8/4.0',
    description: 'Major in Computer Science with minor in Mathematics. Active member of ACM and participated in hackathons.',
    achievements: [
      'Dean\'s List (All Semesters)',
      'ACM Programming Competition Winner',
      'Teaching Assistant for CS61A',
    ],
    logo: '/universities/berkeley.png',
  },
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-123456',
    logo: '/certifications/aws.png',
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google',
    date: '2022',
    credentialId: 'GCP-789012',
    logo: '/certifications/gcp.png',
  },
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: '2021',
    credentialId: 'AZ-204-123456',
    logo: '/certifications/azure.png',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education & Certifications
          </h2>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
              Academic Background
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 text-sm mb-3">
                        <div className="flex items-center">
                          <FiMapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <FiCalendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <div className="flex items-center mb-3">
                        <FiAward className="w-4 h-4 mr-2 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {edu.description}
                  </p>

                  <div className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-dark-200 rounded-full flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Issued: {cert.date}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                    ID: {cert.credentialId}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 