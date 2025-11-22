import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Github, ArrowUpRight } from 'lucide-react';
import { MouseEvent } from 'react';

const projects = [
  {
    id: 1,
    title: 'LifeSync — Your Rhythm, Reimagined',
    category: 'Featured Project',
    image: '/lifesync-mockup.png',
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
    image: '/webtoon_mockup.png',
    description: 'A full-scale redesign of Webtoon\'s web ecosystem transforming fragmented user experiences into a unified, behaviorally driven storytelling platform.',
    subDescription: 'Focused on creator visibility, micro-personalization, and emotional UX, the project reimagines how users discover, connect, and engage with digital comics.',
    extraDescription: 'Research-backed redesign powered by 50+ data sources and UX psychology principles (Fogg Model, Hick\'s Law, Zeigarnik Effect).',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Ashborn-047/Webtoon-Ecosystem-Platform-Redesign-',
    liveUrl: '#',
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center justify-center`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative group flex justify-center">
        <div className="relative w-full max-w-[90%]">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B3D]/20 to-purple-600/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0A0A12] shadow-2xl">
            <div className="absolute inset-0 bg-[#FF6B3D]/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 === 0 ? 'items-start text-left' : 'items-end text-right'}`}>

        {/* Header Info */}
        <div className="mb-6 space-y-2">
          <span className="text-[#FF6B3D] font-mono text-sm tracking-widest uppercase">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Description Card */}
        <motion.div
          className="relative p-8 rounded-2xl bg-[#130E1B]/80 backdrop-blur-sm border border-white/10 shadow-xl mb-8 z-10 group overflow-hidden transition-colors duration-300 hover:border-[#FF6B3D]/30"
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  550px circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 107, 61, 0.15),
                  transparent 80%
                )
              `
            }}
          />

          <p className="text-gray-300 text-lg leading-relaxed mb-4 relative z-10">
            {project.description}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed relative z-10">
            {project.subDescription}
          </p>
          {project.extraDescription && (
            <p className="text-gray-500 text-xs mt-4 pt-4 border-t border-white/5 relative z-10">
              {project.extraDescription}
            </p>
          )}
        </motion.div>

        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-3 mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-[#1A1025] border border-white/10 text-[#00D9FF] text-xs font-medium tracking-wide hover:border-[#00D9FF]/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 items-center">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6B3D] transition-colors duration-300"
              aria-label="View Source"
            >
              <Github className="w-7 h-7" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6B3D] transition-colors duration-300"
              aria-label="View Live Project"
            >
              <ArrowUpRight className="w-7 h-7" />
            </a>
          )}
        </div>

      </div>
    </motion.div >
  );
}

export const Projects = () => {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-center mb-24">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B3D] to-[#FF9F4A] inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
