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
        description="An end-to-end spatial intelligence platform trusted by government authorities. From RTK GNSS field data collection with Mapplex to AI-powered analytics dashboards — built by engineers who've managed city-scale GIS systems for 15+ years."
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
