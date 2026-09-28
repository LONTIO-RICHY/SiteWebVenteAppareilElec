import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  X, 
  MessageSquare, 
  ChevronDown,
  Menu,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Currency, CREATOR_INFO, CategoryId } from '../types/index.ts';

interface HeaderProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  currentCategory?: CategoryId | 'home';
  onNavigateHome: () => void;
  onSelectCategory: (cat: CategoryId) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onCurrencyChange,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  onSearchChange,
  currentCategory = 'home',
  onNavigateHome,
  onSelectCategory,
  onOpenContact,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: CategoryId; label: string }[] = [
    { id: 'fans', label: 'Ventilateurs' },
    { id: 'fridges', label: 'Réfrigérateurs' },
    { id: 'phones', label: 'Téléphones' },
    { id: 'lighting', label: 'Ampoules LED' },
    { id: 'machines', label: 'Machines & PC' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      {/* Top announcement bar - Responsive avec masquage adaptatif */}
      <div className="bg-slate-900 border-b border-slate-800/80 px-3 sm:px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium shrink-0 text-[11px] sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Officiel
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="truncate text-slate-400 text-[11px] sm:text-xs">
              Livraison rapide au Cameroun · Garantie 1 à 2 ans
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-xs">
            <a
              href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors text-[11px] sm:text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline">WhatsApp :</span>
              <span>{CREATOR_INFO.whatsappFormatted}</span>
            </a>
            <span className="text-slate-700 hidden lg:inline">|</span>
            <span className="hidden lg:inline text-slate-400 text-[11px]">
              Ingénieur : <strong className="text-slate-200 font-semibold">{CREATOR_INFO.name}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Responsive Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors cursor-pointer"
            aria-label="Menu de navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={onNavigateHome}
            className="flex items-baseline gap-1 sm:gap-1.5 text-left group cursor-pointer"
          >
            <span className="text-lg sm:text-2xl font-bold tracking-tight text-white font-display group-hover:text-indigo-400 transition-colors">
              KESSEL
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-indigo-400">
              TECH
            </span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={onNavigateHome}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              currentCategory === 'home'
                ? 'text-indigo-400 font-semibold border-b-2 border-indigo-500'
                : 'hover:text-white'
            }`}
          >
            Accueil
          </button>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
                currentCategory === item.id
                  ? 'text-indigo-400 font-semibold border-b-2 border-indigo-500'
                  : 'hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Interactive Controls (Search, Currency, Wishlist, Cart) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Search */}
          <div className="relative">
            {showSearchInput ? (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-sm w-56 sm:w-64 shadow-2xl z-20">
                <Search className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1.5" />
                <input
                  type="text"
                  placeholder="Rechercher appareil..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  autoFocus
                  className="bg-transparent text-white placeholder-slate-500 outline-none w-full text-xs"
                />
                <button
                  onClick={() => {
                    setShowSearchInput(false);
                    onSearchChange('');
                  }}
                  className="text-slate-400 hover:text-white ml-1 p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearchInput(true)}
                className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors cursor-pointer"
                title="Rechercher"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>

          {/* Devise */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdown(!currencyDropdown)}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Changer de devise"
            >
              <span>{currency === 'XAF' ? 'FCFA' : currency}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {currencyDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-slate-900 border border-slate-800 rounded-lg shadow-xl py-1 z-50">
                {(['XAF', 'EUR', 'USD'] as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      onCurrencyChange(cur);
                      setCurrencyDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                      currency === cur
                        ? 'bg-indigo-600/20 text-indigo-400'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {cur === 'XAF' ? 'FCFA (XAF)' : cur === 'EUR' ? 'Euro (€)' : 'USD ($)'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            className="relative p-1.5 sm:p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-900 rounded-lg transition-colors cursor-pointer"
            title="Favoris"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[9px] sm:text-[10px] font-bold w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCart}
            className="relative flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-xs sm:text-sm transition-all shadow-sm shadow-indigo-900/40 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Panier</span>
            <span className="bg-indigo-950/90 text-white text-[11px] sm:text-xs font-bold px-1.5 py-0.2 rounded tabular-nums border border-indigo-400/30">
              {cartCount}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Slide-Over Menu - Accessible et responsive */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-xs bg-slate-900 border-r border-slate-800 p-5 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-white font-display">KESSEL</span>
                    <span className="text-xs font-semibold text-indigo-400">TECH</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
                    Nos Rayons Spécialisés
                  </p>
                  
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>Page d'Accueil</span>
                  </button>

                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectCategory(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        currentCategory === item.id
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-slate-400">4 modèles</span>
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <a
                    href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/80"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct ({CREATOR_INFO.whatsappFormatted})</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-white">{CREATOR_INFO.name}</p>
                <p className="text-[11px] text-slate-400 truncate">{CREATOR_INFO.email}</p>
                <p className="text-[10px] text-slate-500">{CREATOR_INFO.location}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};
