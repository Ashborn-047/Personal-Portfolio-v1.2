import { motion } from 'framer-motion';
import { Activity, Zap, Eye, Smartphone } from 'lucide-react';

const metrics = [
  { label: 'Performance', value: '100', icon: Zap },
  { label: 'Accessibility', value: '100', icon: Eye },
  { label: 'Best Practices', value: '100', icon: Activity },
  { label: 'SEO', value: '100', icon: Smartphone },
];

export const Performance = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div 
          className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
           <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Lighthouse <span className="text-green-500">Score</span></h2>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {metrics.map((m, i) => (
               <div key={i} className="flex flex-col items-center text-center">
                 <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-200" />
                      <motion.circle 
                        cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" 
                        className="text-green-500"
                        strokeDasharray={226}
                        initial={{ strokeDashoffset: 226 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </svg>
                    <span className="absolute text-xl font-bold text-slate-700">{m.value}</span>
                 </div>
                 <span className="text-sm font-medium text-slate-600">{m.label}</span>
               </div>
             ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
};
