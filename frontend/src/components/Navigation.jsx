import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavigationItem = ({ 
  id, 
  label, 
  activeSection, 
  onClick, 
  setCursorVariant 
}) => {
  return (
    <motion.button
      onClick={() => onClick(id)}
      className={`text-lg font-medium py-2 transition-colors ${
        activeSection === id ? 'text-white' : 'text-neutral-400'
      }`}
      whileHover={{ x: 10 }}
      onMouseEnter={() => setCursorVariant("text")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      {label}
    </motion.button>
  );
};

const Navigation = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  setCursorVariant,
  scrollToSection
}) => {
  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "freelance", label: "Freelance" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
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
                <NavigationItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  activeSection={activeSection}
                  onClick={scrollToSection}
                  setCursorVariant={setCursorVariant}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
