'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export const ProductModal: React.FC = () => {
  const { activeDetailsProduct, setActiveDetailsProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Reset quantity when modal opens for a new product
  useEffect(() => {
    if (activeDetailsProduct) {
      setQuantity(1);
    }
  }, [activeDetailsProduct]);

  if (!activeDetailsProduct) return null;

  const product = activeDetailsProduct;

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => Math.max(1, q - 1));

  const handleAdd = () => {
    addToCart(product, quantity);
    setActiveDetailsProduct(null);
  };

  return (
    <AnimatePresence>
      <div className="modal-root">
        {/* Overlay backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-backdrop"
          onClick={() => setActiveDetailsProduct(null)}
        />

        {/* Modal Container */}
        <div className="modal-container-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="modal-box"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveDetailsProduct(null)}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-content-grid">
              {/* Product Large Image */}
              <div className="modal-image-pane">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="modal-large-img"
                />
              </div>

              {/* Product Info Pane */}
              <div className="modal-info-pane">
                <span className="modal-product-category">
                  {product.category.replace('-', ' ')}
                </span>
                <h2 className="modal-product-name">{product.name}</h2>
                <div className="modal-product-divider" />
                <p className="modal-product-desc">{product.description}</p>

                <div className="modal-price-section">
                  <span className="modal-price-label">Price</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span className="modal-price-value">₹{product.price}</span>
                    <span className="modal-price-unit" style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>/ {product.unit}</span>
                  </div>
                </div>

                <div className="modal-actions-section">
                  <span className="modal-qty-label">Quantity</span>
                  <div className="modal-actions-row">
                    {/* Quantity Adjustment */}
                    <div className="modal-qty-box">
                      <button
                        onClick={handleDecrement}
                        className="modal-qty-btn"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="modal-qty-num">{quantity}</span>
                      <button
                        onClick={handleIncrement}
                        className="modal-qty-btn"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Add Button */}
                    <button onClick={handleAdd} className="modal-add-action-btn">
                      <ShoppingBag size={18} />
                      <span>Add to Order (₹{product.price * quantity})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;
