import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, ShieldCheck } from 'lucide-react';
import { CREATOR_INFO } from '../types/index.ts';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 400);
          }, 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 20) + 12;
        return Math.min(100, prev + increment);
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-4 selection:bg-none"
        >
          {/* Subtle background glow */}
          <div className="absolute w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center text-center max-w-sm w-full space-y-6"
          >
            {/* Animated Brand Monogram with spinning accent ring */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 rounded-2xl border border-indigo-500/30 border-dashed"
              />
              <div className="absolute inset-1 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center shadow-2xl">
                <span className="text-xl font-bold font-display text-white tracking-wider">
                  LK
                </span>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-1 -right-1 p-1 bg-indigo-600 rounded-md text-white shadow-md shadow-indigo-950"
              >
                <Cpu className="w-3.5 h-3.5" />
              </motion.div>
            </div>

            {/* Brand Title */}
            <div>
              <div className="flex items-center justify-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-white font-display">
                  KESSEL
                </h1>
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                  TECH
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Plateforme d'Appareils Électroniques Certifiés
              </p>
            </div>

            {/* High-Precision Progress Bar */}
            <div className="w-full space-y-2">
              <div className="h-1.5 w-full bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-slate-400">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Direction : {CREATOR_INFO.name}</span>
                </span>
                <span className="font-semibold text-white tabular-nums">{progress}%</span>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
