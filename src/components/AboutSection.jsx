import React from 'react';
import { Heart, Shield, CheckCircle, Users, Award, MapPin, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Shield,
      title: 'Esterilización TNR Ética',
      desc: 'Captura, esterilización y retorno o adopción. Es el único método humanitario y científicamente comprobado para frenar la sobrepoblación en espacios públicos.'
    },
    {
      icon: Heart,
      title: 'Rehabilitación Médica',
      desc: 'Atención oportuna a felinos atropellados, enfermos o con desnutrición en clínicas veterinarias aliadas de confianza en Lima.'
    },
    {
      icon: CheckCircle,
      title: 'Adopciones Seguras',
      desc: 'Filtros minuciosos y exigencia de mallas protectoras para asegurar que cada gato viva en un entorno de amor y sin riesgo de caídas o fugas.'
    },
    {
      icon: Users,
      title: 'Educación Comunitaria',
      desc: 'Charlas y talleres en ferias y colegios contra el abandono animal y el mito de que los gatos "deben salir a pasear a los techos".'
    }
  ];

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-gradient-to-b from-brand-marfil via-brand-bone/30 to-brand-marfil relative overflow-hidden section-render-opt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Images Gallery Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-md border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=600&q=80"
                    alt="Voluntariado Misicha en Parque Universitario"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-md border-2 border-white bg-brand-orange p-6 text-white text-center">
                  <span className="text-3xl font-black font-display block">12+</span>
                  <span className="text-xs font-bold uppercase tracking-wider block mt-1 text-brand-bone">
                    Años de compromiso ininterrumpido en Lima
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-md border-2 border-white bg-gradient-to-br from-brand-orange to-amber-500 p-6 text-white">
                  <Heart className="w-8 h-8 fill-white mb-2 text-brand-vanilla" />
                  <p className="text-xs font-bold leading-relaxed text-white">
                    "Un país, una civilización se puede juzgar por la forma en que trata a sus animales."
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-md border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80"
                    alt="Gatitos atendidos por Misicha"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FFFCF7] rounded-2xl px-5 py-2.5 shadow-lg border border-brand-peach flex items-center gap-2 whitespace-nowrap">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold text-stone-800">
                Parque Universitario • Cercado de Lima
              </span>
            </div>
          </div>

          {/* Text Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-vanilla text-stone-800 border border-brand-peach text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Nuestra Historia & Compromiso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-display">
              Cuidando con dignidad a los gatos de Lima
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                La <strong>Asociación Misicha Perú</strong> nació como una respuesta de amor ciudadano ante la alarmante situación de abandono y sobrepoblación felina en el emblemático <strong>Parque Universitario</strong>, en el corazón del Centro Histórico de Lima.
              </p>
              <p>
                Lo que comenzó con un pequeño grupo de vecinos y estudiantes alimentando a escondidas a gatitos vulnerables, se convirtió en una asociación formal sin fines de lucro. Hoy implementamos estaciones de alimentación higiénicas, desparasitación masiva, rescate de camadas y el control reproductivo ético mediante <strong>TNR (Atrapar, Esterilizar y Retornar/Reubicar)</strong>.
              </p>
              <p>
                Nuestro sueño es una Lima donde ningún animal sea abandonado en un parque ni expuesto a la indiferencia de la calle.
              </p>
            </div>

            {/* Micro stats */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-brand-bone border border-brand-peach/60">
                <span className="text-2xl font-black text-brand-orange font-display block">40+ Gatos</span>
                <span className="text-xs text-stone-500">Alimentados diariamente en el parque</span>
              </div>
              <div className="p-4 rounded-2xl bg-brand-bone border border-brand-peach/60">
                <span className="text-2xl font-black text-stone-900 font-display block">35 Voluntarios</span>
                <span className="text-xs text-stone-500">En brigadas de salud y eventos</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Metodología Ética
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-display mt-1">
              Nuestros 4 Pilares de Acción
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFCF7] rounded-3xl p-6 border border-brand-peach/60 shadow-xs hover:border-brand-peach hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900">{p.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
