import React, { useState } from 'react';
import { 
  X, 
  Check, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  FileText, 
  MapPin, 
  PhoneCall, 
  User, 
  Mail,
  Building 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, Currency, CREATOR_INFO, CheckoutForm } from '../types/index.ts';
import { formatPrice, getCartWhatsAppLink, formatPaymentMethod } from '../utils/helpers.ts';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onOrderCompleted,
}) => {
  const [formData, setFormData] = useState<CheckoutForm>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Douala',
    address: '',
    paymentMethod: 'orange_money',
    notes: '',
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [generatedOrderId, setGeneratedOrderId] = useState('');

  const totalXAF = items.reduce(
    (sum, item) => sum + item.product.priceXAF * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      return;
    }

    const orderId = `CMD-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedOrderId(orderId);
    setOrderConfirmed(true);
    onOrderCompleted();
  };

  const whatsAppFinalUrl = getCartWhatsAppLink(items, totalXAF, currency, formData);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0" 
            onClick={orderConfirmed ? onClose : undefined}
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8"
          >
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <h2 className="text-sm sm:text-base font-bold text-white font-display">
                  {orderConfirmed ? 'Commande Enregistrée' : 'Finalisation de votre Commande'}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {orderConfirmed ? (
              /* Confirmation Screen */
              <div className="p-5 sm:p-8 text-center space-y-5">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-950/80 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400"
                >
                  <Check className="w-7 h-7 sm:w-8 sm:h-8" />
                </motion.div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    Félicitations {formData.fullName} !
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Référence de commande : <strong className="text-indigo-400 font-semibold">{generatedOrderId}</strong>
                  </p>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-left text-xs space-y-2 text-slate-300">
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-400">Total :</span>
                    <span className="font-bold text-white tabular-nums">{formatPrice(totalXAF, currency)}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-400">Destinataire :</span>
                    <span className="text-white">{formData.fullName} ({formData.phone})</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-400">Lieu de livraison :</span>
                    <span className="text-white">{formData.city}, {formData.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mode de paiement :</span>
                    <span className="text-emerald-400 font-semibold">{formatPaymentMethod(formData.paymentMethod)}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-left text-xs text-indigo-200">
                  <p className="font-semibold text-white mb-1">Dernière étape importante :</p>
                  <p>
                    Pour déclencher la préparation et l'expédition, cliquez ci-dessous pour transmettre automatiquement la commande à M. <strong>{CREATOR_INFO.name}</strong> sur WhatsApp.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={whatsAppFinalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-lg shadow-emerald-950/50 text-center"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>Transmettre sur WhatsApp ({CREATOR_INFO.whatsappFormatted})</span>
                  </motion.a>

                  <button
                    onClick={onClose}
                    className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                  >
                    Retour à la boutique
                  </button>
                </div>
              </div>
            ) : (
              /* Checkout Form */
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
                {/* Summary preview */}
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    {items.length} article(s) à commander :
                  </span>
                  <span className="text-sm font-bold text-indigo-400 tabular-nums">
                    {formatPrice(totalXAF, currency)}
                  </span>
                </div>

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nom & Prénom <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Jean Paul Ndongo"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Téléphone (WhatsApp) <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <PhoneCall className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        placeholder="Ex: 650 19 62 51"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Adresse Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        placeholder="Ex: client@domaine.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Ville de Livraison <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:border-indigo-500 outline-none cursor-pointer"
                      >
                        <option value="Douala">Douala</option>
                        <option value="Yaoundé">Yaoundé</option>
                        <option value="Bafoussam">Bafoussam</option>
                        <option value="Bamenda">Bamenda</option>
                        <option value="Garoua">Garoua</option>
                        <option value="Maroua">Maroua</option>
                        <option value="Kribi">Kribi</option>
                        <option value="Autre ville (Cameroun)">Autre ville (Cameroun)</option>
                        <option value="International (Zone CEMAC)">International (Zone CEMAC)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Quartier & Adresse exacte de livraison <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Akwa face ancienne direction / Bastos rue 124..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 outline-none"
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Mode de Paiement Préféré
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <label className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                      formData.paymentMethod === 'orange_money'
                        ? 'border-indigo-500 bg-indigo-950/20 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="orange_money"
                        checked={formData.paymentMethod === 'orange_money'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'orange_money' })}
                        className="hidden"
                      />
                      <div className="w-3.5 h-3.5 rounded-full border border-slate-600 flex items-center justify-center">
                        {formData.paymentMethod === 'orange_money' && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
                      </div>
                      <div>
                        <span className="font-semibold text-amber-500">Orange Money</span>
                        <p className="text-[10px] text-slate-400">Paiement mobile instantané</p>
                      </div>
                    </label>

                    <label className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                      formData.paymentMethod === 'mtn_momo'
                        ? 'border-indigo-500 bg-indigo-950/20 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="mtn_momo"
                        checked={formData.paymentMethod === 'mtn_momo'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'mtn_momo' })}
                        className="hidden"
                      />
                      <div className="w-3.5 h-3.5 rounded-full border border-slate-600 flex items-center justify-center">
                        {formData.paymentMethod === 'mtn_momo' && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
                      </div>
                      <div>
                        <span className="font-semibold text-yellow-400">MTN Mobile Money</span>
                        <p className="text-[10px] text-slate-400">Paiement mobile sécurisé</p>
                      </div>
                    </label>

                    <label className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                      formData.paymentMethod === 'cash_delivery'
                        ? 'border-indigo-500 bg-indigo-950/20 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash_delivery"
                        checked={formData.paymentMethod === 'cash_delivery'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'cash_delivery' })}
                        className="hidden"
                      />
                      <div className="w-3.5 h-3.5 rounded-full border border-slate-600 flex items-center justify-center">
                        {formData.paymentMethod === 'cash_delivery' && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
                      </div>
                      <div>
                        <span className="font-semibold text-white">Espèces à la Livraison</span>
                        <p className="text-[10px] text-slate-400">Règlement à réception du colis</p>
                      </div>
                    </label>

                    <label className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                      formData.paymentMethod === 'card'
                        ? 'border-indigo-500 bg-indigo-950/20 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                        className="hidden"
                      />
                      <div className="w-3.5 h-3.5 rounded-full border border-slate-600 flex items-center justify-center">
                        {formData.paymentMethod === 'card' && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
                      </div>
                      <div>
                        <span className="font-semibold text-white">Carte Bancaire</span>
                        <p className="text-[10px] text-slate-400">Visa / Mastercard</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Instructions particulières (facultatif)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Appelez-moi avant de passer, porte bleue..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-2.5 sm:py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-lg shadow-indigo-950/40"
                  >
                    Confirmer la Commande ({formatPrice(totalXAF, currency)})
                  </motion.button>
                </div>
              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
