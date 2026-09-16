import React, { useState } from 'react';
import { Users, Home, Heart, Calendar, Clock, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VolunteerSection() {
  const [selectedRole, setSelectedRole] = useState('parque'); // 'parque', 'hogar', 'difusion'
  const [volName, setVolName] = useState('');
  const [volPhone, setVolPhone] = useState('');
  const [volDistrict, setVolDistrict] = useState('');
  const [volSubmitted, setVolSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVolSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 60 });
    } catch (err) {}
  };

  const volunteerRoles = [
    {
      id: 'parque',
      title: 'Brigada de Parque Universitario',
      badge: 'Presencial • Cercado de Lima',
      icon: Users,
      desc: 'Participa en los turnos rotativos de alimentación diaria, supervisión del estado de salud de la colonia, cambio de agua limpia y reporte de casos de emergencia.'
    },
    {
      id: 'hogar',
      title: 'Michi Hogar Temporal (Tránsito)',
      badge: 'En tu domicilio',
      icon: Home,
      desc: 'Acoge a un gatito recién rescatado o convaleciente durante 2 a 4 semanas mientras se recupera y encuentra familia definitiva. ¡Nosotros cubrimos su comida y gastos médicos!'
    },
    {
      id: 'difusion',
      title: 'Logística, Redes & Michi Bingo',
      badge: 'Virtual & Eventos',
      icon: Sparkles,
      desc: 'Apoya con fotografía de los michis en adopción, diseño gráfico, edición de videos para TikTok/Reels, o en el control de cartones y sorteos de nuestros bingos.'
    }
  ];

  return (
    <section id="voluntariado" className="py-16 sm:py-24 bg-gradient-to-b from-brand-marfil via-brand-bone/30 to-brand-marfil relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-vanilla text-stone-800 border border-brand-peach text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-brand-orange" />
            <span>Únete al Equipo Solidario</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-display">
            Sé parte de la familia Misicha: <br className="hidden sm:inline" />
            Tu tiempo puede salvar una vida
          </h2>

          <p className="text-base text-stone-600">
            No necesitas ser veterinario para hacer una diferencia real. Si tienes ganas de ayudar y compromiso de corazón, hay un lugar especial para ti en nuestras brigadas.
          </p>
        </div>

        {/* Roles Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {volunteerRoles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-6 rounded-3xl border-2 cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#FFFCF7] border-brand-orange shadow-warm'
                    : 'bg-[#FFFCF7] border-brand-peach/60 hover:border-brand-peach'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-brand-orange text-white shadow-md'
                        : 'bg-brand-bone text-brand-orange border border-brand-peach/60'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-stone-600 bg-brand-bone px-2.5 py-0.5 rounded-full border border-brand-peach/60">
                    {role.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">{role.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">{role.desc}</p>

                <div className="flex items-center gap-1 text-xs font-bold text-brand-orange">
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-1.5 ${
                    isSelected ? 'border-brand-orange bg-brand-orange' : 'border-stone-300'
                  }`}>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </span>
                  <span>{isSelected ? 'Seleccionado para postular' : 'Postular a esta área'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast Signup Form */}
        <div className="max-w-2xl mx-auto bg-[#FFFCF7] rounded-3xl p-6 sm:p-10 border border-brand-peach shadow-lg">
          {volSubmitted ? (
            <div className="text-center py-6 space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-2xl font-black text-stone-900 font-display">
                ¡Gracias por tu vocación de servicio!
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Hemos registrado tus datos para el área seleccionada. Nuestro coordinador de voluntariado te contactará por WhatsApp para la próxima charla de inducción.
              </p>
              <button
                onClick={() => setVolSubmitted(false)}
                className="mt-2 text-xs font-bold text-brand-orange underline"
              >
                Enviar otra postulación
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-xl font-black text-stone-900 font-display">
                  Inscripción Rápida de Voluntarios
                </h3>
                <p className="text-xs text-stone-600">
                  Área elegida: <strong>{volunteerRoles.find(r => r.id === selectedRole)?.title}</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Nombre y Apellidos *
                  </label>
                  <input
                    type="text"
                    required
                    value={volName}
                    onChange={(e) => setVolName(e.target.value)}
                    placeholder="Ej. Rodrigo Silva"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 text-xs focus:ring-2 focus:ring-brand-orange bg-brand-bone/30 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    WhatsApp de Contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    value={volPhone}
                    onChange={(e) => setVolPhone(e.target.value)}
                    placeholder="Ej. 987 654 321"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 text-xs focus:ring-2 focus:ring-brand-orange bg-brand-bone/30 text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Distrito de Lima donde vives *
                </label>
                <input
                  type="text"
                  required
                  value={volDistrict}
                  onChange={(e) => setVolDistrict(e.target.value)}
                  placeholder="Ej. Cercado de Lima, Breña, Lince, Pueblo Libre..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-peach/60 text-xs focus:ring-2 focus:ring-brand-orange bg-brand-bone/30 text-stone-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-white font-bold bg-brand-orange hover:bg-michi-600 shadow-warm text-xs sm:text-sm text-center transition-all"
              >
                Sumarme como Voluntario Misicha
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
