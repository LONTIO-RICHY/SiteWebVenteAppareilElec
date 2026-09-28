import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, Currency } from '../types/index.ts';
import { formatPrice } from '../utils/helpers.ts';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  currency: Currency;
  onAddToCart: (p: Product) => void;
  onRemoveFromWishlist: (productId: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onAddToCart,
  onRemoveFromWishlist,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
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
                  <Heart className="w-5 h-5 text-rose-500 fill-current" />
                  <h2 className="text-base sm:text-lg font-bold text-white font-display">
                    Articles Favoris
                  </h2>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full tabular-nums">
                    {items.length}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500">
                      <Heart className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold text-white">Aucun favori pour l'instant</p>
                    <p className="text-xs text-slate-400">
                      Cliquez sur l'icône cœur d'un appareil pour l'enregistrer dans votre sélection.
                    </p>
                  </div>
                ) : (
                  <AnimatePresence>
                    {items.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex gap-3 p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg bg-slate-900 border border-slate-800 shrink-0"
                        />

                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div className="flex items-start justify-between gap-1.5">
                            <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                              {product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveFromWishlist(product.id)}
                              className="text-slate-500 hover:text-rose-400 p-1"
                              title="Retirer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <p className="text-xs font-bold text-indigo-400 tabular-nums">
                            {formatPrice(product.priceXAF, currency)}
                          </p>

                          <div className="pt-2">
                            <motion.button
                              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                                onAddToCart(product);
                                onRemoveFromWishlist(product.id);
                              }}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-medium transition-colors"
                            >
                              <ShoppingBag className="w-3 h-3" />
                              <span>Déplacer vers le Panier</span>
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
