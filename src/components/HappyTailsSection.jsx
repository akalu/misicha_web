import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { Heart, Star, Quote, Sparkles, Camera } from 'lucide-react';

export default function HappyTailsSection() {
  return (
    <section id="historias" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Historias que Inspiran</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight font-display">
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
              className="bg-brand-cream/70 rounded-3xl overflow-hidden border border-orange-100 shadow-xs hover:shadow-warm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.catName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-black text-michi-700 shadow-xs flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed relative">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Adopter info */}
              <div className="p-6 pt-0 border-t border-stone-100/80 mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">{item.catName}</h4>
                  <p className="text-[11px] text-stone-500">{item.adopter} • {item.district}</p>
                </div>
                <span className="text-[10px] font-semibold text-michi-600 bg-orange-100 px-2 py-0.5 rounded-full">
                  {item.timeAdopted}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Send your story CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/51992485174?text=Hola%20Misicha%2C%20quisiera%20compartir%20fotos%20y%20la%20historia%20de%20mi%20michi%20adoptado%20para%20sus%20redes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-600 hover:text-michi-600 transition-colors"
          >
            <Camera className="w-4 h-4 text-michi-500" />
            ¿Adoptaste con nosotros? ¡Comparte tu historia para inspirar a más personas! →
          </a>
        </div>

      </div>
    </section>
  );
}
