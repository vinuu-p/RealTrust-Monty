import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AboutUsSection from './components/AboutUsSection';
import OurProjectsSection from './components/OurProjectsSection';
import HappyClientsSection from './components/HappyClientsSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <AboutUsSection />
      <OurProjectsSection />
      <HappyClientsSection />
      <FooterSection />
    </div>
  );
}

export default App;