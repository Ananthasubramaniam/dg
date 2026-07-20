'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Gift, Star, Award, Heart, ShieldCheck } from 'lucide-react';

interface CustomCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  imageUrl: string;
}

export const CustomCakes: React.FC = () => {
  const customCategories: CustomCategory[] = [
    {
      title: 'Birthday Cakes',
      icon: <Calendar size={20} className="gold-text" />,
      description: 'Make birthdays unforgettable with personalized designs, custom toppings, and flavors customized specifically for the celebrant.',
      imageUrl: '/images/cake_black_forest.jpeg'
    },
    {
      title: 'Theme Cakes',
      icon: <Star size={20} className="gold-text" />,
      description: 'Bring dreams to life! From cartoon characters and hobbies to movies and passions, we sculpt theme-based edible magic.',
      imageUrl: '/images/cake_birthday_octonauts.jpeg'
    },
    {
      title: 'Fondant Cakes',
      icon: <Award size={20} className="gold-text" />,
      description: 'Elegant, satin-smooth fondant tiers hand-painted and detailed with sugar artistry. Ideal for high-end celebrations.',
      imageUrl: '/images/cake_anniversary_blue.jpeg'
    },
    {
      title: 'Corporate Cakes',
      icon: <ShieldCheck size={20} className="gold-text" />,
      description: 'Celebrate company milestones, product launches, or office milestones with branded logo cupcakes and large custom slab cakes.',
      imageUrl: '/images/cake_chocolate_gold.jpeg'
    },
    {
      title: 'Anniversary Cakes',
      icon: <Heart size={20} className="gold-text" />,
      description: 'Mark your milestones of love with sophisticated custom wedding or anniversary tiers decorated with delicate sugar florals.',
      imageUrl: '/images/cake_wedding_floral.jpeg'
    },
    {
      title: 'Customized Designs',
      icon: <Gift size={20} className="gold-text" />,
      description: 'Have a completely unique concept? Hand-draw a design or send us references, and we will co-create your custom dessert.',
      imageUrl: '/images/cake_anniversary_yellow.jpeg'
    }
  ];

  const customWhatsappUrl = 'https://wa.me/919158555032?text=Hi%20Dessert%20Groove,%20I\'d%20like%20to%20request%20a%20customized%20cake%20for%20an%20upcoming%20celebration!%20Could%20we%20discuss%20flavors,%20sizes,%20and%20designs?';

  return (
    <section id="custom-cakes" className="custom-cakes-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Bespoke Confectionery</span>
          <h2 className="section-title">Custom Cake Showcase</h2>
          <div className="section-divider" />
          <p className="section-description">
            We specialize in bringing your sweet visions to life. Browse our signature customization categories and connect directly with our kitchen to design your masterpiece.
          </p>
        </div>

        {/* Custom Categories Grid */}
        <div className="custom-categories-grid">
          {customCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="custom-showcase-card card-hover"
            >
              <div className="showcase-img-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={cat.imageUrl} 
                  alt={cat.title} 
                  className="showcase-card-img"
                  loading="lazy"
                />
                <div className="showcase-img-overlay flex-center">
                  <div className="showcase-icon-badge flex-center">
                    {cat.icon}
                  </div>
                </div>
              </div>
              <div className="showcase-card-content">
                <h3 className="showcase-card-title">{cat.title}</h3>
                <p className="showcase-card-desc">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA consulting card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="custom-cakes-cta"
        >
          <div className="cta-inner-content">
            <h3 className="cta-cakes-title">Let&apos;s Design Your Dream Celebration Cake</h3>
            <p className="cta-cakes-text">
              Every custom cake is baked fresh from scratch using high-quality ingredients, with eggless options available for all flavors. Send us your ideas, sizes, and references on WhatsApp to get a custom quote.
            </p>
            <a 
              href={customWhatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary custom-cake-btn"
            >
              <MessageSquare size={18} />
              <span>Request a Custom Cake</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomCakes;
