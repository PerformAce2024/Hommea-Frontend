'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Hero from './Hero';
import FeaturedProperty from './FeaturedProperty';

export default function HeroFeaturedToggle() {
  const [showFeatured, setShowFeatured] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHeroClick = () => {
    setShowFeatured(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', section: 'hero', isFeatured: false },
    { name: 'Featured Properties', section: 'featured', isFeatured: true },
    { name: 'Recommended', section: 'recommended', isFeatured: false },
    { name: "I'm Looking to", section: 'looking', isFeatured: false },
  ];

  const handleNavClick = (isFeatured: boolean) => {
    setShowFeatured(isFeatured);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Shared Menu Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-primary-brown/90 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-bold text-text-primary">HOMMEA</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
                  <X size={24} className="text-text-primary" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.section}
                    onClick={() => handleNavClick(link.isFeatured)}
                    className={`text-left text-lg font-medium py-3 px-4 rounded-lg transition-all ${
                      showFeatured === link.isFeatured
                        ? 'bg-text-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {!showFeatured ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Hero onHeroClick={handleHeroClick} onMenuToggle={toggleMenu} />
          </motion.div>
        ) : (
          <motion.div
            key="featured"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <FeaturedProperty onMenuToggle={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
