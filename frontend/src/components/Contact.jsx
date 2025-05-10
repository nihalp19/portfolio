import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = ({ setCursorVariant }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset success message after a while
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <motion.section
      id="contact"
      className="py-12 md:py-20 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          GET IN TOUCH
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-800"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                {submitStatus === 'success' && (
                  <motion.p
                    className="mt-4 text-green-400 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p
                    className="mt-4 text-red-400 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Failed to send message. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-800"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <motion.p
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="w-5 h-5" />
                      nihalpanday2020@gmail.com
                    </motion.p>
                    <motion.p
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <Phone className="w-5 h-5" />
                      +91 7249865498
                    </motion.p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Social Media</h3>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/nihalp19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://shorturl.at/1okEz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Location</h3>
                  <p>Based in Pune, India</p>
                  <p className="mt-2">Open to working remotely or in Pune, Mumbai, Delhi, or Bangalore.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
