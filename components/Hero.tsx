
import React from 'react';
import { CLUB_NAME, WHATSAPP_URL, HERO_BG_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-top parallax z-0" 
        style={{ backgroundImage: `url('${HERO_BG_URL}')` }}
      >
        {/* Capa de superposición con degradado para asegurar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/60 via-deep-blue/30 to-deep-blue/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-white font-sport text-7xl md:text-9xl tracking-tighter leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]">
            {CLUB_NAME}
          </h1>
          <h2 className="text-white font-sport text-3xl md:text-5xl tracking-[0.3em] uppercase mt-[-10px] md:mt-[-20px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)]">
            Fútbol Club
          </h2>
        </div>
        
        <p className="text-white font-body text-lg md:text-2xl max-w-3xl mx-auto mb-12 opacity-100 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
          Formando campeones dentro y fuera de la cancha. Valores, deporte y diversión
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#inscripcion" 
            className="w-full sm:w-auto bg-gold-bronze text-white font-body font-bold px-12 py-5 rounded-sm shadow-[0_10px_30px_rgba(145,98,48,0.3)] hover:bg-gold-bronze/80 hover:-translate-y-1 transition-all uppercase tracking-widest text-sm text-center"
          >
            Inscribirse Ahora
          </a>
          <a 
            href={WHATSAPP_URL} 
            className="w-full sm:w-auto border-2 border-white/80 text-white font-body font-bold px-12 py-5 rounded-sm bg-white/5 backdrop-blur-sm hover:bg-white hover:text-deep-blue hover:-translate-y-1 transition-all uppercase tracking-widest text-sm text-center"
          >
            Consultar Cupos
          </a>
        </div>
      </div>
      
      {/* Indicador sutil de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <i className="fas fa-chevron-down text-white/50 text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
