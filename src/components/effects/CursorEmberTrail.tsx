import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
}

export const CursorEmberTrail = () => {
  const [particles, setParticles] = useState<TrailParticle[]>([]);
  const countRef = useRef(0);
  const requestRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = (time: number) => {
      // Increased density: spawn every 30ms (was 50ms)
      if (time - lastSpawnRef.current > 30) {
        lastSpawnRef.current = time;
        setParticles(prev => {
          const newParticle = {
            id: countRef.current++,
            x: mouseRef.current.x,
            y: mouseRef.current.y
          };
          // Keep more particles for denser trail (40 instead of 20)
          return [...prev.slice(-39), newParticle];
        });
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0.7, scale: 0.8, x: particle.x, y: particle.y }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              y: particle.y - 60 + Math.random() * 30,
              x: particle.x + (Math.random() * 30 - 15)
            }}
            transition={{ 
              duration: 1.8, // Longer fade-out (was 1s)
              ease: "easeOut" 
            }}
            className="absolute w-1 h-1 rounded-full bg-[#FF6B3D] shadow-[0_0_8px_#FF6B3D] blur-[0.5px]"
            style={{
              // Very small ember dots with slight variation
              width: `${0.5 + Math.random() * 0.5}px`,
              height: `${0.5 + Math.random() * 0.5}px`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
