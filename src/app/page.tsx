'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import BehindDessertGroove from '../components/BehindDessertGroove';
import CustomCakes from '../components/CustomCakes';
import QuickMenu from '../components/QuickMenu';
import Gallery from '../components/Gallery';
import InstagramSection from '../components/InstagramSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import CartDrawer from '../components/CartDrawer';
import CinematicLoader from '../components/CinematicLoader';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <CinematicLoader onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      <div className={isLoaded ? 'entrance-ready' : 'layout-locked'}>
        <Navbar startAnimation={isLoaded} />
        <main>
          <Hero startAnimation={isLoaded} />
          <BehindDessertGroove />
          <FeaturedProducts />
          <QuickMenu />
          <CustomCakes />
          <Gallery />
          <InstagramSection />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        <ProductModal />
        <CartDrawer />
      </div>
    </>
  );
}
