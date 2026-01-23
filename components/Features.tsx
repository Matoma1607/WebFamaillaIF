
import React from 'react';
import { FEATURES } from '../constants';
import ScrollReveal from './ScrollReveal';

const Features: React.FC = () => {
  return (
    <section id="club" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((feature, index) => (
            <ScrollReveal key={index} className="text-center group">
              <div className="w-20 h-20 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold-bronze group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${feature.icon} text-gold-bronze text-3xl`}></i>
              </div>
              <h3 className="font-sport text-deep-blue text-3xl mb-4 tracking-wider">{feature.title}</h3>
              <p className="text-gray-600 font-body leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
