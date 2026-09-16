import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Menu, X, Calendar, PawPrint, ChevronRight, Phone } from 'lucide-react';

export default function Navbar({ onOpenAdoptionFilter, onOpenBingoModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'En Adopción', href: '#adopciones', badge: '59 michis' },
    { name: 'Michi Bingo & Ferias', href: '#bingo-eventos', highlight: true },
    { name: 'Cómo Ayudar', href: '#donaciones' },
    { name: 'Nuestra Labor', href: '#nosotros' },
    { name: 'Historias', href: '#historias' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner for Michi Bingo */}
      {showTopBar && (
        <div className="bg-gradient-to-r from-amber-500 via-michi-500 to-red-500 text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-sm relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden text-center sm:text-left">
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0">
                <Sparkles className="w-3 h-3 text-yellow-200" /> Evento Solidario
              </span>
              <p className="truncate">
                ¡Gran Michi Bingo 2025! Gana Smart TV 50", electrodomésticos y rascadores gigantes.
              </p>
              <a
                href="#bingo-eventos"
                className="underline font-bold hover:text-yellow-200 whitespace-nowrap ml-1 hidden md:inline"
              >
                Reservar cartón S/ 10 →
              </a>
            </div>
            <button
              onClick={() => setShowTopBar(false)}
              className="text-white/80 hover:text-white p-1 ml-2 transition-colors shrink-0"
              aria-label="Cerrar aviso"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-orange-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <img
                src="/misicha_logo.jpg"
                alt="Logo Asociación Misicha Perú"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl object-cover shadow-md border-2 border-amber-300 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-brand-dark tracking-tight leading-none font-display">
                    misicha
                  </span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded shadow-sm">
                    PERÚ
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-stone-500 font-semibold tracking-wider uppercase">
                  Asociación Civil Pro-Gatitos
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all relative flex items-center gap-1.5 ${
                    link.highlight
                      ? 'text-michi-600 bg-orange-50 hover:bg-orange-100/80 font-bold border border-orange-200/60'
                      : 'text-stone-700 hover:text-michi-600 hover:bg-orange-50/50'
                  }`}
                >
                  {link.highlight && <Sparkles className="w-3.5 h-3.5 text-michi-500 animate-spin-slow" />}
                  {link.name}
                  {link.badge && (
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-1.5 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="#donaciones"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-all shadow-sm"
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Donar / Yape</span>
              </a>

              <a
                href="#adopciones"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-michi-500 via-orange-500 to-red-500 hover:from-michi-600 hover:to-red-600 shadow-warm hover:shadow-warm-lg transition-all transform hover:-translate-y-0.5"
              >
                <PawPrint className="w-4 h-4" />
                <span>Adoptar</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="#donaciones"
                className="inline-flex sm:hidden items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donar</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-stone-700 hover:text-michi-600 hover:bg-orange-50 transition-colors"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-orange-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  link.highlight
                    ? 'bg-orange-100/70 text-michi-700 font-bold'
                    : 'text-stone-700 hover:bg-orange-50 hover:text-michi-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.highlight && <Sparkles className="w-4 h-4 text-michi-500" />}
                  {link.name}
                </span>
                {link.badge ? (
                  <span className="bg-amber-200 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                )}
              </a>
            ))}

            <div className="pt-3 border-t border-orange-100 flex flex-col gap-2">
              <a
                href="#adopciones"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-michi-500 to-red-500 shadow-warm text-center"
              >
                <PawPrint className="w-4 h-4" />
                Conoce a los Michis en Adopción
              </a>
              <a
                href="#donaciones"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-stone-800 font-bold bg-stone-100 hover:bg-stone-200 border border-stone-200 text-center"
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                Yapear o Donar a Misicha
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
