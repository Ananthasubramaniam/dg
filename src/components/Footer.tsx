'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Mail, Phone, Clock, MapPin, MessageSquare, ShoppingBag, ArrowUp } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer: React.FC = () => {
  const { cartCount, setCartOpen } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappNumber = '919158555032';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Dessert%20Groove,%20I'd%20like%20to%20place%20an%20order!`;
  const orderWhatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi,%20I'd%20like%20to%20order`;
  const instagramUrl = 'https://instagram.com/dessert_groove'; // Placeholder link

  const instagramImages = [
    { url: '/images/brownies.png', alt: 'Fresh out of the oven fudgy chocolate brownies' },
    { url: '/images/cheesecakes.png', alt: 'Creamy cold set strawberry cheesecakes' },
    { url: '/images/cookies.png', alt: 'Premium chocolate chip cookies with sea salt sprinkles' },
    { url: '/images/chocolate_cake.png', alt: 'Triple layer Belgian chocolate ganache custom cake' }
  ];

  return (
    <>
      <footer id="contact" className="footer-area">
        {/* Instagram Section */}
        <div className="instagram-section container">
          <div className="instagram-header text-center">
            <InstagramIcon size={24} className="gold-text mb-2" />
            <h3 className="instagram-title">Follow Us On Instagram</h3>
            <p className="instagram-subtitle">
              Get behind-the-scenes glimpses of Chef Subha Srihari&apos;s kitchen: <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="gold-text">@dessert_groove</a>
            </p>
          </div>
          
          <div className="instagram-grid">
            {instagramImages.map((img, idx) => (
              <a 
                key={idx} 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="instagram-item card-hover"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt={img.alt} className="instagram-img" loading="lazy" />
                <div className="instagram-overlay flex-center">
                  <InstagramIcon size={28} className="instagram-hover-icon" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Top: Main Contact Block */}
        <div className="footer-top">
          <div className="container footer-top-grid">
            {/* About Block */}
            <div className="footer-col about-col">
              <a href="#home" className="footer-logo">
                <span className="logo-dessert">Dessert</span>
                <span className="logo-groove">Groove</span>
              </a>
              <p className="about-text">
                Crafting premium, bespoke cakes, gourmet dessert jars, and overnight fermented artisan sourdough breads. Every order is customized and baked fresh in Pune.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-col links-col">
              <h4 className="footer-col-title">Browse</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#featured">Featured</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#custom-cakes">Custom Cakes</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="footer-col contact-col">
              <h4 className="footer-col-title">Get In Touch</h4>
              <ul className="contact-details-list">
                <li className="contact-detail-item">
                  <MapPin size={18} className="gold-text shrink-0" />
                  <span>Shop no 104, 1st floor, Park Street, Wakad, Pimpri-Chinchwad, Maharashtra 411057</span>
                </li>
                <li className="contact-detail-item">
                  <Phone size={18} className="gold-text shrink-0" />
                  <a href={`tel:+919158555032`}>+91 9158555032</a>
                </li>
                <li className="contact-detail-item">
                  <Mail size={18} className="gold-text shrink-0" />
                  <a href="mailto:subhalaskhmi.ganesan@gmail.com">subhalaskhmi.ganesan@gmail.com</a>
                </li>
                <li className="contact-detail-item">
                  <Clock size={18} className="gold-text shrink-0" />
                  <span>Pre-order: 24/7 • Kitchen: 10 AM - 8 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container footer-bottom-flex">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Dessert Groove Bakery. Handcrafted with love in Pune.
            </p>
            <p className="developer-tag">
              Designed with premium aesthetics.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      
      {/* Floating WhatsApp Chat Button */}
      <a
        href={orderWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn pulse-gold flex-center"
        aria-label="Order on WhatsApp"
      >
        <MessageSquare size={20} />
        <span className="whatsapp-btn-label">Order</span>
      </a>

      {/* Sticky Bottom Order Cart Button (Visible on mobile/scroll when cart contains items) */}
      {cartCount > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="sticky-cart-btn flex-center card-hover"
          aria-label="View shopping cart"
        >
          <ShoppingBag size={20} />
          <span className="sticky-cart-count flex-center">{cartCount}</span>
        </button>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn flex-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default Footer;
