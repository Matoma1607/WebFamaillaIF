
import React from 'react';
import { PROXIMOS_PARTIDOS } from '../constants';
import ScrollReveal from './ScrollReveal';

const MatchCalendar: React.FC = () => {
  return (
    <section id="calendario" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sport text-deep-blue text-5xl mb-4 tracking-wider uppercase">Próximos Encuentros</h2>
          <p className="text-gray-500 font-body tracking-[0.2em] uppercase text-sm font-bold">Calendario de Partidos</p>
          <div className="w-16 h-1 bg-gold-bronze mx-auto mt-4"></div>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {PROXIMOS_PARTIDOS.map((partido) => {
            const dateParts = partido.fecha.split(' ');
            const mainDate = dateParts.length > 1 ? dateParts[dateParts.length - 1] : partido.fecha;
            const prefixDate = dateParts.length > 1 ? dateParts.slice(0, -1).join(' ') : "";

            return (
              <ScrollReveal key={partido.id}>
                <div className="flex flex-col md:flex-row items-center bg-deep-blue rounded-sm overflow-hidden shadow-xl border-l-8 border-gold-bronze hover:translate-x-2 transition-transform duration-300">
                  {/* Fecha */}
                  <div className="w-full md:w-48 bg-gold-bronze p-6 text-center flex flex-col justify-center min-h-[120px]">
                    <span className="text-white font-sport text-xl leading-tight uppercase">{partido.fecha}</span>
                  </div>
                  
                  {/* Detalles */}
                  <div className="flex-grow p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center w-full">
                    <div className="text-center md:text-left">
                      <span className="text-gold-bronze font-body text-[10px] font-bold uppercase tracking-widest block mb-1">Oponente</span>
                      <h4 className="text-white font-sport text-3xl tracking-wide">{partido.oponente}</h4>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <span className="text-gold-bronze font-body text-[10px] font-bold uppercase tracking-widest block mb-1">Ubicación y Hora</span>
                      <p className="text-gray-300 font-body text-sm">
                        <i className="fas fa-map-marker-alt mr-2 text-gold-bronze"></i> {partido.ubicacion}
                      </p>
                      <p className="text-gray-300 font-body text-sm mt-1">
                        <i className="fas fa-clock mr-2 text-gold-bronze"></i> {partido.hora}
                      </p>
                    </div>

                    <div className="text-center md:text-right">
                      <span className="inline-block border border-gold-bronze text-gold-bronze px-4 py-1 font-body text-[10px] font-bold uppercase tracking-[0.2em]">
                        {partido.categoria}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MatchCalendar;
