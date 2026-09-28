import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CREATOR_INFO } from '../types/index.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-30 flex flex-col items-end">
      {/* Floating bubble hint (Hidden on extra small screens to prevent clutter) */}
      <AnimatePresence>
        {showBubble && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="hidden sm:block mb-2 bg-slate-900 border border-emerald-500/30 text-white text-xs p-3 rounded-xl shadow-xl max-w-[210px] relative"
          >
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-1.5 -right-1.5 bg-slate-800 text-slate-400 hover:text-white rounded-full p-0.5 cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="font-semibold text-emerald-400 text-[11px] mb-0.5">Besoin d'un conseil ?</p>
            <p className="text-[11px] text-slate-300">
              Discutez directement avec {CREATOR_INFO.name} sur WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL,%20j'ai%20une%20question%20sur%20un%20appareil%20%C3%A9lectronique.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-3 sm:px-4 sm:py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full sm:rounded-xl shadow-xl shadow-emerald-950/60 font-semibold text-xs transition-colors"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp Direct</span>
      </motion.a>
    </div>
  );
};
