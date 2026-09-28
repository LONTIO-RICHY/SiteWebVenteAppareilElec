import React from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Home, 
  MessageSquare, 
  Layers 
} from 'lucide-react';
import { motion } from 'motion/react';
import { CREATOR_INFO } from '../types/index.ts';

interface BottomNavProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onGoHome: () => void;
  onScrollToRayons: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onGoHome,
  onScrollToRayons,
}) => {
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-2 pt-1 pb-[calc(0.4rem+env(safe-area-inset-bottom,0px))]">
      <div className="flex items-center justify-around">
        
        {/* Accueil */}
        <button
          onClick={onGoHome}
          className="flex flex-col items-center justify-center p-1 text-slate-400 hover:text-white transition-colors min-w-[48px] min-h-[44px] cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-medium">Accueil</span>
        </button>

        {/* Rayons / Variétés */}
        <button
          onClick={onScrollToRayons}
          className="flex flex-col items-center justify-center p-1 text-slate-400 hover:text-white transition-colors min-w-[48px] min-h-[44px] cursor-pointer"
        >
          <Layers className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-medium">Rayons</span>
        </button>

        {/* Panier */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center p-1 text-indigo-400 hover:text-indigo-300 transition-colors min-w-[48px] min-h-[44px] cursor-pointer"
        >
          <div className="p-1 bg-indigo-600/20 rounded-lg">
            <ShoppingBag className="w-4 h-4 text-indigo-400" />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Panier</span>
          {cartCount > 0 && (
            <span className="absolute top-0 right-1 bg-indigo-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
              {cartCount}
            </span>
          )}
        </motion.button>

        {/* Favoris */}
        <button
          onClick={onOpenWishlist}
          className="relative flex flex-col items-center justify-center p-1 text-slate-400 hover:text-rose-400 transition-colors min-w-[48px] min-h-[44px] cursor-pointer"
        >
          <Heart className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-medium">Favoris</span>
          {wishlistCount > 0 && (
            <span className="absolute top-0.5 right-1.5 bg-rose-500 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center tabular-nums">
              {wishlistCount}
            </span>
          )}
        </button>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${CREATOR_INFO.whatsapp}?text=Bonjour%20M.%20LONTIO%20KESSEL`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 text-emerald-400 hover:text-emerald-300 transition-colors min-w-[48px] min-h-[44px]"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-medium">WhatsApp</span>
        </a>

      </div>
    </nav>
  );
};
