import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Skills from './Skills';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;
