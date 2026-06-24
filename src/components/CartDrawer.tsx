'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    setCartOpen, 
    updateQuantity, 
    removeFromCart, 
    cartTotal,
    triggerWhatsAppOrder 
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="cart-drawer-root">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="cart-drawer-backdrop"
            onClick={() => setCartOpen(false)}
          />

          {/* Cart Sidebar Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="cart-drawer-panel"
          >
            {/* Header */}
            <div className="cart-drawer-header">
              <div className="flex-center" style={{ gap: '8px' }}>
                <ShoppingBag size={20} className="gold-text" />
                <h2 className="cart-drawer-title">Your Order Cart</h2>
              </div>
              <button 
                onClick={() => setCartOpen(false)}
                className="cart-drawer-close"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="cart-drawer-content">
              {cart.length === 0 ? (
                /* Empty Cart State */
                <div className="cart-empty-state flex-center">
                  <div className="empty-icon-wrapper flex-center animate-float">
                    <ShoppingBag size={48} className="gold-text" />
                  </div>
                  <h3 className="empty-title">Your Cart is Empty</h3>
                  <p className="empty-text">
                    Browse our categories and add fresh baked items to your order.
                  </p>
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="btn-primary"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                /* Items List */
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <div key={item.product.id} className="cart-item-card">
                      {/* Thumbnail */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="cart-item-thumb"
                      />
                      
                      {/* Details */}
                      <div className="cart-item-info">
                        <h4 className="cart-item-name">{item.product.name}</h4>
                        <span className="cart-item-price">₹{item.product.price} each</span>
                        
                        <div className="cart-item-controls">
                          {/* Qty Adjustment */}
                          <div className="cart-qty-selector">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="cart-qty-btn"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="cart-qty-val">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="cart-qty-btn"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          
                          {/* Trash Delete */}
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="cart-delete-btn"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Line Item Total */}
                      <div className="cart-item-total">
                        ₹{item.product.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Order Box */}
            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-summary-row">
                  <span className="summary-label">Estimated Total</span>
                  <span className="summary-total">₹{cartTotal}</span>
                </div>
                <p className="cart-summary-note">
                  Taxes &amp; delivery charges are calculated upon order confirmation.
                </p>
                <button
                  onClick={triggerWhatsAppOrder}
                  className="cart-place-order-btn pulse-gold"
                >
                  <span>Place Order on WhatsApp</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
