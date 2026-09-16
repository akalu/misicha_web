import React, { useState } from 'react';
import { faqsData } from '../data/faqsData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-brand-marfil relative section-render-opt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-bone border border-brand-peach text-stone-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
            <span>Resuelve tus Dudas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-display">
            Preguntas Frecuentes
          </h2>

          <p className="text-base text-stone-600">
            Todo lo que necesitas saber sobre nuestros procesos de adopción, recaudación de fondos y labores comunitarias.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-brand-peach bg-brand-bone/60 shadow-xs'
                    : 'border-brand-peach/70 bg-brand-marfil hover:border-brand-orange/40'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-sm sm:text-base text-stone-900 font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-orange text-white' : 'bg-brand-bone text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-brand-peach/40 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions banner */}
        <div className="mt-12 p-6 rounded-3xl bg-brand-bone border border-brand-peach flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-base text-stone-900">¿Tienes otra consulta en mente?</h4>
            <p className="text-xs text-stone-600">Escríbenos directamente a nuestro WhatsApp oficial y te responderemos con gusto.</p>
          </div>
          <a
            href="https://wa.me/51954778917?text=Hola%20Misicha%2C%20tengo%20una%20consulta%20sobre..."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-michi-600 text-white text-xs sm:text-sm font-bold shadow-warm transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
