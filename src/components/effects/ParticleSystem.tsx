import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ParticleSystemProps {
  count?: number;
  colors: string[];
  minSize?: number;
  maxSize?: number;
  speed?: 'slow' | 'medium' | 'fast';
  direction?: 'up' | 'float';
  className?: string;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 30,
  colors,
  minSize = 2,
  maxSize = 6,
  speed = 'medium',
  direction = 'up',
  className = '',
}) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate particles only on mount to avoid hydration mismatches or re-renders
    const newParticles = Array.from({ length: count }).map((_, i) => {
        const depth = Math.random(); // 0 to 1
        return {
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: (Math.random() * (maxSize - minSize) + minSize) * (0.5 + depth * 0.5), // larger if closer
            color: colors[Math.floor(Math.random() * colors.length)],
            duration: (Math.random() * 10 + 10) / (speed === 'fast' ? 2 : speed === 'slow' ? 0.5 : 1),
            delay: Math.random() * -20, // Start at random times in the past
            depth: depth, // Used for parallax speed
        };
    });
    setParticles(newParticles);
  }, [count, colors, minSize, maxSize, speed]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            filter: `blur(${p.depth > 0.5 ? 1 : 2}px)`, // Blur further items more? Or closer items less.
            opacity: 0.3 + p.depth * 0.5,
            zIndex: Math.floor(p.depth * 10),
          }}
          animate={
            direction === 'up'
              ? {
                  y: [0, -1000 * (0.5 + p.depth)], // Parallax speed
                  x: [0, (Math.random() - 0.5) * 100],
                  opacity: [0, 0.8, 0],
                }
              : {
                  y: [0, (Math.random() - 0.5) * 200],
                  x: [0, (Math.random() - 0.5) * 200],
                  opacity: [0, 0.6, 0],
                }
          }
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
