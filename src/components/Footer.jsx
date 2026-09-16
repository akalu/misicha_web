import React from 'react';
import { Heart, Mail, Phone, MapPin, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import SocialIcon from './SocialIcon';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-stone-300 pt-16 pb-12 border-t-4 border-michi-500 relative overflow-hidden">
      {/* Glow subtle background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-michi-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/misicha_logo.jpg"
                alt="Logo Misicha Perú"
                className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black text-white tracking-tight leading-none font-display">
                    misicha
                  </span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-black uppercase px-1.5 py-0.5 rounded">
                    PERÚ
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-semibold block">
                  Asociación Civil Sin Fines de Lucro
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Dedicados al rescate ético, esterilización comunitaria (TNR), rehabilitación clínica y reubicación en hogares responsables de gatos vulnerables del Parque Universitario y de la ciudad de Lima.
            </p>

            <div className="pt-2 text-xs space-y-1 text-stone-400">
              <p><strong>RUC:</strong> 20601362491</p>
              <p><strong>Razón Social:</strong> Asociación Civil Misicha Perú</p>
              <p className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Personería jurídica inscrita en SUNARP Lima
              </p>
            </div>

            {/* Redes Sociales Oficiales */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                Síguenos en Redes Sociales:
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-xl bg-stone-800 text-stone-300 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm ${s.hoverClass}`}
                    aria-label={s.ariaLabel}
                    title={`${s.name} (${s.handle})`}
                  >
                    <SocialIcon id={s.id} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 font-display">
              Adopciones
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#adopciones" className="hover:text-white transition-colors">Gatitos Disponibles</a></li>
              <li><a href="#adopciones" className="hover:text-white transition-colors">Requisitos de Adopción</a></li>
              <li><a href="#adopciones" className="hover:text-white transition-colors">Mallas de Seguridad</a></li>
              <li><a href="#historias" className="hover:text-white transition-colors">Historias Adoptados</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Col 3: Support & Events (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 font-display">
              Recaudación & Ayuda
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#bingo-eventos" className="hover:text-white transition-colors flex items-center gap-1.5 font-bold text-orange-400">
                  <Sparkles className="w-3.5 h-3.5" /> Gran Michi Bingo 2025
                </a>
              </li>
              <li><a href="#donaciones" className="hover:text-white transition-colors">Donar con Yape / Plin</a></li>
              <li><a href="#donaciones" className="hover:text-white transition-colors">Cuentas BCP / BBVA</a></li>
              <li><a href="#donaciones" className="hover:text-white transition-colors">Apadrina un Michi</a></li>
              <li><a href="#donaciones" className="hover:text-white transition-colors">Puntos de Acopio Lima</a></li>
              <li><a href="#voluntariado" className="hover:text-white transition-colors">Ser Voluntario</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 font-display">
              Contacto Oficial
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-michi-500 shrink-0 mt-0.5" />
                <span>Parque Universitario, Centro Histórico de Lima, Perú</span>
              </div>
              <a
                href="https://wa.me/51954778917"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: +51 954 778 917</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contacto@misicha.org</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400 mt-3">
              <strong className="text-stone-300">Horario de Atención voluntaria:</strong>
              <p>Lunes a Sábado de 10:00 am a 6:00 pm</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Asociación Misicha Perú. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>para salvar vidas felinas en Lima, Perú</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
