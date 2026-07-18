import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import TrustBar from '../components/landing/TrustBar';
import ThreePillars from '../components/landing/ThreePillars';
import Vision from '../components/landing/Vision';
import Footer from '../components/landing/Footer';
import { ScanReveal } from '../components/animations/ScanReveal';
import SEO from '../components/seo/SEO';

const LandingPage = () => {
  return (
    <>
      <SEO
        title="Mapping Tomorrow's Solutions"
        description="Geova is a spatial intelligence technology company building GIS-based systems, Geova AI, Mapplex field operations, and custom spatial SaaS solutions."
        url="/"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        <Hero />
        <ScanReveal delay={0.1}>
          <TrustBar />
        </ScanReveal>
        <ScanReveal delay={0.1}>
          <ThreePillars />
        </ScanReveal>
        <ScanReveal delay={0.1}>
          <Vision />
        </ScanReveal>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
