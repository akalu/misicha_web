import React, { useState } from 'react';
import { catsData, adoptionSteps } from '../data/catsData';
import AdoptionModal from './AdoptionModal';
import { Search, Heart, Sparkles, Filter, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, PawPrint } from 'lucide-react';

export default function AdoptionSection({ onOpenAllCats }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCatModal, setActiveCatModal] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos los Michis' },
    { id: 'young', label: 'Jóvenes (1-2 años)' },
    { id: 'adult', label: 'Adultos (Tranquilos)' },
    { id: 'special', label: 'Casos Especiales' }
  ];

  const filteredCats = catsData.filter((cat) => {
    const matchesCategory =
      selectedCategory === 'all' || cat.ageCategory === selectedCategory;
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cat.observations && cat.observations.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cat.personality.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cat.history.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Display only 8 featured cats on the home page as requested
  const displayedCats = filteredCats.slice(0, 8);

  return (
    <section id="adopciones" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-michi-700 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-michi-500 text-michi-500" />
            <span>Adopción 100% Responsable</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight font-display">
            Encuentra al compañero felino <br className="hidden sm:inline" />
            que alegrará tu hogar
          </h2>

          <p className="text-base text-stone-600">
            Todos nuestros michis se entregan <strong>esterilizados</strong>, vacunados, desparasitados y con descarte de VIF/ViLeF. Buscamos familias comprometidas con brindarles una vida indoor segura y llena de cariño.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-brand-cream/80 border border-orange-100 rounded-3xl p-4 sm:p-6 mb-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-michi-500 to-red-500 text-white shadow-warm'
                      : 'bg-white text-stone-600 hover:bg-orange-50 hover:text-michi-600 border border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre, color..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-michi-500 bg-white text-sm"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
            </div>

          </div>
        </div>

        {/* Cats Grid */}
        {filteredCats.length === 0 ? (
          <div className="text-center py-16 bg-brand-cream rounded-3xl border border-dashed border-orange-200">
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <p className="text-lg font-bold text-stone-700">No encontramos michis con esos filtros.</p>
            <p className="text-sm text-stone-500 mt-1">Prueba con otra palabra clave o restablece los filtros.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-michi-500 text-white text-xs font-bold rounded-xl"
            >
              Ver todos los gatitos
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {displayedCats.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden bg-stone-100">
                    <img
                      src={cat.photo}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                        {cat.gender} • {cat.age}
                      </span>
                      {cat.urgent ? (
                        <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-xs">
                          Urgente
                        </span>
                      ) : (
                        <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow-xs">
                          Listo
                        </span>
                      )}
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-xl font-black font-display tracking-tight leading-none drop-shadow-sm">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-stone-200 mt-0.5">
                        {cat.color}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    
                    {/* Personality Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {cat.personality.slice(0, 3).map((p, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200/60"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    {/* Short description */}
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {cat.history}
                    </p>

                    {/* Health Guarantee Badges */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                      <span className="flex items-center gap-1 text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Esterilizado
                      </span>
                      <span className="flex items-center gap-1 text-emerald-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Vacunas OK
                      </span>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => setActiveCatModal(cat)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-michi-500 to-red-500 hover:from-michi-600 hover:to-red-600 shadow-xs hover:shadow-warm transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Conocer a {cat.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* View All Cats CTA Button */}
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={onOpenAllCats}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base sm:text-lg font-black text-white bg-gradient-to-r from-michi-500 via-orange-500 to-red-500 hover:from-michi-600 hover:to-red-600 shadow-warm hover:shadow-warm-lg transition-all transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <PawPrint className="w-5 h-5" />
                <span>Ver todos los gatitos ({catsData.length} en adopción)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-stone-500 mt-2 font-medium">
                Explora el catálogo completo con historias, observaciones y fotos reales de nuestros {catsData.length} rescatados.
              </p>
            </div>
          </>
        )}

        {/* Netting Education Notice Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-orange-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-red-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-9 h-9" />
          </div>
          <div className="space-y-1 text-center md:text-left flex-1">
            <h4 className="text-lg sm:text-xl font-black text-brand-dark font-display">
              ¿Por qué exigimos mallas de seguridad en ventanas y balcones?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              El "síndrome del gato paracaidista" causa miles de caídas fatales o lesiones permanentes cada año en Lima. Proteger tus ventanas con malla de nylon transparente o alambre salva la vida de tu michi y te da tranquilidad absoluta.
            </p>
          </div>
          <a
            href="#faq"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white hover:bg-orange-100 text-michi-700 text-xs sm:text-sm font-bold border border-orange-200 transition-colors shadow-xs"
          >
            Ver Requisitos de Adopción
          </a>
        </div>

        {/* 4-Step Process Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-michi-600">
              Proceso Transparente
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-brand-dark font-display mt-1">
              ¿Cómo adoptar en 4 sencillos pasos?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adoptionSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-brand-cream/60 rounded-2xl p-6 border border-orange-100 relative group hover:bg-white hover:shadow-md transition-all"
              >
                <span className="text-3xl font-black text-orange-300 group-hover:text-michi-500 transition-colors font-display block mb-2">
                  {step.number}
                </span>
                <h4 className="text-base font-bold text-brand-dark mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Cat Detail Modal */}
      {activeCatModal && (
        <AdoptionModal
          cat={activeCatModal}
          onClose={() => setActiveCatModal(null)}
        />
      )}
    </section>
  );
}
