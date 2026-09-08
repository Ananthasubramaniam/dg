'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../data/menu';
import { X, Minus, Plus, ShoppingBag, Sparkles, Check, Flame, ShieldCheck, PieChart } from 'lucide-react';

interface PizzaBuilderModalProps {
  initialProduct: MenuItem;
  onClose: () => void;
}

interface ToppingOption {
  id: string;
  name: string;
  category: 'veggies' | 'cheese' | 'herbs';
  price: number;
  icon: string;
}

const TOPPING_OPTIONS: ToppingOption[] = [
  { id: 'top-peppers', name: 'Bell Peppers (Red & Yellow)', category: 'veggies', price: 0, icon: '🫑' },
  { id: 'top-onions', name: 'Crisp Red Onions', category: 'veggies', price: 0, icon: '🧅' },
  { id: 'top-mushrooms', name: 'Fresh Button Mushrooms', category: 'veggies', price: 0, icon: '🍄' },
  { id: 'top-olives', name: 'Kalamata Black Olives', category: 'veggies', price: 0, icon: '🫒' },
  { id: 'top-corn', name: 'Golden Sweet Corn', category: 'veggies', price: 0, icon: '🌽' },
  { id: 'top-jalapenos', name: 'Pickled Jalapeños', category: 'veggies', price: 0, icon: '🌶️' },
  { id: 'top-paneer', name: 'Fresh Diced Paneer', category: 'cheese', price: 50, icon: '🧈' },
  { id: 'top-extra-cheese', name: 'Extra Melted Mozzarella', category: 'cheese', price: 40, icon: '🧀' },
  { id: 'top-herbs', name: 'Italian Herbs & Chili Flakes', category: 'herbs', price: 0, icon: '🌿' }
];

const SIZES = [
  { id: 'pizza-small', name: 'Small (8 inch)', price: 260, unit: '8 inch' },
  { id: 'pizza-medium', name: 'Medium (10 inch)', price: 330, unit: '10 inch' },
  { id: 'pizza-large', name: 'Large (12 inch)', price: 400, unit: '12 inch' }
];

export const PizzaBuilderModal: React.FC<PizzaBuilderModalProps> = ({ initialProduct, onClose }) => {
  const { addToCart } = useCart();
  
  // Find initial size matching product id or default to medium
  const initialSizeObj = SIZES.find((s) => s.id === initialProduct.id) || SIZES[1];
  
  const [selectedSize, setSelectedSize] = useState(initialSizeObj);
  const [baseType, setBaseType] = useState<'whole-wheat' | 'maida'>('whole-wheat');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([
    'top-peppers',
    'top-onions',
    'top-mushrooms',
    'top-olives',
    'top-herbs'
  ]);
  const [quantity, setQuantity] = useState(1);

  // Toggle topping selection
  const toggleTopping = (toppingId: string) => {
    setSelectedToppings((prev) =>
      prev.includes(toppingId)
        ? prev.filter((id) => id !== toppingId)
        : [...prev, toppingId]
    );
  };

  // Calculate extra cost from paid toppings
  const toppingsExtraCost = selectedToppings.reduce((total, id) => {
    const topping = TOPPING_OPTIONS.find((t) => t.id === id);
    return total + (topping ? topping.price : 0);
  }, 0);

  const unitPrice = selectedSize.price + toppingsExtraCost;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    // Generate custom pizza menu item representation
    const selectedToppingNames = selectedToppings
      .map((id) => TOPPING_OPTIONS.find((t) => t.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const baseName = baseType === 'whole-wheat' ? '100% Whole Wheat Base' : 'Hand-Tossed Classic Maida Base';

    const customPizzaProduct: MenuItem = {
      id: `custom-pizza-${selectedSize.id}-${baseType}-${Date.now()}`,
      name: `Gourmet Veggie Pizza - ${selectedSize.unit} (${baseType === 'whole-wheat' ? 'Whole Wheat' : 'Maida'})`,
      category: 'pizza',
      price: unitPrice,
      unit: selectedSize.unit,
      description: `Base: ${baseName}. Toppings: ${selectedToppingNames || 'Classic Cheese & Sauce'}. Baked fresh from scratch.`,
      image: '/images/pizza_veggie.jpeg',
      isFeatured: false
    };

    addToCart(customPizzaProduct, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="modal-root">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-backdrop"
          onClick={onClose}
        />

        <div className="modal-container-wrapper pizza-builder-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 25 }}
            transition={{ type: 'spring', duration: 0.45 }}
            className="modal-box pizza-builder-box"
          >
            {/* Close Button */}
            <button onClick={onClose} className="modal-close-btn" aria-label="Close pizza builder">
              <X size={20} />
            </button>

            {/* Header Title Bar */}
            <div className="pizza-builder-header">
              <div className="flex-center gap-2" style={{ justifyContent: 'flex-start' }}>
                <span className="pizza-badge inline-flex items-center gap-1">
                  <Flame size={14} className="gold-text" /> Signature Interactive Builder
                </span>
              </div>
              <h2 className="pizza-title">Handcrafted Fresh Dough Pizza</h2>
              <p className="pizza-subtitle">
                Customize your artisanal pizza dough, size, and fresh garden toppings baked fresh to order in Wakad.
              </p>
            </div>

            {/* Made-from-scratch guarantee callout banner */}
            <div className="scratch-guarantee-banner">
              <div className="scratch-banner-icon flex-center">
                <ShieldCheck size={24} />
              </div>
              <div className="scratch-banner-text">
                <h4 className="scratch-banner-title">100% Made From Scratch — Guaranteed</h4>
                <p className="scratch-banner-desc">
                  No store-bought frozen bases, no commercial canned sauces. We hand-knead our pizza dough daily and slow-cook our signature marinara sauce from scratch.
                </p>
              </div>
            </div>

            <div className="pizza-builder-grid">
              {/* Left Column: Size & Dough Base Selection */}
              <div className="pizza-options-left">
                {/* Size Selection */}
                <div className="builder-section">
                  <h3 className="builder-section-label">
                    <PieChart size={16} className="gold-text inline-block mr-1" /> 1. Select Crust Size
                  </h3>
                  <div className="size-selector-grid">
                    {SIZES.map((size) => (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`size-card ${selectedSize.id === size.id ? 'active' : ''}`}
                      >
                        <span className="size-card-title">{size.name}</span>
                        <span className="size-card-price">₹{size.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Base Dough Selection */}
                <div className="builder-section mt-6">
                  <h3 className="builder-section-label">
                    <Sparkles size={16} className="gold-text inline-block mr-1" /> 2. Choose Dough Crust Base
                  </h3>
                  <div className="base-selector-grid">
                    <button
                      type="button"
                      onClick={() => setBaseType('whole-wheat')}
                      className={`base-card ${baseType === 'whole-wheat' ? 'active' : ''}`}
                    >
                      <div className="base-card-header flex-center justify-between">
                        <span className="base-icon">🌾</span>
                        {baseType === 'whole-wheat' && <Check size={16} className="base-check" />}
                      </div>
                      <span className="base-title">100% Whole Wheat</span>
                      <p className="base-desc">Stoneground wheat flour, high in fiber, wholesome &amp; delightfully crispy.</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBaseType('maida')}
                      className={`base-card ${baseType === 'maida' ? 'active' : ''}`}
                    >
                      <div className="base-card-header flex-center justify-between">
                        <span className="base-icon">🍕</span>
                        {baseType === 'maida' && <Check size={16} className="base-check" />}
                      </div>
                      <span className="base-title">Hand-Tossed Classic Maida</span>
                      <p className="base-desc">Traditional light &amp; airy pizzeria crust with golden blistering edges.</p>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Tactile Toppings Chips Selection */}
              <div className="pizza-options-right">
                <div className="builder-section">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '12px', gap: '12px' }}>
                    <h3 className="builder-section-label" style={{ marginBottom: 0 }}>
                      3. Select Fresh Toppings &amp; Cheeses
                    </h3>
                    <span className="toppings-count-tag">
                      {selectedToppings.length} selected
                    </span>
                  </div>
                  <p className="builder-section-subtext mb-4">
                    Tap to toggle your favorite fresh ingredients &amp; artisanal toppings:
                  </p>

                  <div className="toppings-chips-grid">
                    {TOPPING_OPTIONS.map((topping) => {
                      const isSelected = selectedToppings.includes(topping.id);
                      return (
                        <button
                          key={topping.id}
                          type="button"
                          onClick={() => toggleTopping(topping.id)}
                          className={`topping-chip ${isSelected ? 'selected' : ''}`}
                        >
                          <span className="topping-chip-icon">{topping.icon}</span>
                          <span className="topping-chip-name">{topping.name}</span>
                          {topping.price > 0 && (
                            <span className="topping-chip-price">+₹{topping.price}</span>
                          )}
                          {isSelected && <Check size={14} className="topping-chip-check shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action Bar with Live Pricing */}
            <div className="pizza-builder-footer">
              <div className="pizza-price-summary">
                <span className="pizza-total-label">Total Price:</span>
                <span className="pizza-total-amount">₹{totalPrice}</span>
                <span className="pizza-unit-detail">
                  ({selectedSize.unit} · {baseType === 'whole-wheat' ? 'Whole Wheat' : 'Maida'})
                </span>
              </div>

              <div className="pizza-action-buttons">
                {/* Quantity Adjustment */}
                <div className="modal-qty-box">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="modal-qty-btn"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="modal-qty-num">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="modal-qty-btn"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Add to Cart CTA */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="btn-primary pizza-add-cart-btn"
                >
                  <ShoppingBag size={18} />
                  <span>Add Custom Pizza to Cart (₹{totalPrice})</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default PizzaBuilderModal;
