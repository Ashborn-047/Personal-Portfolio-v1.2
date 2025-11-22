import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { DuskHero } from './DuskHero';
import { DawnHero } from './DawnHero';

interface HeroProps {
  children?: React.ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  const { theme } = useTheme();
  
  return theme === 'dusk' ? (
    <DuskHero>{children}</DuskHero>
  ) : (
    <DawnHero>{children}</DawnHero>
  );
};
