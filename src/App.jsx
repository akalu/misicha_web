import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdoptionSection from './components/AdoptionSection';
import AllCatsView from './components/AllCatsView';
import AdoptedCatsView from './components/AdoptedCatsView';
import BingoSection from './components/BingoSection';
import DonationSection from './components/DonationSection';
import AboutSection from './components/AboutSection';
import HappyTailsSection from './components/HappyTailsSection';
import VolunteerSection from './components/VolunteerSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { Phone, Heart, Sparkles } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'catalog' | 'adopted'

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#catalogo' || window.location.hash === '#todos-los-gatitos') {
        setCurrentView('catalog');
      } else if (window.location.hash === '#adoptados' || window.location.hash === '#gatitos-adoptados') {
        setCurrentView('adopted');
      } else {
        setCurrentView('home');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const openFullCatalog = () => {
    window.location.hash = '#catalogo';
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAdoptedCats = () => {
    window.location.hash = '#adoptados';
    setCurrentView('adopted');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const returnToHomeFromCatalog = () => {
    window.location.hash = '#adopciones';
    setCurrentView('home');
  };

  const returnToHomeFromAdopted = () => {
    window.location.hash = '#historias';
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-marfil text-stone-900 selection:bg-brand-orange selection:text-white relative">
      {/* Top sticky Navbar */}
      <Navbar onOpenAllCats={openFullCatalog} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {currentView === 'catalog' ? (
          <AllCatsView onBack={returnToHomeFromCatalog} />
        ) : currentView === 'adopted' ? (
          <AdoptedCatsView onBack={returnToHomeFromAdopted} onOpenCatalog={openFullCatalog} />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Adoption Showcase (Gatitos en adopción - 8 destacados con botón a catálogo completo) */}
            <AdoptionSection onOpenAllCats={openFullCatalog} />

            {/* 3. Fundraising / Michi Bingo Section (Actividades de recaudación) */}
            <BingoSection />

            {/* 4. Donations & Support (Yape, Plin, Bancos, Padrinos, Puntos de Acopio) */}
            <DonationSection />

            {/* 5. About Us & Parque Universitario history */}
            <AboutSection />

            {/* 6. Success Stories / Finales Felices */}
            <HappyTailsSection onOpenAdoptedCats={openAdoptedCats} />

            {/* 7. Volunteer & Foster Home (Hogares temporales) */}
            <VolunteerSection />

            {/* 8. Frequently Asked Questions */}
            <FAQSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action WhatsApp Button */}
      <aside aria-label="Contacto rápido" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/51954778917?text=¡Hola%20Asociación%20Misicha!%20Me%20gustaría%20recibir%20más%20información."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
          aria-label="Contactar por WhatsApp"
        >
          <div className="relative">
            <Phone className="w-5 h-5 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold text-emerald-100 tracking-wider">
              ¿Dudas o Donaciones?
            </span>
            <span className="text-xs font-black">
              Escríbenos a WhatsApp
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}

export default App;
