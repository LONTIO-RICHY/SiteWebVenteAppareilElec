import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Search, 
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Product, 
  CartItem, 
  Currency, 
  CategoryId, 
  AppView 
} from './types/index.ts';
import { PRODUCTS } from './data/products.ts';
import { Header } from './components/Header.tsx';
import { HomeView } from './views/HomeView.tsx';
import { DepartmentView } from './views/DepartmentView.tsx';
import { ProductDetailView } from './views/ProductDetailView.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { WishlistDrawer } from './components/WishlistDrawer.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { BottomNav } from './components/BottomNav.tsx';
import { Footer } from './components/Footer.tsx';
import { ProductCard } from './components/ProductCard.tsx';
import { PageLoader } from './components/PageLoader.tsx';
import { NavigationProgressBar } from './components/NavigationProgressBar.tsx';

export default function App() {
  // Initial Page Loader state
  const [isSiteLoading, setIsSiteLoading] = useState(true);

  // Navigation View State
  const [view, setView] = useState<AppView>({ page: 'home' });

  // Preferences & Currency
  const [currency, setCurrency] = useState<Currency>('XAF');
  const [searchQuery, setSearchQuery] = useState('');

  // Cart & Wishlist persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kessel_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('kessel_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('kessel_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('kessel_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Scroll to top smoothly when route/view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  // Cart Actions
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`${product.name} ajouté au panier`);
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Actions
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`${product.name} retiré des favoris`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`${product.name} ajouté aux favoris`);
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  };

  // Search Results
  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter((p) => {
        const q = searchQuery.toLowerCase().trim();
        return (
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      })
    : [];

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  // Compute a unique key for the page transition
  const currentViewKey = 
    view.page === 'home' 
      ? 'page-home' 
      : view.page === 'category' 
      ? `page-category-${view.categoryId}` 
      : `page-product-${view.productId}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* 1. Initial High-Tech Site Loader */}
      {isSiteLoading && (
        <PageLoader onComplete={() => setIsSiteLoading(false)} />
      )}

      {/* 2. Top Navigation Route Progress Bar */}
      <NavigationProgressBar view={view} />

      {/* 3. Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 sm:bottom-20 left-1/2 z-50 bg-slate-900 border border-indigo-500/50 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-2xl flex items-center gap-2 max-w-[90vw] truncate"
          >
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Global Sticky Header */}
      <Header
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentCategory={view.page === 'category' ? view.categoryId : view.page === 'home' ? 'home' : undefined}
        onNavigateHome={() => {
          setSearchQuery('');
          setView({ page: 'home' });
        }}
        onSelectCategory={(cat) => {
          setSearchQuery('');
          setView({ page: 'category', categoryId: cat });
        }}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 5. Main View Router with Smooth Page Transitions */}
      {searchQuery.trim() ? (
        /* Global Search Results View */
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Résultats pour : "{searchQuery}"
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {searchResults.length} appareil(s) trouvé(s)
              </p>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 rounded-lg border border-slate-800"
            >
              <X className="w-3.5 h-3.5" />
              <span>Fermer la recherche</span>
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/50 rounded-2xl p-6">
              <p className="text-sm font-semibold text-white">Aucun appareil ne correspond à votre recherche</p>
              <p className="text-xs text-slate-400 mt-1">Essayez un autre mot-clé ou parcourez nos rayons.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currency}
                  isWishlisted={wishlist.some((p) => p.id === product.id)}
                  onToggleWishlist={handleToggleWishlist}
                  onAddToCart={handleAddToCart}
                  onQuickView={(p) => setView({ page: 'product', productId: p.id })}
                />
              ))}
            </div>
          )}
        </main>
      ) : (
        /* Animated Multi-Page Transition Container */
        <main className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {view.page === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <HomeView
                  currency={currency}
                  onSelectCategory={(cat) => setView({ page: 'category', categoryId: cat })}
                  onOpenContact={() => setIsContactOpen(true)}
                />
              </motion.div>
            )}

            {view.page === 'category' && (
              <motion.div
                key={`category-${view.categoryId}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <DepartmentView
                  categoryId={view.categoryId}
                  currency={currency}
                  wishlist={wishlist}
                  onBackToHome={() => setView({ page: 'home' })}
                  onSelectCategory={(cat) => setView({ page: 'category', categoryId: cat })}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                  onViewProduct={(p) => setView({ page: 'product', productId: p.id })}
                />
              </motion.div>
            )}

            {view.page === 'product' && (
              <motion.div
                key={`product-${view.productId}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductDetailView
                  productId={view.productId}
                  currency={currency}
                  wishlist={wishlist}
                  onBackToCategory={(cat) => setView({ page: 'category', categoryId: cat })}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                  onSelectProduct={(p) => setView({ page: 'product', productId: p.id })}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      )}

      {/* 6. Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSearchQuery('');
          setView({ page: 'category', categoryId: cat });
        }}
        onGoHome={() => {
          setSearchQuery('');
          setView({ page: 'home' });
        }}
      />

      {/* 7. Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* 8. Mobile Sticky Bottom Navigation */}
      <BottomNav
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onGoHome={() => {
          setSearchQuery('');
          setView({ page: 'home' });
        }}
        onScrollToRayons={() => {
          if (view.page !== 'home') {
            setView({ page: 'home' });
            setTimeout(() => {
              const el = document.getElementById('rayons');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            const el = document.getElementById('rayons');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* 9. Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        currency={currency}
        onAddToCart={handleAddToCart}
        onRemoveFromWishlist={handleRemoveFromWishlist}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        currency={currency}
        onOrderCompleted={() => handleClearCart()}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
