import React, { useState } from "react";
import { GALLERY_IMAGES } from "../constants";
import ScrollReveal from "./ScrollReveal";

const Gallery: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_COUNT = 6;
  const displayedImages = isExpanded
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.slice(0, INITIAL_COUNT);

  return (
    <section id="galeria" className="py-24 bg-[#f1f1f1] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sport text-deep-blue text-5xl mb-4 tracking-wider">
            Galería de Fotos
          </h2>
          <p className="text-gray-500 font-body tracking-[0.2em] uppercase text-sm font-bold">
            Nuestros Momentos en la Cancha
          </p>
          <div className="w-16 h-1 bg-gold-bronze mx-auto mt-4"></div>
        </div>

        <div className={`relative transition-all duration-700 ease-in-out`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedImages.map((img) => (
              <ScrollReveal
                key={img.id}
                className="group relative overflow-hidden rounded-sm shadow-md border-[1px] border-gray-200"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Degradado y Botón Seguir Viendo */}
          {!isExpanded && GALLERY_IMAGES.length > INITIAL_COUNT && (
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#f1f1f1] via-[#f1f1f1]/80 to-transparent z-10 pointer-events-none"></div>
          )}

          <div
            className={`flex justify-center ${isExpanded ? "mt-12" : "relative z-20 -mt-16"}`}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-deep-blue text-white font-sport text-2xl px-12 py-4 border-2 border-gold-bronze shadow-2xl hover:bg-gold-bronze transition-all duration-300 tracking-widest flex items-center gap-4 group"
            >
              {isExpanded ? (
                <>
                  VER MENOS{" "}
                  <i className="fas fa-chevron-up transition-transform group-hover:-translate-y-1"></i>
                </>
              ) : (
                <>
                  SEGUIR VIENDO{" "}
                  <i className="fas fa-chevron-down transition-transform group-hover:translate-y-1"></i>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
