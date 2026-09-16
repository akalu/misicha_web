import React, { useState } from 'react';
import { Heart, Shield, CheckCircle, Users, BookOpen, GraduationCap, MapPin, Sparkles, ChevronLeft, ChevronRight, Info } from 'lucide-react';

const missionSlides = [
  {
    src: '/mision/1.jpeg',
    alt: 'Lámina 1: Nueva etapa - Asociación Misicha Perú',
    title: 'Nueva Etapa Institucional',
    badge: 'Comunicado Oficial',
    caption: 'Iniciamos una etapa de especialización para fortalecer nuestro impacto en la sociedad.'
  },
  {
    src: '/mision/2.jpeg',
    alt: 'Lámina 2: Más de 10 años de trabajo y especialización',
    title: 'Más de 10 Años de Trayectoria',
    badge: 'Evolución',
    caption: 'Luego de más de una década de trabajo, nos organizamos formalmente para ser más sostenibles.'
  },
  {
    src: '/mision/3.jpeg',
    alt: 'Lámina 3: Enfoque en educación, cultura y sensibilización',
    title: 'Educación, Cultura & Sensibilización',
    badge: 'Nuevo Enfoque',
    caption: 'Misicha enfoca su marco civil en talleres, charlas escolares y campañas contra el abandono.'
  },
  {
    src: '/mision/4.jpeg',
    alt: 'Lámina 4: Equipo especializado Voluntarios Parque Universitario',
    title: 'Voluntarios Parque Universitario',
    badge: 'Labor de Campo',
    caption: 'La labor de campo (alimentación, salud, TNR y rescates) continúa en manos de nuestro equipo especializado.'
  },
  {
    src: '/mision/5.jpeg',
    alt: 'Lámina 5: Mayor claridad, sostenibilidad y compromiso',
    title: 'Claridad & Sostenibilidad',
    badge: 'Misma Misión',
    caption: 'Evolucionamos para transformar la realidad animal desde la raíz institucional y en el territorio.'
  },
  {
    src: '/mision/6.jpeg',
    alt: 'Lámina 6: Gracias por acompañarnos en este camino',
    title: 'Sigamos Sumando Juntos',
    badge: 'Agradecimiento',
    caption: 'Gracias a cada voluntario, donante y adoptante por acompañarnos en cada paso por los michis.'
  }
];

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === missionSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? missionSlides.length - 1 : prev - 1));
  };

  const pillars = [
    {
      icon: BookOpen,
      title: 'Educación & Cultura',
      desc: 'Desarrollamos talleres escolares, ferias y campañas de sensibilización ciudadana para inculcar el respeto animal y la tenencia responsable desde la raíz.'
    },
    {
      icon: Shield,
      title: 'Voluntarios Parque Universitario',
      desc: 'Nuestra brigada de campo especializada mantiene la presencia diaria in situ: alimentación higiénica, control veterinario y rescates en el Parque Universitario.'
    },
    {
      icon: Heart,
      title: 'Control Reproductivo Ético (TNR)',
      desc: 'Captura, esterilización y retorno o adopción. Es el único método humanitario y científicamente comprobado para frenar la sobrepoblación en espacios públicos.'
    },
    {
      icon: CheckCircle,
      title: 'Adopciones con Filtros & Mallas',
      desc: 'Filtros rigurosos y exigencia obligatoria de mallas de seguridad para garantizar que cada gato rescatado disfrute de un hogar definitivo sin caídas ni escapes.'
    }
  ];

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-gradient-to-b from-brand-marfil via-brand-bone/30 to-brand-marfil relative overflow-hidden section-render-opt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
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
                La <strong>Asociación Misicha Perú</strong> nació como una respuesta ciudadana de compasión y rescate ante la crítica sobrepoblación y abandono de felinos en el emblemático <strong>Parque Universitario</strong>, en el corazón del Centro Histórico de Lima.
              </p>
              <p>
                Lo que inició como brigadas de vecinos y universitarios alimentando a gatos en riesgo, creció hasta conformar una <strong>asociación civil formal sin fines de lucro</strong> especializada en <strong>educación, cultura y sensibilización</strong> para erradicar el maltrato animal desde la raíz.
              </p>
              <p>
                A la par, el trabajo de campo y la protección directa en el territorio continúan firmes a través de nuestro equipo especializado: los <strong>Voluntarios Parque Universitario</strong>, quienes atienden a la colonia con alimentación diaria, protocolos sanitarios y control reproductivo ético (TNR).
              </p>
            </div>

            {/* Micro stats */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-brand-bone border border-brand-peach/60">
                <span className="text-2xl font-black text-brand-orange font-display block">40+ Gatos</span>
                <span className="text-xs text-stone-500">Alimentados diariamente en el parque</span>
              </div>
              <div className="p-4 rounded-2xl bg-brand-bone border border-brand-peach/60">
                <span className="text-2xl font-black text-stone-900 font-display block">10+ Años</span>
                <span className="text-xs text-stone-500">De trabajo ininterrumpido en Lima</span>
              </div>
            </div>
          </div>

        </div>

        {/* Official Announcement: New Stage / Nueva Etapa Block */}
        <div className="my-16 bg-white rounded-3xl border border-brand-peach/80 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-vanilla text-stone-800 border border-brand-peach text-xs font-bold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-brand-orange" />
              <span>Comunicado Oficial • Nueva Etapa</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 font-display tracking-tight">
              Especialización para un Impacto Más Profundo y Sostenible
            </h3>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Luego de más de una década de trabajo, organizamos nuestra estructura para trabajar con mayor claridad, transparencia y sostenibilidad legal y comunitaria: dos fuerzas trabajando por la misma causa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Carousel Column */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border-2 border-brand-peach/40 bg-stone-900 flex items-center justify-center group">
                <img
                  src={missionSlides[currentSlide].src}
                  alt={missionSlides[currentSlide].alt}
                  className="w-full h-full object-contain transition-opacity duration-300 select-none"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold shadow-sm">
                    {missionSlides[currentSlide].badge}
                  </span>
                </div>

                {/* Counter Pill */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-xs font-bold tracking-wider">
                    {currentSlide + 1} / {missionSlides.length}
                  </span>
                </div>

                {/* Prev Button */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Lámina anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-md flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 text-stone-800" />
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Lámina siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-md flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 text-stone-800" />
                </button>
              </div>

              {/* Caption & Navigation Controls */}
              <div className="mt-4 w-full max-w-sm sm:max-w-md text-center space-y-3">
                <p className="text-xs text-stone-600 italic">
                  "{missionSlides[currentSlide].caption}"
                </p>

                {/* Indicators / Dots */}
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  {missionSlides.map((slide, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Ir a lámina ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide
                          ? 'w-8 bg-brand-orange shadow-xs'
                          : 'w-2.5 bg-brand-peach/80 hover:bg-brand-orange/50'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-stone-600 block">
                  Desliza o usa las flechas para ver las 6 láminas oficiales
                </span>
              </div>
            </div>

            {/* Structure Explanation Column */}
            <div className="lg:col-span-6 space-y-5">
              {/* Card 1: Asociación Misicha Perú */}
              <div className="p-5 sm:p-6 rounded-2xl bg-brand-marfil border border-brand-peach/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-brand-orange block">
                      Marco Institucional & Legal
                    </span>
                    <h4 className="text-base font-bold text-stone-900">
                      Asociación Misicha Perú
                    </h4>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Especializada formalmente en <strong>educación, cultura y sensibilización</strong> ante los registros públicos (SUNARP). Diseña programas escolares, talleres de tenencia responsable y campañas ciudadanas para transformar la cultura sobre el trato a los animales.
                </p>
              </div>

              {/* Card 2: Voluntarios Parque Universitario */}
              <div className="p-5 sm:p-6 rounded-2xl bg-brand-bone border border-brand-peach/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center shadow-xs">
                    <Shield className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-stone-500 block">
                      Equipo Operativo Especializado
                    </span>
                    <h4 className="text-base font-bold text-stone-900">
                      Voluntarios Parque Universitario
                    </h4>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Asumen la <strong>labor de campo directa</strong> en el Parque Universitario: turnos de alimentación higiénica diaria, monitoreo médico, rescates de emergencia y operativos de esterilización TNR para proteger a la colonia in situ.
                </p>
              </div>

              {/* Clarification Box */}
              <div className="p-4 rounded-2xl bg-brand-vanilla/40 border border-brand-peach/70 flex gap-3 text-xs text-stone-700 leading-relaxed">
                <Info className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <p>
                  <strong>¿Por qué esta evolución?</strong> Permite cumplir estrictamente con los fines educativos sin fines de lucro, garantizando máxima transparencia institucional y asegurando que los gatitos sigan recibiendo el mismo amor y cuidado diario en el parque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Metodología Ética & Formativa
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
