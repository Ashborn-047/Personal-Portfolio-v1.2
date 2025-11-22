import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { GlowCard } from '../ui/GlowCard';

const insights = [
  "Clarity comes from iteration, not just thought.",
  "The best tools disappear when you use them well.",
  "Code is poetry written for machines to perform.",
  "Simplicity is the ultimate sophistication in engineering.",
  "Build for the user, optimize for the machine.",
  "Every bug is just an undocumented feature waiting to be fixed.",
  "Design systems are the language of product teams."
];

export const InsightGenerator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % insights.length);
    }, 3500); // Auto-cycle every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="container max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <GlowCard className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-12 text-center shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]">
            {/* Aurora Blob inside card */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-purple-100/30 to-transparent animate-spin-slow pointer-events-none" style={{ animationDuration: '10s' }}></div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-sm text-amber-500">
                <Lightbulb size={24} />
              </div>

              <div className="h-32 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    className="text-2xl md:text-3xl font-serif text-slate-800 leading-tight"
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                    transition={{ duration: 0.6 }}
                  >
                    "{insights[index]}"
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
};
