
import React, { useState, useEffect } from 'react';
import { CLUB_NAME, LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-deep-blue/95 py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" onClick={closeMenu} className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
          <span className="font-sport text-white text-2xl tracking-widest">{CLUB_NAME}</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-body text-sm font-semibold tracking-wider">
          <a href="#inicio" className="hover:text-gold-bronze transition-colors uppercase">Inicio</a>
          <a href="#club" className="hover:text-gold-bronze transition-colors uppercase">El Club</a>
          <a href="#calendario" className="hover:text-gold-bronze transition-colors uppercase">Calendario</a>
          <a href="#galeria" className="hover:text-gold-bronze transition-colors uppercase">Galería</a>
          <a href="#inscripcion" className="bg-gold-bronze px-5 py-2 rounded shadow hover:bg-gold-bronze/80 transition-all uppercase">Inscripciones</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-deep-blue border-t border-gray-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-6 text-center text-white font-body font-bold tracking-widest uppercase">
          <a href="#inicio" onClick={closeMenu} className="hover:text-gold-bronze transition-colors py-2 border-b border-white/5">Inicio</a>
          <a href="#club" onClick={closeMenu} className="hover:text-gold-bronze transition-colors py-2 border-b border-white/5">El Club</a>
          <a href="#calendario" onClick={closeMenu} className="hover:text-gold-bronze transition-colors py-2 border-b border-white/5">Calendario</a>
          <a href="#galeria" onClick={closeMenu} className="hover:text-gold-bronze transition-colors py-2 border-b border-white/5">Galería</a>
          <a href="#inscripcion" onClick={closeMenu} className="bg-gold-bronze py-4 rounded text-white mt-4">Inscripciones</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
