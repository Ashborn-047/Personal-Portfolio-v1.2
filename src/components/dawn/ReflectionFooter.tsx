import React from 'react';
import { motion } from 'framer-motion';

export const ReflectionFooter = () => {
  return (
    <footer className="py-32 px-6 text-center relative overflow-hidden">
      <div className="container max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
           <div className="w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-8"></div>
        </motion.div>
        
        <motion.p 
          className="text-2xl md:text-3xl font-serif text-slate-700 italic leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          "Every idea begins in darkness, finds light in reflection."
        </motion.p>
        
        <motion.p 
          className="text-sm text-gray-500/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Crafted with intention. © 2025.
        </motion.p>
      </div>
    </footer>
  );
};
