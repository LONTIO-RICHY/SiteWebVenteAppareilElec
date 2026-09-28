import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  MessageSquare, 
  Heart, 
  ShieldCheck, 
  Truck, 
  Star, 
  Check, 
  RotateCcw, 
  Plus, 
  Minus,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, Currency, CREATOR_INFO } from '../types/index.ts';
import { formatPrice, getProductWhatsAppLink } from '../utils/helpers.ts';

interface ProductDetailModalProps {
  product: Product | null;
  currency: Currency;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (p: Product) => void;
  onAddToCart: (p: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const whatsAppUrl = getProductWhatsAppLink(product, currency);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-8">
        {/* Click outside to close backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0" 
          onClick={onClose}
        />

        {/* Modal Dialog Card with spring animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8"
        >
          {/* Top Header bar with close button */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 bg-slate-950/80">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="uppercase tracking-wider font-semibold text-indigo-400">
                {product.brand}
              </span>
              <span>·</span>
              <span>Réf: {product.id}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Copier le lien"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body: Split view (Image + Contiguous Purchase Module) */}
          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[82vh] overflow-y-auto">
            {/* Left Column: Visual Showcase */}
            <div className="md:col-span-6 bg-slate-950 p-5 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 mb-5 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-md transition-colors ${
                    isWishlisted ? 'bg-rose-500 text-white' : 'bg-slate-900/80 text-slate-300 hover:text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Service & Guarantee Badges */}
              <div className="space-y-2.5 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{product.warranty}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Expédition express 24/48h avec suivi par WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <RotateCcw className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Contrôle qualité systématique avant expédition</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contiguous Purchase Module & Specifications */}
            <div className="md:col-span-6 p-5 sm:p-8 flex flex-col justify-between bg-slate-900">
              <div>
                {/* Reviews and Ratings */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-300 tabular-nums">
                    {product.rating} / 5
                  </span>
                  <span className="text-xs text-slate-500">({product.reviewsCount} avis)</span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-display">
                  {product.name}
                </h2>

                {/* Pricing & Stock */}
                <div className="flex items-baseline gap-2 sm:gap-3 mb-4 pb-3 sm:pb-4 border-b border-slate-800">
                  <span className="text-xl sm:text-3xl font-bold text-white tabular-nums">
                    {formatPrice(product.priceXAF, currency)}
                  </span>
                  {product.oldPriceXAF && (
                    <span className="text-xs sm:text-sm text-slate-500 line-through tabular-nums">
                      {formatPrice(product.oldPriceXAF, currency)}
                    </span>
                  )}
                  <span className="ml-auto text-xs font-medium text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>En stock ({product.stockCount})</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Technical Specifications Sheet */}
                <div className="mb-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Spécifications Techniques
                  </h3>
                  <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-2.5 sm:p-3 space-y-1.5">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-xs py-1 border-b border-slate-800/60 last:border-0">
                        <span className="text-slate-400 font-medium">{key}</span>
                        <span className="text-slate-200 text-right font-normal pl-3">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Purchase Controls with responsive buttons */}
              <div className="pt-3 sm:pt-4 border-t border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-center border border-slate-700 rounded-lg bg-slate-950 px-2 py-1.5 shrink-0">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="p-1 text-slate-400 hover:text-white disabled:opacity-40 transition-colors"
                      aria-label="Diminuer la quantité"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-sm font-semibold text-white tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      disabled={quantity >= product.stockCount}
                      className="p-1 text-slate-400 hover:text-white disabled:opacity-40 transition-colors"
                      aria-label="Augmenter la quantité"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-indigo-950/40"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Ajouter au Panier ({formatPrice(product.priceXAF * quantity, currency)})</span>
                  </motion.button>
                </div>

                {/* Direct WhatsApp Ordering */}
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 rounded-lg text-xs sm:text-sm font-semibold transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">Commander avec {CREATOR_INFO.name} sur WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
