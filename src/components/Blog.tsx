import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiHash, FiArrowRight } from 'react-icons/fi';

const blogPosts = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications that can handle millions of users while maintaining performance and code quality.',
    image: '/blog/react-scalable.jpg',
    category: 'React',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'Performance', 'Architecture'],
    slug: 'building-scalable-react-applications',
  },
  {
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the latest trends and technologies that will shape the future of web development, from AI integration to new frameworks and tools.',
    image: '/blog/web-dev-2024.jpg',
    category: 'Trends',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Web Development', 'AI', 'Trends'],
    slug: 'future-of-web-development-2024',
  },
  {
    title: 'Optimizing TypeScript for Better Performance',
    excerpt: 'Discover advanced TypeScript techniques and optimization strategies to improve your application\'s performance and developer experience.',
    image: '/blog/typescript-optimization.jpg',
    category: 'TypeScript',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['TypeScript', 'Performance', 'Best Practices'],
    slug: 'optimizing-typescript-performance',
  },
  {
    title: 'Mastering CSS Grid and Flexbox',
    excerpt: 'A comprehensive guide to modern CSS layout techniques using Grid and Flexbox for creating responsive and flexible web designs.',
    image: '/blog/css-layouts.jpg',
    category: 'CSS',
    date: '2023-12-28',
    readTime: '12 min read',
    tags: ['CSS', 'Grid', 'Flexbox'],
    slug: 'mastering-css-grid-flexbox',
  },
  {
    title: 'Serverless Architecture Best Practices',
    excerpt: 'Learn how to design and implement efficient serverless architectures using AWS Lambda, Azure Functions, and other cloud services.',
    image: '/blog/serverless.jpg',
    category: 'Cloud',
    date: '2023-12-20',
    readTime: '9 min read',
    tags: ['Serverless', 'AWS', 'Cloud'],
    slug: 'serverless-architecture-best-practices',
  },
  {
    title: 'Building Accessible Web Applications',
    excerpt: 'Essential guidelines and techniques for creating web applications that are accessible to users with disabilities and meet WCAG standards.',
    image: '/blog/accessibility.jpg',
    category: 'Accessibility',
    date: '2023-12-15',
    readTime: '7 min read',
    tags: ['Accessibility', 'WCAG', 'Inclusive Design'],
    slug: 'building-accessible-web-applications',
  },
];

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'React', count: 1 },
  { name: 'TypeScript', count: 1 },
  { name: 'CSS', count: 1 },
  { name: 'Cloud', count: 1 },
  { name: 'Accessibility', count: 1 },
  { name: 'Trends', count: 1 },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, technology, and best practices.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500 mb-6">
                    <div className="flex items-center">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <FiClock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white dark:bg-dark-100 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                  >
                    Read More
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <FiClock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                  >
                    Read More
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Posts Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/blog"
              className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              View All Posts
              <FiArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 