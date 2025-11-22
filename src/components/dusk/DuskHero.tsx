import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { DuskHeroVisual } from './DuskHeroVisual';

export const DuskHero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Canvas Background */}
      <DuskHeroVisual />

      {/* Moon Halo */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B3D] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 max-w-5xl mx-auto text-center pt-24">

        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 relative pb-2"
          style={{ y: yText }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          Exploring <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF6B3D] via-[#EFA57B] to-[#8A6BFF] drop-shadow-[0_0_30px_rgba(255,107,61,0.3)]">Ideas</span>.<br />Engineering <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF6B3D] via-[#EFA57B] to-[#8A6BFF] drop-shadow-[0_0_30px_rgba(255,107,61,0.3)]">Tomorrow</span>.
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A creative technologist navigating the space between human-centered design and emergent technologies.
        </motion.p>

        {/* Scroll Indicator - Line + Arrow */}
        <div className="flex flex-col items-center gap-2 mt-12">
          <motion.div
            className="w-px h-24 bg-gradient-to-b from-[#FF6B3D] to-transparent"
            initial={{ height: 0 }}
            animate={{ height: 96 }}
            transition={{ delay: 1, duration: 1.5 }}
          />
          <motion.div
            className="text-gray-600"
            style={{ opacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
