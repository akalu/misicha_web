import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Heart, Sparkles, Send, Phone, MapPin, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdoptionModal({ cat, onClose }) {
  const [activeTab, setActiveTab] = useState('bio'); // 'bio' or 'form'
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    district: '',
    housing: 'Departamento propio',
    hasNetting: 'Tengo mallas instaladas',
    hasPets: 'Sí, tengo otros gatos/perros',
    experience: 'He convivido con gatos antes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!cat) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire confetti for celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola Asociación Misicha! Deseo postular para adoptar a *${cat.name}* (ID: ${cat.id}).\n\n` +
    `Mi nombre: ${formData.name || 'Interesado'}\n` +
    `Distrito: ${formData.district || 'Lima'}\n` +
    `Mallas de seguridad: ${formData.hasNetting}\n` +
    `Comentarios: ${formData.message || 'Deseo coordinar la entrevista.'}`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#FFFCF7] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-brand-peach relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-brand-orange flex items-center justify-center shadow-md transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-900">
          <img
            src={cat.photo}
            alt={cat.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-brand-vanilla text-brand-dark border border-brand-peach text-xs font-black px-2.5 py-0.5 rounded-full uppercase">
                  {cat.gender} • {cat.age}
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {cat.color}
                </span>
              </div>
              <h3 className="text-3xl font-black text-white font-display flex items-center gap-2">
                {cat.name}
                {cat.urgent && (
                  <span className="text-xs bg-red-500 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Urgente
                  </span>
                )}
              </h3>
            </div>
            
            <button
              onClick={() => setActiveTab('form')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white bg-brand-orange hover:bg-michi-600 shadow-md transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              Postular
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-brand-peach/40 bg-brand-bone/60 px-6 pt-2">
          <button
            onClick={() => setActiveTab('bio')}
            className={`pb-3 px-4 font-bold text-sm border-b-2 transition-colors ${
              activeTab === 'bio'
                ? 'border-brand-orange text-brand-orange'
                : 'border-transparent text-brand-coffee hover:text-brand-dark'
            }`}
          >
            Ficha & Personalidad
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`pb-3 px-4 font-bold text-sm border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'form'
                ? 'border-brand-orange text-brand-orange'
                : 'border-transparent text-brand-coffee hover:text-brand-dark'
            }`}
          >
            <Heart className="w-4 h-4 text-brand-orange" />
            Formulario de Adopción
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'bio' ? (
            <div className="space-y-6">
              {/* Story */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-coffee mb-1">
                  Su Historia de Rescate
                </h4>
                <p className="text-brand-coffee leading-relaxed text-sm">
                  {cat.history}
                </p>
              </div>

              {/* Shelter Observations */}
              {cat.observations && (
                <div className="bg-brand-bone border-l-4 border-brand-orange p-3 rounded-r-xl text-xs text-brand-dark font-medium">
                  <strong className="text-brand-coffee">Observaciones del refugio:</strong> {cat.observations}
                </div>
              )}

              {/* Personality traits */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-coffee mb-2">
                  Personalidad
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.personality.map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-brand-vanilla text-brand-dark border border-brand-peach/80"
                    >
                      ✨ {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Medical / Health Status */}
              <div className="bg-brand-bone/60 border border-brand-peach/60 rounded-2xl p-4 space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-coffee flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Salud y Garantía Veterinaria
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-brand-coffee pt-1">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Esterilizado / Castrado</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Vacunas triples al día</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Desparasitación interna y externa</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Test VIF / ViLeF negativo</span>
                  </div>
                </div>
              </div>

              {/* Special Note */}
              {cat.specialNote && (
                <div className="bg-brand-bone border-l-4 border-brand-peach p-3.5 rounded-r-xl text-xs text-brand-dark">
                  <strong className="text-brand-coffee">Recomendación Misicha:</strong> {cat.specialNote}
                </div>
              )}

              {/* Adoption Requirements */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-coffee mb-2">
                  Requisitos Específicos
                </h4>
                <ul className="space-y-1.5 text-xs text-brand-coffee">
                  {cat.adoptionRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-orange font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button inside Tab */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setActiveTab('form')}
                  className="flex-1 py-3 px-4 rounded-xl text-white font-bold bg-brand-orange hover:bg-michi-600 text-center shadow-warm transition-all"
                >
                  ¡Quiero postular para adoptar a {cat.name}!
                </button>
                <a
                  href={`https://wa.me/51954778917?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-brand-dark bg-brand-bone hover:bg-brand-peach/30 border border-brand-peach/60 font-bold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div>
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-brand-dark font-display">
                    ¡Solicitud Recibida para {cat.name}!
                  </h4>
                  <p className="text-sm text-brand-coffee max-w-md mx-auto leading-relaxed">
                    Muchas gracias, <strong>{formData.name || 'amigo michilover'}</strong>. Un voluntario del equipo de adopciones revisará tu información y se comunicará contigo vía WhatsApp o llamada en un lapso de 24 a 48 horas.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/51954778917?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      Acelerar trámite por WhatsApp
                    </a>
                    <button
                      onClick={onClose}
                      className="px-5 py-3 rounded-xl bg-brand-bone hover:bg-brand-peach/30 border border-brand-peach/60 text-brand-dark font-bold text-sm"
                    >
                      Cerrar ventana
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-xs text-brand-coffee">
                    Completa esta breve ficha para iniciar tu postulación de adopción responsable por <strong>{cat.name}</strong>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. María Gonzales"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-[#FFFCF7] text-brand-dark text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        WhatsApp / Celular de contacto *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="Ej. 999 123 456"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-[#FFFCF7] text-brand-dark text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Distrito de residencia (Lima o Callao) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        placeholder="Ej. Jesús María, Surco, Cercado..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-[#FFFCF7] text-brand-dark text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Tipo de Vivienda *
                      </label>
                      <select
                        value={formData.housing}
                        onChange={(e) => setFormData({ ...formData, housing: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-[#FFFCF7] text-brand-dark text-sm"
                      >
                        <option>Departamento propio</option>
                        <option>Departamento alquilado (permiten mascotas)</option>
                        <option>Casa propia</option>
                        <option>Casa alquilada</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1">
                      Mallas de Seguridad en Ventanas / Balcones *
                    </label>
                    <select
                      value={formData.hasNetting}
                      onChange={(e) => setFormData({ ...formData, hasNetting: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-[#FFFCF7] text-brand-dark text-sm"
                    >
                      <option>Ya tengo mallas instaladas en todas las áreas de riesgo</option>
                      <option>Me comprometo a instalarlas antes de recibir al michi</option>
                      <option>Deseo recomendaciones de proveedores de mallas en Lima</option>
                    </select>
                    <p className="text-[11px] text-brand-coffee mt-1">
                      Las mallas evitan caídas mortales y extravíos. Es un requisito innegociable por la vida del felino.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1">
                      ¿Tienes otros animales o experiencia previa?
                    </label>
                    <input
                      type="text"
                      value={formData.hasPets}
                      onChange={(e) => setFormData({ ...formData, hasPets: e.target.value })}
                      placeholder="Ej. Tengo 1 gato esterilizado y 1 perro dócil"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-[#FFFCF7] text-brand-dark text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1">
                      ¿Por qué deseas adoptar a {cat.name}? (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos un poco sobre tu familia y el espacio donde vivirá..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-[#FFFCF7] text-brand-dark text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-white font-bold bg-brand-orange hover:bg-michi-600 shadow-warm hover:shadow-warm-lg transition-all text-center text-sm"
                  >
                    Enviar Postulación de Adopción
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
