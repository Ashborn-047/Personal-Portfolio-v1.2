import { motion } from 'framer-motion';
import { Brain, Cpu, Heart, Lightbulb } from 'lucide-react';

const principles = [
  {
    title: 'Curiosity',
    icon: Lightbulb,
    description: 'Asking "why" and "what if" to uncover deeper truths.',
  },
  {
    title: 'Systems Thinking',
    icon: Brain,
    description: 'Seeing the interconnected web behind every interface.',
  },
  {
    title: 'Human-Centered',
    icon: Heart,
    description: 'Technology must serve human needs, not the other way around.',
  },
  {
    title: 'Innovation',
    icon: Cpu,
    description: 'Pushing boundaries to find novel solutions to old problems.',
  },
];

export const Principles = () => {
  return (
    <section className="py-24 px-6 bg-black/20">
      <div className="container max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Guiding <span className="text-[#FF6B3D]">Principles</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-2xl bg-[#1A1025]/50 backdrop-blur-sm border border-white/5 hover:border-[#FF6B3D]/40 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B3D]/0 to-[#FF6B3D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-[#FF6B3D]/20 transition-colors duration-500">
                <item.icon className="w-8 h-8 text-gray-300 group-hover:text-[#FF6B3D] transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
