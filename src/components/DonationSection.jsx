import React, { useState } from 'react';
import { donationAccounts } from '../data/donationInfo';
import { Heart, Copy, Check, QrCode, Building, Globe, Package, Sparkles, MapPin, Send } from 'lucide-react';

export default function DonationSection() {
  const [activeTab, setActiveTab] = useState('yape'); // 'yape', 'banks', 'sponsor', 'supplies', 'paypal'
  const [copiedText, setCopiedText] = useState('');
  const [impactAmount, setImpactAmount] = useState(50);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const getImpactDescription = (amount) => {
    if (amount < 30) {
      return 'Cubres 5 días de alimento húmedo y croquetas para un gatito recién rescatado.';
    } else if (amount < 65) {
      return 'Financias 1 vacuna triple felina y desparasitación antiparasitaria completa.';
    } else if (amount < 110) {
      return '¡Financias 1 esterilización completa! Evitas el nacimiento y sufrimiento de hasta 20 gatitos en la calle en un solo año.';
    } else {
      return 'Tratamiento veterinario integral: Hemograma, descarte VIF/ViLeF, antibióticos y recuperación post-quirúrgica para un caso de emergencia.';
    }
  };

  return (
    <section id="donaciones" className="py-16 sm:py-24 bg-brand-marfil relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-bone border border-brand-peach text-stone-700 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
            <span>Transparencia & Solidaridad</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-display">
            Cada donación se convierte en <br className="hidden sm:inline" />
            <span className="text-gradient-orange">salud, comida y segundas oportunidades</span>
          </h2>

          <p className="text-base text-stone-600">
            Somos una asociación civil sin subsidios estatales. Nuestra labor se sostiene 100% gracias a personas de buen corazón como tú. Elige tu canal preferido para colaborar:
          </p>
        </div>

        {/* Interactive Impact Slider */}
        <div className="max-w-3xl mx-auto bg-brand-bone border border-brand-peach rounded-3xl p-6 sm:p-8 mb-12 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-orange">
                Calculadora de Impacto Felino
              </span>
              <h3 className="text-xl font-bold text-stone-900">¿Qué logramos con tu aporte?</h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-3xl font-black text-brand-orange font-display">
                S/ {impactAmount}
              </span>
              <span className="text-xs text-stone-500 block">Soles peruanos</span>
            </div>
          </div>

          <input
            type="range"
            min="10"
            max="200"
            step="10"
            value={impactAmount}
            onChange={(e) => setImpactAmount(Number(e.target.value))}
            className="w-full h-2.5 bg-brand-peach/60 rounded-lg appearance-none cursor-pointer accent-brand-orange"
          />

          <div className="flex justify-between text-[11px] text-stone-500 mt-2 font-medium">
            <span>S/ 10</span>
            <span>S/ 50 (Vacunas)</span>
            <span>S/ 80 (Esterilización)</span>
            <span>S/ 200+ (Cirugía)</span>
          </div>

          <div className="mt-4 p-4 rounded-2xl bg-brand-marfil border border-brand-peach flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-bone border border-brand-peach/60 text-brand-orange flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-stone-800 font-medium">
              {getImpactDescription(impactAmount)}
            </p>
          </div>
        </div>

        {/* Donation Channel Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-10">
          <button
            onClick={() => setActiveTab('yape')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'yape'
                ? 'bg-gradient-to-r from-purple-700 via-indigo-700 to-teal-500 text-white shadow-md'
                : 'bg-brand-bone hover:bg-brand-peach/60 text-stone-700 border border-brand-peach/60'
            }`}
          >
            <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Yape & Plin</span>
          </button>

          <button
            onClick={() => setActiveTab('banks')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'banks'
                ? 'bg-brand-orange text-white shadow-warm'
                : 'bg-brand-bone hover:bg-brand-peach/60 text-stone-700 border border-brand-peach/60'
            }`}
          >
            <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Cuentas Bancarias <span className="hidden md:inline">(BCP / Interbank)</span></span>
          </button>

          <button
            onClick={() => setActiveTab('sponsor')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'sponsor'
                ? 'bg-brand-orange text-white shadow-warm'
                : 'bg-brand-bone hover:bg-brand-peach/60 text-stone-700 border border-brand-peach/60'
            }`}
          >
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Apadrinar Michi</span>
          </button>

          <button
            onClick={() => setActiveTab('supplies')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'supplies'
                ? 'bg-brand-orange text-white shadow-warm'
                : 'bg-brand-bone hover:bg-brand-peach/60 text-stone-700 border border-brand-peach/60'
            }`}
          >
            <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Puntos de Acopio</span>
          </button>

          <button
            onClick={() => setActiveTab('paypal')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'paypal'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-brand-bone hover:bg-brand-peach/60 text-stone-700 border border-brand-peach/60'
            }`}
          >
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>PayPal <span className="hidden sm:inline">(Extranjero)</span></span>
          </button>
        </div>

        {/* Tab Content 1: Yape & Plin */}
        {activeTab === 'yape' && (
          <div className="max-w-3xl mx-auto bg-brand-marfil rounded-3xl border border-brand-peach shadow-md p-6 sm:p-10 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* QR Code and Badges */}
              <div className="md:col-span-5 text-center">
                <div className="bg-gradient-to-br from-purple-700 via-indigo-600 to-teal-500 p-4 rounded-3xl shadow-md inline-block">
                  <div className="bg-white p-2.5 rounded-2xl shadow-inner">
                    <img
                      src={donationAccounts.yapePlin.qrImage}
                      alt="QR Oficial Yape Asociación Misicha Perú"
                      className="w-48 h-48 mx-auto object-contain rounded-xl"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-3 text-white font-extrabold text-xs tracking-wider">
                    <span className="bg-purple-900/60 px-2 py-0.5 rounded">YAPE</span>
                    <span className="bg-teal-900/60 px-2 py-0.5 rounded">PLIN</span>
                  </div>
                </div>
                <div className="mt-2.5 space-y-1">
                  <p className="text-[11px] text-stone-600">QR Oficial de Asociación Misicha Perú</p>
                  <a
                    href={donationAccounts.yapePlin.fullFlyer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-brand-orange hover:text-amber-600 underline inline-block"
                  >
                    Ver flyer oficial completo ↗
                  </a>
                </div>
              </div>

              {/* Data & Copy button */}
              <div className="md:col-span-7 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    Número Celular Vinculado
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-stone-900 font-display tracking-wide">
                      {donationAccounts.yapePlin.phone}
                    </span>
                    <button
                      onClick={() => copyToClipboard('954778917', 'phone')}
                      className="p-2 rounded-xl bg-brand-bone hover:bg-brand-peach text-stone-700 border border-brand-peach transition-colors shadow-xs"
                      title="Copiar número"
                    >
                      {copiedText === 'phone' ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                  {copiedText === 'phone' && (
                    <span className="text-xs text-emerald-600 font-bold block animate-fadeIn">
                      ¡Número copiado al portapapeles!
                    </span>
                  )}
                </div>

                <div className="p-4 rounded-2xl bg-brand-bone/60 border border-brand-peach/80 space-y-2 text-xs text-stone-800">
                  <div className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-900 font-black px-2 py-0.5 rounded text-[10px]">YAPE</span>
                    <span>A nombre de: <strong>{donationAccounts.yapePlin.name}</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-teal-100 text-teal-900 font-black px-2 py-0.5 rounded text-[10px]">PLIN</span>
                    <span>A nombre de: <strong>{donationAccounts.yapePlin.plinName}</strong></span>
                  </div>
                  <div className="pt-2 border-t border-brand-peach/50 text-[11px] text-stone-500 flex flex-wrap items-center justify-between gap-1">
                    <span><strong>RUC:</strong> {donationAccounts.ruc}</span>
                    <span>Asociación Civil Sin Fines de Lucro</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/51954778917?text=Hola%20Misicha%2C%20adjunto%20mi%20constancia%20de%20donaci%C3%B3n%20para%20los%20gatitos."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Enviar constancia por WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab Content 2: Bank Accounts */}
        {activeTab === 'banks' && (
          <div className="max-w-4xl mx-auto space-y-4 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-brand-bone border border-brand-peach text-xs text-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <strong>Razón Social:</strong> {donationAccounts.holder} | <strong>RUC:</strong> {donationAccounts.ruc}
              </div>
              <a
                href={donationAccounts.banksFlyer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:text-amber-600 font-bold underline flex items-center gap-1 shrink-0"
              >
                Ver volante oficial de cuentas ↗
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {donationAccounts.banks.map((b, i) => (
                <div
                  key={i}
                  className="bg-brand-marfil rounded-2xl p-5 border border-brand-peach/80 shadow-sm hover:border-brand-orange/50 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-extrabold text-stone-900 block">{b.accountType}</span>
                      <span className="text-[11px] text-stone-600 font-medium">{b.bank}</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 bg-brand-vanilla text-stone-700 border border-brand-peach/60 rounded">
                      {b.currency}
                    </span>
                  </div>

                  <p className="text-xs text-stone-800 bg-brand-bone p-2 rounded-lg border border-brand-peach/50">
                    <strong>A nombre de:</strong> {b.holder}
                  </p>

                  {/* Account number */}
                  <div className="bg-brand-bone p-3 rounded-xl border border-brand-peach/50">
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-0.5">
                      <span>N° de Cuenta:</span>
                      <button
                        onClick={() => copyToClipboard(b.accountNumber, `acc-${i}`)}
                        className="text-brand-orange hover:text-amber-600 font-bold flex items-center gap-1"
                      >
                        {copiedText === `acc-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === `acc-${i}` ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <span className="font-mono font-bold text-sm text-stone-900">{b.accountNumber}</span>
                  </div>

                  {/* CCI */}
                  <div className="bg-brand-bone p-3 rounded-xl border border-brand-peach/50">
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-0.5">
                      <span>CCI Interbancario:</span>
                      <button
                        onClick={() => copyToClipboard(b.cci, `cci-${i}`)}
                        className="text-brand-orange hover:text-amber-600 font-bold flex items-center gap-1"
                      >
                        {copiedText === `cci-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === `cci-${i}` ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <span className="font-mono font-bold text-xs text-stone-900">{b.cci}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Sponsorship */}
        {activeTab === 'sponsor' && (
          <div className="max-w-5xl mx-auto animate-fadeIn">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-stone-900">Conviértete en Michi Padrino</h3>
              <p className="text-xs text-stone-600 mt-1">
                Con una suscripción mensual aseguras la alimentación y control sanitario regular de un gatito en proceso de recuperación.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {donationAccounts.sponsorshipPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                    plan.popular
                      ? 'bg-gradient-to-b from-brand-bone to-brand-vanilla/40 border-brand-orange shadow-warm relative'
                      : 'bg-brand-marfil border-brand-peach/80 shadow-xs'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-amber-500 text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-sm">
                      Más elegido
                    </span>
                  )}

                  <div>
                    <h4 className="text-lg font-bold text-stone-900 mb-1">{plan.title}</h4>
                    <div className="text-2xl font-black text-brand-orange font-display mb-2">
                      {plan.amount}
                    </div>
                    <p className="text-xs text-stone-600 mb-4 bg-brand-bone/80 p-2.5 rounded-xl border border-brand-peach/50">
                      {plan.equivalent}
                    </p>

                    <div className="space-y-2 text-xs text-stone-700">
                      <span className="font-bold text-stone-800 block text-[11px] uppercase tracking-wider">
                        Beneficios para el padrino:
                      </span>
                      {plan.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/51954778917?text=Hola%20Misicha%2C%20deseo%20apadrinar%20con%20el%20plan%20*${encodeURIComponent(plan.title)}*`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 py-2.5 px-4 rounded-xl text-xs font-bold text-center block transition-all shadow-xs ${
                      plan.popular
                        ? 'bg-gradient-to-r from-brand-orange to-amber-500 hover:from-amber-500 hover:to-brand-orange text-white shadow-warm'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    Quiero ser Padrino
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 4: Dropoff Points & Food */}
        {activeTab === 'supplies' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
            {/* Supplies Needed */}
            <div className="bg-brand-bone rounded-3xl p-6 sm:p-8 border border-brand-peach">
              <h3 className="text-lg font-black text-stone-900 font-display mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-brand-orange" /> Insumos que más necesitamos:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-800">
                {donationAccounts.neededSupplies.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-brand-marfil/90 p-2.5 rounded-xl border border-brand-peach/40">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dropoff locations */}
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Puntos de Acopio en Lima</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {donationAccounts.dropoffPoints.map((point, idx) => (
                  <div key={idx} className="bg-brand-marfil p-5 rounded-2xl border border-brand-peach/80 shadow-xs space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-brand-vanilla text-stone-700 border border-brand-peach/60 px-2 py-0.5 rounded-full">
                      {point.district}
                    </span>
                    <h4 className="font-bold text-sm text-stone-900">{point.place}</h4>
                    <p className="text-xs text-stone-600 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                      <span>{point.address}</span>
                    </p>
                    <p className="text-[11px] text-stone-500 pt-1 border-t border-brand-peach/40">
                      🕒 {point.schedule}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 5: PayPal */}
        {activeTab === 'paypal' && (
          <div className="max-w-xl mx-auto bg-brand-marfil rounded-3xl border border-brand-peach shadow-md p-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-xs">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-stone-900 font-display">Donaciones desde el Extranjero</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-sm mx-auto">
                Si vives fuera de Perú, puedes apoyarnos de forma 100% segura con tarjeta de crédito o saldo a través de PayPal.
              </p>
            </div>

            <div className="bg-brand-bone p-3 rounded-2xl border border-brand-peach/60 text-xs text-stone-800">
              <strong>Email de PayPal:</strong> {donationAccounts.paypal.email}
            </div>

            <a
              href={donationAccounts.paypal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Globe className="w-4 h-4" />
              Donar con PayPal Internacional
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
