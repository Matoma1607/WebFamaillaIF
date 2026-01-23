
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MatchCalendar from './components/MatchCalendar';
import ParallaxSection from './components/ParallaxSection';
import Gallery from './components/Gallery';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

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
    </div>
  );
};

export default App;
