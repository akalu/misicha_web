import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdoptionSection from './components/AdoptionSection';
import BingoSection from './components/BingoSection';
import DonationSection from './components/DonationSection';
import AboutSection from './components/AboutSection';
import HappyTailsSection from './components/HappyTailsSection';
import VolunteerSection from './components/VolunteerSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { Phone, Heart, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-dark selection:bg-michi-500 selection:text-white relative">
      {/* Top sticky Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Adoption Showcase (Gatitos en adopción) */}
        <AdoptionSection />

        {/* 3. Fundraising / Michi Bingo Section (Actividades de recaudación) */}
        <BingoSection />

        {/* 4. Donations & Support (Yape, Plin, Bancos, Padrinos, Puntos de Acopio) */}
        <DonationSection />

        {/* 5. About Us & Parque Universitario history */}
        <AboutSection />

        {/* 6. Success Stories / Finales Felices */}
        <HappyTailsSection />

        {/* 7. Volunteer & Foster Home (Hogares temporales) */}
        <VolunteerSection />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />
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
