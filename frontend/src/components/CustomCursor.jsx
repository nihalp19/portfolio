import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = ({ cursorVariant }) => {
  const mousePosition = useMousePosition();

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
    </>
  );
};

export default CustomCursor;
