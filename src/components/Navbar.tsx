'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu as MenuIcon, X, CheckCircle } from 'lucide-react';

interface NavbarProps {
  startAnimation?: boolean;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { cartCount, setCartOpen, toastMessage } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Menu', href: '#quick-menu' },
    { label: 'Custom Cakes', href: '#custom-cakes' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="toast-notification flex-center"
          >
            <CheckCircle size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="navbar-header">
        <div className="navbar-container container">
          {/* Logo */}
          <a href="#home" className="navbar-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Dessert Groove Logo" className="header-logo-img" />
            <span className="logo-text-wrapper">
              <span className="logo-dessert">Dessert</span>
              <span className="logo-groove">Groove</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Cart & Mobile Toggle */}
          <div className="navbar-actions">
            <button 
              className={`cart-toggle-btn ${cartCount > 0 ? 'has-items' : ''}`} 
              onClick={() => setCartOpen(true)}
              aria-label="View Shopping Cart"
            >
              <ShoppingBag size={20} />
              <span className="cart-btn-label">
                {cartCount > 0 ? `View Cart (${cartCount})` : 'Cart'}
              </span>
            </button>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <a href="#home" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Dessert Groove Logo" className="header-logo-img" />
            <span className="logo-text-wrapper">
              <span className="logo-dessert">Dessert</span>
              <span className="logo-groove">Groove</span>
            </span>
          </a>
          <button className="close-drawer-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button 
            className="mobile-cart-action-btn"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setCartOpen(true);
            }}
          >
            <ShoppingBag size={18} />
            <span>View Cart ({cartCount})</span>
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="drawer-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
};
export default Navbar;
