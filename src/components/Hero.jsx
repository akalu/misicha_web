import React from 'react';
import { Heart, PawPrint, Sparkles, ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react';

export default function Hero({ onExploreCats, onGoBingo }) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background radial gradients for warm ambiance */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200/40 via-orange-200/30 to-red-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-gradient-to-tr from-orange-100/50 via-amber-100/40 to-yellow-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-bone border border-brand-peach text-brand-coffee text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span>Cuidando los felinos del Parque Universitario y Lima</span>
              <span className="bg-brand-vanilla text-brand-coffee text-[10px] font-black px-1.5 py-0.5 rounded-md uppercase border border-brand-peach/50">
                Perú
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight leading-[1.1] font-display">
              Cambiando destinos <br className="hidden sm:inline" />
              de a <span className="text-gradient-orange">cuatro patitas</span> con amor y respeto.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-brand-dark/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Somos <strong>Asociación Misicha Perú</strong>, una comunidad sin fines de lucro dedicada al rescate, esterilización comunitaria, rehabilitación y reubicación en hogares seguros y amorosos de gatos abandonados.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#adopciones"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-brand-orange to-michi-600 hover:from-michi-600 hover:to-brand-coffee shadow-warm hover:shadow-warm-lg transition-all transform hover:-translate-y-0.5"
              >
                <PawPrint className="w-5 h-5" />
                <span>Ver Gatitos en Adopción</span>
              </a>

              <a
                href="#bingo-eventos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold text-brand-coffee bg-brand-bone hover:bg-brand-vanilla/60 border border-brand-peach transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 text-brand-orange" />
                <span>Michi Bingo Solidario</span>
              </a>

              <a
                href="#donaciones"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-base font-bold text-brand-dark bg-brand-marfil hover:bg-brand-bone border border-brand-peach transition-all shadow-xs"
              >
                <Heart className="w-5 h-5 text-brand-orange fill-brand-orange" />
                <span>Donar</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-4 border-t border-brand-peach/60 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-dark">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Esterilizados al 100%</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-dark">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Test VIF / ViLeF negativo</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-dark col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Adopción con mallas seguras</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage & Featured Cat Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-brand-bone group">
                <img
                  src="/gatitos_para_adoptar/aurora.jpg"
                  alt="Aurora - Gatita rescatada por Asociación Misicha"
                  className="w-full h-96 sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-black/10" />

                {/* Overlaid Info */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-2">
                    <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                    <span>Rescatada con amor</span>
                  </div>
                  <h2 className="text-2xl font-bold font-display">Aurora espera una familia</h2>
                  <p className="text-sm text-stone-200 mt-1 line-clamp-2">
                    Tricolor rescatada con una mancha negra en su carita. Cariñosa, esterilizada y lista para llenar tu hogar de amor.
                  </p>
                  <a
                    href="#adopciones"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-vanilla hover:text-white transition-colors"
                  >
                    Ver perfil completo y postular →
                  </a>
                </div>
              </div>

              {/* Floating Badge 1: Next Event */}
              <div className="absolute -top-4 left-2 sm:-top-5 sm:-left-6 bg-brand-marfil rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-brand-peach flex items-center gap-2.5 sm:gap-3 animate-soft-pulse z-10">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-brand-orange to-brand-coffee flex items-center justify-center text-white shadow-md shrink-0">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-black uppercase text-brand-orange tracking-wider">
                    ¡Actividad Próxima!
                  </span>
                  <p className="text-xs font-bold text-brand-dark">Michi Bingo Solidario</p>
                  <p className="text-[10px] text-stone-500 hidden sm:block">Premios Smart TV y más</p>
                </div>
              </div>

              {/* Floating Badge 2: Health & Safety */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:-right-6 bg-brand-marfil rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-brand-peach flex items-center gap-2.5 sm:gap-3 z-10">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-black uppercase text-emerald-600 tracking-wider">
                    Garantía Sanitaria
                  </span>
                  <p className="text-xs font-bold text-brand-dark">Cartilla al día</p>
                  <p className="text-[10px] text-stone-500 hidden sm:block">Vacunados y desparasitados</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Statistics Strip */}
        <div className="mt-16 pt-8 border-t border-brand-peach/60 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-brand-marfil/90 backdrop-blur-xs p-5 rounded-2xl border border-brand-peach/70 shadow-xs text-center">
            <span className="block text-3xl sm:text-4xl font-black text-brand-orange font-display">
              +1,850
            </span>
            <span className="text-xs sm:text-sm font-semibold text-brand-dark/80 mt-1 block">
              Esterilizaciones TNR realizadas
            </span>
          </div>

          <div className="bg-brand-marfil/90 backdrop-blur-xs p-5 rounded-2xl border border-brand-peach/70 shadow-xs text-center">
            <span className="block text-3xl sm:text-4xl font-black text-brand-coffee font-display">
              +980
            </span>
            <span className="text-xs sm:text-sm font-semibold text-brand-dark/80 mt-1 block">
              Adopciones con final feliz
            </span>
          </div>

          <div className="bg-brand-marfil/90 backdrop-blur-xs p-5 rounded-2xl border border-brand-peach/70 shadow-xs text-center">
            <span className="block text-3xl sm:text-4xl font-black text-michi-600 font-display">
              100%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-brand-dark/80 mt-1 block">
              Amor y labor voluntaria
            </span>
          </div>

          <div className="bg-brand-marfil/90 backdrop-blur-xs p-5 rounded-2xl border border-brand-peach/70 shadow-xs text-center">
            <span className="block text-3xl sm:text-4xl font-black text-emerald-700 font-display">
              12 Años
            </span>
            <span className="text-xs sm:text-sm font-semibold text-brand-dark/80 mt-1 block">
              Cuidando en Parque Universitario
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
