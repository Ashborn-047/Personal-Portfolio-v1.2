import { motion } from 'framer-motion';
// const portraitImage from 'figma:asset/5157b9e3b369212b8d0b70aad8ed753d7e261e87.png';
const portraitImage = '/creator-avatar.png';

export const PersonalStory = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">From Curiosity to <span className="text-[#FF6B3D]">Creation</span></h2>
          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              I started as a mechanical engineer, fascinated by how things work. But I found my true calling not in gears and pistons, but in pixels and logic.
            </p>
            <p>
              The transition was fueled by a simple loop: <span className="text-white font-normal">curiosity → tinkering → engineering → design</span>.
            </p>
            <p>
              Today, I apply systems thinking to digital experiences, translating complex requirements into intuitive, human-centered interfaces. I don't just build; I craft universes where ideas can live.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative max-w-sm mx-auto md:mx-0 md:ml-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#130E1B] group">
            {/* Portrait Image */}
            <div className="aspect-square bg-gradient-to-br from-[#1A1025] to-[#0A0A12] relative overflow-hidden">
              <img
                src={portraitImage}
                alt="Creative journey portrait"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130E1B]/60 via-transparent to-transparent pointer-events-none"></div>
              {/* Ember glow effect on hover */}
              <div className="absolute inset-0 bg-[#FF6B3D]/0 group-hover:bg-[#FF6B3D]/10 transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-[#FF6B3D] opacity-10 blur-2xl -z-10 group-hover:opacity-20 transition-opacity duration-500"></div>
        </motion.div>
      </div>
    </section>
  );
};
