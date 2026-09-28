import React from 'react';
import { 
  ShoppingBag, 
  Eye, 
  Heart, 
  MessageSquare, 
  Star, 
  Check 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Product, Currency } from '../types/index.ts';
import { formatPrice, getProductWhatsAppLink } from '../utils/helpers.ts';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) => {
  const whatsAppOrderUrl = getProductWhatsAppLink(product, currency);

  return (
    <motion.article 
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors duration-300 hover:shadow-xl hover:shadow-indigo-950/20"
    >
      {/* Image container: 65-75% visual dominance with solid backdrop */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.classList.add('bg-slate-900', 'p-6', 'flex', 'flex-col', 'items-center', 'justify-center', 'text-slate-400');
            }
          }}
        />

        {/* Quiet status tag */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
          {product.isNew ? (
            <span className="bg-indigo-600/90 text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded tracking-wide uppercase">
              Nouveau
            </span>
          ) : product.oldPriceXAF ? (
            <span className="bg-emerald-600/90 text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded tracking-wide uppercase">
              Promo
            </span>
          ) : (
            <span className="bg-slate-900/80 backdrop-blur-sm text-slate-300 text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded border border-slate-700/60">
              Certifié
            </span>
          )}
        </div>

        {/* Wishlist Button with Motion tap */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 p-2 rounded-lg backdrop-blur-md transition-colors ${
            isWishlisted
              ? 'bg-rose-500/90 text-white'
              : 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-900'
          }`}
          aria-label={isWishlisted ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </motion.button>

        {/* Quick View Hover Trigger (desktop hover, visible button on mobile/touch) */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-x-3 bottom-2.5 sm:inset-x-4 sm:bottom-3 z-10 py-2 bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg backdrop-blur-sm border border-slate-700 flex items-center justify-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200"
        >
          <Eye className="w-3.5 h-3.5 text-indigo-400" />
          <span>Fiche Technique</span>
        </button>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-5">
        {/* Unboxed Metadata with typographic separator */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
          <span className="uppercase tracking-wider font-medium text-[10px] sm:text-[11px] text-slate-400">
            {product.brand}
          </span>
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-semibold text-slate-200 text-xs tabular-nums">{product.rating}</span>
            <span className="text-slate-500 text-[10px] sm:text-[11px]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => onQuickView(product)}
          className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-400 transition-colors cursor-pointer line-clamp-1 mb-1"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Short Specs / Highlights */}
        <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">
          {product.shortDesc}
        </p>

        {/* Price & Stock Container */}
        <div className="mt-auto pt-2.5 sm:pt-3 border-t border-slate-800/80 flex items-baseline justify-between mb-3.5">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-bold text-white tabular-nums">
              {formatPrice(product.priceXAF, currency)}
            </span>
            {product.oldPriceXAF && (
              <span className="text-xs text-slate-500 line-through tabular-nums hidden xs:inline">
                {formatPrice(product.oldPriceXAF, currency)}
              </span>
            )}
          </div>
          <span className="text-[10px] sm:text-[11px] font-medium text-emerald-400 flex items-center gap-1 shrink-0">
            <Check className="w-3 h-3" />
            <span>En stock ({product.stockCount})</span>
          </span>
        </div>

        {/* Action Buttons: Add to cart & Direct WhatsApp order */}
        <div className="grid grid-cols-2 gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 sm:px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Panier</span>
          </motion.button>

          <motion.a
            whileTap={{ scale: 0.95 }}
            href={whatsAppOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 sm:px-3 bg-slate-800 hover:bg-slate-700 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 rounded-lg text-xs font-semibold transition-colors"
            title="Commander via WhatsApp avec LONTIO KESSEL"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};
