'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'cakes' | 'cupcakes-muffins' | 'cookies' | 'breads' | 'pizza' | 'instagram';
  categoryLabel: string;
  title: string;
  image: string;
  isInstagram?: boolean;
  instagramCaption?: string;
  instagramUrl?: string;
}

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (activeImageIndex !== null) {
      setIsImageLoading(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImageIndex]);

  const filters = [
    { id: 'all', label: 'All Bakes' },
    { id: 'cakes', label: 'Cakes' },
    { id: 'cupcakes-muffins', label: 'Cupcakes & Muffins' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'breads', label: 'Breads' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'instagram', label: '📸 Real Instagram Feed' }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      category: 'cakes',
      categoryLabel: 'Cakes',
      title: 'Double Chocolate Ganache Signature Cake',
      image: '/images/chocolate_cake.png'
    },
    {
      id: 'gal-2',
      category: 'cupcakes-muffins',
      categoryLabel: 'Muffins',
      title: 'Fresh Blueberry Streusel Muffins',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'gal-3',
      category: 'cookies',
      categoryLabel: 'Cookies',
      title: 'Chef\'s Special Chocolate Chip Butter Cookies',
      image: '/images/cookies.png'
    },
    {
      id: 'gal-4',
      category: 'breads',
      categoryLabel: 'Breads',
      title: 'Ligurian Herbs & Tomato Focaccia',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'gal-5',
      category: 'cakes',
      categoryLabel: 'Custom Cake',
      title: 'Bespoke Sugar Floral Celebration Cake',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'gal-6',
      category: 'pizza',
      categoryLabel: 'Pizza',
      title: 'Gourmet Hand-Tossed Pizza Base',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'gal-7',
      category: 'cupcakes-muffins',
      categoryLabel: 'Cupcakes',
      title: 'Red Velvet Cream Cheese Frosted Cupcakes',
      image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'gal-8',
      category: 'breads',
      categoryLabel: 'Breads',
      title: 'Overnight Fermented Artisan Boule',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'gal-9',
      category: 'cakes',
      categoryLabel: 'Cakes',
      title: 'Double Chocolate Fudge Cake layers',
      image: '/images/cheesecakes.png'
    },
    {
      id: 'gal-10',
      category: 'instagram',
      categoryLabel: 'Instagram Post',
      title: 'Fudgy Brownie Delights',
      image: '/images/brownies.png',
      isInstagram: true,
      instagramCaption: 'Fudgy, gooey, and packed with dark chocolate chunks. Our signature Fudgy Brownies are always baked fresh to order in Wakad. 🍫✨ #brownies #punehomebaker #dessertgroove',
      instagramUrl: 'https://www.instagram.com/dessert_groove/'
    },
    {
      id: 'gal-11',
      category: 'instagram',
      categoryLabel: 'Instagram Post',
      title: 'Belgian Chocolate Jars',
      image: '/images/dessert_jars.png',
      isInstagram: true,
      instagramCaption: 'Layer upon layer of rich Belgian chocolate ganache and chocolate mousse. Perfect individual dessert jars for your next corporate party or weekend indulgence. 😋🥛 #dessertjars #chocolateganache #punebakery',
      instagramUrl: 'https://www.instagram.com/dessert_groove/'
    },
    {
      id: 'gal-12',
      category: 'instagram',
      categoryLabel: 'Instagram Post',
      title: 'Chef Subha\'s Kitchen Prep',
      image: '/images/seasonal_specials.png',
      isInstagram: true,
      instagramCaption: 'Berry specials in progress! We use only fresh seasonal fruits and premium butter in all our cakes. Sourced fresh, baked fresh. 🍓🎂 #seasonal cakes #naturalbaking #egglesscakespune',
      instagramUrl: 'https://www.instagram.com/dessert_groove/'
    }
  ];

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedFilter);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setIsImageLoading(true);
      setActiveImageIndex((prev) => 
        prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setIsImageLoading(true);
      setActiveImageIndex((prev) => 
        prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Gallery Showcase</span>
          <h2 className="section-title">Dessert Groove Gallery</h2>
          <div className="section-divider" />
          <p className="section-description">
            Experience our actual bakes, custom customer orders, and real Instagram highlights straight from Chef Subha Srihari&apos;s kitchen in Pune.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="gallery-filters flex-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setSelectedFilter(filter.id);
                setActiveImageIndex(null);
              }}
              className={`gallery-filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <motion.div 
          layout 
          className="gallery-masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              if (item.isInstagram) {
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="gallery-masonry-item instagram-post-card card-hover"
                  >
                    <div className="instagram-card-header">
                      <div className="insta-profile-avatar flex-center">DG</div>
                      <div className="insta-profile-info">
                        <span className="insta-profile-name">dessert_groove</span>
                        <span className="insta-profile-loc">Pune, India</span>
                      </div>
                      <a 
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insta-external-link"
                        aria-label="View post on Instagram"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    
                    <div className="insta-card-img-wrapper" onClick={() => setActiveImageIndex(index)}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.title} className="insta-post-img" loading="lazy" />
                      <div className="insta-img-hover flex-center">
                        <Maximize2 size={20} />
                      </div>
                    </div>

                    <div className="insta-card-footer">
                      <p className="insta-post-caption">
                        <strong>dessert_groove</strong> {item.instagramCaption}
                      </p>
                      <a 
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insta-view-btn"
                      >
                        View on Instagram
                      </a>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="gallery-masonry-item standard-gallery-item card-hover"
                  onClick={() => setActiveImageIndex(index)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="gallery-masonry-img"
                    loading="lazy"
                  />
                  <div className="gallery-masonry-overlay">
                    <Maximize2 size={24} className="gallery-zoom-icon" />
                    <div>
                      <span className="gallery-item-category">{item.categoryLabel}</span>
                      <h3 className="gallery-item-title">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <div className="lightbox-root">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-backdrop"
              onClick={() => setActiveImageIndex(null)}
            />
            
            <button 
              className="lightbox-close" 
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Navigation */}
            <button 
              className="lightbox-nav btn-prev flex-center" 
              onClick={handlePrevImage}
              aria-label="Previous Image"
            >
              <ChevronLeft size={36} />
            </button>

            <button 
              className="lightbox-nav btn-next flex-center" 
              onClick={handleNextImage}
              aria-label="Next Image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image Box */}
            <div className="lightbox-content-wrapper" onClick={() => setActiveImageIndex(null)}>
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="lightbox-content-box"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lightbox-image-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', width: '100%' }}>
                  {isImageLoading && (
                    <div className="lightbox-spinner flex-center" style={{ position: 'absolute', inset: 0 }}>
                      <svg className="animate-spin" style={{ width: '40px', height: '40px', color: 'var(--color-caramel)' }} fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.2 }}></circle>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style={{ opacity: 0.85 }}></path>
                      </svg>
                    </div>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <motion.img 
                    src={filteredItems[activeImageIndex].image} 
                    alt={filteredItems[activeImageIndex].title} 
                    className="lightbox-img"
                    onLoad={() => setIsImageLoading(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isImageLoading ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'block', maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
                  />
                </div>
                <div className="lightbox-caption">
                  <span className="lightbox-tag">
                    {filteredItems[activeImageIndex].categoryLabel}
                  </span>
                  <h4 className="lightbox-title">
                    {filteredItems[activeImageIndex].title}
                  </h4>
                  {filteredItems[activeImageIndex].isInstagram && (
                    <p className="lightbox-insta-details" style={{ marginTop: '8px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', fontStyle: 'italic' }}>
                      {filteredItems[activeImageIndex].instagramCaption}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
