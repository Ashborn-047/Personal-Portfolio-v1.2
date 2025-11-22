import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Ashborn-047',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/bhattacharyya',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:bhattacharyyapushan@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#0A0A12]">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let's build something <span className="text-[#FF6B3D]">meaningful</span>.
        </motion.h2>
        
        <motion.div 
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {socialLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-4 rounded-full bg-white/5 hover:bg-[#FF6B3D]/20 text-gray-400 hover:text-[#FF6B3D] transition-all duration-300 hover:scale-110"
              style={{ cursor: 'none' }}
            >
              <link.icon size={24} />
            </a>
          ))}
        </motion.div>

        <div className="text-sm text-gray-600">
          © 2025 Dusk & Dawn. Crafted in the dark.
        </div>
      </div>
    </footer>
  );
};
