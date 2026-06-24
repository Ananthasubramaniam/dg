'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { MENU_DATA, MenuItem } from '../data/menu';
import { ArrowRight, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const { setActiveDetailsProduct } = useCart();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Get featured products (capped at 8 items)
  const featuredItems = MENU_DATA.filter((item) => item.isFeatured).slice(0, 8);

  const handleViewDetails = (item: MenuItem) => {
    setActiveDetailsProduct(item);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 324; // Card width (300px) + Gap (24px)
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="featured" className="featured-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Chef&apos;s Recommendations</span>
          <h2 className="section-title">Featured Creations</h2>
          <div className="section-divider" />
          <p className="section-description">
            Discover our hand-selected favorites, crafted daily with high-quality ingredients and a dash of bakery magic.
          </p>
        </div>

        <div className="featured-carousel-wrapper">
          <button 
            onClick={() => scroll('left')} 
            className="carousel-nav-btn prev flex-center"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div ref={carouselRef} className="featured-carousel-container">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="featured-card card-hover"
              >
                <div className="card-image-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="card-image"
                    loading="lazy"
                  />
                  <div className="card-image-overlay flex-center">
                    <button 
                      onClick={() => handleViewDetails(item)}
                      className="view-overlay-btn"
                    >
                      <Eye size={18} />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <span className="card-category">{item.category.replace('-', ' ')}</span>
                  <h3 className="card-name">{item.name}</h3>
                  <p className="card-description">{item.description}</p>
                  <div className="card-footer">
                    <div className="card-price">
                      <span className="price-amount">₹{item.price}</span>
                      <span className="price-unit"> / {item.unit}</span>
                    </div>
                    <button 
                      onClick={() => handleViewDetails(item)} 
                      className="card-action-btn"
                    >
                      <span>Order Now</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')} 
            className="carousel-nav-btn next flex-center"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="featured-more text-center">
          <a href="#menu" className="btn-secondary">
            Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
