/**
 * Spanish / Argentine (ES) locale
 * Plain script  registers into window.MAI_LOCALES before i18n.js loads.
 */
(function () {
  window.MAI_LOCALES = window.MAI_LOCALES || {};

  window.MAI_LOCALES.es = {
    page: { title: 'systemisAI', lang: 'es' },

    nav: {
      products:    'Productos',
      methodology: 'Metodologia',
      benefits:    'Beneficios',
      contact:     'Contacto',
      langLabel:   'Seleccionar idioma',
    },

    hero: {
      pill:         'Automatizacion con IA',
      headline1:    'Acelera tus procesos con',
      headline2:    'Inteligencia Artificial',
      subheading:   'Automatiza flujos de trabajo, optimiza operaciones y obtene una ventaja competitiva con soluciones de IA de vanguardia, listas para desplegar o construidas a medida de tu negocio.',
      ctaPrimary:   'Agenda tu reunion',
      ctaSecondary: 'Ver soluciones',
    },

    products: {
      title:    'Soluciones de IA Empresarial',
      subtitle: 'Implementa productos probados o construi la arquitectura que tu empresa necesita.',
      
      atendi: {
        badge: 'Disponible ahora · Para empresas de servicios',
        headline: 'Atendi — Tu agente de ventas y atención en WhatsApp, disponible 24/7',
        problemTitle: 'Problema que resuelve:',
        problem: 'Tus clientes escriben por WhatsApp fuera de horario, tus agentes no dan abasto, y cada consulta sin respuesta rápida es una venta perdida. Contratar más personal no escala.',
        whatTitle: 'Qué hace exactamente:',
        what1: 'Responde, califica y agenda por WhatsApp de forma autónoma, con el tono y conocimiento de tu negocio',
        what2: 'Escala al equipo humano solo cuando el lead está listo para cerrar',
        what3: 'Aprende de tu catálogo, precios, FAQs y procesos específicos',
        forWhomTitle: 'Para quién es:',
        forWhom: 'Clínicas y centros de estética · Inmobiliarias · Concesionarias · Academias · E-commerce · Franquicias',
        includesTitle: 'Incluye:',
        include1: 'Agente entrenado con tu información',
        include2: 'Flujos de calificación personalizados',
        include3: 'Booking automático con integración de agenda',
        include4: 'Dashboard de conversaciones y métricas',
        include5: 'Onboarding en 2 semanas + soporte continuo',
        result: '"De 0 a respuesta calificada en menos de 2 minutos, sin intervención humana."',
        pricingLabel: 'Pricing referencial:',
        pricing: 'Setup desde $800 USD · Suscripción mensual desde $350 USD',
        cta: 'Quiero ver Atendi en acción',
      },
      
      cualix: {
        badge: 'Nuevo · Para equipos comerciales B2B',
        headline: 'Cualix — IA que califica tus leads antes de que lleguen a tus vendedores',
        problemTitle: 'Problema que resuelve:',
        problem: 'Tus vendedores pierden el 60% de su tiempo en leads que no van a comprar. La calificación manual es lenta, inconsistente y no escala cuando el volumen crece. El pipeline está lleno de oportunidades que no son oportunidades.',
        whatTitle: 'Qué hace exactamente:',
        what1: 'Contacta al lead en los primeros 5 minutos de ingreso (el momento de mayor intención)',
        what2: 'Ejecuta una conversación de calificación por email, WhatsApp o LinkedIn',
        what3: 'Asigna un score, enriquece el perfil y entrega al vendedor solo los leads listos para cerrar',
        what4: 'El vendedor llega a la primera llamada sabiendo necesidad, presupuesto y urgencia',
        forWhomTitle: 'Para quién es:',
        forWhom: 'Empresas B2B con equipos de 3 a 30 vendedores · Tecnología · Servicios financieros · Consultoría · Educación corporativa · Logística · SaaS',
        includesTitle: 'Incluye:',
        include1: 'Agente multicanal (email + WhatsApp + LinkedIn)',
        include2: 'Motor de scoring configurable (BANT, MEDDIC)',
        include3: 'Enriquecimiento automático de perfiles',
        include4: 'Integración con HubSpot, Salesforce o Pipedrive',
        include5: 'Handoff estructurado para vendedores',
        include6: 'Nurturing automático para leads no calificados',
        include7: 'Reportería de calidad de pipeline',
        include8: 'Onboarding en 3 semanas + entrenamiento del equipo',
        result: '"Pipeline más limpio, ciclos de venta más cortos, vendedores enfocados en lo que importa."',
        pricingLabel: 'Pricing referencial:',
        pricing: 'Setup desde $1.500 USD · Suscripción mensual desde $600 USD',
        cta: 'Quiero ver Cualix en acción',
      },
      
      aiarch: {
        badge: 'Para operaciones complejas',
        headline: 'AI Architecture — Cuando tu operación necesita más que un producto estándar',
        desc: 'Diseñamos e implementamos soluciones de IA a medida para empresas con procesos complejos, integraciones con sistemas propios o casos de uso que ningún producto estándar puede resolver.',
        useCasesTitle: 'Casos de uso típicos:',
        useCase1: 'Modelos predictivos sobre datos históricos propios (churn, pricing, riesgo)',
        useCase2: 'Automatización de procesos internos complejos',
        useCase3: 'Integración con ERP, CRM legacy o sistemas propios',
        useCase4: 'Análisis masivo de documentos o datos no estructurados',
        useCase5: 'Agentes de IA multi-proceso para operaciones con múltiples flujos',
        processLabel: 'Proceso:',
        process: ' Discovery → Arquitectura → Implementación → Mantenimiento',
        pricingLabel: 'Precio de entrada:',
        pricing: 'Proyectos desde $8.000 USD + retainer mensual',
        cta: 'Contanos tu caso',
      },
    },

    value: {
      cost:         { title: 'Reduccion de Costos',          desc: 'Minimiza los gastos operativos delegando procesos repetitivos a sistemas autonomos.' },
      productivity: { title: 'Aumento de Productividad',     desc: 'Libera a tu equipo para que se concentre en tareas estrategicas de alto valor para el negocio.' },
      integration:  { title: 'Integracion sin Fricciones',   desc: 'Se conecta sin problemas con tu stack tecnologico actual, ERPs y bases de datos.' },
      ai:           { title: 'IA de Vanguardia',             desc: 'Utilizamos los ultimos avances en LLMs, sistemas RAG y agentes autonomos.' },
    },

    methodology: {
      title:    'Metodología',
      subtitle: '4 pasos específicos y orientados a resultados.',
      step1: { title: 'Discovery',      desc: 'Analizamos tus flujos, volumen de leads/consultas y stack tecnológico actual' },
      step2: { title: 'Configuración',  desc: 'Entrenamos el agente con tu información y configuramos las integraciones' },
      step3: { title: 'Implementación', desc: 'Deploy seguro, pruebas con casos reales y ajuste fino' },
      step4: { title: 'Evolución',      desc: 'Monitoreo continuo, refinamiento del modelo y escala cuando lo necesites' },
    },

    whyUs: {
      eyebrow:  'Beneficios',
      title:    '¿Por qué systemisAI?',
      subtitle: 'Afirmaciones concretas que nos diferencian en el mercado latinoamericano.',
      latam:    { title: 'Especialistas en LATAM, no traductores de herramientas globales', desc: 'Nuestros agentes hablan, negocian y califican con el tono y el contexto del mercado local.' },
      roi:      { title: 'ROI desde el primer mes, no promesas de largo plazo',              desc: 'Cada implementación viene con métricas base y benchmark de resultados a 30 días.' },
      products: { title: 'Productos, no proyectos eternos',                                  desc: 'Atendi y Cualix se implementan en 2–3 semanas. No vendemos consultoría interminable.' },
      support:  { title: 'Soporte real post-lanzamiento',                                    desc: 'Monitoreo activo, refinamiento de modelos y escalabilidad garantizada.' },
    },

    cta: {
      mainTitle:    '¿Listo para transformar tu operación?',
      mainSubtitle: 'Elegí la opción que mejor se adapte a tu necesidad',
      route1: {
        title:    'Para productos (Atendi / Cualix)',
        question: '¿Querés ver cómo funciona en tu industria?',
        button:   'Solicitar demo de 30 minutos',
      },
      route2: {
        title:    'Para enterprise/custom',
        question: '¿Tu caso es más complejo? Hablemos de arquitectura.',
        button:   'Agendar sesión estratégica',
      },
    },

    modal: {
      title:              'Agenda tu reunion',
      subtitle:           'Completá tus datos y nos ponemos en contacto en menos de 24 horas.',
      name:               'Nombre completo',
      namePlaceholder:    'Juan Perez',
      role:               'Cargo',
      rolePlaceholder:    'CEO, Gerente de Operaciones…',
      email:              'Email',
      emailPlaceholder:   'vos@empresa.com',
      phone:              'Numero de telefono',
      phonePlaceholder:   '+54 9 00 0000 0000',
      company:            'Empresa',
      companyPlaceholder: 'Nombre de tu empresa',
      message:            'Mensaje',
      messagePlaceholder: 'Preguntas, propuestas o lo que quieras contarnos…',
      submit:             'Enviar',
      sendingMsg:         'Enviando…',
      errorMsg:           'Por favor, completá todos los campos antes de enviar.',
      serverError:        'Ocurrió un error. Por favor intentá de nuevo más tarde.',
      successMsg:         '¡Gracias! Nos estaremos comunicando por correo electrónico a la brevedad.',
    },
  };
}());
