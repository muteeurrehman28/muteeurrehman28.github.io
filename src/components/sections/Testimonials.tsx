import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO at Tech Solutions',
      avatar: '/testimonials/john.jpg',
      content: 'Working with this developer was an absolute pleasure. They delivered a high-quality product that exceeded our expectations. Their attention to detail and technical expertise are truly impressive.',
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager at Digital Innovations',
      avatar: '/testimonials/jane.jpg',
      content: 'The developer\'s ability to understand our requirements and translate them into a beautiful, functional application was remarkable. They were professional, responsive, and a pleasure to work with.',
    },
    {
      name: 'Mike Johnson',
      role: 'CTO at StartupX',
      avatar: '/testimonials/mike.jpg',
      content: 'I\'ve worked with many developers, but this one stands out. Their technical skills, problem-solving abilities, and communication made the project a success. I highly recommend their services.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900 dark:text-primary-50">
            Testimonials
          </h2>
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-primary-700 dark:text-primary-300">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-primary-700 dark:text-primary-300 italic">
                "{testimonials[currentIndex].content}"
              </p>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-secondary-600 dark:bg-secondary-400"
                      : "bg-primary-300 dark:bg-primary-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 