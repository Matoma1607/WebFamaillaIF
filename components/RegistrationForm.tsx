
import React, { useState } from 'react';
import { GOOGLE_SHEETS_URL } from '../constants.tsx';
import ScrollReveal from './ScrollReveal.tsx';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    fechaNacimiento: '',
    dni: '',
    domicilio: '',
    papaNombre: '',
    papaDomicilio: '',
    papaCelular: '',
    mamaNombre: '',
    mamaDomicilio: '',
    mamaCelular: '',
    asma: 'NO',
    doloresCabeza: 'NO',
    mareos: 'NO',
    convulsiones: 'NO',
    epilepsia: 'NO',
    diabetes: 'NO',
    alergico: 'NO',
    alergicoQue: '',
    medicacion: 'NO',
    medicacionCual: '',
    otrasEnfermedades: '',
    grupoSanguineo: '',
    poseeObraSocial: 'NO',
    obraSocialCual: '',
    nAfiliado: '',
    aceptaTyC: false
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!formData.nombreApellido || !formData.dni || !formData.aceptaTyC) {
      alert("Por favor completa los campos obligatorios y acepta los términos.");
      return;
    }

    setStatus('loading');
    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      window.scrollTo({ top: document.getElementById('inscripcion')?.offsetTop, behavior: 'smooth' });
    } catch (err) {
      console.error("Error al enviar:", err);
      setStatus('error');
    }
  };

  const InputField = ({ label, name, type = "text", required = false, placeholder = "" }: { label: string, name: keyof typeof formData, type?: string, required?: boolean, placeholder?: string }) => (
    <div className="space-y-2">
      <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest block">
        {label} {required && <span className="text-gold-bronze">*</span>}
      </label>
      <input 
        type={type}
        name={name as string} 
        value={formData[name] as string} 
        onChange={handleChange} 
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors text-sm" 
      />
    </div>
  );

  const RadioGroup = ({ label, name }: { label: string, name: keyof typeof formData }) => (
    <div className="flex items-center justify-between py-2 border-b border-white/5 group">
      <span className="text-white font-body text-xs">{label}</span>
      <div className="flex gap-4">
        {['SI', 'NO'].map(option => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name={name as string} 
              value={option}
              checked={formData[name] === option}
              onChange={handleChange}
              className="hidden"
            />
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${formData[name] === option ? 'border-gold-bronze bg-gold-bronze' : 'border-gray-500'}`}>
              {formData[name] === option && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
            </div>
            <span className={`text-[10px] font-bold ${formData[name] === option ? 'text-white' : 'text-gray-500'}`}>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <section id="inscripcion" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal className="bg-deep-blue rounded-sm shadow-2xl overflow-hidden border-t-8 border-gold-bronze">
          <div className="bg-gold-bronze/10 p-8 text-center border-b border-white/5">
            <h2 className="font-sport text-white text-5xl mb-2 tracking-wider uppercase">Ficha de Inscripción Digital</h2>
            <p className="text-gray-400 font-body text-xs tracking-widest uppercase">Completa todos los datos para el legajo del jugador</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-12">
            
            {/* SECCIÓN 1: JUGADOR */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8 border-l-4 border-gold-bronze pl-4">
                <h3 className="font-sport text-white text-2xl tracking-wide uppercase">1. Datos del Jugador/a</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Nombre y Apellido" name="nombreApellido" required />
                <InputField label="D.N.I N°" name="dni" type="number" required />
                <InputField label="Fecha de Nacimiento" name="fechaNacimiento" type="date" />
                <InputField label="Domicilio Actual" name="domicilio" placeholder="Calle, Barrio, Ciudad" />
              </div>
            </div>

            {/* SECCIÓN 2: PADRES */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4 border-l-4 border-gold-bronze pl-4">
                  <h3 className="font-sport text-white text-2xl tracking-wide uppercase">2. Datos del Padre</h3>
                </div>
                <InputField label="Nombre Completo" name="papaNombre" />
                <InputField label="Celular de Contacto" name="papaCelular" type="tel" />
                <InputField label="Domicilio" name="papaDomicilio" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4 border-l-4 border-gold-bronze pl-4">
                  <h3 className="font-sport text-white text-2xl tracking-wide uppercase">3. Datos de la Madre</h3>
                </div>
                <InputField label="Nombre Completo" name="mamaNombre" />
                <InputField label="Celular de Contacto" name="mamaCelular" type="tel" />
                <InputField label="Domicilio" name="mamaDomicilio" />
              </div>
            </div>

            {/* SECCIÓN 3: SALUD */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8 border-l-4 border-gold-bronze pl-4">
                <h3 className="font-sport text-white text-2xl tracking-wide uppercase">4. Antecedentes Médicos</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-8">
                <RadioGroup label="¿Es Asmático?" name="asma" />
                <RadioGroup label="¿Sufre dolores de cabeza frecuentes?" name="doloresCabeza" />
                <RadioGroup label="¿Sufre mareos o desmayos?" name="mareos" />
                <RadioGroup label="¿Ha tenido convulsiones?" name="convulsiones" />
                <RadioGroup label="¿Padece Epilepsia?" name="epilepsia" />
                <RadioGroup label="¿Padece Diabetes?" name="diabetes" />
                <RadioGroup label="¿Es Alérgico?" name="alergico" />
                <RadioGroup label="¿Toma alguna medicación?" name="medicacion" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.alergico === 'SI' && <InputField label="¿A qué es alérgico?" name="alergicoQue" />}
                {formData.medicacion === 'SI' && <InputField label="¿Qué medicación toma?" name="medicacionCual" />}
                <div className="md:col-span-2">
                  <InputField label="Otras enfermedades o aclaraciones importantes" name="otrasEnfermedades" />
                </div>
              </div>
            </div>

            {/* SECCIÓN 4: COBERTURA */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8 border-l-4 border-gold-bronze pl-4">
                <h3 className="font-sport text-white text-2xl tracking-wide uppercase">5. Cobertura Médica</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <InputField label="Grupo Sanguíneo" name="grupoSanguineo" placeholder="Ej: 0+, A-, etc." />
                <RadioGroup label="¿Posee Obra Social?" name="poseeObraSocial" />
                {formData.poseeObraSocial === 'SI' && (
                  <>
                    <InputField label="Nombre de Obra Social" name="obraSocialCual" />
                    <InputField label="N° de Afiliado" name="nAfiliado" />
                  </>
                )}
              </div>
            </div>

            {/* TÉRMINOS Y ENVÍO */}
            <div className="mb-8 bg-white/5 p-6 border border-white/10 rounded-sm">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input type="checkbox" name="aceptaTyC" checked={formData.aceptaTyC} onChange={handleChange} className="hidden" />
                <div className={`mt-1 min-w-[20px] h-5 w-5 border flex items-center justify-center transition-all ${formData.aceptaTyC ? 'bg-gold-bronze border-gold-bronze' : 'border-gray-500'}`}>
                  {formData.aceptaTyC && <i className="fas fa-check text-white text-[10px]"></i>}
                </div>
                <span className="text-gray-300 font-body text-[10px] leading-relaxed uppercase">
                  Declaro que los datos suministrados en la presente ficha son veraces y exactos. Me comprometo a informar cualquier cambio en la salud del jugador de manera inmediata.
                </span>
              </label>
            </div>

            {status === 'success' && (
              <div className="mb-8 p-6 bg-green-500/20 border-l-4 border-green-500 text-green-400 font-body text-sm animate-pulse">
                <p className="font-bold uppercase tracking-widest mb-1">¡Registro Recibido!</p>
                <p>La ficha se ha guardado correctamente en nuestra base de datos. ¡Bienvenidos!</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 p-6 bg-red-500/20 border-l-4 border-red-500 text-red-400 font-body text-sm">
                <p className="font-bold uppercase tracking-widest mb-1">Error técnico</p>
                <p>No pudimos conectar con la base de datos. Por favor, revisa la URL en constants.tsx o inténtalo más tarde.</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className={`w-full bg-gold-bronze text-white font-sport text-3xl py-6 transition-all flex items-center justify-center gap-6 group shadow-2xl uppercase tracking-[0.2em] ${status === 'loading' || status === 'success' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-bronze/80 hover:-translate-y-1'}`}
            >
              {status === 'loading' ? (
                <>PROCESANDO... <i className="fas fa-spinner animate-spin"></i></>
              ) : status === 'success' ? (
                <>¡ENVIADO CON ÉXITO! <i className="fas fa-check-circle"></i></>
              ) : (
                <>FINALIZAR E INSCRIBIR <i className="fas fa-file-signature group-hover:scale-110 transition-transform"></i></>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegistrationForm;
