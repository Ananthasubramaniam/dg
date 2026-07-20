'use client';

import React from 'react';
import { motion } from 'framer-motion';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface InstagramPost {
  id: string;
  image: string;
  url: string;
  alt: string;
}

export const InstagramSection: React.FC = () => {
  const instagramPosts: InstagramPost[] = [
    {
      id: 'insta-1',
      image: '/images/cake_chocolate_ganache.jpeg',
      url: 'https://www.instagram.com/dessert_groove/',
      alt: 'Fudgy Chocolate Ganache Cake'
    },
    {
      id: 'insta-2',
      image: '/images/cookie_chocolate_chip.jpeg',
      url: 'https://www.instagram.com/dessert_groove/',
      alt: 'Handcrafted Chocolate Chip Cookies'
    },
    {
      id: 'insta-3',
      image: '/images/cake_birthday_octonauts.jpeg',
      url: 'https://www.instagram.com/dessert_groove/',
      alt: 'Custom Octonauts Birthday Theme Cake'
    }
  ];

  return (
    <section id="instagram-feed" className="instagram-feed-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Social Connection</span>
          <h2 className="section-title">From Our Instagram</h2>
          <div className="section-divider" />
          <p className="section-description">
            Join our community online! Follow Chef Subha Srihari for behind-the-scenes bakery updates, fresh bake announcements, and custom celebration cake designs in Pune.
          </p>
        </div>

        <div className="instagram-feed-grid">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="instagram-feed-card card-hover"
            >
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="insta-feed-link">
                <div className="insta-feed-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.alt} className="insta-feed-img" loading="lazy" />
                  <div className="insta-feed-hover-overlay flex-center">
                    <InstagramIcon size={28} className="insta-feed-hover-icon" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="instagram-follow-cta flex-center">
          <a
            href="https://www.instagram.com/dessert_groove/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-follow-btn"
          >
            <InstagramIcon size={18} />
            <span>Follow @dessert_groove</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
