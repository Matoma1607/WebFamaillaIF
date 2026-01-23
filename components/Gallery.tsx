
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import ScrollReveal from './ScrollReveal';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-[#f1f1f1]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sport text-deep-blue text-5xl mb-4 tracking-wider">Galería de Nuestros Partidos</h2>
          <p className="text-gray-500 font-body tracking-[0.2em] uppercase text-sm font-bold">Nuestros Momentos en la Cancha</p>
          <div className="w-16 h-1 bg-gold-bronze mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <ScrollReveal key={img.id} className="group relative overflow-hidden rounded-sm shadow-lg border-[1px] border-gold-bronze/30">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-deep-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 border-[2px] border-gold-bronze m-4 scale-95 group-hover:scale-100 transition-transform">
                <div className="text-center">
                  <i className="fas fa-search-plus text-gold-bronze text-3xl mb-4"></i>
                  <p className="text-white font-sport text-2xl tracking-widest">{img.alt}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
