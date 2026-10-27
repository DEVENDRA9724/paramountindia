import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeScroller } from './components/MarqueeScroller';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProductsModal } from './components/ProductsModal';
import { DocsModal } from './components/DocsModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<string>('Web Development');

  const handleOpenContactWithProduct = (productName?: string) => {
    if (productName) {
      setPrefilledProduct(productName);
    }
    setIsContactOpen(true);
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const el = document.getElementById('about-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#0a1b33] flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Header with Legal Entity Status */}
      <Header
        onOpenContact={() => handleOpenContactWithProduct()}
        onOpenProducts={() => setIsProductsOpen(true)}
        onOpenDocs={() => setIsDocsOpen(true)}
        onNavigateToServices={handleScrollToServices}
        onNavigateToAbout={handleScrollToAbout}
      />

      {/* Main Content Area */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pt-2">
        {/* Exact Hero Section Container & Video Background */}
        <HeroSection
          onOpenContact={() => handleOpenContactWithProduct()}
          onOpenProducts={() => setIsProductsOpen(true)}
          onOpenDocs={() => setIsDocsOpen(true)}
        />

        {/* Seamless Marquee Logo Scroller Component (mt-10) with Copyright / Fair-Use Toggle & Disclaimer */}
        <MarqueeScroller />

        {/* All 8 Core Products & Infrastructure Offerings */}
        <ServicesSection
          onOpenContact={(prodName) => handleOpenContactWithProduct(prodName)}
          onOpenProductDetail={() => setIsProductsOpen(true)}
        />

        {/* Official Legal Entity & Corporate Verification (CIN: U62011GJ2026PTC183227) */}
        <AboutSection onOpenContact={() => handleOpenContactWithProduct()} />
      </main>

      {/* Footer with Legal Information */}
      <Footer
        onOpenContact={(prodName) => handleOpenContactWithProduct(prodName)}
        onOpenProducts={() => setIsProductsOpen(true)}
        onOpenDocs={() => setIsDocsOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        preselectedProduct={prefilledProduct}
      />

      <ProductsModal
        isOpen={isProductsOpen}
        onClose={() => setIsProductsOpen(false)}
        onOpenContact={() => {
          setIsProductsOpen(false);
          setIsContactOpen(true);
        }}
      />

      <DocsModal
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
        onOpenContact={() => {
          setIsDocsOpen(false);
          setIsContactOpen(true);
        }}
      />
    </div>
  );
}
