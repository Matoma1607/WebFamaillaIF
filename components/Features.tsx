
import React, { useState } from 'react';
import { FEATURES, LOCATIONS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Features: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const toggleLocation = (index: number) => {
    setActiveLocation(activeLocation === index ? null : index);
  };

  return (
    <section id="club" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {FEATURES.map((feature, index) => {
            const isLocation = feature.title === "Ubicación";
            
            return (
              <ScrollReveal key={index} className="text-center group">
                <div className="w-20 h-20 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold-bronze group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className={`fas ${feature.icon} text-gold-bronze text-3xl`}></i>
                </div>
                <h3 className="font-sport text-deep-blue text-3xl mb-4 tracking-wider">{feature.title}</h3>
                
                {isLocation ? (
                  <div className="space-y-3 text-left mt-6">
                    {LOCATIONS.map((loc, lIdx) => (
                      <div key={lIdx} className="border border-gray-100 rounded-sm overflow-hidden">
                        <button 
                          onClick={() => toggleLocation(lIdx)}
                          className={`w-full flex justify-between items-center p-3 text-left transition-colors ${activeLocation === lIdx ? 'bg-deep-blue text-white' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'}`}
                        >
                          <span className="font-body font-bold text-[10px] uppercase tracking-wider leading-tight pr-4">
                            {loc.name}
                          </span>
                          <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeLocation === lIdx ? 'rotate-180 text-gold-bronze' : 'text-gray-400'}`}></i>
                        </button>
                        
                        <div 
                          className={`transition-all duration-500 ease-in-out overflow-hidden ${activeLocation === lIdx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <div className="w-full h-48 border-t border-gray-200">
                            <iframe 
                              src={loc.mapUrl} 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }} 
                              allowFullScreen={false} 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                              className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 font-body leading-relaxed max-w-xs mx-auto text-sm">
                    {feature.description}
                  </p>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
