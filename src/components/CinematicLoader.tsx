'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Simulate progress load
    const duration = 2200; // 2.2 seconds total load time
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Wait briefly at 100% before triggering exit
          setTimeout(() => {
            setIsExiting(true);
          }, 350);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAnimationComplete = () => {
    if (isExiting) {
      // Restore scroll
      document.body.style.overflow = '';
      onComplete();
    }
  };

  return (
    <div className="preloader-root">
      {/* Split Panels (Slide Out Left & Right) */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isExiting ? '-100%' : 0 }}
        transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
        className="preloader-panel left"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isExiting ? '100%' : 0 }}
        transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
        onAnimationComplete={handleAnimationComplete}
        className="preloader-panel right"
      />

      {/* Central Content */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="preloader-content flex-center"
          >
            {/* Elegant glowing ambient orb behind */}
            <div className="loader-glow-orb" />

            {/* Cake Outline SVG */}
            <div className="loader-logo-wrapper">
              <svg viewBox="0 0 100 100" width="120" height="120" className="loader-svg">
                {/* Cake stand base */}
                <path 
                  d="M 35 80 L 65 80 M 50 80 L 50 70" 
                  stroke="var(--color-gold)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  fill="none" 
                  className="draw-path"
                />
                {/* Cake stand plate */}
                <path 
                  d="M 25 70 L 75 70" 
                  stroke="var(--color-gold)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  fill="none" 
                  className="draw-path"
                />
                {/* Cake body bottom tier */}
                <rect 
                  x="30" 
                  y="45" 
                  width="40" 
                  height="25" 
                  rx="3" 
                  fill="none" 
                  stroke="var(--color-gold)" 
                  strokeWidth="2" 
                  className="draw-path"
                />
                {/* Cake body top tier */}
                <rect 
                  x="37" 
                  y="27" 
                  width="26" 
                  height="18" 
                  rx="2" 
                  fill="none" 
                  stroke="var(--color-gold)" 
                  strokeWidth="2" 
                  className="draw-path"
                />
                {/* Candle on top */}
                <line 
                  x1="50" 
                  y1="27" 
                  x2="50" 
                  y2="18" 
                  stroke="var(--color-gold)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  className="draw-path"
                />
                {/* Candle flame */}
                <path 
                  d="M 50 18 Q 48 13 50 9 Q 52 13 50 18 Z" 
                  fill="var(--color-gold)" 
                  className="flame-path"
                />
              </svg>
            </div>

            {/* Brand Title */}
            <h1 className="loader-brand-title">
              <span className="logo-dessert">Dessert</span>
              <span className="logo-groove">Groove</span>
            </h1>

            <div className="loader-divider" />

            {/* Loading Status Indicator */}
            <p className="loader-status-text">Handcrafting Sweetness</p>

            {/* Elegant Loader Counter */}
            <div className="loader-counter">
              <span className="counter-num">{Math.floor(progress)}</span>
              <span className="counter-pct">%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CinematicLoader;
