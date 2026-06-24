'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronDown, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const generalWhatsappLink = 'https://wa.me/919158555032?text=Hi%20Dessert%20Groove,%20I\'d%20like%20to%20inquire%20about%20ordering%20some%20delicious%20cakes%20and%20desserts!';

  return (
    <section id="home" className="hero-section">
      {/* Background Image with Dark Overlay */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-container container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            Artisan Baking from the Heart
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-rating-wrapper"
          >
            <div className="hero-rating-stars flex-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="star-filled" />
              ))}
            </div>
            <span className="hero-rating-text">
              Rated <strong>5/5</strong>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Freshly Baked Cakes,<br />Desserts &amp; Artisan Breads
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Pre-Order Only • Customized Cakes • Corporate Orders
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-actions"
          >
            <a href="#menu" className="btn-primary">
              Explore Menu
            </a>
            <a 
              href={generalWhatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              <ShoppingBag size={18} />
              Order on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-quick-menu-link-wrapper"
          >
            <a href="#quick-menu" className="hero-quick-menu-link">
              ⚡ Looking for a fast price list? View Quick Menu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <a href="#featured" className="animate-float" aria-label="Scroll Down">
          <ChevronDown size={28} className="gold-text" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
