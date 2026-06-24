'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How do I place an order?',
      answer: 'Placing an order is simple! Browse our menu, select your quantities, and add items to your cart. Once ready, click "Place Order on WhatsApp" in the cart drawer. This generates a prefilled message detailing your selected items and total price, opening a chat directly with us. We will then verify availability, share payment details, and confirm your booking.'
    },
    {
      question: 'How much notice is required?',
      answer: 'Since we operate as a fresh pre-order bakery and don\'t store stale items, we bake everything from scratch. For standard menu items (cookies, muffins, cupcakes, breads), we require 24–48 hours notice. For custom cakes, fondant work, or bulk event orders, please place your order at least 3–5 days in advance.'
    },
    {
      question: 'Do you make customized cakes?',
      answer: 'Yes! Customized fondant and theme cakes are our specialty. Whether you have a specific birthday theme, a wedding tier concept, or an illustration you\'d like replicated, we can make it happen. Reach out to us via the "Consult on WhatsApp" option on the Custom Cakes page to discuss your requirements.'
    },
    {
      question: 'Do you accept corporate orders?',
      answer: 'Absolutely. We cater to corporate milestones, employee appreciation gifts, office parties, and festive celebrations. We can provide customized branding (like edible company logos on cupcakes), bulk-packed dessert boxes, and custom hampers. Drop us an inquiry on WhatsApp for special corporate packages.'
    },
    {
      question: 'Is delivery available?',
      answer: 'Yes, secure delivery is available across Pune. Delivery fees are calculated based on the actual distance from our kitchen. For delicate custom cakes, we arrange specialized transport to ensure your cake arrives in pristine, display-ready condition. You can also opt for self-pickup from our kitchen.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="section-divider" />
          <p className="section-description">
            Everything you need to know about our ordering process, lead times, and ingredients.
          </p>
        </div>

        <div className="faq-accordion-wrapper">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={faq.question} 
                className={`faq-item-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="faq-arrow-icon flex-center"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="faq-answer-container"
                    >
                      <p className="faq-answer-text">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
