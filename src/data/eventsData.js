export const featuredBingo = {
  title: 'Gran Michi Bingo Solidario 2025 - Edición Primavera',
  subtitle: '¡Juega, gana increíbles premios y ayuda a salvar a cientos de gatitos en Lima!',
  date: 'Sábado 27 de Septiembre, 2025',
  time: '5:00 PM (Hora de Lima)',
  modality: 'Transmisión en Vivo por Facebook Live & Zoom',
  ticketPrice: 10, // S/. 10 per card
  comboOffer: {
    cards: 3,
    price: 25,
    saving: 5,
    popular: true
  },
  superCombo: {
    cards: 5,
    price: 40,
    saving: 10
  },
  fundTarget: 15000,
  fundRaised: 9450,
  beneficiary: 'Fondo de salud para +40 gatitos rescatados: Esterilizaciones, vacunas triples felinas, tratamientos veterinarios y alimento para el Parque Universitario.',
  prizes: [
    {
      place: '1er Premio Mayor (Apagón)',
      title: 'Smart TV 50" 4K UHD + Canastón Michi Gourmet',
      val: 'S/ 1,800',
      icon: 'Tv'
    },
    {
      place: '2do Premio',
      title: 'Freidora de Aire Digital Xiaomi 6L + Michi Pack Sorpresa',
      val: 'S/ 550',
      icon: 'Gift'
    },
    {
      place: '3er Premio',
      title: 'Rascador Castillo Gigante 1.80m de 5 niveles con hamaca',
      val: 'S/ 380',
      icon: 'Sparkles'
    },
    {
      place: '4to Premio',
      title: 'Vale de Consumo S/ 250 en Veterinaria aliada + Kit antipulgas',
      val: 'S/ 250',
      icon: 'ShoppingBag'
    },
    {
      place: 'Premios Sorpresa de Ruleta',
      title: '10 premios en vivo: Tazas Michi, Polos oficiales, Camitas térmicas y snacks',
      val: 'S/ 500+',
      icon: 'Heart'
    }
  ],
  rules: [
    'Los cartones digitales con código QR único se envían a tu WhatsApp o correo tras validar tu comprobante de pago.',
    'Puedes jugar con cartón digital impreso o marcarlo directamente desde tu celular o computadora.',
    'Transmisión en directo y validación automática de cartones ganadores por sistema.',
    'Premios físicos se entregan en puntos céntricos de Lima o por delivery a coordinar (envíos a provincias disponibles para premios no frágiles).'
  ]
};

export const upcomingActivities = [
  {
    id: 'michi-feria-barranco',
    type: 'Feria Solidaria',
    tag: 'Presencial',
    title: 'Michi Stand en Feria Ecológica',
    date: '14 de Septiembre, 2025',
    time: '10:00 AM - 6:00 PM',
    location: 'Parque de la Familia, Barranco, Lima',
    description: 'Encuentra merchandising exclusivo (tazas, tote bags, polos de gatos), recepción de donaciones de comida/arena y asesoría para adopciones.',
    badgeColor: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'michirrifa-veterinaria',
    type: 'Michirrifa Virtual',
    tag: 'Rifa Solidaria',
    title: 'Michirrifa: "Salud y Bienestar Felino"',
    date: 'Sorteo: 30 de Septiembre, 2025',
    time: 'S/ 5.00 el boleto',
    location: 'Sorteo vía Instagram Live @asociacionmisichaperu',
    description: 'Sorteamos chequeos geriátricos, ecografías felinas y canastas de nutrición Royal Canin / Hills para tu engreído.',
    badgeColor: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'campana-esterilizacion',
    type: 'Campaña Sanitaria',
    tag: 'Acción Social',
    title: 'Jornada TNR: Esterilización Masiva Comunitaria',
    date: 'Primer domingo de cada mes',
    time: '8:00 AM - 2:00 PM',
    location: 'Cercado de Lima y zonas aledañas',
    description: 'Meta mensual: 50 felinos comunitarios esterilizados para frenar la sobrepoblación y el abandono infantil en las calles.',
    badgeColor: 'bg-orange-100 text-orange-800'
  }
];
