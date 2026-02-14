
import React, { useState } from 'react';
import { GOOGLE_SHEETS_URL } from '../constants.tsx';
import ScrollReveal from './ScrollReveal.tsx';

// Definimos los tipos para los props de los sub-componentes
interface FormData {
  nombreApellido: string;
  fechaNacimiento: string;
  dni: string;
  domicilio: string;
  papaNombre: string;
  papaDomicilio: string;
  papaCelular: string;
  mamaNombre: string;
  mamaDomicilio: string;
  mamaCelular: string;
  asma: string;
  doloresCabeza: string;
  mareos: string;
  convulsiones: string;
  epilepsia: string;
  diabetes: string;
  alergico: string;
  alergicoQue: string;
  medicacion: string;
  medicacionCual: string;
  otrasEnfermedades: string;
  grupoSanguineo: string;
  poseeObraSocial: string;
  obraSocialCual: string;
  nAfiliado: string;
  aceptaTyC: boolean;
}

// Sub-componentes definidos FUERA para evitar re-creación y pérdida de foco
const InputField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  type = "text", 
  required = false, 
  placeholder = "" 
}: { 
  label: string, 
  name: string, 
  value: string, 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type?: string, 
  required?: boolean, 
  placeholder?: string 
}) => (
  <div className="space-y-2">
    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest block">
      {label} {required && <span className="text-gold-bronze">*</span>}
    </label>
    <input 
      type={type}
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors text-sm" 
    />
  </div>
);

const RadioGroup = ({ 
  label, 
  name, 
  value, 
  onChange 
}: { 
  label: string, 
  name: string, 
  value: string, 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}) => (
  <div className="flex items-center justify-between py-2 border-b border-white/5 group">
    <span className="text-white font-body text-xs">{label}</span>
    <div className="flex gap-4">
      {['SI', 'NO'].map(option => (
        <label key={option} className="flex items-center gap-2 cursor-pointer">
          <input 
            type="radio" 
            name={name} 
            value={option}
            checked={value === option}
            onChange={onChange}
            className="hidden"
          />
          <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${value === option ? 'border-gold-bronze bg-gold-bronze' : 'border-gray-500'}`}>
            {value === option && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
          </div>
          <span className={`text-[10px] font-bold ${value === option ? 'text-white' : 'text-gray-500'}`}>{option}</span>
        </label>
      ))}
    </div>
  </div>
);

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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
      window.scrollTo({ top: (document.getElementById('inscripcion')?.offsetTop || 0), behavior: 'smooth' });
    } catch (err) {
      console.error("Error al enviar:", err);
      setStatus('error');
    }
  };

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
                <InputField label="Nombre y Apellido" name="nombreApellido" value={formData.nombreApellido} onChange={handleChange} required />
                <InputField label="D.N.I N°" name="dni" value={formData.dni} onChange={handleChange} type="number" required />
                <InputField label="Fecha de Nacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} type="date" />
                <InputField label="Domicilio Actual" name="domicilio" value={formData.domicilio} onChange={handleChange} placeholder="Calle, Barrio, Ciudad" />
              </div>
            </div>

            {/* SECCIÓN 2: PADRES */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4 border-l-4 border-gold-bronze pl-4">
                  <h3 className="font-sport text-white text-2xl tracking-wide uppercase">2. Datos del Padre</h3>
                </div>
                <InputField label="Nombre Completo" name="papaNombre" value={formData.papaNombre} onChange={handleChange} />
                <InputField label="Celular de Contacto" name="papaCelular" value={formData.papaCelular} onChange={handleChange} type="tel" />
                <InputField label="Domicilio" name="papaDomicilio" value={formData.papaDomicilio} onChange={handleChange} />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4 border-l-4 border-gold-bronze pl-4">
                  <h3 className="font-sport text-white text-2xl tracking-wide uppercase">3. Datos de la Madre</h3>
                </div>
                <InputField label="Nombre Completo" name="mamaNombre" value={formData.mamaNombre} onChange={handleChange} />
                <InputField label="Celular de Contacto" name="mamaCelular" value={formData.mamaCelular} onChange={handleChange} type="tel" />
                <InputField label="Domicilio" name="mamaDomicilio" value={formData.mamaDomicilio} onChange={handleChange} />
              </div>
            </div>

            {/* SECCIÓN 3: SALUD */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8 border-l-4 border-gold-bronze pl-4">
                <h3 className="font-sport text-white text-2xl tracking-wide uppercase">4. Antecedentes Médicos</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-8">
                <RadioGroup label="¿Es Asmático?" name="asma" value={formData.asma} onChange={handleChange} />
                <RadioGroup label="¿Sufre dolores de cabeza frecuentes?" name="doloresCabeza" value={formData.doloresCabeza} onChange={handleChange} />
                <RadioGroup label="¿Sufre mareos o desmayos?" name="mareos" value={formData.mareos} onChange={handleChange} />
                <RadioGroup label="¿Ha tenido convulsiones?" name="convulsiones" value={formData.convulsiones} onChange={handleChange} />
                <RadioGroup label="¿Padece Epilepsia?" name="epilepsia" value={formData.epilepsia} onChange={handleChange} />
                <RadioGroup label="¿Padece Diabetes?" name="diabetes" value={formData.diabetes} onChange={handleChange} />
                <RadioGroup label="¿Es Alérgico?" name="alergico" value={formData.alergico} onChange={handleChange} />
                <RadioGroup label="¿Toma alguna medicación?" name="medicacion" value={formData.medicacion} onChange={handleChange} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.alergico === 'SI' && <InputField label="¿A qué es alérgico?" name="alergicoQue" value={formData.alergicoQue} onChange={handleChange} />}
                {formData.medicacion === 'SI' && <InputField label="¿Qué medicación toma?" name="medicacionCual" value={formData.medicacionCual} onChange={handleChange} />}
                <div className="md:col-span-2">
                  <div className="space-y-2">
                    <label className="text-white font-body text-[10px] font-bold uppercase tracking-widest block">Otras enfermedades o aclaraciones importantes</label>
                    <textarea 
                      name="otrasEnfermedades" 
                      value={formData.otrasEnfermedades} 
                      onChange={handleChange} 
                      className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:outline-none focus:border-gold-bronze transition-colors text-sm resize-none" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN 4: COBERTURA */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8 border-l-4 border-gold-bronze pl-4">
                <h3 className="font-sport text-white text-2xl tracking-wide uppercase">5. Cobertura Médica</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <InputField label="Grupo Sanguíneo" name="grupoSanguineo" value={formData.grupoSanguineo} onChange={handleChange} placeholder="Ej: 0+, A-, etc." />
                <RadioGroup label="¿Posee Obra Social?" name="poseeObraSocial" value={formData.poseeObraSocial} onChange={handleChange} />
                {formData.poseeObraSocial === 'SI' && (
                  <>
                    <InputField label="Nombre de Obra Social" name="obraSocialCual" value={formData.obraSocialCual} onChange={handleChange} />
                    <InputField label="N° de Afiliado" name="nAfiliado" value={formData.nAfiliado} onChange={handleChange} />
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
