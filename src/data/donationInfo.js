export const donationAccounts = {
  holder: 'ASOCIACIÓN MISICHA PERÚ',
  ruc: '20603418921',
  yapePlin: {
    phone: '954 778 917',
    name: 'Asociación Misicha Perú',
    qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=YAPE_MISICHA_954778917_ASOCIACION_MISICHA_PERU'
  },
  banks: [
    {
      bank: 'Banco de Crédito del Perú (BCP)',
      currency: 'Soles (S/.)',
      accountNumber: '193-94827102-0-45',
      cci: '002-193-0094827102045-12',
      color: 'border-blue-500 bg-blue-50/50'
    },
    {
      bank: 'Banco de Crédito del Perú (BCP)',
      currency: 'Dólares ($ USD)',
      accountNumber: '193-94827108-1-51',
      cci: '002-193-0094827108151-18',
      color: 'border-blue-500 bg-blue-50/50'
    },
    {
      bank: 'BBVA Continental',
      currency: 'Soles (S/.)',
      accountNumber: '0011-0175-0200847291',
      cci: '011-175-000200847291-76',
      color: 'border-sky-600 bg-sky-50/50'
    },
    {
      bank: 'Interbank',
      currency: 'Soles (S/.)',
      accountNumber: '200-3001894231',
      cci: '003-200-003001894231-34',
      color: 'border-emerald-600 bg-emerald-50/50'
    }
  ],
  paypal: {
    email: 'donaciones@misicha.org',
    url: 'https://paypal.me/misichaperu'
  },
  sponsorshipPlans: [
    {
      id: 'alimento',
      title: 'Padrino Nutrición',
      amount: 'S/ 35 al mes',
      equivalent: 'Cubre alimento balanceado y paté para 1 michi durante todo el mes',
      benefits: ['Foto y reporte mensual de tu ahijado', 'Certificado digital de Michi Padrino', 'Agradecimiento en redes']
    },
    {
      id: 'salud',
      title: 'Padrino Salud & Vacunas',
      amount: 'S/ 70 al mes',
      equivalent: 'Cubre vacunas triples, desparasitaciones periódicas y pipetas antipulgas',
      popular: true,
      benefits: ['Historial médico y evolución', 'Videollamada con tu ahijado felino', 'Pase de cortesía para el Michi Bingo anual']
    },
    {
      id: 'rehabilitacion',
      title: 'Padrino Ángel Guardián',
      amount: 'S/ 120 al mes',
      equivalent: 'Sustenta la recuperación clínica integral de un caso crítico de rescate o cirugía',
      benefits: ['Seguimiento paso a paso de su recuperación', 'Insignia de Padrino Destacado', 'Invitación a eventos y jornadas con voluntarios']
    }
  ],
  dropoffPoints: [
    {
      district: 'Cercado de Lima',
      place: 'Kiosco Solidario Parque Universitario',
      address: 'Intersección Av. Abancay con Nicolás de Piérola',
      schedule: 'Lunes a Sábado de 11:00 am a 6:00 pm'
    },
    {
      district: 'Miraflores',
      place: 'Veterinaria Amiga PetCare',
      address: 'Av. Larco 852 (Previa coordinación)',
      schedule: 'Lunes a Domingo de 9:00 am a 8:00 pm'
    },
    {
      district: 'San Borja',
      place: 'Punto Ecológico y PetShop Huellitas',
      address: 'Av. Aviación 2840',
      schedule: 'Martes a Sábado de 10:00 am a 7:00 pm'
    },
    {
      district: 'Los Olivos',
      place: 'Veterinaria San Martín Norte',
      address: 'Av. Carlos Izaguirre 1145',
      schedule: 'Lunes a Viernes de 9:00 am a 6:00 pm'
    }
  ],
  neededSupplies: [
    'Alimento seco para gatos (Hills, Royal Canin, ProPlan, CatChow)',
    'Comida húmeda (Latas Recovery, A/D, paté felino y Churus)',
    'Arena sanitaria aglomerante o ecológica (bentonita, pellets de pino)',
    'Medicinas: Doxiciclina, Meloxicam, pipetas Advocate/Revolution, gasas y jeringas',
    'Mantas polares limpias, toallas, transportadores (kennels) y rascadores usados en buen estado'
  ]
};
