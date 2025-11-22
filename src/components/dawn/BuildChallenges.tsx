import React from 'react';
import { motion } from 'framer-motion';

const challenges = [
  { title: 'Theme Switching', desc: 'Managing complex state transitions between two distinct DOM structures without layout shifts.' },
  { title: 'Glass Realism', desc: 'Fine-tuning backdrop-blur and border opacities to work across diverse backgrounds.' },
  { title: 'Performance', desc: 'Optimizing particle systems and large blurs to maintain 60fps on mobile devices.' },
  { title: 'Narrative Flow', desc: 'Ensuring the storytelling remains coherent regardless of which mode the user enters first.' },
];

export const BuildChallenges = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-slate-800 mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Engineering <span className="text-blue-500">Challenges</span>
        </motion.h2>

        <div className="space-y-6">
          {challenges.map((item, i) => (
            <motion.div 
              key={i}
              className="flex gap-6 items-start p-6 rounded-2xl bg-white/30 border border-white/50 hover:bg-white/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl font-bold text-purple-300">0{i+1}</span>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
