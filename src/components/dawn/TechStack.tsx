import { motion } from 'framer-motion';
import { Code, Cpu, Layers, Zap } from 'lucide-react';

const stack = [
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'Motion', icon: Zap },
  { name: 'Vite', icon: Cpu },
];

export const TechStack = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div 
          className="glass-card p-12 rounded-3xl bg-white/40 backdrop-blur-lg border border-white/60 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">The <span className="text-purple-600">Architecture</span></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stack.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-purple-600 hover:shadow-md transition-all duration-300">
                  <item.icon size={32} />
                </div>
                <span className="font-medium text-slate-600">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
