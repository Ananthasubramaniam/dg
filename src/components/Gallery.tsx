'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'cakes' | 'cupcakes-muffins' | 'cookies' | 'breads' | 'pizza';
  categoryLabel: string;
  title: string;
  image: string;
}

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [prevImageIndex, setPrevImageIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  if (activeImageIndex !== prevImageIndex) {
    setPrevImageIndex(activeImageIndex);
    setIsImageLoading(true);
  }

  useEffect(() => {
    if (activeImageIndex !== null) {
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
    { id: 'pizza', label: 'Pizza' }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      category: 'cakes',
      categoryLabel: 'Cakes',
      title: 'Double Chocolate Ganache Signature Cake',
      image: '/images/cake_chocolate_ganache.jpeg'
    },
    {
      id: 'gal-2',
      category: 'cupcakes-muffins',
      categoryLabel: 'Muffins',
      title: 'Fresh Blueberry Streusel Muffins',
      image: '/images/muffin_almond.jpeg'
    },
    {
      id: 'gal-3',
      category: 'cookies',
      categoryLabel: 'Cookies',
      title: 'Chef\'s Special Chocolate Chip Butter Cookies',
      image: '/images/cookie_chocolate_chip.jpeg'
    },
    {
      id: 'gal-4',
      category: 'breads',
      categoryLabel: 'Breads',
      title: 'Braided Herb Bread',
      image: '/images/bread_braided.jpeg'
    },
    {
      id: 'gal-5',
      category: 'cakes',
      categoryLabel: 'Custom Cake',
      title: 'Bespoke Sugar Floral Celebration Cake',
      image: '/images/cake_wedding_floral.jpeg'
    },
    {
      id: 'gal-6',
      category: 'pizza',
      categoryLabel: 'Pizza',
      title: 'Gourmet Veggie Pizza',
      image: '/images/pizza_veggie.jpeg'
    },
    {
      id: 'gal-7',
      category: 'cupcakes-muffins',
      categoryLabel: 'Muffins',
      title: 'Double Chocolate Chip Muffins',
      image: '/images/muffin_chocolate_close.jpeg'
    },
    {
      id: 'gal-8',
      category: 'breads',
      categoryLabel: 'Breads',
      title: 'Overnight Fermented Artisan Boule',
      image: '/images/bread_artisan_boule.jpeg'
    },
    {
      id: 'gal-9',
      category: 'cakes',
      categoryLabel: 'Cakes',
      title: 'Traditional Black Forest Cake',
      image: '/images/cake_black_forest.jpeg'
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
            Experience our actual bakes, custom customer orders, and signature creations straight from Chef Subha Srihari&apos;s kitchen in Pune.
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
