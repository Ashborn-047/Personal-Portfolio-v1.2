import React from 'react';
import { motion } from 'framer-motion';

export const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ribbon 1: Soft Lavender */}
      <motion.div
        className="absolute top-[-10%] left-[-20%] w-[120%] h-[50vh] bg-gradient-to-r from-transparent via-[#DDD6EE] to-transparent opacity-30 mix-blend-screen blur-[60px]"
        style={{ rotate: -15 }}
        animate={{
          x: [-50, 50, -50],
          y: [0, 20, 0],
          scaleY: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Ribbon 2: Aurora Green */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-[120%] h-[45vh] bg-gradient-to-r from-transparent via-[#D4EDE4] to-transparent opacity-25 mix-blend-screen blur-[55px]"
        style={{ rotate: 8 }}
        animate={{
          x: [30, -30, 30],
          y: [0, -20, 0],
          scaleY: [1, 1.25, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      
      {/* Ribbon 3: Pale Blue */}
      <motion.div
        className="absolute top-[35%] right-[-15%] w-[120%] h-[40vh] bg-gradient-to-r from-transparent via-[#D6EAF8] to-transparent opacity-28 mix-blend-screen blur-[50px]"
        style={{ rotate: 10 }}
        animate={{
          x: [50, -50, 50],
          y: [0, -30, 0],
          scaleY: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Ribbon 4: Soft Rose/Pink - Reduced dominance */}
      <motion.div
        className="absolute bottom-[10%] left-[-10%] w-[120%] h-[35vh] bg-gradient-to-r from-transparent via-[#F5E0E5] to-transparent opacity-20 mix-blend-screen blur-[70px]"
        style={{ rotate: -8 }}
        animate={{
          x: [-30, 30, -30],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      
      {/* Ribbon 5: Mist Blue/White - Very subtle */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[60vh] bg-gradient-to-r from-transparent via-[#E8F0F5] to-transparent opacity-25 mix-blend-screen blur-[80px]"
        style={{ rotate: -5 }}
        animate={{
          x: [-20, 20, -20],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );
};
