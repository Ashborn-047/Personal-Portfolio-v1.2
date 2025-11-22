import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Terminal, MessageSquare, Sparkles, ArrowRight, ArrowDown, Figma } from 'lucide-react';
import { GlowCard } from '../ui/GlowCard';

const steps = [
  { name: 'Gemini', role: 'Ideation', icon: Sparkles, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'Claude', role: 'Reasoning', icon: Bot, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'Figma', role: 'Prototyping', icon: Figma, color: 'text-purple-500', bg: 'bg-purple-50' },
  { name: 'Cursor', role: 'Scaffolding', icon: Terminal, color: 'text-slate-700', bg: 'bg-slate-100' },
  { name: 'ChatGPT', role: 'Debugging', icon: MessageSquare, color: 'text-green-500', bg: 'bg-green-50' },
];

export const AICollaboration = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-slate-800 mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The <span className="text-purple-500">AI Collaboration</span> Loop
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10 transform -translate-y-1/2" />

          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="w-full md:w-48"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <GlowCard className="flex flex-col items-center relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-sm h-full">
                  <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center mb-4 shadow-inner`}>
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                  <h3 className="font-bold text-slate-800">{step.name}</h3>
                  <p className="text-slate-500 text-sm uppercase tracking-wide mt-1">{step.role}</p>
                </GlowCard>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="md:hidden text-slate-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                >
                  <ArrowDown size={24} />
                </motion.div>
              )}

              {/* Arrow for Desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block text-slate-300 bg-white/50 rounded-full p-1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.p
          className="text-center text-slate-500 mt-12 italic max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          "A symphony of models, each playing its part in the creation."
        </motion.p>
      </div>
    </section>
  );
};
