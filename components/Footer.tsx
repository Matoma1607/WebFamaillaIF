
import React from 'react';
import { LOGO_URL } from '../constants.tsx';

const Footer: React.FC = () => {
  const STUDIO_WEB_URL = "https://l.instagram.com/?u=https%3A%2F%2Fstudiowebcoredigital.netlify.app%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnWhTgUXm5sO961YrxwTczwrcRWH1KtrhAkapXhIxOcL5_gHV_SoAUx2KhMjA_aem_zW0-1SGzXGsuxPJMffpMAA&e=AT2aOTNfjWepVhby2_g1VOxq2tBPBSaB5atwd-nz5xLCp2d3Pj6t8XfHVAdvZDAwEHKvUe7gUp4oXxmDbE4MpSt2IadGu-G-D7ZjKDunUw";

  return (
    <footer id="contacto" className="bg-deep-blue text-white py-16 border-t-4 border-gold-bronze">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio" className="group mb-6 inline-block transition-transform hover:scale-105">
              <img 
                src={LOGO_URL} 
                alt="Logo Famailla IF" 
                className="w-24 h-24 object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-lg" 
              />
            </a>
            <p className="text-gray-400 font-body leading-relaxed text-center md:text-left">
              Dedicados a la formación integral de jóvenes deportistas en la ciudad de Famaillá. Entrenamos con pasión, crecemos con valores.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-sport text-2xl mb-6 text-gold-bronze tracking-wider uppercase">Contacto Directo</h4>
            <ul className="space-y-4 font-body text-gray-400 inline-block text-left">
              <li className="flex items-center gap-4">
                <i className="fas fa-phone text-gold-bronze"></i>
                <span>+54 9 381 468-4482</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fas fa-map-marker-alt text-gold-bronze"></i>
                <span>Famaillá, Tucumán, Argentina</span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-sport text-2xl mb-6 text-gold-bronze tracking-wider uppercase">Links Rápidos</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li><a href="#inicio" className="hover:text-gold-bronze transition-colors">Inicio</a></li>
              <li><a href="#club" className="hover:text-gold-bronze transition-colors">Nuestro Club</a></li>
              <li><a href="#calendario" className="hover:text-gold-bronze transition-colors">Calendario de Partidos</a></li>
              <li><a href="#galeria" className="hover:text-gold-bronze transition-colors">Galería de Fotos</a></li>
              <li><a href="#inscripcion" className="hover:text-gold-bronze transition-colors">Ficha de Inscripción</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-body text-gray-500">
          <div className="text-center md:text-left">
            <p>© 2026 Famailla IF. Todos los derechos reservados.</p>
            <p className="mt-1">
              Creado por <a href={STUDIO_WEB_URL} target="_blank" rel="noopener noreferrer" className="text-gold-bronze hover:text-white transition-colors font-bold">StudioWeb</a>
            </p>
          </div>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-gold-bronze transition-all hover:scale-125"><i className="fab fa-facebook-f text-xl"></i></a>
            <a href="#" className="hover:text-gold-bronze transition-all hover:scale-125"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#" className="hover:text-gold-bronze transition-all hover:scale-125"><i className="fab fa-youtube text-xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
