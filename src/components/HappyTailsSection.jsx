import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { Heart, Star, Quote, Sparkles, Camera } from 'lucide-react';

export default function HappyTailsSection() {
  return (
    <section id="historias" className="py-16 sm:py-24 bg-brand-marfil relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-bone border border-brand-peach text-brand-coffee text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Historias que Inspiran</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight font-display">
            Finales Felices: <br className="hidden sm:inline" />
            Vidas transformadas para siempre
          </h2>

          <p className="text-base text-brand-dark/80">
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
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.catName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-marfil/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-black text-brand-coffee shadow-xs flex items-center gap-1 border border-brand-peach/50">
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

                  <p className="text-xs sm:text-sm text-brand-dark/80 italic leading-relaxed relative">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Adopter info */}
              <div className="p-6 pt-0 border-t border-brand-peach/40 mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">{item.catName}</h4>
                  <p className="text-[11px] text-brand-coffee/80">{item.adopter} • {item.district}</p>
                </div>
                <span className="text-[10px] font-semibold text-brand-coffee bg-brand-vanilla border border-brand-peach/60 px-2 py-0.5 rounded-full">
                  {item.timeAdopted}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Send your story CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/51954778917?text=Hola%20Misicha%2C%20quisiera%20compartir%20fotos%20y%20la%20historia%20de%20mi%20michi%20adoptado%20para%20sus%20redes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-coffee hover:text-brand-orange transition-colors"
          >
            <Camera className="w-4 h-4 text-brand-orange" />
            <span>¿Adoptaste con nosotros? ¡Comparte tu historia para inspirar a más personas! →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
