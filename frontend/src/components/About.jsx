import React from 'react';
import { motion } from 'framer-motion';

const About = ({ setCursorVariant }) => {
  return (
    <motion.section
      id="about"
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
          ABOUT ME
        </h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-neutral-300 text-lg leading-relaxed mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            I'm a passionate Full Stack developer with a strong foundation in both frontend and backend development. My journey in web development started during my BCA studies, and I've since worked on various projects that have helped me develop a deep understanding of modern web technologies.
          </motion.p>
          <motion.p
            className="text-neutral-300 text-lg leading-relaxed mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            I specialize in creating responsive, user-friendly web applications using React.js, Node.js, and modern web technologies. My experience includes both freelance work and professional roles, where I've delivered high-quality solutions for clients across various industries.
          </motion.p>
          <motion.p
            className="text-neutral-300 text-lg leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            I'm open to work in Pune, Delhi, Mumbai, and Bangalore, and am always excited about new challenges and opportunities to grow as a developer.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
