'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CATEGORIES, MENU_DATA, MenuItem } from '../data/menu';
import { Minus, Plus, ShoppingBag, Eye } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { addToCart, setActiveDetailsProduct } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('cakes');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const filteredItems = MENU_DATA.filter((item) => item.category === activeCategory);

  const getQuantity = (id: string) => quantities[id] || 1;

  const handleIncrement = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const handleAddToCart = (item: MenuItem) => {
    const qty = getQuantity(item.id);
    addToCart(item, qty);
    
    // Reset quantity back to 1 after adding to cart
    setQuantities((prev) => ({
      ...prev,
      [item.id]: 1,
    }));

    // Toast/Feedback effect can be handled or we can just open the cart
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Fresh From The Oven</span>
          <h2 className="section-title">Explore Our Menu</h2>
          <div className="section-divider" />
          <p className="section-description">
            Browse our full bakery selection. All items are baked-to-order to ensure absolute freshness.
          </p>
        </div>

        {/* Tab List */}
        <div className="category-tabs-wrapper">
          <div className="category-tabs">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span className="tab-icon">{cat.icon}</span>
                  <span className="tab-name">{cat.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="active-tab-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="menu-products-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="menu-product-card card-hover"
              >
                <div 
                  className="product-image-container"
                  onClick={() => setActiveDetailsProduct(item)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-card-image"
                    loading="lazy"
                  />
                  <div className="product-image-hover flex-center">
                    <button className="preview-icon-btn" aria-label="Quick View">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>

                <div className="product-card-details">
                  <h3 
                    className="product-card-name"
                    onClick={() => setActiveDetailsProduct(item)}
                  >
                    {item.name}
                  </h3>
                  <p className="product-card-desc">{item.description}</p>
                  
                  <div className="product-card-pricing-block">
                    <span className="product-price">₹{item.price}</span>
                    <span className="product-unit"> / {item.unit}</span>
                  </div>

                  <div className="product-card-actions">
                    {/* Quantity Selector */}
                    <div className="qty-selector">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="qty-btn"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="qty-value">{getQuantity(item.id)}</span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="qty-btn"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Order Button */}
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="add-to-cart-btn"
                    >
                      <ShoppingBag size={14} />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
