import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = ({ setCursorVariant }) => {
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

  return (
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
              FULL STACK <span className="text-white">DEVELOPER</span>
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
              href="https://drive.google.com/file/d/1j9cvyB2bPovhN_JBZ3ZL2ainngBs1oPB/view?usp=sharing"
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
              href="https://github.com/nihalp19"
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
              href="https://shorturl.at/1okEz"
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
  );
};

export default Hero;
