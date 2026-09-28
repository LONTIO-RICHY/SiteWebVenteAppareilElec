import React from 'react';
import { 
  MessageSquare, 
  Mail, 
  Github, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  ExternalLink,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { CREATOR_INFO } from '../types/index.ts';

export const CreatorSection: React.FC = () => {
  return (
    <section id="createur" className="py-12 sm:py-16 bg-slate-900 border-t border-b border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 border border-slate-800 text-xs font-semibold text-indigo-400 mb-3">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>Fondation & Ingénierie</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Conçu & Dirigé par {CREATOR_INFO.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Une approche d'ingénieur appliquée au commerce électronique : rigueur technique, zéro compromis sur la fiabilité matérielle et accompagnement direct sans intermédiaire.
          </p>
        </motion.div>

        {/* Profile Grid Card with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Creator Identity Profile Badge */}
            <div className="md:col-span-4 flex flex-col items-center text-center p-5 sm:p-6 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-800 p-1 flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-indigo-950/60">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-white font-display font-bold text-xl sm:text-2xl">
                  LK
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {CREATOR_INFO.name}
              </h3>
              <p className="text-xs text-indigo-400 font-semibold mt-0.5">
                {CREATOR_INFO.role}
              </p>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{CREATOR_INFO.location}</span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 w-full flex justify-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/80 border border-emerald-500/30 rounded-lg transition-colors"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`mailto:${CREATOR_INFO.email}`}
                  className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                  title="Email direct"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={CREATOR_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                  title="Profil GitHub"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Credentials and Direct Contact Points */}
            <div className="md:col-span-8 space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-2 font-display">
                  La Garantie d'un Travail d'Ingénieur
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Chaque référence disponible sur cette plateforme — qu'il s'agisse d'un ordinateur de haute précision, d'un smartphone 5G, d'ampoules LED basse consommation ou de ventilateurs silencieux — est soumise à un banc d'essai rigoureux de durabilité, de résistance aux coupures de tension et de performance réelle.
                </p>
              </div>

              {/* Verified Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                {/* WhatsApp */}
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL,%20je%20vous%20contacte%20depuis%20la%20boutique%20Kessel%20Electronics.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 hover:bg-slate-800/80 border border-emerald-500/30 rounded-xl flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-2 bg-emerald-950/80 rounded-lg text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 block">WhatsApp Direct</span>
                      <strong className="text-white text-xs group-hover:text-emerald-400 transition-colors">
                        {CREATOR_INFO.whatsappFormatted}
                      </strong>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0" />
                </motion.a>

                {/* Email */}
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={`mailto:${CREATOR_INFO.email}`}
                  className="p-3 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 rounded-xl flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="p-2 bg-indigo-950/80 rounded-lg text-indigo-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-slate-400 block">Courriel Officiel</span>
                      <strong className="text-white text-xs truncate block group-hover:text-indigo-400 transition-colors">
                        {CREATOR_INFO.email}
                      </strong>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0" />
                </motion.a>

                {/* GitHub */}
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={CREATOR_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 rounded-xl flex items-center justify-between group transition-colors sm:col-span-2"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="p-2 bg-slate-800 rounded-lg text-slate-300 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-slate-400 block">Dépôts & Code Source</span>
                      <strong className="text-white text-xs truncate block group-hover:text-indigo-400 transition-colors">
                        {CREATOR_INFO.github}
                      </strong>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0" />
                </motion.a>
              </div>

              {/* Guarantees row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Garantie 100% matériel d'origine
                </span>
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Support technique direct
                </span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
