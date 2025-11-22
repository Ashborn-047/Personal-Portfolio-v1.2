import React, { useEffect, useRef } from 'react';

export const DawnHeroVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const motes: {x: number, y: number, size: number, speedX: number, speedY: number, alpha: number}[] = [];
    
    // Init motes
    for (let i = 0; i < 80; i++) {
      motes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Gradient Sky: Soft Aurora with Lavender, Blue, Green, Pale Rose balance
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#E3E8F5'); // Soft Lavender-Blue (reduced brightness)
      gradient.addColorStop(0.3, '#E0E8F2'); // Pale Blue Mist
      gradient.addColorStop(0.6, '#E8F2E9'); // Soft Aurora Green
      gradient.addColorStop(0.85, '#F5E8E8'); // Gentle Rose-Mist
      gradient.addColorStop(1, '#F0E8DE'); // Muted Peach
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Enhanced Warm Sunrise Bloom - Pastel Peach + Lavender
      const sunX = width * 0.65;
      const sunY = height * 0.28;
      
      // Outer bloom - Lavender
      const outerBloom = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 300);
      outerBloom.addColorStop(0, 'rgba(232, 196, 240, 0.35)'); // Pastel lavender
      outerBloom.addColorStop(0.5, 'rgba(232, 196, 240, 0.15)');
      outerBloom.addColorStop(1, 'transparent');
      ctx.fillStyle = outerBloom;
      ctx.fillRect(0, 0, width, height);
      
      // Mid bloom - Peach
      const midBloom = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 200);
      midBloom.addColorStop(0, 'rgba(255, 212, 184, 0.45)'); // Pastel peach
      midBloom.addColorStop(0.5, 'rgba(255, 212, 184, 0.25)');
      midBloom.addColorStop(1, 'transparent');
      ctx.fillStyle = midBloom;
      ctx.fillRect(0, 0, width, height);

      // Sun core - Soft white-peach
      const sun = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 120);
      sun.addColorStop(0, 'rgba(255, 250, 245, 0.6)');
      sun.addColorStop(0.3, 'rgba(255, 240, 220, 0.4)');
      sun.addColorStop(1, 'transparent');
      ctx.fillStyle = sun;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 120, 0, Math.PI * 2);
      ctx.fill();

      // Motes
      ctx.fillStyle = '#FFF';
      motes.forEach(mote => {
        mote.x += mote.speedX;
        mote.y += mote.speedY;
        
        if (mote.x < 0) mote.x = width;
        if (mote.x > width) mote.x = 0;
        if (mote.y < 0) mote.y = height;
        if (mote.y > height) mote.y = 0;

        ctx.globalAlpha = mote.alpha;
        ctx.beginPath();
        ctx.arc(mote.x, mote.y, mote.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Mist near ground - softer, more lavender-tinted
      const mist = ctx.createLinearGradient(0, height * 0.7, 0, height);
      mist.addColorStop(0, 'transparent');
      mist.addColorStop(1, 'rgba(240, 240, 250, 0.4)'); // Lavender-tinted mist, reduced opacity
      ctx.fillStyle = mist;
      ctx.fillRect(0, height * 0.7, width, height * 0.3);

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-multiply opacity-80" />;
};
