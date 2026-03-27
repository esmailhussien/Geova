import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Solutions from '../components/landing/Solutions';
import MapplexCore from '../components/landing/MapplexCore';
import Vision from '../components/landing/Vision';
import Footer from '../components/landing/Footer';
import { ScanReveal } from '../components/animations/ScanReveal';
import SEO from '../components/seo/SEO';

const LandingPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <main className="pt-20 md:pt-24">
        <Hero />
        <ScanReveal delay={0.1}>
          <About />
        </ScanReveal>
        <ScanReveal delay={0.1}>
          <Solutions />
        </ScanReveal>
        <ScanReveal delay={0.1}>
          <MapplexCore />
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
