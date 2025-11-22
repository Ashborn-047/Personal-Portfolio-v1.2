import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DuskHeroProps {
  children?: React.ReactNode;
}

export const DuskHero = ({ children }: DuskHeroProps) => {
  return (
    <div className="relative w-full h-[70vh] min-h-[600px] overflow-hidden">
      {/* Base Nebula Sky Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1469928705438-f962e4089c2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBuZWJ1bGElMjBuaWdodCUyMHNreXxlbnwxfHx8fDE3NjM3Mzc2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nebula Sky"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Deep Indigo/Violet Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A2E]/60 via-[#2D1B4E]/50 to-[#0A0A12]/80"></div>

      {/* Cosmic Bloom - Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8A6BFF] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#B06AFF] opacity-15 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Atmospheric Haze Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent opacity-60"></div>

      {/* Subtle Starfield */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              opacity: [Math.random() * 0.3 + 0.2, Math.random() * 0.7 + 0.3, Math.random() * 0.3 + 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Ember Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`ember-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 10}%`,
              background: `radial-gradient(circle, ${
                ['#FF6B3D', '#EFA57B', '#FFD8BC'][Math.floor(Math.random() * 3)]
              }, transparent)`,
            }}
            animate={{
              y: [-20, -window.innerHeight * 0.7 - Math.random() * 200],
              opacity: [0, 0.8, 0.4, 0],
              scale: [0.5, 1, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Tree Silhouettes - SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tree Group 1 - Left */}
          <path
            d="M 0,250 L 0,300 L 1200,300 L 1200,250 C 1150,240 1100,220 1080,180 C 1070,200 1050,210 1030,220 C 1020,180 1000,160 980,150 C 960,170 940,190 920,200 C 900,160 870,140 850,130 C 830,150 810,170 790,180 C 770,140 740,120 720,110 C 700,130 680,150 660,160 C 640,120 610,100 590,90 C 570,110 550,130 530,140 C 510,100 480,80 460,70 C 440,90 420,110 400,120 C 380,80 350,60 330,50 C 310,70 290,90 270,100 C 250,60 220,40 200,30 C 180,50 160,70 140,80 C 120,40 90,20 70,10 C 50,30 30,50 0,60 Z"
            fill="#0A0A12"
            opacity="0.9"
          />
          
          {/* Tree Group 2 - Layered */}
          <path
            d="M 0,270 C 50,265 100,250 120,230 C 140,250 160,260 180,265 C 200,245 220,230 240,220 C 260,240 280,255 300,260 C 320,240 340,225 360,215 C 380,235 400,250 420,255 C 440,235 460,220 480,210 C 500,230 520,245 540,250 C 560,230 580,215 600,205 C 620,225 640,240 660,245 C 680,225 700,210 720,200 C 740,220 760,235 780,240 C 800,220 820,205 840,195 C 860,215 880,230 900,235 C 920,215 940,200 960,190 C 980,210 1000,225 1020,230 C 1040,210 1060,195 1080,185 C 1100,205 1120,220 1140,225 C 1160,205 1180,190 1200,180 L 1200,300 L 0,300 Z"
            fill="#0F0B15"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Grain Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.org/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        {children}
      </div>
    </div>
  );
};
