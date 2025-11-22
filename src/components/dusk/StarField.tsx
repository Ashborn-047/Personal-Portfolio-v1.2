import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  velocityX: number;
  velocityY: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    updateCanvasSize();

    // Create stars
    const createStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((window.innerWidth * document.documentElement.scrollHeight) / 23000); // Reduced count by ~35%
      
      for (let i = 0; i < starCount; i++) {
        const isOrange = Math.random() > 0.85; // 15% chance of orange star
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: (Math.random() * 1.5 + 0.5) * 1.25, // Increased size by 25% (0.625 to 2.5px)
          opacity: Math.random() * 0.4 + 0.4, // 0.4 to 0.8
          color: isOrange ? '#FF6B3D' : '#FFFFFF',
          velocityX: 0, // No movement
          velocityY: 0, // No movement
          twinkleSpeed: Math.random() * 0.03 + 0.02, // Faster twinkle
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
      return stars;
    };

    starsRef.current = createStars();

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Sparkle/blink effect - more dramatic fade in and out
        const twinkle = Math.abs(Math.sin(time * star.twinkleSpeed + star.twinkleOffset)); // 0 to 1 range with sharper transitions
        const currentOpacity = twinkle;

        if (currentOpacity < 0.1) return; // Don't draw very dim stars for cleaner look

        ctx.globalAlpha = currentOpacity;
        
        // Draw star as a sparkle/cross shape instead of circle
        const centerX = star.x;
        const centerY = star.y;
        const size = star.size;

        // Vertical line
        ctx.strokeStyle = star.color;
        ctx.lineWidth = size * 0.3;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - size * 1.5);
        ctx.lineTo(centerX, centerY + size * 1.5);
        ctx.stroke();

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(centerX - size * 1.5, centerY);
        ctx.lineTo(centerX + size * 1.5, centerY);
        ctx.stroke();

        // Add center glow point
        ctx.fillStyle = star.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = star.color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      updateCanvasSize();
      starsRef.current = createStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none z-[5]"
      style={{ height: '100%' }}
    />
  );
};
