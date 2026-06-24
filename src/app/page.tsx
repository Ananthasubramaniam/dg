import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import BehindDessertGroove from '../components/BehindDessertGroove';
import CustomCakes from '../components/CustomCakes';
import MenuSection from '../components/MenuSection';
import QuickMenu from '../components/QuickMenu';
// import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import CartDrawer from '../components/CartDrawer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BehindDessertGroove />
        <FeaturedProducts />
        <MenuSection />
        <QuickMenu />
        <CustomCakes />
        {/* <Gallery /> */}
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <ProductModal />
      <CartDrawer />
    </>
  );
}
