import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, FileText, Menu, X, ExternalLink, Code2, MonitorSmartphone, Database } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6
      }
    }
  };

  const skills = [
    { name: 'JavaScript', icon: <Code2 className="w-6 h-6" /> },
    { name: 'TypeScript', icon: <Code2 className="w-6 h-6" /> },
    { name: 'React.js', icon: <Code2 className="w-6 h-6" /> },
    { name: 'Node.js', icon: <Code2 className="w-6 h-6" /> },
    { name: 'Express.js', icon: <MonitorSmartphone className="w-6 h-6" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" /> },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" /> },
    { name: 'Tailwind CSS', icon: <Code2 className="w-6 h-6" /> }
  ];

  const glowVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const freelanceServices = [
    {
      title: "Full Stack Development",
      description: "Complete web applications with both frontend and backend implementation",
      price: "Starting from $2000"
    },
    {
      title: "Frontend Development",
      description: "Responsive and interactive user interfaces using modern frameworks",
      price: "Starting from $1000"
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions and API development",
      price: "Starting from $1500"
    }
  ];

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "freelance", label: "Freelance" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 bg-white/30 rounded-full pointer-events-none z-50 blur-xl"
        variants={variants}
        animate={cursorVariant}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.a
              href="#"
              className="text-xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              NP
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-black/95 pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-medium py-2 transition-colors ${
                    activeSection === item.id ? 'text-white' : 'text-neutral-400'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <div 
        className="min-h-screen bg-[#030303] text-white pt-16"
        onMouseEnter={() => setCursorVariant("default")}
      >
        {/* Hero Section */}
        <motion.header 
          id="home"
          className="h-screen flex items-center justify-center relative overflow-hidden -mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 to-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
          
          <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] pointer-events-none" />
          
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-neutral-500/10 rounded-full blur-[160px]"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neutral-500/10 rounded-full blur-[160px]"
            variants={glowVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                className="overflow-hidden mb-4 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <motion.h1 
                  className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-neutral-600"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  NIHAL PANDAY
                </motion.h1>
              </motion.div>

              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 font-light tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <span className="text-neutral-400">
                  MERN STACK <span className="text-white">DEVELOPER</span>
                </span>
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-neutral-400 mb-8 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Available for Freelance Projects
              </motion.p>

              {/* Resume Button */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <FileText className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </motion.div>

              <motion.div 
                className="flex gap-4 md:gap-8 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 md:p-5 bg-neutral-900/50 hover:bg-neutral-800 rounded-xl md:rounded-2xl backdrop-blur-sm border border-neutral-800/50 transform hover:scale-110 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Github className="w-6 h-6 md:w-8 md:h-8" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 md:p-5 bg-neutral-900/50 hover:bg-neutral-800 rounded-xl md:rounded-2xl backdrop-blur-sm border border-neutral-800/50 transform hover:scale-110 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
                </motion.a>
                <motion.a 
                  href="mailto:nihalpanday2020@gmail.com" 
                  className="p-3 md:p-5 bg-neutral-900/50 hover:bg-neutral-800 rounded-xl md:rounded-2xl backdrop-blur-sm border border-neutral-800/50 transform hover:scale-110 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Mail className="w-6 h-6 md:w-8 md:h-8" />
                </motion.a>
                <motion.a 
                  href="tel:+917249865498" 
                  className="p-3 md:p-5 bg-neutral-900/50 hover:bg-neutral-800 rounded-xl md:rounded-2xl backdrop-blur-sm border border-neutral-800/50 transform hover:scale-110 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Phone className="w-6 h-6 md:w-8 md:h-8" />
                </motion.a>
              </motion.div>

              <motion.div 
                className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
              >
                <div className="w-5 h-8 md:w-7 md:h-12 border-2 border-neutral-600 rounded-full flex justify-center">
                  <div className="w-1 h-2 md:w-1.5 md:h-3 bg-white rounded-full mt-2 animate-bounce" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* About Section */}
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
                I'm a passionate MERN Stack developer with a strong foundation in both frontend and backend development. My journey in web development started during my BCA studies, and I've since worked on various projects that have helped me develop a deep understanding of modern web technologies.
              </motion.p>
              <motion.p 
                className="text-neutral-300 text-lg leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                I specialize in creating responsive, user-friendly web applications using React.js, Node.js, and modern web technologies. My experience includes both freelance work and professional roles, where I've delivered high-quality solutions for clients across various industries.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
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
                <motion.div
                  key={skill.name}
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
                    {skill.icon}
                    <span className="text-sm md:text-base">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience"
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
                <h3 className="text-xl md:text-2xl font-bold mb-2">Full Developer Intern - Samarth Solutions</h3>
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

        {/* Projects Section */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <motion.div 
                className="bg-neutral-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neutral-800 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">Chat App (MERN STACK)</h3>
                <p className="text-sm md:text-base text-neutral-400 mb-4">Dec 2024 - Feb 2025</p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm md:text-base">
                  <li>Real-time MERN stack application with Socket.io</li>
                  <li>Modern UI using DaisyUI</li>
                </ul>
                <motion.a 
                  href="#" 
                  className="inline-flex items-center gap-2 mt-4 px-4 md:px-6 py-2 bg-white text-black rounded-lg transform hover:scale-105 transition-all text-sm md:text-base"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>

              <motion.div 
                className="bg-neutral-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-neutral-800 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">Notes App (MERN STACK)</h3>
                <p className="text-sm md:text-base text-neutral-400 mb-4">Jan 2025 - Feb 2025</p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm md:text-base">
                  <li>Secure Notes App using MERN stack</li>
                  <li>JWT authentication implementation</li>
                </ul>
                <motion.a 
                  href="#" 
                  className="inline-flex items-center gap-2 mt-4 px-4 md:px-6 py-2 bg-white text-black rounded-lg transform hover:scale-105 transition-all text-sm md:text-base"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Freelance Section */}
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
                <motion.div
                  key={service.title}
                  className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-800"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileH
                  over={{ scale: 1.02 }}
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-neutral-400 mb-4">{service.description}</p>
                  <p className="text-white font-semibold">{service.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
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
              GET IN TOUCH
            </h2>
            <div className="max-w-2xl mx-auto">
              <motion.div
                className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-800"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <p className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        nihalpanday2020@gmail.com
                      </p>
                      <p className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        +91 7249865498
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                    <div className="flex gap-4">
                      <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Linkedin className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
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
      </div>
    </>
  );
}

export default App;
