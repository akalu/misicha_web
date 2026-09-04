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
    <section id="donaciones" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            <span>Transparencia & Solidaridad</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight font-display">
            Cada donación se convierte en <br className="hidden sm:inline" />
            <span className="text-gradient-orange">salud, comida y segundas oportunidades</span>
          </h2>

          <p className="text-base text-stone-600">
            Somos una asociación civil sin subsidios estatales. Nuestra labor se sostiene 100% gracias a personas de buen corazón como tú. Elige tu canal preferido para colaborar:
          </p>
        </div>

        {/* Interactive Impact Slider */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-orange-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-michi-600">
                Calculadora de Impacto Felino
              </span>
              <h3 className="text-xl font-bold text-brand-dark">¿Qué logramos con tu aporte?</h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-3xl font-black text-michi-600 font-display">
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
            className="w-full h-2.5 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-michi-500"
          />

          <div className="flex justify-between text-[11px] text-stone-400 mt-2 font-medium">
            <span>S/ 10</span>
            <span>S/ 50 (Vacunas)</span>
            <span>S/ 80 (Esterilización)</span>
            <span>S/ 200+ (Cirugía)</span>
          </div>

          <div className="mt-4 p-4 rounded-2xl bg-white border border-orange-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-michi-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-stone-700 font-medium">
              {getImpactDescription(impactAmount)}
            </p>
          </div>
        </div>

        {/* Donation Channel Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('yape')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'yape'
                ? 'bg-gradient-to-r from-purple-700 via-indigo-700 to-teal-500 text-white shadow-md'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <QrCode className="w-4 h-4" />
            Yape & Plin (Perú)
          </button>

          <button
            onClick={() => setActiveTab('banks')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'banks'
                ? 'bg-michi-500 text-white shadow-warm'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Building className="w-4 h-4" />
            Transferencias Bancarias (BCP / BBVA / Interbank)
          </button>

          <button
            onClick={() => setActiveTab('sponsor')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'sponsor'
                ? 'bg-michi-500 text-white shadow-warm'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Heart className="w-4 h-4" />
            Apadrina un Michi
          </button>

          <button
            onClick={() => setActiveTab('supplies')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'supplies'
                ? 'bg-michi-500 text-white shadow-warm'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Package className="w-4 h-4" />
            Alimento & Puntos de Acopio
          </button>

          <button
            onClick={() => setActiveTab('paypal')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'paypal'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Globe className="w-4 h-4" />
            Donación Internacional (PayPal)
          </button>
        </div>

        {/* Tab Content 1: Yape & Plin */}
        {activeTab === 'yape' && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-lg p-6 sm:p-10 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* QR Code and Badges */}
              <div className="md:col-span-5 text-center">
                <div className="bg-gradient-to-br from-purple-700 via-indigo-600 to-teal-500 p-4 rounded-3xl shadow-md inline-block">
                  <div className="bg-white p-3 rounded-2xl">
                    <img
                      src={donationAccounts.yapePlin.qrImage}
                      alt="QR Yape y Plin Misicha"
                      className="w-48 h-48 mx-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-3 text-white font-extrabold text-xs tracking-wider">
                    <span className="bg-purple-900/60 px-2 py-0.5 rounded">YAPE</span>
                    <span className="bg-teal-900/60 px-2 py-0.5 rounded">PLIN</span>
                  </div>
                </div>
                <p className="text-[11px] text-stone-400 mt-2">Escanea desde tu app bancaria favorita</p>
              </div>

              {/* Data & Copy button */}
              <div className="md:col-span-7 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    Número Celular Vinculado
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-brand-dark font-display tracking-wide">
                      {donationAccounts.yapePlin.phone}
                    </span>
                    <button
                      onClick={() => copyToClipboard('992485174', 'phone')}
                      className="p-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-michi-700 transition-colors shadow-xs"
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

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1 text-xs text-stone-700">
                  <p><strong>Titular:</strong> {donationAccounts.holder}</p>
                  <p><strong>RUC Institucional:</strong> {donationAccounts.ruc}</p>
                  <p className="text-stone-500">Asociación Civil Sin Fines de Lucro registrada en SUNAT.</p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/51992485174?text=Hola%20Misicha%2C%20adjunto%20mi%20constancia%20de%20donaci%C3%B3n%20para%20los%20gatitos."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md"
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
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-stone-700 flex items-center justify-between">
              <div>
                <strong>Razón Social:</strong> {donationAccounts.holder} | <strong>RUC:</strong> {donationAccounts.ruc}
              </div>
              <span className="text-[11px] text-michi-700 font-bold hidden sm:inline">
                Cuentas directas de la asociación
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {donationAccounts.banks.map((b, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:border-orange-300 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-stone-900">{b.bank}</span>
                    <span className="text-xs font-bold px-2 py-0.5 bg-stone-100 rounded text-stone-600">
                      {b.currency}
                    </span>
                  </div>

                  {/* Account number */}
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-0.5">
                      <span>N° de Cuenta:</span>
                      <button
                        onClick={() => copyToClipboard(b.accountNumber, `acc-${i}`)}
                        className="text-michi-600 hover:text-michi-800 font-bold flex items-center gap-1"
                      >
                        {copiedText === `acc-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === `acc-${i}` ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <span className="font-mono font-bold text-sm text-stone-900">{b.accountNumber}</span>
                  </div>

                  {/* CCI */}
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-0.5">
                      <span>CCI Interbancario:</span>
                      <button
                        onClick={() => copyToClipboard(b.cci, `cci-${i}`)}
                        className="text-michi-600 hover:text-michi-800 font-bold flex items-center gap-1"
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
              <h3 className="text-xl font-bold text-brand-dark">Conviértete en Michi Padrino</h3>
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
                      ? 'bg-gradient-to-b from-amber-50 to-orange-50 border-orange-400 shadow-warm relative'
                      : 'bg-white border-stone-200 shadow-xs'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-michi-500 to-red-500 text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-sm">
                      Más elegido
                    </span>
                  )}

                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">{plan.title}</h4>
                    <div className="text-2xl font-black text-michi-600 font-display mb-2">
                      {plan.amount}
                    </div>
                    <p className="text-xs text-stone-600 mb-4 bg-white/80 p-2.5 rounded-xl border border-stone-100">
                      {plan.equivalent}
                    </p>

                    <div className="space-y-2 text-xs text-stone-700">
                      <span className="font-bold text-stone-900 block text-[11px] uppercase tracking-wider">
                        Beneficios para el padrino:
                      </span>
                      {plan.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/51992485174?text=Hola%20Misicha%2C%20deseo%20apadrinar%20con%20el%20plan%20*${encodeURIComponent(plan.title)}*`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 py-2.5 px-4 rounded-xl text-xs font-bold text-center block transition-all shadow-xs ${
                      plan.popular
                        ? 'bg-gradient-to-r from-michi-500 to-red-500 hover:from-michi-600 hover:to-red-600 text-white shadow-warm'
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
            <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200">
              <h3 className="text-lg font-black text-amber-900 font-display mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-600" /> Insumos que más necesitamos:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                {donationAccounts.neededSupplies.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dropoff locations */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Puntos de Acopio en Lima</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {donationAccounts.dropoffPoints.map((point, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-orange-100 text-michi-800 px-2 py-0.5 rounded-full">
                      {point.district}
                    </span>
                    <h4 className="font-bold text-sm text-stone-900">{point.place}</h4>
                    <p className="text-xs text-stone-600 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-michi-500 shrink-0 mt-0.5" />
                      <span>{point.address}</span>
                    </p>
                    <p className="text-[11px] text-stone-500 pt-1 border-t border-stone-100">
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
          <div className="max-w-xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-md p-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-xs">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-brand-dark font-display">Donaciones desde el Extranjero</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-sm mx-auto">
                Si vives fuera de Perú, puedes apoyarnos de forma 100% segura con tarjeta de crédito o saldo a través de PayPal.
              </p>
            </div>

            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-100 text-xs text-stone-700">
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
