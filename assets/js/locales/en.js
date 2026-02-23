/**
 * English (EN) locale
 * Plain script  registers into window.MAI_LOCALES before i18n.js loads.
 */
(function () {
  window.MAI_LOCALES = window.MAI_LOCALES || {};

  window.MAI_LOCALES.en = {
    page: { title: 'systemisAI', lang: 'en' },

    nav: {
      products:    'Products',
      methodology: 'How It Works',
      benefits:    'Benefits',
      contact:     'Contact',
      langLabel:   'Select language',
    },

    hero: {
      pill:         'AI Automation',
      headline1:    'Accelerate your processes with',
      headline2:    'Artificial Intelligence',
      subheading:   'Automate workflows, optimize operations and gain a competitive edge with cutting-edge AI solutions  ready to deploy or built to fit your business.',
      ctaPrimary:   'Schedule your meeting',
      ctaSecondary: 'Explore solutions',
    },

    products: {
      title:    'Enterprise AI Solutions',
      subtitle: 'Deploy proven products or build the architecture your business needs.',
      atendi: {
        name: 'Atendi',
        desc: 'Enterprise intelligent assistant. Automates support, sales, bookings and FAQs with conversational agents via WhatsApp.',
        feature1: 'Ready for immediate deployment',
        feature2: 'Reduced response times',
        cta: 'Discover Atendi',
      },
      agili: {
        name: 'Agili',
        desc: 'Your AI Project Manager that lives inside your tools, connects your data and transforms ideas into tasks ready to execute.',
        feature1: 'Scalable operational efficiency',
        feature2: 'Deep native integrations',
        cta: 'Discover Agili',
      },
      custom: {
        name: 'Custom',
        desc: 'Tailored solutions. Consulting, design, training and deployment of exclusive models built for your use cases.',
        feature1: 'Build your ideal product',
        feature2: 'Predictive Machine Learning models',
        cta: 'Design a solution',
      },
    },

    value: {
      cost:         { title: 'Cost Reduction',      desc: 'Minimize operational expenses by delegating repetitive processes to autonomous systems.' },
      productivity: { title: 'Productivity Boost',  desc: 'Free your team to focus on high-value strategic tasks for the business.' },
      integration:  { title: 'Seamless Integration',desc: 'Connects frictionlessly with your current tech stack, ERPs and databases.' },
      ai:           { title: 'Cutting-Edge AI',     desc: 'We leverage the latest advances in LLMs, RAG systems and autonomous agents.' },
    },

    methodology: {
      title:    'How We Work',
      subtitle: 'A structured process to ensure the success and ROI of your technical implementation.',
      step1: { title: 'Discovery',      desc: 'We analyse your workflows and identify key automation opportunities.' },
      step2: { title: 'Selection',      desc: 'We choose the ideal product or design a fully custom AI architecture.' },
      step3: { title: 'Implementation', desc: 'Secure deployment, integration with your core systems and performance testing.' },
      step4: { title: 'Evolution',      desc: 'Continuous monitoring, model refinement and guaranteed scalability.' },
    },

    whyUs: {
      eyebrow:  'Benefits',
      title:    'Why Choose Us',
      subtitle: 'What sets us apart and why leading companies trust systemisAI to transform their operations.',
      bilingual:  { title: 'Fluent Bilingual Support',            desc: 'Technical support in English and Spanish  no communication barriers for your team or organisation.' },
      tailored:   { title: '100% Tailored to Your Workflow',      desc: 'Every solution is designed around your processes, tools and specific business needs. No generic templates.' },
      results:    { title: 'Results-Driven',                      desc: 'We measure success in real ROI: time savings, operational cost reduction and concrete metrics from month one.' },
      agile:      { title: 'Agile Implementation, Zero Friction', desc: 'Short delivery cycles with quickly visible results. No endless projects, infinite documentation or empty promises.' },
      team:       { title: 'Expert, Committed Team',              desc: 'AI specialists, systems engineers and process designers who accompany every project stage  before and after go-live.' },
      postlaunch: { title: 'Continuous Post-Launch Support',      desc: "We don't stop at go-live. We monitor, optimise and grow your solution as your company evolves." },
    },

    cta: {
      title:    'Transform Your Organisation Today',
      subtitle: 'Schedule a strategic session and discover the real ROI of implementing artificial intelligence in your company processes.',
      button:   'Schedule your meeting',
    },

    modal: {
      title:              'Schedule your meeting',
      subtitle:           'Fill in your details and we will get back to you within 24 hours.',
      name:               'Full Name',
      namePlaceholder:    'Jane Doe',
      role:               'Job Title',
      rolePlaceholder:    'CEO, Operations Manager…',
      email:              'Email',
      emailPlaceholder:   'you@company.com',
      phone:              'Phone Number',
      phonePlaceholder:   '+1 555 000 0000',
      company:            'Company',
      companyPlaceholder: 'Your company name',
      message:            'Message',
      messagePlaceholder: 'Questions, proposals or anything you would like us to know…',
      submit:             'Send',
      sendingMsg:         'Sending…',
      errorMsg:           'Please fill in all required fields before sending.',
      serverError:        'Something went wrong. Please try again later.',
      successMsg:         'Thank you! We will get back to you by email shortly.',
    },
  };
}());
