'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { cartCount, setCartOpen } = useCart();
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
    { label: 'Featured', href: '#featured' },
    { label: 'Menu', href: '#menu' },
    { label: 'Custom Cakes', href: '#custom-cakes' },
    // { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled shadow-md' : ''}`}>
        <div className="navbar-container container">
          {/* Logo */}
          <a href="#home" className="navbar-logo">
            <span className="logo-dessert">Dessert</span>
            <span className="logo-groove">Groove</span>
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
              className="cart-toggle-btn" 
              onClick={() => setCartOpen(true)}
              aria-label="Open Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="cart-badge flex-center">{cartCount}</span>
              )}
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
            <span className="logo-dessert">Dessert</span>
            <span className="logo-groove">Groove</span>
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
