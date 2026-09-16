import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { Heart, Star, Sparkles, Camera, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HappyTailsSection({ onOpenAdoptedCats }) {
  return (
    <section id="historias" className="py-16 sm:py-24 bg-brand-marfil relative section-render-opt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-bone border border-brand-peach text-stone-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Historias que Inspiran</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-display">
            Finales Felices: <br className="hidden sm:inline" />
            Vidas transformadas para siempre
          </h2>

          <p className="text-base text-stone-600">
            Cada michi adoptado deja un espacio libre en el refugio para que podamos rescatar a otro en peligro. Conoce algunas historias de familias que abrieron sus corazones.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-bone/60 rounded-3xl overflow-hidden border border-brand-peach shadow-xs hover:shadow-warm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative h-60 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.catName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 bg-brand-marfil/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-black text-stone-800 shadow-xs flex items-center gap-1 border border-brand-peach/50">
                    <Heart className="w-3 h-3 text-brand-orange fill-brand-orange" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1 text-brand-orange">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed relative">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Adopter info */}
              <div className="p-6 pt-0 border-t border-brand-peach/40 mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-stone-900">{item.catName}</h4>
                  <p className="text-[11px] text-stone-500">{item.adopter} • {item.district}</p>
                </div>
                <span className="text-[10px] font-semibold text-stone-700 bg-brand-vanilla border border-brand-peach/60 px-2 py-0.5 rounded-full">
                  {item.timeAdopted}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner with Button to View All Adopted Cats */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-brand-bone border border-brand-peach/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>22+ Vidas Felinas a Salvo</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 font-display">
              Muro de Honor de Gatitos Adoptados
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Explora nuestra galería de michis graduados que pasaron de las calles de Lima a hogares llenos de amor y seguridad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenAdoptedCats}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-michi-600 hover:to-brand-orange text-white font-black text-sm shadow-warm hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Ver a los gatitos adoptados</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/51954778917?text=Hola%20Misicha%2C%20quisiera%20compartir%20fotos%20y%20la%20historia%20de%20mi%20michi%20adoptado%20para%20sus%20redes."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-brand-marfil hover:bg-brand-peach/40 text-stone-700 hover:text-stone-900 font-bold text-xs sm:text-sm border border-brand-peach transition-all"
            >
              <Camera className="w-4 h-4 text-brand-orange" />
              <span>Comparte tu historia</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
