import React from 'react';
import { 
  MessageSquare, 
  Mail, 
  Github, 
  ShieldCheck, 
  MapPin, 
  Laptop, 
  Smartphone, 
  Lightbulb, 
  Fan 
} from 'lucide-react';
import { CREATOR_INFO, CategoryId } from '../types/index.ts';

interface FooterProps {
  onSelectCategory: (cat: CategoryId) => void;
  onGoHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onGoHome }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Creator Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                KESSEL
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                ELECTRONICS
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm text-xs sm:text-sm">
              Plateforme de distribution d'appareils électroniques et électroménagers certifiés : ventilateurs silencieux, réfrigérateurs no-frost, téléphones 5G, ampoules LED et ordinateurs.
            </p>

            <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-1.5 max-w-sm">
              <p className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider">
                Fondateur & Développeur :
              </p>
              <p className="text-white font-bold text-sm">
                {CREATOR_INFO.name}
              </p>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{CREATOR_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Rayons Spécialisés */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Nos Rayons
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('fans')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Fan className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ventilateurs & Climatisation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('fridges')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span>Réfrigérateurs & Congélateurs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('phones')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Téléphones & Smartphones</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('lighting')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ampoules & Éclairage LED</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('machines')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Laptop className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Machines & Informatique</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact Direct
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp : {CREATOR_INFO.whatsappFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CREATOR_INFO.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors truncate max-w-full"
                >
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="truncate">{CREATOR_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CREATOR_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>github.com/{CREATOR_INFO.githubUser}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Guarantees */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Sécurité & Engagements
            </h4>
            <div className="space-y-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garantie 100% Produits Authentiques</span>
              </div>
              <p>
                Facture proforma et certificat de garantie délivrés à chaque commande.
              </p>
              <p className="text-slate-500">
                Modes de règlement : Orange Money, MTN Mobile Money, Espèces à la livraison, Carte Bancaire.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Kessel Electronics. Développé & Conçu par <strong className="text-slate-300">{CREATOR_INFO.name}</strong>.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <button onClick={onGoHome} className="hover:text-slate-300 transition-colors cursor-pointer">
              Accueil
            </button>
            <span>·</span>
            <a
              href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Commander sur WhatsApp
            </a>
            <span>·</span>
            <a
              href={CREATOR_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
