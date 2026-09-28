import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ShoppingBag, 
  MessageSquare, 
  Heart, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Star, 
  Plus, 
  Minus,
  Share2
} from 'lucide-react';
import { motion } from 'motion/react';
import { Product, Currency, CategoryId, CREATOR_INFO } from '../types/index.ts';
import { PRODUCTS, CATEGORIES_DATA } from '../data/products.ts';
import { formatPrice, getProductWhatsAppLink } from '../utils/helpers.ts';

interface ProductDetailViewProps {
  productId: string;
  currency: Currency;
  wishlist: Product[];
  onBackToCategory: (cat: CategoryId) => void;
  onAddToCart: (p: Product, quantity: number) => void;
  onToggleWishlist: (p: Product) => void;
  onSelectProduct: (p: Product) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  productId,
  currency,
  wishlist,
  onBackToCategory,
  onAddToCart,
  onToggleWishlist,
  onSelectProduct,
}) => {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const currentCategory = CATEGORIES_DATA.find((c) => c.id === product.category);
  const isWishlisted = wishlist.some((p) => p.id === product.id);
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const whatsAppUrl = getProductWhatsAppLink(product, currency);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-10 pb-24 sm:pb-16"
    >
      
      {/* 1. Fil d'Ariane & Retour */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 sm:pb-4 gap-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onBackToCategory(product.category)}
          className="hover:text-white transition-colors flex items-center gap-2 text-xs text-slate-400 font-medium cursor-pointer truncate"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-400 shrink-0" />
          <span className="truncate">Retour au rayon {currentCategory?.label}</span>
        </motion.button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
        >
          {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
          <span className="hidden xs:inline">{copiedLink ? 'Lien copié' : 'Partager'}</span>
        </button>
      </div>

      {/* 2. Contiguous Purchase Module (Fiche Produit Complète Responsive) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl"
      >
        
        {/* Colonne Gauche : Grande Image & Engagements */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => onToggleWishlist(product)}
              className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-xl backdrop-blur-md transition-colors cursor-pointer ${
                isWishlisted ? 'bg-rose-500 text-white' : 'bg-slate-900/80 text-slate-300 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </motion.button>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-300 text-center sm:text-left">
            <div className="p-2 sm:p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">Garantie 2 ans</span>
            </div>
            <div className="p-2 sm:p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5">
              <Truck className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="truncate">Livraison 24h</span>
            </div>
            <div className="p-2 sm:p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5">
              <RotateCcw className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="truncate">Testé avant envoi</span>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Spécifications, Tarification & Commande */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-indigo-400">
                {product.brand} · Réf: {product.id}
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs shrink-0">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                <span className="font-semibold text-slate-200">{product.rating}</span>
                <span className="text-slate-500 hidden xs:inline">({product.reviewsCount} avis)</span>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display leading-snug">
              {product.name}
            </h1>

            {/* Prix & Stock */}
            <div className="flex items-baseline gap-3 pb-3 sm:pb-4 border-b border-slate-800 flex-wrap">
              <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {formatPrice(product.priceXAF, currency)}
              </span>
              {product.oldPriceXAF && (
                <span className="text-xs sm:text-sm text-slate-500 line-through tabular-nums">
                  {formatPrice(product.oldPriceXAF, currency)}
                </span>
              )}
              <span className="ml-auto text-xs font-medium text-emerald-400 flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>En stock ({product.stockCount})</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Tableau complet des spécifications */}
            <div className="space-y-2">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Fiche Technique Officielle
              </h3>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 sm:p-4 space-y-1.5 sm:space-y-2 text-xs">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-0.5 sm:py-1 border-b border-slate-900 last:border-0 text-[11px] sm:text-xs">
                    <span className="text-slate-400 font-medium shrink-0">{key}</span>
                    <span className="text-slate-200 text-right font-normal pl-3 truncate">{val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Boutons d'achat - 100% Responsive et confort tactile */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center justify-center border border-slate-700 rounded-xl bg-slate-950 px-3 py-2 shrink-0 self-center sm:self-auto w-36 sm:w-auto">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="p-1.5 text-slate-400 hover:text-white disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-semibold text-white tabular-nums">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  disabled={quantity >= product.stockCount}
                  className="p-1.5 text-slate-400 hover:text-white disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-lg shadow-indigo-950/50"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ajouter au Panier ({formatPrice(product.priceXAF * quantity, currency)})</span>
              </motion.button>
            </div>

            <motion.a
              whileTap={{ scale: 0.97 }}
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-950 hover:bg-slate-800 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Commander avec {CREATOR_INFO.name} sur WhatsApp</span>
            </motion.a>
          </div>

        </div>

      </motion.div>

      {/* 3. Autres variétés dans ce rayon */}
      {relatedProducts.length > 0 && (
        <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
          <h2 className="text-lg sm:text-xl font-bold text-white font-display">
            Autres modèles disponibles dans le rayon {currentCategory?.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedProducts.map((rel) => (
              <motion.div
                key={rel.id}
                whileHover={{ y: -4 }}
                onClick={() => onSelectProduct(rel)}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden p-3.5 sm:p-4 cursor-pointer transition-all flex items-center gap-3.5 group shadow-md"
              >
                <img
                  src={rel.image}
                  alt={rel.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl bg-slate-950 shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs text-indigo-400 font-semibold">{rel.brand}</p>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-indigo-400 transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-white mt-1 tabular-nums">
                    {formatPrice(rel.priceXAF, currency)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

    </motion.div>
  );
};
