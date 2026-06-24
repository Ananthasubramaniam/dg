'use client';

import React from 'react';
import { MENU_DATA, CATEGORIES } from '../data/menu';

export const QuickMenu: React.FC = () => {
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

            return (
              <div key={category.id} className="quick-menu-category-card">
                <h3 className="quick-category-title">
                  <span className="category-icon">{category.icon}</span> {category.name}
                </h3>
                <div className="quick-category-divider" />
                <ul className="quick-items-list">
                  {categoryItems.map((item) => (
                    <li key={item.id} className="quick-item-row">
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
