import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppView } from '../types/index.ts';

interface NavigationProgressBarProps {
  view: AppView;
}

export const NavigationProgressBar: React.FC<NavigationProgressBarProps> = ({ view }) => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [view]);

  return (
    <AnimatePresence>
      {animating && (
        <motion.div
          key="nav-bar"
          initial={{ width: '0%', opacity: 1 }}
          animate={{ width: '100%', opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 z-50 shadow-sm shadow-indigo-500/50"
        />
      )}
    </AnimatePresence>
  );
};
