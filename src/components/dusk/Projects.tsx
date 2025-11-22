import { motion } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'LifeSync — Your Rhythm, Reimagined',
    category: 'Featured Project',
    image: 'https://images.unsplash.com/photo-1663153203139-40c3caf54a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBsaWZlJTIwYmFsYW5jZSUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc2MzUzODIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A lifestyle synchronization app that transforms how people understand their daily patterns—where wellness, budget-tracking, and mindfulness converge into a single, emotionally intelligent interface.',
    subDescription: 'Built an adaptive system that visualizes personal rhythms through gradient-based emotional states and dynamic lighting, creating an interface that doesn\'t just track habits—it reflects how you feel.',
    tags: ['React', 'Framer Motion', 'TailwindCSS', 'PWA Ready'],
    githubUrl: 'https://github.com/Ashborn-047/Lifesync',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Webtoon Ecosystem Redesign — Stories in Motion',
    category: 'Featured Project',
    image: 'https://images.unsplash.com/photo-1568890643060-ef2293be79b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY29taWMlMjB3ZWJ0b29uJTIwaW50ZXJmYWNlJTIwYXJ0fGVufDF8fHx8MTc2MzUzODIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A full-scale redesign of Webtoon\'s web ecosystem transforming fragmented user experiences into a unified, behaviorally driven storytelling platform.',
    subDescription: 'Focused on creator visibility, micro-personalization, and emotional UX, the project reimagines how users discover, connect, and engage with digital comics.',
    extraDescription: 'Research-backed redesign powered by 50+ data sources and UX psychology principles (Fogg Model, Hick\'s Law, Zeigarnik Effect).',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Ashborn-047/Webtoon-Ecosystem-Platform-Redesign-',
    liveUrl: '#',
  }
];

export const Projects = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-16 flex items-baseline gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected <span className="text-[#FF6B3D]">Works</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-[#130E1B] border border-white/5 hover:border-[#FF6B3D]/30 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                {/* Image Container */}
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#FF6B3D]/80 backdrop-blur border border-[#FF6B3D]/30 rounded-full text-xs text-white uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 relative flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF6B3D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <h3 className="text-2xl font-bold text-white mb-3 relative">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-3 relative">
                    {project.description}
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-2 relative">
                    {project.subDescription}
                  </p>

                  {project.extraDescription && (
                    <p className="text-gray-400 leading-relaxed mb-4 relative">
                      {project.extraDescription}
                    </p>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 relative">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-[#FF6B3D]/10 text-[#00D9FF] border border-[#00D9FF]/20 rounded text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-[#FF6B3D] to-transparent mb-4 relative" />

                  {/* Action Links */}
                  <div className="flex gap-4 relative">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-[#FF6B3D] transition-colors duration-300 group/link"
                        style={{ cursor: 'none' }}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-[#FF6B3D] transition-colors duration-300 group/link"
                        style={{ cursor: 'none' }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Ember Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B3D] opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
