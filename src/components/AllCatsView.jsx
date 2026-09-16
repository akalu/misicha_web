import React, { useState, useEffect } from 'react';
import { catsData } from '../data/catsData';
import AdoptionModal from './AdoptionModal';
import { Search, Heart, Sparkles, Filter, ShieldCheck, CheckCircle2, ArrowLeft, ArrowRight, PawPrint, X } from 'lucide-react';

export default function AllCatsView({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCatModal, setActiveCatModal] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    { id: 'all', label: 'Todos los Michis', count: catsData.length },
    { id: 'young', label: 'Jóvenes (1-2 años)', count: catsData.filter(c => c.ageCategory === 'young').length },
    { id: 'adult', label: 'Adultos (Tranquilos)', count: catsData.filter(c => c.ageCategory === 'adult').length },
    { id: 'special', label: 'Casos Especiales', count: catsData.filter(c => c.ageCategory === 'special').length }
  ];

  const filteredCats = catsData.filter((cat) => {
    const matchesCategory =
      selectedCategory === 'all' || cat.ageCategory === selectedCategory;
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.observations.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.personality.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cat.history.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-brand-cream/80 pt-6 pb-20 animate-fadeIn">
      {/* Top sticky navigation bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-stone-700 hover:text-michi-600 bg-stone-100 hover:bg-orange-50 border border-stone-200 transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Página Principal</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs font-bold text-stone-500">
              Censo de Adopción Misicha:
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-michi-500 to-red-500 text-white shadow-xs">
              {catsData.length} Michis Reales
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-michi-800 text-xs font-black uppercase tracking-wider">
            <PawPrint className="w-4 h-4 text-michi-600" />
            <span>Catálogo Completo de Adopción</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight font-display">
            Conoce a nuestros <span className="text-gradient-orange">{catsData.length} michis</span> en adopción
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Cada uno de ellos tiene una historia única, cuidados personalizados y mucho amor para dar. Todos se entregan <strong>esterilizados</strong>, vacunados, desparasitados y con descarte de VIF/ViLeF.
          </p>
        </div>

        {/* Filters and Search toolbar */}
        <div className="bg-white border border-orange-200 rounded-3xl p-4 sm:p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-michi-500 to-red-500 text-white shadow-warm'
                      : 'bg-stone-100 text-stone-700 hover:bg-orange-50 hover:text-michi-600 border border-stone-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre, color, rasgos..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-michi-500 bg-white text-xs sm:text-sm"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Result counter */}
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>
              Mostrando <strong>{filteredCats.length}</strong> de {catsData.length} gatitos disponibles
            </span>
            {searchQuery && (
              <span className="text-michi-600 font-semibold">
                Filtro activo por: "{searchQuery}"
              </span>
            )}
          </div>
        </div>

        {/* Cats Grid */}
        {filteredCats.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-orange-200 shadow-xs">
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <p className="text-lg font-bold text-stone-700">No encontramos michis con esos criterios de búsqueda.</p>
            <p className="text-sm text-stone-500 mt-1">Prueba con otro término o limpia los filtros.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2.5 bg-michi-500 hover:bg-michi-600 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
            >
              Restablecer filtros y ver todos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredCats.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-xs hover:shadow-warm-lg transition-all duration-300 flex flex-col group"
              >
                {/* Photo container */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={cat.photo}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1">
                    <span className="bg-white/95 backdrop-blur-xs text-stone-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      {cat.gender} • {cat.age}
                    </span>
                    {cat.urgent ? (
                      <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase shadow-xs">
                        Caso Especial
                      </span>
                    ) : (
                      <span className="bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shadow-xs">
                        Listo
                      </span>
                    )}
                  </div>

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-xl font-black font-display tracking-tight leading-none drop-shadow-sm">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-stone-200 mt-0.5 line-clamp-1">
                      {cat.color}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                  
                  {/* Personality Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.personality.slice(0, 3).map((p, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-amber-50 text-amber-900 border border-amber-200/60"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Real Observation Badge if any */}
                  {cat.observations && (
                    <div className="bg-orange-50/80 border border-orange-200/80 p-2 rounded-xl text-[11px] text-michi-900 font-medium">
                      <strong>Rasgo distintivo:</strong> {cat.observations}
                    </div>
                  )}

                  {/* Short story preview */}
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {cat.history}
                  </p>

                  {/* Health Guarantees */}
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
                    <span>Conocer la historia de {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA to return */}
        <div className="mt-16 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-stone-700 hover:text-michi-600 bg-white hover:bg-orange-50 border border-stone-200 shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Página Principal</span>
          </button>
        </div>

      </div>

      {/* Cat Detail Modal */}
      {activeCatModal && (
        <AdoptionModal
          cat={activeCatModal}
          onClose={() => setActiveCatModal(null)}
        />
      )}
    </div>
  );
}
