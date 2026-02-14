
import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants.tsx';
import ScrollReveal from './ScrollReveal.tsx';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    // Jugador
    nombreApellido: '',
    fechaNacimiento: '',
    dni: '',
    domicilio: '',
    // Padres
    papaNombre: '',
    papaDomicilio: '',
    papaCelular: '',
    mamaNombre: '',
    mamaDomicilio: '',
    mamaCelular: '',
    // Médicos
    asma: '',
    doloresCabeza: '',
    mareos: '',
    convulsiones: '',
    epilepsia: '',
    diabetes: '',
    alergico: '',
    alergicoQue: '',
    medicacion: '',
    medicacionCual: '',
    otrasEnfermedades: '',
    grupoSanguineo: '',
    // Obra Social
    poseeObraSocial: '',
    obraSocialCual: '',
    nAfiliado: '',
    // TyC
    aceptaTyC: false
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const validate = () => {
    const newErrors: string[] = [];
    if (!formData.nombreApellido) newErrors.push("Nombre Jugador");
    if (!formData.fechaNacimiento) newErrors.push("F. Nacimiento");
    if (!formData.dni) newErrors.push("DNI Jugador");
    if (!formData.domicilio) newErrors.push("Domicilio Jugador");
    if (!formData.papaNombre) newErrors.push("Nombre Papá");
    if (!formData.papaDomicilio) newErrors.push("Domicilio Papá");
    if (!formData.papaCelular) newErrors.push("Celular Papá");
    if (!formData.mamaNombre) newErrors.push("Nombre Mamá");
    if (!formData.mamaDomicilio) newErrors.push("Domicilio Mamá");
    if (!formData.mamaCelular) newErrors.push("Celular Mamá");
    if (!formData.asma) newErrors.push("Campo: Asmático");
    if (!formData.doloresCabeza) newErrors.push("Campo: Dolores de cabeza");
    if (!formData.mareos) newErrors.push("Campo: Mareos");
    if (!formData.convulsiones) newErrors.push("Campo: Convulsiones");
    if (!formData.epilepsia) newErrors.push("Campo: Epilepsia");
    if (!formData.diabetes) newErrors.push("Campo: Diabetes");
    if (!formData.alergico) newErrors.push("Campo: Alérgico");
    if (!formData.poseeObraSocial) newErrors.push("Campo: Obra Social");
    if (!formData.aceptaTyC) newErrors.push("Aceptar T&C");
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const separator = "━━━━━━━━━━━━━━━━━━━━";
      const message = 
        `*⚽ FICHA DE INSCRIPCIÓN - FAMAILLA IF*%0A` +
        `${separator}%0A%0A` +
        `*📋 DATOS DEL JUGADOR/A*%0A` +
        `• *Nombre:* ${formData.nombreApellido}%0A` +
        `• *F. Nac:* ${formData.fechaNacimiento}%0A` +
        `• *DNI:* ${formData.dni}%0A` +
        `• *Domicilio:* ${formData.domicilio}%0A%0A` +
        `*👨‍👩‍👧‍👦 DATOS DE LOS PADRES*%0A` +
        `• *Papá:* ${formData.papaNombre}%0A` +
        `• *Dom. Papá:* ${formData.papaDomicilio}%0A` +
        `• *Cel. Papá:* ${formData.papaCelular}%0A` +
        `• *Mamá:* ${formData.mamaNombre}%0A` +
        `• *Dom. Mamá:* ${formData.mamaDomicilio}%0A` +
        `• *Cel. Mamá:* ${formData.mamaCelular}%0A%0A` +
        `*🏥 ANTECEDENTES MÉDICOS*%0A` +
        `• *Asmático:* ${formData.asma}%0A` +
        `• *Dolor Cabeza:* ${formData.doloresCabeza}%0A` +
        `• *Mareos:* ${formData.mareos}%0A` +
        `• *Convulsiones:* ${formData.convulsiones}%0A` +
        `• *Epilepsia:* ${formData.epilepsia}%0A` +
        `• *Diabetes:* ${formData.diabetes}%0A` +
        `• *Alérgico:* ${formData.alergico} ${formData.alergicoQue ? `(${formData.alergicoQue})` : ''}%0A` +
        `• *Medicación:* ${formData.medicacion} ${formData.medicacionCual ? `(${formData.medicacionCual})` : ''}%0A` +
        `• *Grupo Sang.:* ${formData.grupoSanguineo || 'N/A'}%0A` +
        `• *Otras Enf.:* ${formData.otrasEnfermedades || 'Ninguna'}%0A%0A` +
        `*💳 SEGURO / OBRA SOCIAL*%0A` +
        `• *Posee:* ${formData.poseeObraSocial}%0A` +
        `• *Cual:* ${formData.obraSocialCual || 'SIN DATOS'}%0A` +
        `• *N° Afiliado:* ${formData.nAfiliado || 'SIN DATOS'}%0A%0A` +
        `*✅ TÉRMINOS Y CONDICIONES*%0A` +
        `• *Estado:* ACEPTADOS POR EL TUTOR%0A%0A` +
        `${separator}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    }
  };

  const RadioGroup = ({ label, name }: { label: string, name: keyof typeof formData }) => (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-white/10 group">
      <span className="text-white font-body text-sm mb-2 md:mb-0">
        {label} <span className="text-gold-bronze">*</span>
      </span>
      <div className="flex gap-6">
        {['SI', 'NO'].map(option => (
          <label key={option} className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              name={name as string} 
              value={option}
              checked={formData[name] === option}
              onChange={handleChange}
              className="hidden"
            />
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData[name] === option ? 'border-gold-bronze bg-gold-bronze' : 'border-gray-500 group-hover:border-gold-bronze'}`}>
              {formData[name] === option && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
            <span className={`text-xs font-bold font-body ${formData[name] === option ? 'text-white' : 'text-gray-400'}`}>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <section id="inscripcion" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal className="bg-deep-blue rounded-sm shadow-2xl overflow-hidden border-t-8 border-gold-bronze">
          <div className="bg-gold-bronze/10 p-8 md:p-12 text-center border-b border-white/5">
            <h2 className="font-sport text-white text-5xl md:text-6xl mb-4 tracking-wider uppercase">Ficha Personal de Inscripción</h2>
            <p className="text-gray-300 font-body text-sm tracking-widest max-w-2xl mx-auto">
              Complete todos los campos marcados con <span className="text-gold-bronze font-bold">*</span>. 
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gold-bronze rounded-full flex items-center justify-center text-white font-sport text-xl">1</div>
                <h3 className="font-sport text-white text-3xl tracking-wide uppercase">Información del Jugador/a</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Nombre y Apellido *</label>
                  <input name="nombreApellido" value={formData.nombreApellido} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Fecha de Nacimiento *</label>
                  <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">D.N.I N° *</label>
                  <input type="number" name="dni" value={formData.dni} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Domicilio *</label>
                  <input name="domicilio" value={formData.domicilio} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gold-bronze rounded-full flex items-center justify-center text-white font-sport text-xl">2</div>
                <h3 className="font-sport text-white text-3xl tracking-wide uppercase">Datos de los Padres</h3>
              </div>
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Apellido y Nombre del Papá *</label>
                    <input name="papaNombre" value={formData.papaNombre} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-2 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Domicilio Papá *</label>
                    <input name="papaDomicilio" value={formData.papaDomicilio} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-2 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Celular Papá *</label>
                    <input name="papaCelular" value={formData.papaCelular} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-2 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Apellido y Nombre de la Mamá *</label>
                    <input name="mamaNombre" value={formData.mamaNombre} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-2 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Domicilio Mamá *</label>
                    <input name="mamaDomicilio" value={formData.mamaDomicilio} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-2 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Celular Mamá *</label>
                    <input name="mamaCelular" value={formData.mamaCelular} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-2 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gold-bronze rounded-full flex items-center justify-center text-white font-sport text-xl">3</div>
                <h3 className="font-sport text-white text-3xl tracking-wide uppercase">Antecedentes Personales</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">
                <RadioGroup label="¿Es Asmático?" name="asma" />
                <RadioGroup label="¿Sufre dolores de cabeza?" name="doloresCabeza" />
                <RadioGroup label="¿Sufre mareos?" name="mareos" />
                <RadioGroup label="¿Ha tenido convulsiones?" name="convulsiones" />
                <RadioGroup label="¿Padece Epilepsia?" name="epilepsia" />
                <RadioGroup label="¿Padece Diabetes?" name="diabetes" />
              </div>
              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                  <RadioGroup label="¿Es Alérgico?" name="alergico" />
                  <input name="alergicoQue" value={formData.alergicoQue} onChange={handleChange} placeholder="¿A qué?" className="w-full bg-transparent border-b border-white/20 p-2 text-white focus:outline-none focus:border-gold-bronze transition-colors text-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                  <RadioGroup label="¿Toma alguna medicación?" name="medicacion" />
                  <input name="medicacionCual" value={formData.medicacionCual} onChange={handleChange} placeholder="¿Cuál?" className="w-full bg-transparent border-b border-white/20 p-2 text-white focus:outline-none focus:border-gold-bronze transition-colors text-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Grupo Sanguíneo</label>
                    <input name="grupoSanguineo" value={formData.grupoSanguineo} onChange={handleChange} placeholder="Ej: A+" className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">Otras enfermedades / Comentarios</label>
                    <textarea name="otrasEnfermedades" value={formData.otrasEnfermedades} onChange={handleChange} rows={2} className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors resize-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gold-bronze rounded-full flex items-center justify-center text-white font-sport text-xl">4</div>
                <h3 className="font-sport text-white text-3xl tracking-wide uppercase">Obra Social / Seguro</h3>
              </div>
              <div className="space-y-6">
                <RadioGroup label="¿Posee Obra Social?" name="poseeObraSocial" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">¿Cuál?</label>
                    <input name="obraSocialCual" value={formData.obraSocialCual} onChange={handleChange} placeholder="Nombre de la obra social" className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest">N° de Afiliado</label>
                    <input name="nAfiliado" value={formData.nAfiliado} onChange={handleChange} placeholder="Número de credencial" className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12 bg-white/5 p-6 border border-white/10 rounded-sm">
              <h4 className="font-sport text-gold-bronze text-2xl mb-4 tracking-widest">TÉRMINOS Y CONDICIONES</h4>
              <p className="text-gray-400 text-xs font-body leading-relaxed mb-6">
                Los padres o tutores autorizan al Club a incluir al menor en actividades y eventos oficiales, y al uso de su imagen para fines promocionales.
              </p>
              <label className="flex items-center gap-4 cursor-pointer group">
                <input type="checkbox" name="aceptaTyC" checked={formData.aceptaTyC} onChange={handleChange} className="hidden" />
                <div className={`w-6 h-6 border-2 flex items-center justify-center transition-all ${formData.aceptaTyC ? 'bg-gold-bronze border-gold-bronze' : 'border-gray-500 group-hover:border-gold-bronze'}`}>
                  {formData.aceptaTyC && <i className="fas fa-check text-white text-sm"></i>}
                </div>
                <span className="text-white font-body text-sm font-bold uppercase">Acepto los términos y condiciones como tutor legal *</span>
              </label>
            </div>

            {errors.length > 0 && (
              <div className="mb-8 p-4 bg-red-500/10 border-l-4 border-red-500 text-red-500 font-body text-xs uppercase font-bold">
                <p>Por favor complete los campos obligatorios.</p>
              </div>
            )}

            <button type="submit" className="w-full bg-gold-bronze text-white font-sport text-4xl py-6 hover:bg-gold-bronze/80 transition-all flex items-center justify-center gap-2 md:gap-6 group shadow-2xl uppercase tracking-[0.2em]">
              ENVIAR <span className="hidden md:inline">INSCRIPCIÓN</span> 
              <i className="fab fa-whatsapp text-3xl group-hover:scale-125 transition-transform hidden md:inline-block"></i>
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegistrationForm;
