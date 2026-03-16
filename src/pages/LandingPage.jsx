import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Solutions from '../components/landing/Solutions';
import MapplexCore from '../components/landing/MapplexCore';
import Vision from '../components/landing/Vision';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Solutions />
        <MapplexCore />
        <Vision />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
