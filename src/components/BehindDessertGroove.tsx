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
              It started in my home kitchen in Pune with a box of &ldquo;Betty Crocker&rdquo; brownie mix. I fell in love with the process instantly.
            </p>
            <p>
              My baking journey began with simple brownies. I would bake a batch, share it with friends, and watch it disappear in minutes. Soon, friends of friends started calling and asking if they could place orders. That was the spark that ignited my culinary dream.
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
                    That is how <strong>Dessert Groove</strong> was born. No venture capital, no massive industrial commercial kitchen. Just me, a small home oven, and a deep commitment to authentic, home-style baking.
                  </p>
                  <p>
                    I quit my job as a full-time finance consultant to follow this passion. It started as a hobby, and it turned into my profession. I never imagined I would land up doing a full-time job as a chef and operating a kitchen, but I am glad I chose this path.
                  </p>
                  <p>
                    At Dessert Groove, we believe good desserts are made of simple, real things. We do not use commercial stabilizers, artificial premixes, or synthetic flavorings. Everything is baked fresh from scratch using high-quality ingredients.
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
