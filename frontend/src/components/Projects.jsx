import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Project = ({ title, date, description, link, setCursorVariant }) => {
  return (
    <motion.div
      className="bg-neutral-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neutral-800 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setCursorVariant("text")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-neutral-400 mb-4">{date}</p>
      <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm md:text-base">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <motion.a
        href={link}
        className="inline-flex items-center gap-2 mt-4 px-4 md:px-6 py-2 bg-white text-black rounded-lg transform hover:scale-105 transition-all text-sm md:text-base"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
        <ExternalLink className="w-4 h-4" />
      </motion.a>
    </motion.div>
  );
};

const Projects = ({ setCursorVariant }) => {
  const [activeTab, setActiveTab] = useState("all");

  const frontendProjects = [
    {
      title: "Agency Website",
      date: "Jan 2025",
      description: [
        "Modern agency website built with React",
        "Smooth animations using Framer Motion",
        "Contact form integration with EmailJS"
      ],
      link: "https://www.magnetiqmedia.in/"
    },
    {
      title: "GoGetWellAI",
      date: "Dec 2024",
      description: [
        "AI-powered healthcare platform UI",
        "Interactive animations with Framer Motion",
        "Responsive design with Tailwind CSS"
      ],
      link: "https://go-getwellai.vercel.app/"
    },
    {
      title: "Crypto Expense Tracker",
      date: "Feb 2025",
      description: [
        "Real-time cryptocurrency price tracking with CoinGecko API",
        "State management using Zustand",
        "Data fetching with Axios"
      ],
      link: "https://cryptotracker-one-pi.vercel.app/"
    }
  ];

  const backendProjects = [
    {
      title: "AI Agent Wrapper API",
      date: "Feb 2025",
      description: [
        "FastAPI backend for AI agent integration",
        "Standardized parameters for Retell and VAPI",
        "Efficient error handling and response formatting",
      ],
      link: "https://github.com/nihalp19/Wrapper"
    }
  ];

  const fullstackProjects = [
    {
      title: "E-commerce Platform",
      date: "Jan 2025 - Present",
      description: [
        "Full-stack e-commerce solution with React and Node.js",
        "Stripe integration for secure payments",
        "Redis implementation for performance optimization",
      ],
      link: "https://github.com/nihalp19/Ecommerce"
    },
    {
      title: "URL Shortener",
      date: "Dec 2024 - Jan 2025",
      description: [
        "URL shortening service with React and Node.js",
        "Analytics dashboard with Recharts",
        "State management using Zustand",
      ],
      link: "https://url-shortner-three-sooty.vercel.app/"
    },
    {
      title: "GRIPPi Clone",
      date: "Nov 2024 - Dec 2024",
      description: [
        "Campaign management system with React and FastAPI",
        "Advanced campaign tracking and analytics",
        "Analytics dashboard with Recharts",
      ],
      link: "https://grippi-nu.vercel.app/"
    },
    {
      title: "Real-time Chat App",
      date: "Feb 2025",
      description: [
        "Full-stack chat application with MERN stack",
        "Real-time messaging with Socket.io",
        "User authentication and private messaging",
        "Message history and file sharing"
      ],
      link: "https://github.com/nihalp19/chatAppMern"
    }
  ];

  return (
    <motion.section
      id="projects"
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
          PROJECTS
        </h2>

        <div className="flex justify-center mb-8 space-x-4">
          <motion.button
            className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-white text-black' : 'bg-neutral-800 text-white'}`}
            onClick={() => setActiveTab('all')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-lg ${activeTab === 'frontend' ? 'bg-white text-black' : 'bg-neutral-800 text-white'}`}
            onClick={() => setActiveTab('frontend')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Frontend
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-lg ${activeTab === 'backend' ? 'bg-white text-black' : 'bg-neutral-800 text-white'}`}
            onClick={() => setActiveTab('backend')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Backend
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-lg ${activeTab === 'fullstack' ? 'bg-white text-black' : 'bg-neutral-800 text-white'}`}
            onClick={() => setActiveTab('fullstack')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Full Stack
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {(activeTab === 'all' || activeTab === 'frontend') && 
            frontendProjects.map(project => (
              <Project 
                key={project.title}
                title={project.title}
                date={project.date}
                description={project.description}
                link={project.link}
                setCursorVariant={setCursorVariant}
              />
            ))
          }

          {(activeTab === 'all' || activeTab === 'backend') && 
            backendProjects.map(project => (
              <Project 
                key={project.title}
                title={project.title}
                date={project.date}
                description={project.description}
                link={project.link}
                setCursorVariant={setCursorVariant}
              />
            ))
          }

          {(activeTab === 'all' || activeTab === 'fullstack') && 
            fullstackProjects.map(project => (
              <Project 
                key={project.title}
                title={project.title}
                date={project.date}
                description={project.description}
                link={project.link}
                setCursorVariant={setCursorVariant}
              />
            ))
          }
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
