
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { PARALLAX_BG_URL } from '../constants';

const ParallaxSection: React.FC = () => {
  return (
    <section className="relative py-48 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center parallax z-0" 
        style={{ backgroundImage: `url('${PARALLAX_BG_URL}')` }}
      >
        <div className="absolute inset-0 bg-deep-blue opacity-75"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-sport text-white text-5xl md:text-7xl mb-6 tracking-wide uppercase">Más que un club, una familia</h2>
          <div className="w-24 h-1 bg-gold-bronze mx-auto mb-8"></div>
          <p className="text-white/90 font-body text-xl max-w-3xl mx-auto italic">
            "En Famailla IF creemos que el deporte es la herramienta fundamental para el crecimiento personal de los niños."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ParallaxSection;
