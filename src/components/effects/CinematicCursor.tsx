import React, { useEffect, useRef } from 'react';

interface CinematicCursorProps {
  theme: 'dusk' | 'dawn';
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export const CinematicCursor: React.FC<CinematicCursorProps> = ({ theme }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const particleIdRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Calculate velocity
      const dx = mouseX - lastPositionRef.current.x;
      const dy = mouseY - lastPositionRef.current.y;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      // Spawn particles only if cursor is moving (velocity threshold)
      if (velocity > 1) {
        // Spawn 4-8 particles per frame for denser trails (increased from 3-6)
        const particleCount = theme === 'dusk' 
          ? Math.min(8, Math.ceil(velocity / 4) + 3) // Dusk: 4-8 particles
          : Math.min(8, Math.ceil(velocity / 4) + 3); // Dawn: 4-8 particles (same density)
        
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push({
            id: particleIdRef.current++,
            x: mouseX,
            y: mouseY,
            vx: (Math.random() - 0.5) * 3, // Increased scatter spread
            vy: (Math.random() - 0.5) * 3 + 0.3, // Increased scatter + slight downward bias
            life: 1,
            maxLife: 50 + Math.random() * 40, // 50-90 frames
            size: 2 + Math.random() * 3, // 2-5px (slightly larger for better visibility)
          });
        }
      }

      lastPositionRef.current = { x: mouseX, y: mouseY };
    };

    // Mouse leave - hide cursor
    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    // Mouse enter - show cursor
    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  // Particle animation loop
  useEffect(() => {
    const animate = () => {
      // Update particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1 / particle.maxLife;
        return particle.life > 0;
      });

      // Render particles
      const particleElements = document.querySelectorAll('.cursor-particle');
      particleElements.forEach(el => el.remove());

      particlesRef.current.forEach(particle => {
        const el = document.createElement('div');
        el.className = 'cursor-particle';
        
        // Theme-specific particle colors
        const particleGradient = theme === 'dusk'
          ? `radial-gradient(circle, rgba(255, 255, 255, ${particle.life * 0.9}) 0%, rgba(255, 180, 120, ${particle.life * 0.7}) 50%, rgba(255, 140, 80, ${particle.life * 0.4}) 100%)`
          : `radial-gradient(circle, rgba(255, 255, 255, ${particle.life * 0.9}) 0%, rgba(200, 180, 255, ${particle.life * 0.7}) 40%, rgba(100, 255, 200, ${particle.life * 0.5}) 100%)`;
        
        const particleShadow = theme === 'dusk'
          ? `0 0 ${4 * particle.life}px rgba(255, 140, 70, ${particle.life * 0.6})`
          : `0 0 ${5 * particle.life}px rgba(180, 140, 255, ${particle.life * 0.7}), 0 0 ${8 * particle.life}px rgba(100, 255, 200, ${particle.life * 0.4})`;
        
        el.style.cssText = `
          position: fixed;
          left: ${particle.x}px;
          top: ${particle.y}px;
          width: ${particle.size}px;
          height: ${particle.size}px;
          border-radius: 50%;
          background: ${particleGradient};
          box-shadow: ${particleShadow};
          pointer-events: none;
          z-index: 99998;
          transform: translate(-50%, -50%);
        `;
        document.body.appendChild(el);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // Clean up particles
      const particleElements = document.querySelectorAll('.cursor-particle');
      particleElements.forEach(el => el.remove());
    };
  }, [theme]);

  return (
    <>
      {/* Custom cursor - theme-specific */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          background: theme === 'dusk' 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 220, 180, 0.8) 20%, rgba(255, 160, 100, 0.5) 50%, rgba(255, 120, 60, 0.2) 80%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(200, 180, 255, 0.8) 20%, rgba(150, 100, 255, 0.5) 40%, rgba(100, 255, 200, 0.3) 70%, transparent 100%)',
          boxShadow: theme === 'dusk'
            ? `
                0 0 10px rgba(255, 140, 70, 0.6),
                0 0 20px rgba(255, 120, 60, 0.4),
                0 0 30px rgba(255, 100, 50, 0.2)
              `
            : `
                0 0 10px rgba(180, 140, 255, 0.6),
                0 0 20px rgba(150, 120, 255, 0.4),
                0 0 30px rgba(100, 200, 255, 0.3)
              `,
        }}
      />

      {/* Global cursor override */}
      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }
        html, body {
          cursor: none !important;
        }
        a, button, input, textarea, select, [role="button"], [onclick], [data-state] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};
