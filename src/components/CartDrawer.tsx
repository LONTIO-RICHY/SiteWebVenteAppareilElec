import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Check 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, Currency, CREATOR_INFO } from '../types/index.ts';
import { formatPrice, getCartWhatsAppLink } from '../utils/helpers.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);

  const rawTotalXAF = items.reduce(
    (sum, item) => sum + item.product.priceXAF * item.quantity,
    0
  );

  const discountAmountXAF = (rawTotalXAF * discountPercent) / 100;
  const finalTotalXAF = rawTotalXAF - discountAmountXAF;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'KESSEL10' || code === 'KESSEL') {
      setDiscountPercent(10);
      setCouponMessage('Code KESSEL10 appliqué (-10%)');
    } else {
      setDiscountPercent(0);
      setCouponMessage('Code invalide. Essayez "KESSEL10"');
    }
  };

  const whatsAppOrderUrl = getCartWhatsAppLink(items, finalTotalXAF, currency);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with Motion */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            {/* Drawer with Motion spring */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-slate-900 border-l border-slate-800 text-slate-100 flex flex-col shadow-2xl z-10"
            >
              
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-indigo-400" />
                  <h2 className="text-base sm:text-lg font-bold text-white font-display">
                    Votre Panier d'Achats
                  </h2>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full tabular-nums">
                    {items.reduce((acc, it) => acc + it.quantity, 0)}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Fermer le panier"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body: Items list or Empty State */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">Votre panier est vide</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Découvrez nos machines, téléphones, ampoules et ventilateurs en stock.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      Découvrir les Appareils
                    </button>
                  </div>
                ) : (
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex gap-3 p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl"
                      >
                        {/* Thumbnail */}
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg bg-slate-900 border border-slate-800 shrink-0"
                        />

                        {/* Info & Controls */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <div className="flex items-start justify-between gap-1.5">
                              <h4 className="text-xs sm:text-sm font-semibold text-white truncate" title={item.product.name}>
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(item.product.id)}
                                className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                                title="Supprimer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <p className="text-[11px] text-slate-400">
                              {formatPrice(item.product.priceXAF, currency)} / unité
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-1.5">
                            <div className="flex items-center border border-slate-800 rounded bg-slate-900 px-1 py-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, -1)}
                                className="p-1 text-slate-400 hover:text-white transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-semibold text-white tabular-nums">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, 1)}
                                className="p-1 text-slate-400 hover:text-white transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <span className="text-xs sm:text-sm font-bold text-white tabular-nums">
                              {formatPrice(item.product.priceXAF * item.quantity, currency)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {/* Footer Controls */}
              {items.length > 0 && (
                <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 space-y-3.5">
                  
                  {/* Coupon Form */}
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Code promo (ex: KESSEL10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none uppercase"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg border border-slate-700 transition-colors"
                    >
                      Appliquer
                    </button>
                  </form>
                  {couponMessage && (
                    <p className={`text-[11px] ${discountPercent > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {couponMessage}
                    </p>
                  )}

                  {/* Subtotals breakdown */}
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Sous-total</span>
                      <span className="text-slate-200 tabular-nums">{formatPrice(rawTotalXAF, currency)}</span>
                    </div>
                    {discountPercent > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Remise spéciale (-{discountPercent}%)</span>
                        <span className="tabular-nums">-{formatPrice(discountAmountXAF, currency)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-400">
                      <span>Livraison Cameroun</span>
                      <span className="text-emerald-400">
                        {finalTotalXAF > 50000 ? 'Gratuite' : 'Tarif standard selon zone'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base font-bold text-white pt-1.5 border-t border-slate-800">
                      <span>Total à payer</span>
                      <span className="text-indigo-400 tabular-nums">{formatPrice(finalTotalXAF, currency)}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        onClose();
                        onProceedToCheckout();
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-lg shadow-indigo-950/40"
                    >
                      <span>Finaliser la Commande en Ligne</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <motion.a
                      whileTap={{ scale: 0.97 }}
                      href={whatsAppOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 px-4 bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 rounded-lg text-xs font-semibold transition-colors text-center"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="truncate">Envoyer à {CREATOR_INFO.name} sur WhatsApp</span>
                    </motion.a>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-slate-400 pt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Paiement sécurisé · Assistance directe par WhatsApp</span>
                  </div>

                </div>
              )}

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
