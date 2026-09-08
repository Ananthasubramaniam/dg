'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Sparkles, ShoppingBag, Leaf, Recycle, Plus, Check } from 'lucide-react';

interface CraftChocolateBar {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const FeaturedProducts: React.FC = () => {
  const { addToCart, cart } = useCart();

  const craftBars: CraftChocolateBar[] = [
    {
      id: 'choc-orange-sea-salt',
      name: 'Orange Sea Salt',
      price: 230,
      description: 'Artisanal dark chocolate infused with natural orange oil & coarse sea salt flakes.'
    },
    {
      id: 'choc-mint-magic',
      name: 'Mint Magic',
      price: 230,
      description: 'Cool natural mint oil blended with smooth 5-day stone-ground dark chocolate.'
    },
    {
      id: 'choc-unflavored-pure',
      name: 'Unflavored Pure Chocolate',
      price: 220,
      description: 'Unadulterated bean-to-bar chocolate celebrating raw native cacao nibs.'
    },
    {
      id: 'choc-orange-plain',
      name: 'Orange Plain',
      price: 220,
      description: 'Smooth dark chocolate delicately flavored with natural zesty orange notes.'
    },
    {
      id: 'choc-coffee-almond',
      name: 'Coffee Almond',
      price: 240,
      description: 'Roasted almond chunks folded into rich espresso-infused artisanal chocolate.'
    },
    {
      id: 'choc-100-dark',
      name: '100% Dark Chocolate',
      price: 220,
      description: 'Zero added sugar, 100% pure cacao nibs stone-ground for 5 days.'
    },
    {
      id: 'choc-bavarian-hazelnut',
      name: 'Bavarian Hazelnut Chunks',
      price: 240,
      description: 'Crunchy roasted Bavarian hazelnut chunks in stone-ground cacao.'
    },
    {
      id: 'choc-berry-blast',
      name: 'Berry Blast with Cranberries',
      price: 240,
      description: 'Tart dried cranberries studded throughout 70% dark craft chocolate.'
    },
    {
      id: 'choc-coffee-hazelnut',
      name: 'Coffee & Hazelnut',
      price: 240,
      description: 'Aromatic espresso notes paired with crunchy roasted hazelnut chunks.'
    }
  ];

  const handleAddBar = (bar: CraftChocolateBar) => {
    addToCart(
      {
        id: bar.id,
        name: bar.name,
        category: 'craft-chocolates',
        price: bar.price,
        unit: 'Bar',
        description: bar.description,
        image: '/images/chocolate_bars.jpeg'
      },
      1
    );
  };

  const isBarInCart = (id: string) => {
    return cart.some((item) => item.product.id === id);
  };

  return (
    <section id="featured" className="featured-section craft-chocolate-showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-10">
          <span className="section-badge inline-flex items-center gap-1.5">
            <Sparkles size={14} className="gold-text" />
            Tree to Bar • Made in Pune
          </span>
          <h2 className="section-title">Artisanal Bean-to-Bar Craft Chocolates</h2>
          <div className="section-divider" />
          <p className="section-description max-w-2xl mx-auto">
            Made with freshly sourced cacao nibs and cacao butter from native farmers. Stone-ground for 5 days and hand-tempered for a glossy finish and perfect snap.
          </p>
        </div>

        {/* CLEAN SHORT MENU LIST */}
        <div className="craft-menu-container">
          <div className="craft-menu-grid">
            {craftBars.map((bar, index) => {
              const inCart = isBarInCart(bar.id);
              return (
                <motion.div
                  key={bar.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="craft-menu-item"
                >
                  <div className="craft-menu-item-header">
                    <div className="flex items-center gap-2">
                      <span className="craft-menu-bullet">🍫</span>
                      <h3 className="craft-menu-item-name">{bar.name}</h3>
                    </div>
                    <span className="craft-menu-item-price">₹{bar.price}</span>
                  </div>
                  <p className="craft-menu-item-desc">{bar.description}</p>
                  <div className="craft-menu-item-footer">
                    <button
                      onClick={() => handleAddBar(bar)}
                      className={`craft-menu-add-btn ${inCart ? 'in-cart' : ''}`}
                    >
                      {inCart ? (
                        <>
                          <Check size={14} />
                          <span>Added to Cart</span>
                        </>
                      ) : (
                        <>
                          <Plus size={14} />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ELEGANT ECO-FRIENDLY KHADI PACKAGING NOTE BANNER (WARM CHOCOLATE THEMED) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eco-khadi-banner-warm"
        >
          <div className="eco-khadi-content-warm">
            <div className="eco-badge-warm inline-flex items-center gap-1.5">
              <Leaf size={14} className="gold-text" />
              <span>100% Compostable Handmade Khadi Box</span>
            </div>
            <h3 className="eco-khadi-heading-warm">Eco-Friendly Packaging &amp; Refill Rewards</h3>
            <p className="eco-khadi-text-warm">
              Prices mentioned are inclusive of the box. Our boxes are crafted from <strong>handmade Khadi paper</strong> and pasted with <strong>tamarind seed gel</strong>. It is 100% compostable. Save your box and refill on your next purchase!
            </p>
            <div className="eco-khadi-tagline-warm flex-center gap-2">
              <Recycle size={16} />
              <span>SAVE PAPER! SAVE MONEY! ENJOY THE GOODNESS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

