import React from 'react';
import { ShieldCheck, Truck, Headphones, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { CREATOR_INFO } from '../types/index.ts';

export const TrustBadges: React.FC = () => {
  const cards = [
    {
      icon: ShieldCheck,
      color: 'indigo',
      title: 'Garantie Constructeur',
      desc: "De 12 à 24 mois de garantie intégrale avec échange immédiat en cas de défaut d'usine.",
    },
    {
      icon: Truck,
      color: 'emerald',
      title: 'Livraison Express',
      desc: 'Expédition sécurisée sous 24h à Douala et Yaoundé, 48h sur le reste du territoire.',
    },
    {
      icon: RotateCcw,
      color: 'amber',
      title: 'Test & Contrôle Qualité',
      desc: 'Chaque appareil subit un banc de test électrique rigoureux avant sa mise en colis.',
    },
    {
      icon: Headphones,
      color: 'cyan',
      title: 'Support WhatsApp 7j/7',
      desc: `Assistance directe avec ${CREATOR_INFO.name} au ${CREATOR_INFO.whatsappFormatted}.`,
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 transition-colors hover:border-slate-700"
              >
                <div className={`p-2 sm:p-2.5 rounded-lg shrink-0 ${
                  c.color === 'indigo' ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-500/20' :
                  c.color === 'emerald' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/20' :
                  c.color === 'amber' ? 'bg-amber-950/80 text-amber-400 border border-amber-500/20' :
                  'bg-cyan-950/80 text-cyan-400 border border-cyan-500/20'
                }`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">{c.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
