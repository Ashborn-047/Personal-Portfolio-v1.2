import { motion } from 'framer-motion';

export const DesignSystem = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Dusk Card */}
          <motion.div 
            className="p-8 rounded-3xl bg-[#0A0A12] text-white relative overflow-hidden border border-white/10"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B3D] opacity-20 blur-[80px]"></div>
            <h3 className="text-2xl font-bold mb-4">Ash & Ember</h3>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Built to convey intensity and passion. Uses deep midnight gradients and warm ember highlights to simulate a forge.
            </p>
            
            {/* Color Palette Grid */}
            <div className="space-y-4">
              {/* Primary Colors */}
              <div>
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Primary</p>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#0A0A12] border border-white/20 shadow-inner"></div>
                    <span className="text-xs text-gray-300 font-mono">#0A0A12</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#130E1B] border border-white/20 shadow-inner"></div>
                    <span className="text-xs text-gray-300 font-mono">#130E1B</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#1A1625] border border-white/20 shadow-inner"></div>
                    <span className="text-xs text-gray-300 font-mono">#1A1625</span>
                  </div>
                </div>
              </div>
              
              {/* Accent Colors */}
              <div>
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Accent</p>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#FF6B3D] shadow-[0_0_15px_#FF6B3D]"></div>
                    <span className="text-xs text-gray-300 font-mono">#FF6B3D</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#EFA57B] shadow-[0_0_12px_#EFA57B]"></div>
                    <span className="text-xs text-gray-300 font-mono">#EFA57B</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#8A6BFF] shadow-[0_0_12px_#8A6BFF]"></div>
                    <span className="text-xs text-gray-300 font-mono">#8A6BFF</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dawn Card */}
          <motion.div 
            className="p-8 rounded-3xl bg-white/60 backdrop-blur-lg border border-white text-slate-800 relative overflow-hidden"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-300/30 via-pink-200/20 to-transparent blur-[60px]"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 opacity-20 blur-[80px]"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Aurora Veil</h3>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed relative z-10">
              Designed for clarity and reflection. Utilizes glassmorphism, light diffusion, and pastel gradients to evoke morning mist.
            </p>
            
            {/* Color Palette Grid */}
            <div className="space-y-4 relative z-10">
              {/* Primary Colors */}
              <div>
                <p className="text-xs text-slate-600 mb-2 uppercase tracking-wide font-medium">Primary</p>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#F5F3FF] border border-slate-200 shadow-sm"></div>
                    <span className="text-xs text-slate-700 font-mono">#F5F3FF</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#E8E8F0] border border-slate-200 shadow-sm"></div>
                    <span className="text-xs text-slate-700 font-mono">#E8E8F0</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#FFE8DB] border border-slate-200 shadow-sm"></div>
                    <span className="text-xs text-slate-700 font-mono">#FFE8DB</span>
                  </div>
                </div>
              </div>
              
              {/* Accent Colors */}
              <div>
                <p className="text-xs text-slate-600 mb-2 uppercase tracking-wide font-medium">Accent</p>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#8B7BC4] border border-slate-200 shadow-sm"></div>
                    <span className="text-xs text-slate-700 font-mono">#8B7BC4</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#88B4A8] border border-slate-200 shadow-sm"></div>
                    <span className="text-xs text-slate-700 font-mono">#88B4A8</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-lg bg-[#A8C4E8] border border-slate-200 shadow-sm"></div>
                    <span className="text-xs text-slate-700 font-mono">#A8C4E8</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
