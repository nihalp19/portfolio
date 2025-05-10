import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ setCursorVariant }) => {
  return (
    <motion.section
      id="education"
      className="py-12 md:py-20 bg-neutral-900/50 backdrop-blur-lg"
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
          EDUCATION
        </h2>
        <motion.div
          className="bg-neutral-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neutral-800 max-w-2xl mx-auto hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">Bachelor in Computer Application (BCA)</h3>
          <p className="text-sm md:text-base text-neutral-400 mb-4">MIT WPU | Aug 2022 - May 2025</p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm md:text-base">
            <li>Pursuing BCA with a focus on Software Engineering, DSA, OS, Networking, and Cloud Computing</li>
            <li>Knowledge of computer networks, database management, and system design principles</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
