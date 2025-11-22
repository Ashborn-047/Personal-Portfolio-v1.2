import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DawnHeroProps {
  children?: React.ReactNode;
}

export const DawnHero = ({ children }: DawnHeroProps) => {
  return (
    <div className="relative w-full h-[70vh] min-h-[600px] overflow-hidden">
      {/* Base Sunrise Sky Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1694387509935-9da12253dba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBzdW5yaXNlJTIwbW9ybmluZyUyMHNreXxlbnwxfHx8fDE3NjM3Mzc2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Dawn Sky"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pastel Sunrise Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFD4B8]/40 via-[#E8C4F0]/30 to-[#E8ECF5]/60"></div>

      {/* Warm Bloom - Radial Sunrise Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#FFB88C]/30 via-[#FFD4B8]/20 to-transparent blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#E8C4F0]/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Soft Mist Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F8]/70 via-transparent to-transparent"></div>

      {/* Faint Aurora Ribbons */}
      <motion.div
        className="absolute top-[15%] left-[-20%] w-[140%] h-[30vh] bg-gradient-to-r from-transparent via-[#E8C4F0]/20 to-transparent blur-[80px]"
        style={{ rotate: -8 }}
        animate={{
          x: [-50, 50, -50],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-[35%] left-[-20%] w-[140%] h-[25vh] bg-gradient-to-r from-transparent via-[#D4EDE4]/20 to-transparent blur-[90px]"
        style={{ rotate: 5 }}
        animate={{
          x: [50, -50, 50],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />

      {/* Dust Motes / Light Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={`mote-${i}`}
            className="absolute rounded-full bg-white/60"
            style={{
              width: Math.random() * 2.5 + 0.5,
              height: Math.random() * 2.5 + 0.5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Forest Silhouette - SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 280"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tree Layer 1 - Foreground */}
          <path
            d="M 0,220 L 0,280 L 1200,280 L 1200,220 C 1180,210 1160,190 1140,170 C 1120,190 1100,205 1080,210 C 1060,180 1040,160 1020,145 C 1000,165 980,180 960,190 C 940,165 920,145 900,130 C 880,150 860,165 840,175 C 820,150 800,130 780,115 C 760,135 740,150 720,160 C 700,135 680,115 660,100 C 640,120 620,135 600,145 C 580,120 560,100 540,85 C 520,105 500,120 480,130 C 460,105 440,85 420,70 C 400,90 380,105 360,115 C 340,90 320,70 300,55 C 280,75 260,90 240,100 C 220,75 200,55 180,40 C 160,60 140,75 120,85 C 100,60 80,40 60,25 C 40,45 20,60 0,70 Z"
            fill="#C8B8D8"
            opacity="0.3"
          />
          
          {/* Tree Layer 2 - Mid Ground */}
          <path
            d="M 0,240 C 40,235 80,220 100,200 C 120,220 140,230 160,235 C 180,215 200,200 220,190 C 240,210 260,225 280,230 C 300,210 320,195 340,185 C 360,205 380,220 400,225 C 420,205 440,190 460,180 C 480,200 500,215 520,220 C 540,200 560,185 580,175 C 600,195 620,210 640,215 C 660,195 680,180 700,170 C 720,190 740,205 760,210 C 780,190 800,175 820,165 C 840,185 860,200 880,205 C 900,185 920,170 940,160 C 960,180 980,195 1000,200 C 1020,180 1040,165 1060,155 C 1080,175 1100,190 1120,195 C 1140,175 1160,160 1180,150 C 1190,165 1195,175 1200,185 L 1200,280 L 0,280 Z"
            fill="#D4C4E4"
            opacity="0.25"
          />

          {/* Tree Layer 3 - Background */}
          <path
            d="M 0,255 C 60,250 120,240 150,230 C 180,240 210,248 240,250 C 270,240 300,230 330,220 C 360,230 390,240 420,245 C 450,235 480,225 510,215 C 540,225 570,235 600,240 C 630,230 660,220 690,210 C 720,220 750,230 780,235 C 810,225 840,215 870,205 C 900,215 930,225 960,230 C 990,220 1020,210 1050,200 C 1080,210 1110,220 1140,225 C 1160,218 1180,212 1200,208 L 1200,280 L 0,280 Z"
            fill="#E0D8E8"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Atmospheric Softness */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px] pointer-events-none"></div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        {children}
      </div>
    </div>
  );
};
