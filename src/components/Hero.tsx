import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  Cpu, 
  Zap, 
  Laptop, 
  Smartphone, 
  Lightbulb, 
  Fan 
} from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data/products.ts';
import { CREATOR_INFO, CategoryId } from '../types/index.ts';

interface HeroProps {
  onExplore: () => void;
  onSelectCategory: (cat: CategoryId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onSelectCategory }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
      {/* Background glow effects with subtle pulse animation */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial & Value Proposition with Motion Stagger */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 text-xs text-indigo-300 font-medium">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Matériel Électronique & Informatique Professionnel</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.18] sm:leading-[1.15] text-balance">
              L’Électronique Moderne et Durable, Sélectionnée par un Ingénieur.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
              De la puissance brute des stations de travail et ultrabooks aux smartphones dernière génération,
              en passant par l’éclairage LED écoénergétique et les brasseurs d’air silencieux.
              Chaque produit est rigoureusement testé avec garantie constructeur certifiée.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all shadow-lg shadow-indigo-900/30"
              >
                <span>Explorer le Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL,%20je%20souhaite%20obtenir%20des%20conseils%20pour%20l'achat%20d'un%20appareil%20%C3%A9lectronique.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Conseil & Commande WhatsApp</span>
              </motion.a>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-slate-800/80 text-[11px] sm:text-xs text-slate-400">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantie 1 à 3 ans</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Truck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Livraison 24/48h</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Neuf & Testé</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase with Motion */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <img
                src={HERO_IMAGE}
                alt="Vitrine d'appareils électroniques haut de gamme Kessel Electronics"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('bg-gradient-to-br', 'from-slate-900', 'to-indigo-950', 'flex', 'items-center', 'justify-center', 'p-8');
                  }
                }}
              />
              
              {/* Subtle Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"></div>

              {/* In-image caption / metadata */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-[11px] sm:text-xs font-semibold text-white">Technologie Haute Fiabilité</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">Sélectionné par LONTIO KESSEL</p>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Stock Disponible
                </span>
              </div>
            </div>

            {/* Quick Category Jump Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 sm:mt-4">
              <button
                onClick={() => onSelectCategory('machines')}
                className="flex items-center gap-1.5 sm:gap-2 p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-left text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Laptop className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">Machines</span>
              </button>
              <button
                onClick={() => onSelectCategory('phones')}
                className="flex items-center gap-1.5 sm:gap-2 p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-left text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">Téléphones</span>
              </button>
              <button
                onClick={() => onSelectCategory('lighting')}
                className="flex items-center gap-1.5 sm:gap-2 p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-left text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">Ampoules</span>
              </button>
              <button
                onClick={() => onSelectCategory('fans')}
                className="flex items-center gap-1.5 sm:gap-2 p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-left text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Fan className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">Ventilateurs</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
