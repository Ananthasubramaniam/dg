'use client';

import React from 'react';
import { MENU_DATA, CATEGORIES, MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';

export const QuickMenu: React.FC = () => {
  const { setActiveMenuCategory, setActiveDetailsProduct } = useCart();

  const handleItemClick = (item: MenuItem) => {
    // Set the active category and product to open the product modal.
    // No scrolling – we stay on the Quick Menu view.
    setActiveMenuCategory(item.category);
    setActiveDetailsProduct(item);
  };
  return (
    <section id="quick-menu" className="quick-menu-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Fast &amp; Simple</span>
          <h2 className="section-title">Quick Price List</h2>
          <div className="section-divider" />
          <p className="section-description">
            For our repeat customers: a simplified, text-only list of our complete bakes and pricing.
          </p>
        </div>

        <div className="quick-menu-grid">
          {CATEGORIES.map((category) => {
            const categoryItems = MENU_DATA.filter((item) => item.category === category.id);
            if (categoryItems.length === 0) return null;

            // Split the large Cakes category into two smaller sub-sections for better balance
            if (category.id === 'cakes') {
              const chocolateCakeIds = [
                'cake-black-forest',
                'cake-chocolate-ganache',
                'cake-chocolate-mousse',
                'cake-cookie-cream',
                'cake-chocolate-orange',
                'cake-chocolate-tit-bits',
                'cake-irish-cream'
              ];

              const chocolateCakes = categoryItems.filter((item) => chocolateCakeIds.includes(item.id));
              const classicCakes = categoryItems.filter((item) => !chocolateCakeIds.includes(item.id));

              return (
                <React.Fragment key={category.id}>
                  {chocolateCakes.length > 0 && (
                    <div className="quick-menu-category-card">
                      <h3 className="quick-category-title">
                        <span className="category-icon">🍫</span> Chocolate Cakes
                      </h3>
                      <div className="quick-category-divider" />
                      <ul className="quick-items-list">
                        {chocolateCakes.map((item) => (
                          <li 
                            key={item.id} 
                            className="quick-item-row clickable-quick-item"
                            onClick={() => handleItemClick(item)}
                          >
                            <span className="quick-item-name">{item.name}</span>
                            <span className="quick-item-dots" />
                            <span className="quick-item-price-block">
                              <span className="quick-price">₹{item.price}</span>
                              <span className="quick-unit">/{item.unit}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {classicCakes.length > 0 && (
                    <div className="quick-menu-category-card">
                      <h3 className="quick-category-title">
                        <span className="category-icon">🍰</span> Classic &amp; Fruit Cakes
                      </h3>
                      <div className="quick-category-divider" />
                      <ul className="quick-items-list">
                        {classicCakes.map((item) => (
                          <li 
                            key={item.id} 
                            className="quick-item-row clickable-quick-item"
                            onClick={() => handleItemClick(item)}
                          >
                            <span className="quick-item-name">{item.name}</span>
                            <span className="quick-item-dots" />
                            <span className="quick-item-price-block">
                              <span className="quick-price">₹{item.price}</span>
                              <span className="quick-unit">/{item.unit}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </React.Fragment>
              );
            }

            return (
              <div key={category.id} className="quick-menu-category-card">
                <h3 className="quick-category-title">
                  <span className="category-icon">{category.icon}</span> {category.name}
                </h3>
                <div className="quick-category-divider" />
                <ul className="quick-items-list">
                  {categoryItems.map((item) => (
                    <li 
                      key={item.id} 
                      className="quick-item-row clickable-quick-item"
                      onClick={() => handleItemClick(item)}
                    >
                      <span className="quick-item-name">{item.name}</span>
                      <span className="quick-item-dots" />
                      <span className="quick-item-price-block">
                        <span className="quick-price">₹{item.price}</span>
                        <span className="quick-unit">/{item.unit}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickMenu;
