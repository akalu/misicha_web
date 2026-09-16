import React, { useState } from 'react';
import { featuredBingo, upcomingActivities } from '../data/eventsData';
import { Sparkles, Trophy, Tv, Gift, Heart, Calendar, Clock, Video, CheckCircle2, ShoppingBag, Send, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BingoSection() {
  const [ticketCount, setTicketCount] = useState(3);
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [reservedSuccess, setReservedSuccess] = useState(false);

  // Price calculation:
  // 1 card = 10
  // 3 cards = 25
  // 5 cards = 40
  // other quantities:
  const calculateTotal = (qty) => {
    if (qty === 1) return 10;
    if (qty === 3) return 25;
    if (qty === 5) return 40;
    if (qty === 6) return 50;
    if (qty >= 10) return qty * 8; // bulk discount
    return qty * 10;
  };

  const totalAmount = calculateTotal(ticketCount);

  const handleReserve = (e) => {
    e.preventDefault();
    setReservedSuccess(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (err) {}
  };

  const whatsappReservationMsg = encodeURIComponent(
    `¡Hola Misicha! Deseo reservar cartones para el *${featuredBingo.title}*:\n\n` +
    `👤 Nombre: ${buyerName || 'Participante Solidario'}\n` +
    `🎟️ Cantidad: ${ticketCount} cartón(es)\n` +
    `💰 Total a abonar: S/ ${totalAmount}.00 Soles\n` +
    `📱 Celular/WhatsApp: ${buyerPhone || 'No especificado'}\n\n` +
    `Por favor, indíquenme a qué número de Yape/Plin o cuenta bancaria envío el comprobante. ¡Muchas gracias!`
  );

  return (
    <section id="bingo-eventos" className="py-16 sm:py-24 bg-gradient-to-b from-brand-marfil via-brand-bone/30 to-brand-marfil relative overflow-hidden section-render-opt">
      {/* Decorative background blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-brand-peach/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-vanilla text-stone-800 border border-brand-peach text-xs font-black uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Recaudación de Fondos & Eventos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-display">
            Gran Michi Bingo Solidario <br className="hidden sm:inline" />
            & Actividades Felinas
          </h2>

          <p className="text-base sm:text-lg text-stone-600">
            Nuestros eventos y rifas son el corazón que financia la atención veterinaria, cirugías de esterilización y alimento de decenas de gatitos en Lima. ¡Juega, gana y sé parte del cambio!
          </p>
        </div>

        {/* Featured Bingo Master Card */}
        <div className="bg-[#FFFCF7] rounded-3xl border-2 border-brand-peach shadow-xl overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-brand-orange to-amber-500 p-6 sm:p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5 text-brand-vanilla" /> Edición Solidaria 2025
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display leading-tight">
                  {featuredBingo.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-bone max-w-2xl">
                  {featuredBingo.subtitle}
                </p>
              </div>

              {/* Event Metadata Badges */}
              <div className="bg-black/20 backdrop-blur-md p-4 rounded-2xl border border-white/20 space-y-2 shrink-0">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                  <Calendar className="w-4 h-4 text-brand-vanilla" />
                  <span>{featuredBingo.date}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                  <Clock className="w-4 h-4 text-brand-vanilla" />
                  <span>{featuredBingo.time}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                  <Video className="w-4 h-4 text-brand-vanilla" />
                  <span>{featuredBingo.modality}</span>
                </div>
              </div>

            </div>

            {/* Fundraiser Progress Bar */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex justify-between text-xs sm:text-sm font-bold mb-2">
                <span>Meta de Recaudación Veterinaria</span>
                <span>
                  S/ {featuredBingo.fundRaised.toLocaleString()} de S/ {featuredBingo.fundTarget.toLocaleString()} (63%)
                </span>
              </div>
              <div className="w-full h-3.5 bg-black/20 rounded-full overflow-hidden p-0.5 border border-white/30">
                <div
                  className="h-full bg-gradient-to-r from-brand-vanilla to-white rounded-full transition-all duration-1000 shadow-sm"
                  style={{ width: '63%' }}
                />
              </div>
              <p className="text-xs text-brand-bone mt-2">
                🎯 <strong>Destino:</strong> {featuredBingo.beneficiary}
              </p>
            </div>
          </div>

          {/* Bingo Grid: Prizes on left, Ticket Simulator on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 gap-8">
            
            {/* Left Column: Premios Destacados */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-black text-stone-900 font-display flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-brand-orange" /> Premios en Juego
                </h4>
                <span className="text-xs text-stone-500 font-semibold">+ de S/ 3,500 en premios</span>
              </div>

              <div className="space-y-3">
                {featuredBingo.prizes.map((prize, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                      idx === 0
                        ? 'bg-brand-bone border-brand-peach shadow-xs'
                        : 'bg-white border-brand-peach/60 hover:border-brand-peach'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          idx === 0
                            ? 'bg-brand-orange text-white shadow-md'
                            : 'bg-brand-bone border border-brand-peach text-brand-orange'
                        }`}
                      >
                        {idx === 0 ? <Tv className="w-5 h-5" /> : <Gift className="w-5 h-5" />}
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase text-brand-orange block">
                          {prize.place}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-stone-900">
                          {prize.title}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs sm:text-sm font-black text-stone-800 bg-white px-2.5 py-1 rounded-lg border border-brand-peach/60 shadow-2xs">
                        Valor {prize.val}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bingo Guidelines */}
              <div className="bg-brand-bone/80 border border-brand-peach/80 rounded-2xl p-4 text-xs text-stone-800 space-y-1.5">
                <h5 className="font-bold text-stone-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" /> ¿Cómo se juega el Michi Bingo?
                </h5>
                <ul className="space-y-1 text-stone-600 list-disc list-inside">
                  {featuredBingo.rules.map((rule, rIdx) => (
                    <li key={rIdx}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Ticket Reservation Simulator */}
            <div className="lg:col-span-5 bg-brand-bone rounded-2xl p-6 border border-brand-peach flex flex-col justify-between shadow-xs">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-vanilla text-stone-800 border border-brand-peach/60 text-xs font-bold uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" /> Adquiere tus cartones
                </div>
                <h4 className="text-xl font-black text-stone-900 font-display">
                  Calculadora & Reserva de Cartones
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Elige la cantidad de cartones que deseas jugar y apoya directamente a los gatos del refugio.
                </p>

                {/* Combos Selector Buttons */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setTicketCount(1)}
                    className={`p-2.5 rounded-xl text-center border transition-all ${
                      ticketCount === 1
                        ? 'bg-brand-orange text-white border-brand-orange shadow-warm font-bold'
                        : 'bg-[#FFFCF7] text-stone-800 border-brand-peach/60 hover:border-brand-peach font-semibold'
                    }`}
                  >
                    <span className="block text-xs">1 Cartón</span>
                    <span className="block text-sm font-black">S/ 10</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTicketCount(3)}
                    className={`p-2.5 rounded-xl text-center border relative transition-all ${
                      ticketCount === 3
                        ? 'bg-brand-orange text-white border-brand-orange shadow-warm font-bold'
                        : 'bg-[#FFFCF7] text-stone-800 border-brand-peach/60 hover:border-brand-peach font-semibold'
                    }`}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">
                      Popular
                    </span>
                    <span className="block text-xs">3 Cartones</span>
                    <span className="block text-sm font-black">S/ 25</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTicketCount(5)}
                    className={`p-2.5 rounded-xl text-center border relative transition-all ${
                      ticketCount === 5
                        ? 'bg-brand-orange text-white border-brand-orange shadow-warm font-bold'
                        : 'bg-[#FFFCF7] text-stone-800 border-brand-peach/60 hover:border-brand-peach font-semibold'
                    }`}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">
                      Super Ahorro
                    </span>
                    <span className="block text-xs">5 Cartones</span>
                    <span className="block text-sm font-black">S/ 40</span>
                  </button>
                </div>

                {/* Counter buttons */}
                <div className="flex items-center justify-between bg-[#FFFCF7] rounded-xl p-3 border border-brand-peach/60 mt-4">
                  <span className="text-xs font-bold text-stone-800">Cantidad personalizada:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                      className="w-8 h-8 rounded-lg bg-brand-bone hover:bg-brand-peach/40 text-stone-800 font-bold flex items-center justify-center text-base"
                    >
                      -
                    </button>
                    <span className="text-base font-black text-stone-900 w-6 text-center">
                      {ticketCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTicketCount(ticketCount + 1)}
                      className="w-8 h-8 rounded-lg bg-brand-bone hover:bg-brand-peach/40 text-stone-800 font-bold flex items-center justify-center text-base"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total price highlight */}
                <div className="mt-4 p-4 rounded-xl bg-brand-vanilla/60 border border-brand-peach flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-600 block">Total a pagar:</span>
                    <span className="text-2xl font-black text-brand-orange font-display">
                      S/ {totalAmount}.00 Soles
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-1 rounded-md">
                    100% Solidario
                  </span>
                </div>

                {/* Reservation Form */}
                {reservedSuccess ? (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h5 className="text-sm font-bold text-emerald-900">
                      ¡Pre-reserva registrada con éxito!
                    </h5>
                    <p className="text-xs text-emerald-800">
                      Envíanos un mensaje a nuestro WhatsApp con tu comprobante para enviarte tus cartones digitales con código de seguridad.
                    </p>
                    <a
                      href={`https://wa.me/51954778917?text=${whatsappReservationMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md mt-2"
                    >
                      <Send className="w-4 h-4" />
                      Enviar Comprobante por WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleReserve} className="mt-4 space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Tu Nombre completo"
                        required
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-brand-peach/60 text-xs focus:ring-2 focus:ring-brand-orange bg-[#FFFCF7] text-stone-900"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Tu Celular / WhatsApp"
                        required
                        value={buyerPhone}
                        onChange={(e) => setBuyerPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-brand-peach/60 text-xs focus:ring-2 focus:ring-brand-orange bg-[#FFFCF7] text-stone-900"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl text-white font-bold bg-brand-orange hover:bg-michi-600 shadow-warm hover:shadow-warm-lg transition-all text-xs sm:text-sm text-center"
                    >
                      Reservar {ticketCount} Cartón(es) • S/ {totalAmount}
                    </button>
                  </form>
                )}
              </div>

              {/* Payment channels hint */}
              <p className="text-[11px] text-stone-500 text-center mt-3">
                Aceptamos <strong>Yape</strong>, <strong>BCP</strong> e <strong>Interbank</strong>.
              </p>
            </div>

          </div>
        </div>

        {/* Other Fundraising Activities & Merchandising */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Más Maneras de Apoyar
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-display mt-1">
              Ferias, Rifas & Tiendita Solidaria
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingActivities.map((act) => (
              <div
                key={act.id}
                className="bg-[#FFFCF7] rounded-3xl p-6 border border-brand-peach/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${act.badgeColor}`}>
                      {act.tag}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">
                      {act.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-stone-900 mb-2">
                    {act.title}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {act.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-peach/40 space-y-1.5 text-xs text-stone-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{act.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{act.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-3.5 h-3.5 text-brand-orange" />
                    <span className="truncate">{act.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
