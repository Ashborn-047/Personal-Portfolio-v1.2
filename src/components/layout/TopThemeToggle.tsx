import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

export const TopThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 flex items-center justify-center transition-colors duration-500"
      style={{ cursor: 'none' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative w-8 h-8 flex items-center justify-center text-2xl">
        <motion.div
          initial={false}
          animate={{
            opacity: theme === 'dusk' ? 1 : 0,
            rotate: theme === 'dusk' ? 0 : -45,
            scale: theme === 'dusk' ? 1 : 0.5,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          🌘
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            opacity: theme === 'dawn' ? 1 : 0,
            rotate: theme === 'dawn' ? 0 : 45,
            scale: theme === 'dawn' ? 1 : 0.5,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          ☀️
        </motion.div>
      </div>
    </motion.button>
  );
};
