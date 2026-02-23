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
        name: 'Atendi',
        desc: 'Asistente inteligente empresarial. Automatiza soporte, ventas, reservas y consultas frecuentes con agentes conversacionales por WhatsApp.',
        feature1: 'Listo para implementacion inmediata',
        feature2: 'Tiempos de respuesta reducidos',
        cta: 'Conocer Atendi',
      },
      agili: {
        name: 'Agili',
        desc: 'Tu Project Manager con IA que vive dentro de tus herramientas, conecta tus datos y transforma ideas en tareas listas para ejecutar.',
        feature1: 'Eficiencia operativa escalable',
        feature2: 'Integraciones nativas profundas',
        cta: 'Conocer Agili',
      },
      custom: {
        name: 'A medida',
        desc: 'Soluciones personalizadas. Consultoria, disenio, entrenamiento y despliegue de modelos exclusivos construidos para tus casos de uso.',
        feature1: 'Construi tu producto ideal',
        feature2: 'Modelos de Machine Learning predictivos',
        cta: 'Diseñar una solucion',
      },
    },

    value: {
      cost:         { title: 'Reduccion de Costos',          desc: 'Minimiza los gastos operativos delegando procesos repetitivos a sistemas autonomos.' },
      productivity: { title: 'Aumento de Productividad',     desc: 'Libera a tu equipo para que se concentre en tareas estrategicas de alto valor para el negocio.' },
      integration:  { title: 'Integracion sin Fricciones',   desc: 'Se conecta sin problemas con tu stack tecnologico actual, ERPs y bases de datos.' },
      ai:           { title: 'IA de Vanguardia',             desc: 'Utilizamos los ultimos avances en LLMs, sistemas RAG y agentes autonomos.' },
    },

    methodology: {
      title:    'Como trabajamos',
      subtitle: 'Un proceso estructurado para garantizar el exito e impacto de tu implementacion tecnica.',
      step1: { title: 'Descubrimiento',    desc: 'Analizamos tus flujos de trabajo e identificamos las oportunidades de automatizacion clave.' },
      step2: { title: 'Seleccion',         desc: 'Elegimos el producto ideal o disenamos una arquitectura de IA completamente a medida.' },
      step3: { title: 'Implementacion',    desc: 'Despliegue seguro, integracion con tus sistemas core y pruebas de rendimiento.' },
      step4: { title: 'Evolucion',         desc: 'Monitoreo continuo, refinamiento del modelo y escalabilidad garantizada.' },
    },

    whyUs: {
      eyebrow:  'Beneficios',
      title:    'Por que elegirnos',
      subtitle: 'Lo que nos distingue y por que las empresas lideres confian en systemisAI para transformar sus operaciones.',
      bilingual:  { title: 'Soporte bilingue fluido',                    desc: 'Soporte tecnico en espaniol e ingles, sin barreras de comunicacion para tu equipo u organizacion.' },
      tailored:   { title: '100% Adaptado a tu flujo de trabajo',        desc: 'Cada solucion se disenio en torno a tus procesos, herramientas y necesidades de negocio especificas. Sin plantillas genericas.' },
      results:    { title: 'Orientados a resultados',                    desc: 'Medimos el exito en ROI real: ahorro de tiempo, reduccion de costos operativos y metricas concretas desde el primer mes.' },
      agile:      { title: 'Implementacion agil, cero friccion',         desc: 'Ciclos de entrega cortos con resultados visibles rapidamente. Sin proyectos interminables, documentacion infinita ni promesas vacias.' },
      team:       { title: 'Equipo experto y comprometido',              desc: 'Especialistas en IA, ingenieros de sistemas y disenadores de procesos que acompanian cada etapa del proyecto, antes y despues del lanzamiento.' },
      postlaunch: { title: 'Soporte continuo post-lanzamiento',          desc: 'No nos detenemos en el lanzamiento. Monitoreamos, optimizamos y hacemos crecer tu solucion a medida que tu empresa evoluciona.' },
    },

    cta: {
      title:    'Transforma tu organizacion hoy',
      subtitle: 'Agenda una sesion estrategica y descubri el ROI real de implementar inteligencia artificial en los procesos de tu empresa.',
      button:   'Agenda tu reunion',
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
