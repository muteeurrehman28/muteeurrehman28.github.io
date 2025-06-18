import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStartup',
    company: 'TechStartup Inc.',
    avatar: '/testimonials/sarah.jpg',
    content: 'Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and user experience is outstanding.',
    rating: 5,
    project: 'E-commerce Platform',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateCorp',
    avatar: '/testimonials/michael.jpg',
    content: 'Exceptional technical skills combined with great communication. They transformed our ideas into a beautiful, functional application that our users love. Highly recommended for any web development project.',
    rating: 5,
    project: 'Mobile App Development',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthAgency',
    avatar: '/testimonials/emily.jpg',
    content: 'The SEO optimization work they did for our website resulted in a 300% increase in organic traffic. Their expertise in both development and marketing is rare and valuable.',
    rating: 5,
    project: 'SEO & Website Optimization',
  },
  {
    name: 'David Thompson',
    role: 'CTO',
    company: 'Enterprise Solutions',
    avatar: '/testimonials/david.jpg',
    content: 'Professional, reliable, and technically excellent. They built a complex backend system that handles millions of requests daily. The code quality and documentation are top-notch.',
    rating: 5,
    project: 'Enterprise Backend System',
  },
  {
    name: 'Lisa Wang',
    role: 'Founder',
    company: 'Creative Studio',
    avatar: '/testimonials/lisa.jpg',
    content: 'They created a stunning portfolio website that perfectly represents our brand. The design is modern, responsive, and the performance is incredible. Couldn\'t be happier with the result.',
    rating: 5,
    project: 'Portfolio Website',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working together.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-xl"
              >
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <FiMessageSquare className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Project */}
                  <div className="mt-6">
                    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      {testimonials[currentIndex].project}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-100 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-100 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-600 dark:bg-primary-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Happy Clients', value: '50+' },
              { label: 'Projects Completed', value: '75+' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Client Satisfaction', value: '100%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 