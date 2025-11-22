import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './components/theme/ThemeContext';
import { Layout } from './components/layout/Layout';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

// Dusk Components
import { DuskHero } from './components/dusk/DuskHero';
import { PersonalStory } from './components/dusk/PersonalStory';
import { Projects } from './components/dusk/Projects';
import { Principles } from './components/dusk/Principles';
import { Insights } from './components/dusk/Insights';
import { Contact } from './components/dusk/Contact';
import { StarField } from './components/dusk/StarField';

// Dawn Components
import { DawnHero } from './components/dawn/DawnHero';
import { TechStack } from './components/dawn/TechStack';
import { DesignSystem } from './components/dawn/DesignSystem';
import { BuildChallenges } from './components/dawn/BuildChallenges';
import { AICollaboration } from './components/dawn/AICollaboration';
import { InsightGenerator } from './components/dawn/InsightGenerator';
import { ReflectionFooter } from './components/dawn/ReflectionFooter';

const ContentSwitcher = () => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      {theme === 'dusk' ? (
        <motion.div
          key="dusk-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DuskHero />
          <PersonalStory />
          <Projects />
          <Principles />
          <Insights />
          <Contact />
          <StarField />
        </motion.div>
      ) : (
        <motion.div
          key="dawn-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DawnHero />
          <TechStack />
          <AICollaboration />
          <DesignSystem />
          <InsightGenerator />
          <BuildChallenges />
          <ReflectionFooter />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      
      {!loading && (
        <Layout>
          <ContentSwitcher />
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default App;
