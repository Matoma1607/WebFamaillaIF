
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import MatchCalendar from './components/MatchCalendar.tsx';
import ParallaxSection from './components/ParallaxSection.tsx';
import Gallery from './components/Gallery.tsx';
import RegistrationForm from './components/RegistrationForm.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <MatchCalendar />
      <ParallaxSection />
      <Gallery />
      <RegistrationForm />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default App;
