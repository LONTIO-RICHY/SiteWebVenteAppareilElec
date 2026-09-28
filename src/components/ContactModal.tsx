import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  Mail, 
  Github, 
  PhoneCall, 
  Send, 
  Clock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CREATOR_INFO } from '../types/index.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Bonjour M. ${CREATOR_INFO.name},\nJe m'appelle ${name || 'un client'}.\n\nMessage : ${message}`;
    const url = `https://wa.me/${CREATOR_INFO.whatsapp}?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0" 
            onClick={onClose}
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-emerald-400" />
                <h2 className="text-sm sm:text-base font-bold text-white font-display">
                  Assistance & Contact Direct
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 space-y-5">
              
              <div className="p-3.5 sm:p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Responsable Technique :</span>
                  <span className="text-xs font-bold text-white">{CREATOR_INFO.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">WhatsApp direct :</span>
                  <a
                    href={`https://wa.me/${CREATOR_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{CREATOR_INFO.whatsappFormatted}</span>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Email officiel :</span>
                  <a
                    href={`mailto:${CREATOR_INFO.email}`}
                    className="text-xs font-medium text-indigo-400 hover:underline truncate max-w-[200px]"
                  >
                    {CREATOR_INFO.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Dépôt GitHub :</span>
                  <a
                    href={CREATOR_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-300 hover:underline"
                  >
                    github.com/{CREATOR_INFO.githubUser}
                  </a>
                </div>
              </div>

              {/* Quick Message Form */}
              <form onSubmit={handleSendWhatsApp} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Envoyer un message instantané
                </h4>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 outline-none"
                />
                <textarea
                  required
                  rows={3}
                  placeholder="Posez votre question sur les machines, téléphones, ampoules ou ventilateurs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:border-indigo-500 outline-none resize-none"
                />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Ouvrir dans WhatsApp</span>
                </motion.button>
              </form>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Réponse rapide par WhatsApp avec LONTIO KESSEL.</span>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
