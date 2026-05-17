import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './components/theme/ThemeContext';
import { Layout } from './components/layout/Layout';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

// Showcase App
import ShowcaseApp from './showcase/App';

// Dusk Components
import { DuskHero } from './components/dusk/DuskHero';
import { PersonalStory } from './components/dusk/PersonalStory';
import { ShowcaseGateway } from './components/dusk/ShowcaseGateway';
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

const ContentSwitcher = ({ navigate }: { navigate: (path: string) => void }) => {
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
          <ShowcaseGateway navigate={navigate} />
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
  const [path, setPath] = useState(window.location.pathname);

  const navigate = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
  };

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      
      {!loading && (
        <Layout>
          {path === '/showcase' ? (
            <ShowcaseApp navigate={navigate} />
          ) : (
            <ContentSwitcher navigate={navigate} />
          )}
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default App;
