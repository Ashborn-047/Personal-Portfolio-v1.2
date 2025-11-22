import React, { useEffect, useRef } from 'react';

export const AuroraVeil: React.FC = () => {
  const veilRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = maxScroll > 0 ? scrollTop / maxScroll : 0;
    };

    // Smooth animation loop for gradient position
    const animateGradient = () => {
      if (veilRef.current) {
        // Moves gradient center from 30% → 70% as user scrolls
        const pos = 30 + scrollProgress.current * 40;
        
        // Create multi-layered radial gradient that shifts vertically
        // Using dawn-toned colors: lavender, peach, soft mint, pale sky blue
        veilRef.current.style.background = `
          radial-gradient(
            circle at 50% ${pos}%,
            rgba(255, 217, 202, 0.7) 0%,
            rgba(231, 217, 255, 0.6) 30%,
            rgba(216, 255, 233, 0.55) 60%,
            rgba(207, 234, 255, 0.5) 100%
          )
        `;
      }
      rafRef.current = requestAnimationFrame(animateGradient);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize
    animateGradient(); // Start animation loop

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Base Gradient - Fixed Vertical Gradient with Dawn-toned colors */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            180deg,
            #E7D9FF 0%,
            #FFE5D9 20%,
            #FFD9CA 35%,
            #E7F0FF 55%,
            #D8FFE9 75%,
            #CFEAFF 100%
          )`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Scroll-Reactive Gradient Layer */}
      <div
        ref={veilRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          transition: 'background 0.4s ease',
        }}
      />

      {/* Mist Layer - Subtle Aurora Wave Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(231, 217, 255, 0.5) 0%,
              rgba(255, 217, 202, 0.4) 25%,
              rgba(216, 255, 233, 0.45) 50%,
              rgba(207, 234, 255, 0.4) 75%,
              rgba(231, 217, 255, 0.35) 100%
            )
          `,
          backgroundSize: '200% 200%',
          animation: 'auroraWave 25s ease-in-out infinite',
        }}
      />

      {/* Grain Texture - Low-contrast noise at 4% opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.org/noise.svg')`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Hero Area Brightness Enhancement - Slightly brighter */}
      <div
        className="absolute top-0 left-0 right-0 h-[60vh] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 0%, transparent 100%)',
        }}
      />

      {/* Bottom Softening - Progressive softening toward bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[50vh] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(207, 234, 255, 0.25) 0%, rgba(216, 255, 233, 0.15) 50%, transparent 100%)',
        }}
      />

      {/* Aurora Wave Animation Keyframes */}
      <style>{`
        @keyframes auroraWave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
};
