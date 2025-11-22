import { useEffect, useRef } from 'react';

export const DuskHeroVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars: { x: number, y: number, size: number, alpha: number, speed: number }[] = [];
    const embers: { x: number, y: number, size: number, speedY: number, speedX: number, alpha: number, decay: number }[] = [];

    // Init stars
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.02
      });
    }

    // Generate static tree positions once
    const treeLayer1: { x: number, w: number, amp: number, offset: number }[] = [];
    const treeLayer2: { x: number, w: number, amp: number }[] = [];
    const treeLayer3: { x: number, w: number, amp: number }[] = [];

    // Layer 1: Tallest trees (foreground)
    let x = 0;
    while (x < width) {
      const amp = 60 + Math.random() * 80;
      const w = 40 + Math.random() * 60;
      const offset = Math.random() * 40;
      treeLayer1.push({ x, w, amp, offset });
      x += w;
    }

    // Layer 2: Medium trees (mid-ground)
    x = 20;
    while (x < width) {
      const amp = 50 + Math.random() * 60;
      const w = 50 + Math.random() * 70;
      treeLayer2.push({ x, w, amp });
      x += w;
    }

    // Layer 3: Distant trees (background)
    x = 10;
    while (x < width) {
      const amp = 30 + Math.random() * 40;
      const w = 60 + Math.random() * 80;
      treeLayer3.push({ x, w, amp });
      x += w;
    }

    // Unused tree drawing function - kept for potential future use
    // const drawTrees = () => {
    //    // Layer 1: Tallest trees (foreground)
    //    ctx.fillStyle = '#030305';
    //    ctx.beginPath();
    //    ctx.moveTo(0, height);
    //    treeLayer1.forEach(tree => {
    //      const treeHeight = height - tree.amp - tree.offset;
    //      ctx.lineTo(tree.x + tree.w * 0.2, treeHeight);
    //      ctx.lineTo(tree.x + tree.w * 0.3, treeHeight - 20);
    //      ctx.lineTo(tree.x + tree.w * 0.7, treeHeight - 20);
    //      ctx.lineTo(tree.x + tree.w * 0.8, treeHeight);
    //      ctx.lineTo(tree.x + tree.w, height);
    //    });
    //    ctx.lineTo(width, height);
    //    ctx.fill();
    //    
    //    // Layer 2: Medium trees (mid-ground)
    //    ctx.fillStyle = '#060609';
    //    ctx.beginPath();
    //    ctx.moveTo(0, height);
    //    treeLayer2.forEach(tree => {
    //      const treeHeight = height - tree.amp;
    //      ctx.lineTo(tree.x + tree.w * 0.25, treeHeight);
    //      ctx.lineTo(tree.x + tree.w * 0.4, treeHeight - 15);
    //      ctx.lineTo(tree.x + tree.w * 0.6, treeHeight - 15);
    //      ctx.lineTo(tree.x + tree.w * 0.75, treeHeight);
    //      ctx.lineTo(tree.x + tree.w, height);
    //    });
    //    ctx.lineTo(width, height);
    //    ctx.fill();
    //    
    //    // Layer 3: Distant trees (background)
    //    ctx.fillStyle = '#0A0A12';
    //    ctx.beginPath();
    //    ctx.moveTo(0, height);
    //    treeLayer3.forEach(tree => {
    //      ctx.bezierCurveTo(
    //        tree.x + tree.w/3, height - tree.amp,
    //        tree.x + 2*tree.w/3, height - tree.amp,
    //        tree.x + tree.w, height
    //      );
    //    });
    //    ctx.lineTo(width, height);
    //    ctx.fill();
    // };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Clean Gradient Sky: Deep Indigo -> Violet (simplified, more transparent)
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(10, 10, 18, 0.3)'); // Midnight - more transparent
      gradient.addColorStop(0.6, 'rgba(19, 14, 27, 0.4)'); // Deep Purple
      gradient.addColorStop(1, 'rgba(26, 16, 37, 0.5)'); // Bottom
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle cosmic hint - much lighter
      const bloom1 = ctx.createRadialGradient(width * 0.6, height * 0.35, 0, width * 0.6, height * 0.35, height * 0.5);
      bloom1.addColorStop(0, 'rgba(176, 106, 255, 0.03)'); // Very subtle
      bloom1.addColorStop(0.4, 'rgba(138, 107, 255, 0.01)');
      bloom1.addColorStop(1, 'transparent');
      ctx.fillStyle = bloom1;
      ctx.fillRect(0, 0, width, height);

      // Stars
      ctx.fillStyle = '#FFF';
      stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.2) star.speed *= -1;
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Embers
      if (Math.random() < 0.1) {
        embers.push({
          x: Math.random() * width,
          y: height + 10,
          size: Math.random() * 2 + 1,
          speedY: Math.random() * 1 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          alpha: 1,
          decay: Math.random() * 0.005 + 0.002
        });
      }

      embers.forEach((ember, i) => {
        ember.y -= ember.speedY;
        ember.x += ember.speedX;
        ember.alpha -= ember.decay;

        if (ember.alpha <= 0) {
          embers.splice(i, 1);
        } else {
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(ember.x, ember.y, 0, ember.x, ember.y, ember.size * 2);
          gradient.addColorStop(0, `rgba(255, 107, 61, ${ember.alpha})`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.arc(ember.x, ember.y, ember.size * 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 216, 188, ${ember.alpha})`;
          ctx.beginPath();
          ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Lighter vignette
      const vignette = ctx.createRadialGradient(width / 2, height / 2, height * 0.5, width / 2, height / 2, height);
      vignette.addColorStop(0, 'transparent');
      vignette.addColorStop(1, 'rgba(10, 10, 18, 0.4)'); // Less intense
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};
