
import React from 'react';
import { CLUB_NAME, WHATSAPP_URL, HERO_BG_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-[center_right_25%] md:bg-center parallax z-0" 
        style={{ backgroundImage: `url('${HERO_BG_URL}')` }}
      >
        <div className="absolute inset-0 bg-deep-blue opacity-60"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <h1 className="text-white font-sport text-7xl md:text-9xl tracking-tighter leading-none drop-shadow-lg">
            {CLUB_NAME}
          </h1>
          <h2 className="text-white font-sport text-3xl md:text-5xl tracking-[0.3em] uppercase mt-[-10px] md:mt-[-20px] drop-shadow-md">
            Fútbol Club
          </h2>
        </div>
        
        <p className="text-white font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-95 leading-relaxed drop-shadow-md">
          Formando campeones dentro y fuera de la cancha. Valores, deporte y diversión en el corazón de Famaillá.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#inscripcion" 
            className="w-full sm:w-auto bg-gold-bronze text-white font-body font-bold px-10 py-4 rounded-sm shadow-2xl hover:bg-gold-bronze/80 transition-all uppercase tracking-widest text-sm text-center"
          >
            Inscribirse Ahora
          </a>
          <a 
            href={WHATSAPP_URL} 
            className="w-full sm:w-auto border-2 border-white text-white font-body font-bold px-10 py-4 rounded-sm hover:bg-white hover:text-deep-blue transition-all uppercase tracking-widest text-sm text-center"
          >
            Consultar Cupos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
