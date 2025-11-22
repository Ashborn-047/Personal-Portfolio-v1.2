import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const quotes = [
  "The best code is a form of communication.",
  "Complexity is easy. Simplicity is the real challenge.",
  "Design is not just what it looks like and feels like. Design is how it works.",
  "First, solve the problem. Then, write the code."
];

export const Insights = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 flex justify-center">
      <div className="container max-w-4xl text-center relative">
        <Quote className="w-12 h-12 text-[#FF6B3D] mx-auto mb-8 opacity-50" />
        
        <div className="h-32 relative flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              className="text-2xl md:text-4xl font-serif text-white/90 italic absolute w-full"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
            >
              "{quotes[index]}"
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
