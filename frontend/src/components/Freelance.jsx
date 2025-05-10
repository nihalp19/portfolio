import React from 'react';
import { motion } from 'framer-motion';

const FreelanceService = ({ title, description, price, index, setCursorVariant }) => {
  return (
    <motion.div
      className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-800"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setCursorVariant("text")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-neutral-400 mb-4">{description}</p>
      <p className="text-white font-semibold">{price}</p>
    </motion.div>
  );
};

const Freelance = ({ setCursorVariant }) => {
  const freelanceServices = [
    {
      title: "Full Stack Development",
      description: "Complete web applications with both frontend and backend implementation",
      price: "Starting from $1500"
    },
    {
      title: "Frontend Development",
      description: "Responsive and interactive user interfaces using modern frameworks",
      price: "Starting from $500"
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions and API development",
      price: "Starting from $1000"
    }
  ];

  return (
    <motion.section
      id="freelance"
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
          FREELANCE SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {freelanceServices.map((service, index) => (
            <FreelanceService 
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
              index={index}
              setCursorVariant={setCursorVariant}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Freelance;
