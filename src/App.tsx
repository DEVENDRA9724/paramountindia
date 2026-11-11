import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeScroller } from './components/MarqueeScroller';
import { SafarSaaSSection } from './components/SafarSaaSSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProductsModal } from './components/ProductsModal';
import { DocsModal } from './components/DocsModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<string>('Safar Self Drive (SaaS Platform)');
  const [selectedProductId, setSelectedProductId] = useState<string>('safar-self-drive');

  const handleOpenContactWithProduct = (productName?: string) => {
    if (productName) {
      setPrefilledProduct(productName);
    }
    setIsContactOpen(true);
  };

  const handleOpenProductSpecs = (productId: string) => {
    setSelectedProductId(productId);
    setIsProductsOpen(true);
  };

  const handleScrollToSafar = () => {
    const el = document.getElementById('safar-saas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
    <div className="min-h-screen bg-[#f9fafb] text-[#0a1b33] flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Top Header with Legal Entity Status & Safar SaaS link */}
      <Header
        onOpenContact={() => handleOpenContactWithProduct()}
        onOpenProducts={() => handleOpenProductSpecs('safar-self-drive')}
        onOpenDocs={() => setIsDocsOpen(true)}
        onNavigateToServices={handleScrollToServices}
        onNavigateToAbout={handleScrollToAbout}
        onNavigateToSafar={handleScrollToSafar}
      />

      {/* Main Content Area */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pt-2">
        {/* Exact Hero Section Container & Video Background */}
        <HeroSection
          onOpenContact={() => handleOpenContactWithProduct()}
          onOpenProducts={() => handleOpenProductSpecs('safar-self-drive')}
          onOpenDocs={() => setIsDocsOpen(true)}
        />

        {/* Seamless Marquee Logo Scroller Component (mt-10) with Integration Context */}
        <MarqueeScroller />

        {/* Dedicated Flagship SaaS Section: Safar Self Drive with Interactive Telematics Console */}
        <SafarSaaSSection
          onOpenContact={(prodName) => handleOpenContactWithProduct(prodName)}
          onOpenSpecs={(prodId) => handleOpenProductSpecs(prodId)}
          onOpenDocs={() => setIsDocsOpen(true)}
        />

        {/* All Products & Enterprise Solutions Grid */}
        <ServicesSection
          onOpenContact={(prodName) => handleOpenContactWithProduct(prodName)}
          onOpenProductDetail={(prodId) => handleOpenProductSpecs(prodId)}
        />

        {/* Interactive Architecture & Project Scope Estimator */}
        <ProjectEstimator
          onOpenContact={(scopeDetails) => handleOpenContactWithProduct(scopeDetails)}
        />

        {/* Official Legal Entity & Corporate Verification (CIN: U62011GJ2026PTC183227) */}
        <AboutSection onOpenContact={() => handleOpenContactWithProduct()} />
      </main>

      {/* Footer with Legal Information */}
      <Footer
        onOpenContact={(prodName) => handleOpenContactWithProduct(prodName)}
        onOpenProducts={() => handleOpenProductSpecs('safar-self-drive')}
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
        initialProductId={selectedProductId}
        onOpenContact={(prodName) => {
          setIsProductsOpen(false);
          handleOpenContactWithProduct(prodName);
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
