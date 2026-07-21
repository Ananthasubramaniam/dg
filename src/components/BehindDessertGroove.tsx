'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BehindDessertGroove: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="our-story" className="our-story-section">
      <div className="container story-grid">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="story-text-content"
        >
          <span className="section-badge">Behind the Oven</span>
          <h2 className="section-title text-left">Behind Dessert Groove</h2>
          <div className="section-divider-left" />
          
          <div className="story-paragraphs">
            <p className="highlighted-paragraph">
              Life always has a meaning to it. It’s Just that when you realize what you want to do with it, you will explore more and more to achieve your dreams and make your life meaningful”.
            </p>
            <p>
              It started in my home kitchen in Pune with a box of “Betty Crocker” brownie mix. A smile on my face when I saw the crinkle top and fudgy brownies. That’s the beginning of my baking journey.
            </p>
            <p>
              My baking journey began with simple brownies. I would bake a batch, share it with friends, and watch it disappear in minutes. Soon, friends of friends started calling and asking if they could place orders. A spark which ignited my culinary dream.
            </p>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ marginTop: '16px' }}>
                    That is how Dessert Groove was born. No venture capital, no massive industrial commercial kitchen. Me and my small IFB 30 Litre Convection Oven. Using this oven I had baked cake from 500 gms to 12kg. Years passed I felt with job and baking going hand in hand would be difficult.
                  </p>
                  <p>
                    I quit my job as a full-time finance consultant to follow my passion. It started as a hobby, and it turned into my profession. I never imagined I would land up doing a full-time job as a chef and operating a kitchen, but I am glad I chose this path.
                  </p>
                  <p>
                    September 9th 2024, I opened a small Micro bakery at park street, waked. The core idea in running this micro bakery is to serve freshly baked goodies to customers.
                  </p>
                  <p>
                    At Dessert Groove, we do not use commercial stabilizers, artificial premixes, or synthetic flavourings. All goodies are baked fresh from scratch using high-quality ingredients.
                  </p>
                  <p>
                    When you order from us, you are not getting a factory-assembled box from a retail franchise. You are getting a fresh dessert baked specifically for you, crafted with love and care. My journey has been filled with learning and mistakes, but I never stop believing in quality and giving my 100% to every single bake.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="story-read-more-btn"
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Read Less' : 'Read Full Story'}
            </button>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="story-image-content"
        >
          <div className="chef-image-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/subha_kitchen.jpeg" 
              alt="Chef Subha Srihari in her kitchen" 
              className="chef-img"
            />
            <div className="chef-caption-card">
              <h4 className="caption-title">Chef Subha Srihari</h4>
              <p className="caption-desc">Owner &amp; Head Baker, Dessert Groove Kitchen, Pune</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindDessertGroove;
