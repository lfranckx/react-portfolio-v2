import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import About from './About';
import Skills from './Skills';
import Footer from '../Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <About />
      <Footer />
    </>
  );
}
