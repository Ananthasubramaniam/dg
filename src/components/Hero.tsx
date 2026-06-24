'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShoppingBag, ChevronDown, Star } from 'lucide-react';

interface HeroProps {
  startAnimation: boolean;
}

export const Hero: React.FC<HeroProps> = ({ startAnimation }) => {
  const generalWhatsappLink = 'https://wa.me/919158555032?text=Hi%20Dessert%20Groove,%20I\'d%20like%20to%20inquire%20about%20ordering%20some%20delicious%20cakes%20and%20desserts!';

  // 3D Parallax Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const x = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const y = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  return (
    <section 
      id="home" 
      className="hero-section"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const xVal = (e.clientX - rect.left) / width - 0.5;
        const yVal = (e.clientY - rect.top) / height - 0.5;
        mouseX.set(xVal);
        mouseY.set(yVal);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Background Image with Dark Overlay - Animating Zoom + 3D Mouse Parallax */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={startAnimation ? { scale: 1.08, opacity: 1 } : { scale: 1.15, opacity: 0 }}
        transition={{ duration: 6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="hero-bg" 
      />
      <div className="hero-overlay" />

      <div className="hero-container container">
        <div className="hero-content">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="hero-badge"
          >
            Artisan Baking from the Heart
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
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

          {/* Masked Typography Title */}
          <h1 className="hero-title">
            <span className="hero-title-line-wrapper">
              <motion.span 
                initial={{ y: '100%', opacity: 0 }}
                animate={startAnimation ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="hero-title-line"
              >
                Freshly Baked Cakes,
              </motion.span>
            </span>
            <br />
            <span className="hero-title-line-wrapper">
              <motion.span 
                initial={{ y: '100%', opacity: 0 }}
                animate={startAnimation ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                className="hero-title-line"
              >
                Desserts &amp; Artisan Breads
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            className="hero-subtitle"
          >
            Pre-Order Only • Customized Cakes • Corporate Orders
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.85 }}
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

          {/* Quick Menu Link */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
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
