import React, { useState, useEffect } from 'react';
import { adoptedCatsData } from '../data/adoptedCatsData';
import { 
  ArrowLeft, 
  Heart, 
  Sparkles, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  PawPrint, 
  Award, 
  X, 
  ExternalLink,
  ZoomIn
} from 'lucide-react';

export default function AdoptedCatsView({ onBack, onOpenCatalog }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const years = [
    { id: 'all', label: 'Todos los Adoptados', count: adoptedCatsData.length },
    { id: '2025', label: 'Promoción 2025', count: adoptedCatsData.filter(c => c.year === '2025').length },
    { id: '2024', label: 'Promoción 2024', count: adoptedCatsData.filter(c => c.year === '2024').length },
  ];

  const filteredCats = adoptedCatsData.filter((cat) => {
    const matchesYear = selectedYear === 'all' || cat.year === selectedYear;
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.trait.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-brand-marfil pt-6 pb-20 animate-fadeIn">
      {/* Top sticky navigation bar */}
      <div className="sticky top-0 z-30 bg-[#FFFCF7] border-b border-brand-peach shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-stone-800 hover:text-brand-orange bg-brand-bone hover:bg-brand-peach/60 border border-brand-peach transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Página Principal</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs font-bold text-stone-600">
              Vidas Transformadas:
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {adoptedCatsData.length} Michis Adoptados
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-bone border border-brand-peach text-stone-700 text-xs font-black uppercase tracking-wider">
            <Award className="w-4 h-4 text-brand-orange" />
            <span>Muro de Honor Misicha</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-display">
            Gatitos que encontraron su <br className="hidden sm:inline" />
            <span className="text-gradient-orange">hogar para siempre</span>
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Cada foto documenta una victoria contra el abandono. Gracias a personas comprometidas que colocaron mallas de seguridad y les abrieron las puertas de su corazón, estos michis hoy disfrutan de camas calientes, cuidados veterinarios y amor incondicional.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-2xl mx-auto">
            <div className="p-3 rounded-2xl bg-brand-bone/80 border border-brand-peach/60 text-center">
              <span className="block text-xl font-black text-brand-orange font-display">22</span>
              <span className="text-[11px] font-bold text-stone-600">Michis Documentados</span>
            </div>
            <div className="p-3 rounded-2xl bg-brand-bone/80 border border-brand-peach/60 text-center">
              <span className="block text-xl font-black text-emerald-600 font-display">100%</span>
              <span className="text-[11px] font-bold text-stone-600">Con Mallas de Seguridad</span>
            </div>
            <div className="p-3 rounded-2xl bg-brand-bone/80 border border-brand-peach/60 text-center">
              <span className="block text-xl font-black text-brand-orange font-display">100%</span>
              <span className="text-[11px] font-bold text-stone-600">Esterilizados</span>
            </div>
            <div className="p-3 rounded-2xl bg-brand-bone/80 border border-brand-peach/60 text-center">
              <span className="block text-xl font-black text-emerald-600 font-display">0%</span>
              <span className="text-[11px] font-bold text-stone-600">Retorno a las Calles</span>
            </div>
          </div>
        </div>

        {/* Filters and Search toolbar */}
        <div className="bg-brand-bone border border-brand-peach rounded-3xl p-4 sm:p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Year Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {years.map((y) => (
                <button
                  key={y.id}
                  onClick={() => setSelectedYear(y.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    selectedYear === y.id
                      ? 'bg-brand-orange text-white shadow-warm'
                      : 'bg-brand-marfil text-stone-700 hover:bg-brand-vanilla/60 border border-brand-peach/80'
                  }`}
                >
                  <span>{y.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                    selectedYear === y.id ? 'bg-white/25 text-white' : 'bg-brand-bone text-stone-600'
                  }`}>
                    {y.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre, distrito o detalle..."
                className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-brand-marfil border border-brand-peach text-stone-900 placeholder-stone-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-inner"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-stone-600 font-medium mb-6 px-1">
          <span>
            Mostrando <strong>{filteredCats.length}</strong> de {adoptedCatsData.length} gatitos adoptados
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-brand-orange hover:underline font-bold text-xs"
            >
              Limpiar búsqueda
            </button>
          )}
        </div>

        {/* Adopted Cats Grid */}
        {filteredCats.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCats.map((cat) => (
              <div
                key={cat.id}
                className="bg-brand-marfil rounded-3xl overflow-hidden border border-brand-peach/80 shadow-xs hover:shadow-warm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <img
                      src={cat.photo}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => setActivePhotoModal(cat)}
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Gradient overlay on bottom of photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1 pointer-events-none">
                      <span className="bg-emerald-600/95 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1 border border-emerald-400/40">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                        <span>¡Adoptado!</span>
                      </span>
                      <span className="bg-brand-marfil/90 backdrop-blur-xs text-stone-800 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs border border-brand-peach/60">
                        {cat.year}
                      </span>
                    </div>

                    {/* Zoom button */}
                    <button
                      onClick={() => setActivePhotoModal(cat)}
                      className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-stone-800 flex items-center justify-center shadow-md backdrop-blur-xs transition-transform hover:scale-110"
                      title="Ver foto completa"
                      aria-label="Ver foto completa"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <h3 className="text-xl font-black text-stone-900 font-display">
                          {cat.name}
                        </h3>
                        <span className="text-[10px] font-black uppercase tracking-wider bg-brand-vanilla text-stone-700 border border-brand-peach/60 px-2 py-0.5 rounded-full">
                          {cat.badge}
                        </span>
                      </div>
                      
                      <p className="text-xs font-bold text-brand-orange flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{cat.trait}</span>
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {cat.highlight}
                    </p>
                  </div>
                </div>

                {/* Card Footer: District & Guarantee */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-brand-peach/50 flex flex-col gap-1.5 text-xs text-stone-500">
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span className="truncate">{cat.district}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Hogar con mallas verificado</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-brand-bone rounded-3xl border border-brand-peach p-8 space-y-3">
            <PawPrint className="w-12 h-12 text-brand-orange/40 mx-auto" />
            <h3 className="text-lg font-bold text-stone-800">No se encontraron gatitos con esos criterios</h3>
            <p className="text-xs text-stone-600 max-w-sm mx-auto">
              Intenta buscar por otro nombre o distrito, o restablece los filtros para ver la galería completa.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedYear('all'); }}
              className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-xs hover:bg-michi-600"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-bone via-brand-marfil to-brand-vanilla/40 border border-brand-peach shadow-sm text-center max-w-4xl mx-auto space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange flex items-center justify-center mx-auto shadow-xs">
            <Heart className="w-7 h-7 fill-brand-orange" />
          </div>

          <div className="space-y-2 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-display">
              ¿Listo para escribir la próxima historia de amor?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Aún tenemos decenas de michis rescatados esperando por una familia como la tuya. Todos se entregan listos para compartir una vida entera de ronroneos y felicidad.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenCatalog}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-brand-orange hover:bg-michi-600 text-white font-bold text-xs sm:text-sm shadow-warm transition-all flex items-center justify-center gap-2"
            >
              <PawPrint className="w-4 h-4" />
              <span>Ver Michis Disponibles para Adopción</span>
            </button>

            <button
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-brand-bone hover:bg-brand-peach/40 text-stone-800 font-bold text-xs sm:text-sm border border-brand-peach transition-all"
            >
              Volver al Inicio
            </button>
          </div>
        </div>

      </div>

      {/* High-Resolution Photo Lightbox Modal */}
      {activePhotoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActivePhotoModal(null)}
        >
          <div 
            className="relative bg-brand-marfil rounded-3xl overflow-hidden max-w-2xl w-full border border-brand-peach shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="relative max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhotoModal.photo}
                alt={activePhotoModal.name}
                className="w-full h-full object-contain max-h-[65vh]"
              />
            </div>

            {/* Info footer */}
            <div className="p-6 bg-brand-marfil space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-black text-stone-900 font-display">
                    {activePhotoModal.name}
                  </h3>
                  <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-black px-2.5 py-0.5 rounded-full">
                    ¡Adoptado con Éxito!
                  </span>
                </div>
                <span className="text-xs font-bold text-stone-500">
                  Promoción {activePhotoModal.year}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600">
                {activePhotoModal.highlight}
              </p>

              <div className="pt-2 border-t border-brand-peach/50 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  {activePhotoModal.district}
                </span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Protegido en hogar con mallas
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
