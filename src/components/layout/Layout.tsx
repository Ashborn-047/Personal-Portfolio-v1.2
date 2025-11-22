import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { TopThemeToggle } from './TopThemeToggle';
import { CanvasParticles } from '../effects/CanvasParticles';
import { CinematicCursor } from '../effects/CinematicCursor';
import { AuroraVeil } from '../effects/AuroraVeil';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden transition-colors duration-1000 ease-in-out selection:bg-[#FF6B3D]/30 selection:text-[#FFD8BC]"
      style={{ cursor: 'none' }}
    >
      
      {/* Cinematic Cursor - Single unified cursor system */}
      <CinematicCursor theme={theme} />
      
      {/* Background Layers */}
      <AnimatePresence mode="wait">
        {theme === 'dusk' ? (
          <motion.div
            key="dusk-bg"
            className="fixed inset-0 z-0"
            style={{
              background: 'linear-gradient(to bottom, #0A0A12, #130E1B, #1A1025)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {/* Grain Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.org/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none"></div>
            
            {/* Midnight Orchid Glow - Subtle Purple in Shadows */}
            <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-[#8A6BFF] opacity-[0.06] blur-[120px] rounded-full pointer-events-none"></div>
             <div className="absolute top-20 left-20 w-[30vw] h-[30vh] bg-[#8A6BFF] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Warm Ember Glow at Base */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#FF6B3D]/10 to-transparent pointer-events-none"></div>
            
            {/* Enhanced Ember Particles - Slow, Small, Atmospheric */}
            <CanvasParticles theme="dusk" count={120} />
          </motion.div>
        ) : (
          <motion.div
            key="dawn-bg"
            className="fixed inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
             {/* Aurora Veil - Scroll-Reactive Gradient Background */}
             <AuroraVeil />
             
             {/* Canvas Particle System - Dawn dust motes */}
             <CanvasParticles theme="dawn" count={80} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      <TopThemeToggle />
    </div>
  );
};
