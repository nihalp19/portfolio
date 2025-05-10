import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Database, Cloud, Globe, Server } from 'lucide-react';

const Skill = ({ name, icon, index, setCursorVariant }) => {
  return (
    <motion.div
      className="bg-neutral-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg text-center border border-neutral-800 transform hover:scale-105 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => setCursorVariant("text")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <div className="flex flex-col items-center gap-3">
        {icon}
        <span className="text-sm md:text-base">{name}</span>
      </div>
    </motion.div>
  );
};

const Skills = ({ setCursorVariant }) => {
  const skills = [
    { name: 'JavaScript', icon: <Code2 className="w-6 h-6" /> },
    { name: 'TypeScript', icon: <Code2 className="w-6 h-6" /> },
    { name: 'React.js', icon: <Code2 className="w-6 h-6" /> },
    { name: 'Node.js', icon: <Server className="w-6 h-6" /> },
    { name: 'Express.js', icon: <Server className="w-6 h-6" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" /> },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" /> },
    { name: 'Tailwind CSS', icon: <Code2 className="w-6 h-6" /> },
    { name: 'AWS S3', icon: <Cloud className="w-6 h-6" /> },
    { name: 'Firebase', icon: <Database className="w-6 h-6" /> },
    { name: 'Vercel/Railway', icon: <Globe className="w-6 h-6" /> },
    { name: 'FastAPI', icon: <Server className="w-6 h-6" /> },
    { name: 'C++', icon: <Code2 className="w-6 h-6" /> },
    { name: 'C', icon: <Code2 className="w-6 h-6" /> },
    { name: 'PHP', icon: <Code2 className="w-6 h-6" /> },
    { name: 'Python', icon: <Code2 className="w-6 h-6" /> }
  ];

  return (
    <motion.section
      id="skills"
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
          SKILLS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <Skill 
              key={skill.name} 
              name={skill.name} 
              icon={skill.icon} 
              index={index}
              setCursorVariant={setCursorVariant}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
