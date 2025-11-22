import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

interface DesignCardProps {
  title: string;
  description: string;
  theme: 'dusk' | 'dawn';
  colors: {
    primary: { hex: string }[];
    accent: { hex: string }[];
  };
  initialX: number;
}

function DesignCard({ title, description, theme, colors, initialX }: DesignCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isDusk = theme === 'dusk';

  // Define gradients based on theme
  const glowGradient = isDusk
    ? `radial-gradient(550px circle at ${mouseX}px ${mouseY}px, rgba(255, 107, 61, 0.15), transparent 80%)`
    : `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(34, 197, 94, 0.4), rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), transparent 80%)`;

  return (
    <motion.div
      className={`p-8 rounded-3xl relative overflow-hidden border transition-colors duration-300 group
        ${isDusk
          ? 'bg-[#0A0A12] text-white border-white/10 hover:border-[#FF6B3D]/30'
          : 'bg-white/10 backdrop-blur-lg text-slate-800 border-white/20 hover:border-purple-300/50'
        }`}
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Static Background Effects */}
      {isDusk ? (
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B3D] opacity-20 blur-[80px]"></div>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-300/30 via-pink-200/20 to-transparent blur-[60px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 opacity-20 blur-[80px]"></div>
        </>
      )}

      {/* Interactive Glow Effect */}
      <motion.div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useMotionTemplate`${glowGradient}`
        }}
      />

      <h3 className="text-2xl font-bold mb-4 relative z-10">{title}</h3>
      <p className={`mb-8 text-sm leading-relaxed relative z-10 ${isDusk ? 'text-gray-400' : 'text-slate-600'}`}>
        {description}
      </p>

      {/* Color Palette Grid */}
      <div className="space-y-4 relative z-10">
        {/* Primary Colors */}
        <div>
          <p className={`text-xs mb-2 uppercase tracking-wide font-medium ${isDusk ? 'text-gray-400' : 'text-slate-600'}`}>Primary</p>
          <div className="flex gap-3">
            {colors.primary.map((color) => (
              <div key={color.hex} className="flex flex-col items-center gap-1">
                <div
                  className={`w-14 h-14 rounded-lg shadow-inner ${isDusk ? 'border border-white/20' : 'border border-slate-200'}`}
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className={`text-xs font-mono ${isDusk ? 'text-gray-300' : 'text-slate-700'}`}>{color.hex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accent Colors */}
        <div>
          <p className={`text-xs mb-2 uppercase tracking-wide font-medium ${isDusk ? 'text-gray-400' : 'text-slate-600'}`}>Accent</p>
          <div className="flex gap-3">
            {colors.accent.map((color) => (
              <div key={color.hex} className="flex flex-col items-center gap-1">
                <div
                  className="w-14 h-14 rounded-lg"
                  style={{
                    backgroundColor: color.hex,
                    boxShadow: isDusk ? `0 0 12px ${color.hex}` : 'none',
                    border: !isDusk ? '1px solid #e2e8f0' : 'none'
                  }}
                ></div>
                <span className={`text-xs font-mono ${isDusk ? 'text-gray-300' : 'text-slate-700'}`}>{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const DesignSystem = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <DesignCard
            title="Ash & Ember"
            description="Built to convey intensity and passion. Uses deep midnight gradients and warm ember highlights to simulate a forge."
            theme="dusk"
            initialX={-50}
            colors={{
              primary: [{ hex: '#0A0A12' }, { hex: '#130E1B' }, { hex: '#1A1625' }],
              accent: [{ hex: '#FF6B3D' }, { hex: '#EFA57B' }, { hex: '#8A6BFF' }]
            }}
          />

          <DesignCard
            title="Aurora Veil"
            description="Designed for clarity and reflection. Utilizes glassmorphism, light diffusion, and pastel gradients to evoke morning mist."
            theme="dawn"
            initialX={50}
            colors={{
              primary: [{ hex: '#F5F3FF' }, { hex: '#E8E8F0' }, { hex: '#FFE8DB' }],
              accent: [{ hex: '#8B7BC4' }, { hex: '#88B4A8' }, { hex: '#A8C4E8' }]
            }}
          />
        </div>
      </div>
    </section>
  );
};
