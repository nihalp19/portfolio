import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home", "about", "skills", "experience", 
        "projects", "freelance", "education", "contact"
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150; // Adjust this offset as needed
          
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <CustomCursor cursorVariant={cursorVariant} />
      
      <Navigation 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setCursorVariant={setCursorVariant}
        scrollToSection={scrollToSection}
      />

      <div
        className="min-h-screen bg-[#030303] text-white pt-16"
        onMouseEnter={() => setCursorVariant("default")}
      >
        <Hero setCursorVariant={setCursorVariant} />
        <About setCursorVariant={setCursorVariant} />
        <Skills setCursorVariant={setCursorVariant} />
        <Experience setCursorVariant={setCursorVariant} />
        <Projects setCursorVariant={setCursorVariant} />
        <Freelance setCursorVariant={setCursorVariant} />
        <Education setCursorVariant={setCursorVariant} />
        <Contact setCursorVariant={setCursorVariant} />
      </div>
    </>
  );
}

export default App;
