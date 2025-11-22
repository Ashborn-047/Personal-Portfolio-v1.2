import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // Wait for fade-out
    }, 7000); // 7s total duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(6px)',
            cursor: 'none',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            exit: { duration: 0.55, ease: "easeIn" }
          }}
        >
          {/* Cinematic Loading Text */}
          <motion.div
            className="loading-text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              exit: { duration: 0.55 }
            }}
          >
            LOADING EXPERIENCE…
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
