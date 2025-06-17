import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-primary-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900 dark:text-primary-50">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary-900 dark:text-primary-50">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white dark:bg-primary-700 rounded-full shadow-lg">
                    <FiMail className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900 dark:text-primary-50">
                      Email
                    </h4>
                    <a
                      href="mailto:muteeurrehman28@gmail.com"
                      className="text-primary-700 dark:text-primary-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
                    >
                      muteeurrehman28@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white dark:bg-primary-700 rounded-full shadow-lg">
                    <FiPhone className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900 dark:text-primary-50">
                      Phone
                    </h4>
                    <a
                      href="tel:+923001234567"
                      className="text-primary-700 dark:text-primary-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
                    >
                      +92 300 1234567
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-primary-800 border border-primary-300 dark:border-primary-700 focus:ring-2 focus:ring-secondary-600 dark:focus:ring-secondary-400 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-primary-800 border border-primary-300 dark:border-primary-700 focus:ring-2 focus:ring-secondary-600 dark:focus:ring-secondary-400 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-primary-800 border border-primary-300 dark:border-primary-700 focus:ring-2 focus:ring-secondary-600 dark:focus:ring-secondary-400 focus:border-transparent transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </button>
                {status.message && (
                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-600 dark:text-green-400"
                        : status.type === "error"
                        ? "text-red-600 dark:text-red-400"
                        : "text-primary-700 dark:text-primary-300"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 