import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Headphones, 
  Check, 
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion, Variants } from 'motion/react';
import { CategoryId, CREATOR_INFO, Currency } from '../types/index.ts';
import { CATEGORIES_DATA, HERO_IMAGE } from '../data/products.ts';

interface HomeViewProps {
  currency: Currency;
  onSelectCategory: (cat: CategoryId) => void;
  onOpenContact: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export const HomeView: React.FC<HomeViewProps> = ({
  currency,
  onSelectCategory,
  onOpenContact,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="space-y-12 sm:space-y-20 pb-20 sm:pb-16"
    >
      
      {/* 1. HERO BANNER - 100% Responsive et aéré */}
      <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute top-0 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[11px] sm:text-xs font-semibold text-indigo-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Boutique Officielle Certifiée · Matériel Garanti</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.2] text-balance">
                Les Meilleurs Appareils Électroniques Sélectionnés par un Ingénieur.
              </h1>

              <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Découvrez nos collections spécialisées : ventilateurs silencieux, réfrigérateurs no-frost basse consommation, smartphones 5G, ampoules LED connectées et ordinateurs professionnels.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#rayons"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-indigo-950/40 w-full sm:w-auto"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explorer les Variétés d'Appareils</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL,%20je%20souhaite%20des%20conseils%20sur%20vos%20appareils.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl transition-colors w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp : {CREATOR_INFO.whatsappFormatted}</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group max-w-md mx-auto lg:max-w-none">
                <img
                  src={HERO_IMAGE}
                  alt="Vitrine Kessel Electronics"
                  referrerPolicy="no-referrer"
                  className="w-full h-52 sm:h-72 lg:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">{CREATOR_INFO.name}</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">Ingénieur & Fondateur de l'Entreprise</p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Service 7j/7
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. PRÉSENTATION DES DIFFÉRENTES VARIÉTÉS DE PRODUITS (LES 5 RAYONS CLÉS) */}
      <section id="rayons" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        
        {/* Titre de section très clair et lisible */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1.5 sm:mb-2">
            Catalogue Spécialisé
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
            Choisissez une Catégorie d'Appareils
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed px-2">
            Cliquez sur un rayon pour charger sa page dédiée et voir directement toutes les variétés, marques et spécifications disponibles.
          </p>
        </div>

        {/* Grille des 5 Rayons - 1 col mobile, 2 col tablette, 3 col desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          {CATEGORIES_DATA.map((cat) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors flex flex-col justify-between shadow-xl group hover:shadow-2xl hover:shadow-indigo-950/30"
            >
              {/* Photo réaliste de la catégorie */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={cat.image}
                  alt={cat.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:left-4">
                  <span className="text-[11px] sm:text-xs font-semibold text-emerald-400 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800">
                    {cat.count} Variétés disponibles
                  </span>
                </div>
              </div>

              {/* Contenu textuel aéré */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-indigo-400 transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>

                {/* Liste des variétés proposées dans ce rayon */}
                <div className="space-y-1.5 py-2 border-t border-slate-800/80">
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Modèles commercialisés :
                  </p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {cat.varieties.map((v, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bouton de navigation vers la page dédiée du rayon */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectCategory(cat.id)}
                  className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md shadow-indigo-950/40"
                >
                  <span>Découvrir tous les {cat.label.toLowerCase()}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* 3. ENGAGEMENTS & GARANTIES (100% adaptatif mobile/tablette/desktop) */}
      <section className="bg-slate-900/60 border-t border-b border-slate-800 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-start gap-3.5 sm:gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-500/20 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">Garantie 1 à 2 Ans</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                  Tous nos appareils sont neufs et bénéficient d'une garantie constructeur intégrale.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-start gap-3.5 sm:gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">Livraison au Cameroun</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                  Expédition rapide et sécurisée à Douala, Yaoundé, Bafoussam et dans toutes les régions.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-start gap-3.5 sm:gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-amber-950/80 text-amber-400 border border-amber-500/20 shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">Test Avant Livraison</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                  Chaque appareil subit un contrôle technique complet avant son départ chez le client.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-start gap-3.5 sm:gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">WhatsApp Direct</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                  Contact direct avec l'ingénieur LONTIO KESSEL au {CREATOR_INFO.whatsappFormatted}.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. PRÉSENTATION DU CRÉATEUR & FONDATEUR (LONTIO KESSEL) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="md:col-span-4 text-center p-5 sm:p-6 bg-slate-950 rounded-xl border border-slate-800">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-800 p-1 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-indigo-950/60">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-white font-display font-bold text-lg sm:text-xl">
                  LK
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">{CREATOR_INFO.name}</h3>
              <p className="text-[11px] sm:text-xs text-indigo-400 font-semibold mt-0.5">{CREATOR_INFO.role}</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-2">{CREATOR_INFO.location}</p>
            </div>

            <div className="md:col-span-8 space-y-4 text-center sm:text-left">
              <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
                À propos du Fondateur
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>{CREATOR_INFO.name}</strong> a conçu cette plateforme pour offrir une expérience d'achat d'appareils électroniques transparente, sans intermédiaire et avec une vérification technique rigoureuse.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={`https://wa.me/${CREATOR_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 hover:bg-slate-800 border border-emerald-500/30 rounded-xl flex items-center justify-between text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp : <strong>{CREATOR_INFO.whatsappFormatted}</strong></span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={`mailto:${CREATOR_INFO.email}`}
                  className="p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl flex items-center justify-between text-slate-200 transition-colors"
                >
                  <span className="truncate">Courriel : {CREATOR_INFO.email}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </motion.a>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

    </motion.div>
  );
};
