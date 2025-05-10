import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ setCursorVariant }) => {
  return (
    <motion.section
      id="experience"
      className="py-12 md:py-20 bg-black w-full overflow-x-hidden"
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
          WORK EXPERIENCE
        </h2>
        <div className="space-y-6 md:space-y-8">
          <motion.div
            className="bg-neutral-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neutral-800 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2">Backend Developer - Andes</h3>
            <p className="text-sm md:text-base text-neutral-400 mb-4">Dec 2024 - Feb 2025</p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm md:text-base">
              <li>Maintained and optimized backend APIs using Node.js and Express.js</li>
              <li>Managed VPS hosting for seamless deployment and server maintenance</li>
              <li>Worked with databases (MongoDB/PostgreSQL) for efficient data management</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-neutral-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neutral-800 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2">Full Stack Developer Intern - Samarth Solutions</h3>
            <p className="text-sm md:text-base text-neutral-400 mb-4">Jan 2025 - Feb 2025</p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm md:text-base">
              <li>Developed the entire website from scratch, handling both frontend and backend</li>
              <li>Built the frontend using React.js, ensuring a responsive and user-friendly UI</li>
              <li>Designed and implemented the admin panel for efficient content management</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
