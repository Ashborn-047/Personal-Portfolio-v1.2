import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  baseOpacity: number;
  fadeSpeed: number;
  fadeDirection: number;
}

interface CanvasParticlesProps {
  theme: 'dusk' | 'dawn';
  count?: number;
}

export const CanvasParticles: React.FC<CanvasParticlesProps> = ({ 
  theme, 
  count = 120 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: theme === 'dusk' 
        ? Math.random() * 2 + 1     // 1-3px for stars
        : Math.random() * 2 + 2,    // 2-4px for dust motes
      speedY: Math.random() * 0.15 + 0.05,  // Very slow upward drift
      speedX: (Math.random() - 0.5) * 0.08,  // Slight horizontal drift
      opacity: Math.random() * 0.6 + 0.3,
      baseOpacity: Math.random() * 0.6 + 0.3,
      fadeSpeed: Math.random() * 0.003 + 0.001,  // Very gentle fade
      fadeDirection: Math.random() > 0.5 ? 1 : -1,
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        
        // Set color and glow based on theme
        if (theme === 'dusk') {
          // Warm ember colors for Dusk
          const colors = [
            `rgba(255, 196, 140, ${p.opacity})`,  // Warm amber
            `rgba(255, 160, 100, ${p.opacity})`,  // Orange
            `rgba(255, 220, 180, ${p.opacity})`,  // Light warm
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          ctx.fillStyle = color;
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(255, 196, 140, ${p.opacity * 0.8})`;
        } else {
          // Soft pastel colors for Dawn
          const colors = [
            `rgba(200, 180, 255, ${p.opacity})`,  // Soft purple
            `rgba(180, 220, 255, ${p.opacity})`,  // Light blue
            `rgba(255, 200, 220, ${p.opacity})`,  // Soft pink
            `rgba(220, 200, 255, ${p.opacity})`,  // Lavender
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          ctx.fillStyle = color;
          ctx.shadowBlur = 12;
          ctx.shadowColor = `rgba(200, 180, 255, ${p.opacity * 0.6})`;
        }

        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position (slow drift)
        p.y -= p.speedY;
        p.x += p.speedX;

        // Gentle fade in/out
        p.opacity += p.fadeSpeed * p.fadeDirection;
        if (p.opacity >= p.baseOpacity + 0.2) {
          p.fadeDirection = -1;
        } else if (p.opacity <= p.baseOpacity - 0.2) {
          p.fadeDirection = 1;
        }

        // Wrap around edges
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme, count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: theme === 'dusk' ? 0.7 : 0.5 }}
    />
  );
};
