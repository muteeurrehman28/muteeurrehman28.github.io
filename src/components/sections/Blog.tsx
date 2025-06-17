import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Blog = () => {
  const articles = [
    {
      title: 'Understanding React Hooks: A Deep Dive',
      date: 'July 15, 2024',
      description:
        'A comprehensive guide to React Hooks, covering useState, useEffect, useContext, and custom hooks with practical examples.',
      readTime: '10 min read',
      category: 'React',
      slug: 'understanding-react-hooks',
    },
    {
      title: 'Mastering Tailwind CSS for Rapid UI Development',
      date: 'June 20, 2024',
      description:
        'Learn how to leverage Tailwind CSS for building beautiful and responsive user interfaces quickly and efficiently.',
      readTime: '8 min read',
      category: 'CSS',
      slug: 'mastering-tailwind-css',
    },
    {
      title: 'Demystifying Node.js Event Loop',
      date: 'May 10, 2024',
      description:
        'An in-depth explanation of the Node.js Event Loop, its phases, and how it handles asynchronous operations.',
      readTime: '12 min read',
      category: 'Node.js',
      slug: 'nodejs-event-loop',
    },
  ];

  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleImageLoad = (id: number) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("blog");
      if (section) {
        const scrollTop = window.scrollY;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate progress only when the section is in view
        if (scrollTop + windowHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
          const scrollableHeight = sectionHeight - windowHeight;
          const scrolledIn = scrollTop - sectionTop;
          if (scrollableHeight > 0) {
            const progress = (scrolledIn / scrollableHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          } else {
            setScrollProgress(100); // If content fits screen, consider it 100% viewed
          }
        } else if (scrollTop >= sectionTop + sectionHeight) {
          setScrollProgress(100); // Scrolled past the section
        } else {
          setScrollProgress(0); // Not yet at the section
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="blog" className="py-20 bg-primary-50 dark:bg-primary-900">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-secondary-600 dark:bg-secondary-400 z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900 dark:text-primary-50">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col bg-white dark:bg-primary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-sm bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-primary-600 dark:text-primary-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-900 dark:text-primary-50 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-primary-700 dark:text-primary-300 mb-4 line-clamp-3 flex-grow">
                    {article.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-primary-200 dark:border-primary-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary-600 dark:text-primary-400">
                        {article.date}
                      </span>
                      <a
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors group"
                      >
                        Read More
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 