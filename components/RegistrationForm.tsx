
import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import ScrollReveal from './ScrollReveal';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreSocio: '',
    apellidoSocio: '',
    tutor: '',
    dni: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombreSocio.trim()) newErrors.nombreSocio = "El nombre es requerido";
    if (!formData.apellidoSocio.trim()) newErrors.apellidoSocio = "El apellido es requerido";
    if (!formData.tutor.trim()) newErrors.tutor = "El nombre del tutor es requerido";
    if (!formData.dni.trim()) newErrors.dni = "El DNI es requerido";
    if (formData.dni.length < 7) newErrors.dni = "DNI no válido";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const message = `*SOLICITUD DE INSCRIPCIÓN FAMAILLA IF*%0A%0A` +
        `*Socio:* ${formData.nombreSocio} ${formData.apellidoSocio}%0A` +
        `*DNI:* ${formData.dni}%0A` +
        `*Tutor:* ${formData.tutor}%0A` +
        `*Mensaje:* ${formData.mensaje || 'Sin mensaje adicional'}`;
      
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="inscripcion" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal className="bg-deep-blue p-8 md:p-12 rounded-sm shadow-2xl border-t-8 border-gold-bronze">
          <div className="text-center mb-10">
            <h2 className="font-sport text-white text-5xl mb-4 tracking-wider uppercase">Ficha de Inscripción</h2>
            <p className="text-gray-400 font-body uppercase text-xs tracking-[0.2em]">Completa los datos y te contactaremos de inmediato</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-white font-body text-xs font-bold uppercase tracking-wider">Nombre del Socio (Niño/a)</label>
              <input 
                name="nombreSocio"
                value={formData.nombreSocio}
                onChange={handleChange}
                className={`w-full bg-deep-blue/50 border-b-2 ${errors.nombreSocio ? 'border-red-500' : 'border-gold-bronze'} p-3 text-white focus:outline-none focus:bg-deep-blue transition-all`}
                placeholder="Ej: Juan"
              />
              {errors.nombreSocio && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.nombreSocio}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-white font-body text-xs font-bold uppercase tracking-wider">Apellido del Socio</label>
              <input 
                name="apellidoSocio"
                value={formData.apellidoSocio}
                onChange={handleChange}
                className={`w-full bg-deep-blue/50 border-b-2 ${errors.apellidoSocio ? 'border-red-500' : 'border-gold-bronze'} p-3 text-white focus:outline-none focus:bg-deep-blue transition-all`}
                placeholder="Ej: Pérez"
              />
              {errors.apellidoSocio && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.apellidoSocio}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-white font-body text-xs font-bold uppercase tracking-wider">Nombre del Tutor</label>
              <input 
                name="tutor"
                value={formData.tutor}
                onChange={handleChange}
                className={`w-full bg-deep-blue/50 border-b-2 ${errors.tutor ? 'border-red-500' : 'border-gold-bronze'} p-3 text-white focus:outline-none focus:bg-deep-blue transition-all`}
                placeholder="Nombre del padre/madre/encargado"
              />
              {errors.tutor && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.tutor}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-white font-body text-xs font-bold uppercase tracking-wider">DNI del Socio</label>
              <input 
                name="dni"
                type="number"
                value={formData.dni}
                onChange={handleChange}
                className={`w-full bg-deep-blue/50 border-b-2 ${errors.dni ? 'border-red-500' : 'border-gold-bronze'} p-3 text-white focus:outline-none focus:bg-deep-blue transition-all`}
                placeholder="Sin puntos"
              />
              {errors.dni && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.dni}</span>}
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-white font-body text-xs font-bold uppercase tracking-wider">Mensaje Adicional (Opcional)</label>
              <textarea 
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full bg-deep-blue/50 border-b-2 border-gold-bronze p-3 text-white focus:outline-none focus:bg-deep-blue transition-all resize-none"
                placeholder="¿Alguna duda o aclaración?"
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <button 
                type="submit"
                className="w-full bg-gold-bronze text-white font-sport text-3xl py-4 hover:bg-gold-bronze/80 transition-all flex items-center justify-center gap-4 group shadow-xl uppercase"
              >
                ENVIAR INSCRIPCIÓN
                <i className="fab fa-whatsapp text-2xl group-hover:scale-125 transition-transform"></i>
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegistrationForm;
