import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  MessageSquare, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Check, 
  Star, 
  Eye
} from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { CategoryId, Product, Currency, CREATOR_INFO } from '../types/index.ts';
import { CATEGORIES_DATA, PRODUCTS } from '../data/products.ts';
import { formatPrice, getProductWhatsAppLink } from '../utils/helpers.ts';

interface DepartmentViewProps {
  categoryId: CategoryId;
  currency: Currency;
  wishlist: Product[];
  onBackToHome: () => void;
  onSelectCategory: (cat: CategoryId) => void;
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (p: Product) => void;
  onViewProduct: (p: Product) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const DepartmentView: React.FC<DepartmentViewProps> = ({
  categoryId,
  currency,
  wishlist,
  onBackToHome,
  onSelectCategory,
  onAddToCart,
  onToggleWishlist,
  onViewProduct,
}) => {
  const currentCategory = CATEGORIES_DATA.find((c) => c.id === categoryId) || CATEGORIES_DATA[0];
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Products in this department
  const departmentProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === categoryId);
  }, [categoryId]);

  // Unique brands in this department
  const brands = useMemo(() => {
    const list = Array.from(new Set(departmentProducts.map((p) => p.brand)));
    return ['all', ...list];
  }, [departmentProducts]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return departmentProducts.filter((p) => {
      if (selectedBrand !== 'all' && p.brand !== selectedBrand) return false;
      if (inStockOnly && !p.inStock) return false;
      return true;
    });
  }, [departmentProducts, selectedBrand, inStockOnly]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8 pb-20 sm:pb-16"
    >
      
      {/* 1. Fil d'Ariane & Bouton de retour à l'accueil */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 sm:pb-4">
        <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBackToHome}
            className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-400" />
            <span>Retour à l'accueil</span>
          </motion.button>
          <span>/</span>
          <span className="text-white font-semibold truncate">{currentCategory.label}</span>
        </div>

        {/* Autres rayons rapides avec défilement tactile horizontal fluide */}
        <div className="flex items-center gap-2 text-xs overflow-x-auto pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          <span className="text-slate-500 hidden md:inline shrink-0">Changer de rayon :</span>
          {CATEGORIES_DATA.map((cat) => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onSelectCategory(cat.id);
                setSelectedBrand('all');
              }}
              className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                cat.id === categoryId
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label.split(' ')[0]}
            </motion.button>
          ))}
        </div>
      </div>

      {/* 2. En-tête de la Page Rayon avec animation et disposition responsive */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 shadow-xl"
      >
        <div className="space-y-2 sm:space-y-3 max-w-2xl">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-indigo-400">
            Rayon Officiel · {departmentProducts.length} Variétés Référencées
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
            {currentCategory.label}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentCategory.tagline}
          </p>
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-emerald-400 pt-1">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Matériel testé, certifié et garanti avec assistance directe de {CREATOR_INFO.name}</span>
          </div>
        </div>

        {/* Badge WhatsApp direct pour ce rayon */}
        <div className="p-3.5 sm:p-4 bg-slate-950 border border-emerald-500/30 rounded-xl text-center shrink-0 w-full md:w-auto">
          <p className="text-[11px] sm:text-xs font-semibold text-slate-300 mb-2">Besoin d'un conseil technique ?</p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL,%20je%20consulte%20le%20rayon%20${encodeURIComponent(currentCategory.label)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors w-full"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuter sur WhatsApp</span>
          </motion.a>
        </div>
      </motion.div>

      {/* 3. Filtres par Marque / Variété - Responsive avec défilement tactile fluide */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-3 sm:p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-3 px-3 sm:mx-0 sm:px-0">
          <span className="text-[11px] sm:text-xs text-slate-400 font-semibold mr-1 shrink-0">Marques :</span>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                selectedBrand === b
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {b === 'all' ? 'Toutes les marques' : b}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none shrink-0 pt-1 sm:pt-0">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="rounded bg-slate-950 border-slate-700 text-indigo-600"
          />
          <span>En stock uniquement</span>
        </label>
      </div>

      {/* 4. Liste directe des Variétés & Modèles commercialisés - 1 col mobile, 2 col desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => {
            const isFav = wishlist.some((p) => p.id === product.id);
            const whatsAppUrl = getProductWhatsAppLink(product, currency);

            return (
              <motion.article
                key={product.id}
                layout
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors flex flex-col justify-between shadow-xl group hover:shadow-2xl hover:shadow-indigo-950/20"
              >
                {/* Photo du modèle spécifique */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-indigo-600/90 text-white text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md uppercase tracking-wider">
                      {product.brand}
                    </span>
                    {product.isNew && (
                      <span className="bg-emerald-600/90 text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 sm:py-1 rounded-md uppercase">
                        Nouveau
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => onToggleWishlist(product)}
                    className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-md transition-colors cursor-pointer ${
                      isFav ? 'bg-rose-500 text-white' : 'bg-slate-900/80 text-slate-300 hover:text-white'
                    }`}
                    aria-label="Ajouter aux favoris"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                  </motion.button>
                </div>

                {/* Informations Détaillées du Produit */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] sm:text-xs text-slate-400 font-medium">{product.brand} · Réf: {product.id}</span>
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-semibold text-slate-200">{product.rating}</span>
                        <span className="text-slate-500">({product.reviewsCount} avis)</span>
                      </div>
                    </div>

                    <h3 
                      onClick={() => onViewProduct(product)}
                      className="text-base sm:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors cursor-pointer font-display leading-snug"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Spécifications techniques complètes visibles */}
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 sm:p-3.5 space-y-1.5 text-xs">
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Spécifications Clés :
                    </p>
                    {Object.entries(product.specs).slice(0, 4).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-0.5 border-b border-slate-900 last:border-0 text-[11px] sm:text-xs">
                        <span className="text-slate-400 font-medium shrink-0">{key}</span>
                        <span className="text-slate-200 text-right font-normal pl-2 truncate">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Prix, Stock & Garantie */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-baseline justify-between gap-2">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg sm:text-2xl font-bold text-white tabular-nums">
                          {formatPrice(product.priceXAF, currency)}
                        </span>
                        {product.oldPriceXAF && (
                          <span className="text-[11px] sm:text-xs text-slate-500 line-through tabular-nums">
                            {formatPrice(product.oldPriceXAF, currency)}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">{product.warranty}</p>
                    </div>

                    <span className="text-[11px] sm:text-xs font-medium text-emerald-400 flex items-center gap-1 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                      <span>En stock ({product.stockCount})</span>
                    </span>
                  </div>

                  {/* Actions directes : Panier & WhatsApp (Responsive avec empilement intelligent sur mobile) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => onAddToCart(product)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shadow-md shadow-indigo-950/40 w-full"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Ajouter au Panier</span>
                    </motion.button>

                    <motion.a
                      whileTap={{ scale: 0.96 }}
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-950 hover:bg-slate-800 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 rounded-xl text-xs font-semibold transition-colors w-full"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Commander WhatsApp</span>
                    </motion.a>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </motion.div>
  );
};
