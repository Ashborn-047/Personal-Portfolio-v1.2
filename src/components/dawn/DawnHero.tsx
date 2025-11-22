import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { DawnHeroVisual } from './DawnHeroVisual';

export const DawnHero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Canvas Background */}
      <DawnHeroVisual />

      {/* Mist Haze Overlay - softer, more lavender-tinted */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#E8E8F0]/50 via-[#E8E8F0]/15 to-transparent pointer-events-none z-0"></div>

      <div className="container max-w-5xl mx-auto text-center z-10">
        
        <motion.h1 
          className="text-7xl md:text-9xl font-bold tracking-tighter text-slate-800 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          style={{ 
            y: yText,
            textShadow: "0 0 40px rgba(240, 240, 250, 0.6), 0 0 80px rgba(220, 220, 240, 0.3)"
          }}
        >
          Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B7BC4] via-[#88B4A8] to-[#A8C4E8]">Build</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-3xl text-slate-700 font-light leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A look under the hood — the tools, process, and collaboration that brought this portfolio to life.
        </motion.p>

      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 mix-blend-multiply"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};
