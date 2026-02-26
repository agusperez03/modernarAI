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
        badge: 'Available now · For service businesses',
        headline: 'Atendi — Your sales and support agent on WhatsApp, available 24/7',
        problemTitle: 'Problem it solves:',
        problem: 'Your customers message on WhatsApp after hours, your agents are overwhelmed, and every unanswered inquiry is a lost sale. Hiring more staff doesn't scale.',
        whatTitle: 'What it does exactly:',
        what1: 'Responds, qualifies and schedules via WhatsApp autonomously, with your business tone and knowledge',
        what2: 'Escalates to your human team only when the lead is ready to close',
        what3: 'Learns from your catalog, pricing, FAQs and specific processes',
        forWhomTitle: 'Who it's for:',
        forWhom: 'Clinics and beauty centers · Real estate · Car dealerships · Academies · E-commerce · Franchises',
        includesTitle: 'Includes:',
        include1: 'Agent trained with your information',
        include2: 'Personalized qualification flows',
        include3: 'Automatic booking with calendar integration',
        include4: 'Conversations and metrics dashboard',
        include5: '2-week onboarding + ongoing support',
        result: '"From 0 to qualified response in under 2 minutes, no human intervention."',
        pricingLabel: 'Reference pricing:',
        pricing: 'Setup from $800 USD · Monthly subscription from $350 USD',
        cta: 'See Atendi in action',
      },
      
      cualix: {
        badge: 'New · For B2B sales teams',
        headline: 'Cualix — AI that qualifies your leads before they reach your salespeople',
        problemTitle: 'Problem it solves:',
        problem: 'Your salespeople waste 60% of their time on leads that won't buy. Manual qualification is slow, inconsistent, and doesn't scale when volume grows. The pipeline is full of opportunities that aren't opportunities.',
        whatTitle: 'What it does exactly:',
        what1: 'Contacts the lead within the first 5 minutes (peak intent moment)',
        what2: 'Executes a qualification conversation via email, WhatsApp or LinkedIn',
        what3: 'Assigns a score, enriches the profile, and delivers only ready-to-close leads to the salesperson',
        what4: 'The salesperson arrives at the first call knowing need, budget and urgency',
        forWhomTitle: 'Who it's for:',
        forWhom: 'B2B companies with 3 to 30 sales reps · Technology · Financial services · Consulting · Corporate education · Logistics · SaaS',
        includesTitle: 'Includes:',
        include1: 'Multi-channel agent (email + WhatsApp + LinkedIn)',
        include2: 'Configurable scoring engine (BANT, MEDDIC)',
        include3: 'Automatic profile enrichment',
        include4: 'Integration with HubSpot, Salesforce or Pipedrive',
        include5: 'Structured handoff for salespeople',
        include6: 'Automatic nurturing for unqualified leads',
        include7: 'Pipeline quality reporting',
        include8: '3-week onboarding + team training',
        result: '"Cleaner pipeline, shorter sales cycles, salespeople focused on what matters."',
        pricingLabel: 'Reference pricing:',
        pricing: 'Setup from $1,500 USD · Monthly subscription from $600 USD',
        cta: 'See Cualix in action',
      },
      
      aiarch: {
        badge: 'For complex operations',
        headline: 'AI Architecture — When your operation needs more than a standard product',
        desc: 'We design and implement custom AI solutions for companies with complex processes, proprietary system integrations, or use cases no standard product can solve.',
        useCasesTitle: 'Typical use cases:',
        useCase1: 'Predictive models on proprietary historical data (churn, pricing, risk)',
        useCase2: 'Complex internal process automation',
        useCase3: 'Integration with ERP, legacy CRM or proprietary systems',
        useCase4: 'Massive analysis of documents or unstructured data',
        useCase5: 'Multi-process AI agents for operations with multiple workflows',
        processLabel: 'Process:',
        process: ' Discovery → Architecture → Implementation → Maintenance',
        pricingLabel: 'Entry price:',
        pricing: 'Projects from $8,000 USD + monthly retainer',
        cta: 'Tell us your case',
      },
    },

    value: {
      cost:         { title: 'Cost Reduction',      desc: 'Minimize operational expenses by delegating repetitive processes to autonomous systems.' },
      productivity: { title: 'Productivity Boost',  desc: 'Free your team to focus on high-value strategic tasks for the business.' },
      integration:  { title: 'Seamless Integration',desc: 'Connects frictionlessly with your current tech stack, ERPs and databases.' },
      ai:           { title: 'Cutting-Edge AI',     desc: 'We leverage the latest advances in LLMs, RAG systems and autonomous agents.' },
    },

    methodology: {
      title:    'Methodology',
      subtitle: '4 specific, results-oriented steps.',
      step1: { title: 'Discovery',        desc: 'We analyze your workflows, lead/query volume and current tech stack' },
      step2: { title: 'Configuration',    desc: 'We train the agent with your information and configure integrations' },
      step3: { title: 'Implementation',   desc: 'Secure deployment, real case testing and fine-tuning' },
      step4: { title: 'Evolution',        desc: 'Continuous monitoring, model refinement and scale when you need it' },
    },

    whyUs: {
      eyebrow:  'Benefits',
      title:    'Why systemisAI?',
      subtitle: 'Concrete statements that differentiate us in the Latin American market.',
      latam:    { title: 'LATAM specialists, not global tool translators',         desc: 'Our agents speak, negotiate and qualify with the tone and context of the local market.' },
      roi:      { title: 'ROI from month one, not long-term promises',             desc: 'Every implementation comes with baseline metrics and 30-day results benchmark.' },
      products: { title: 'Products, not endless projects',                         desc: 'Atendi and Cualix deploy in 2–3 weeks. We don't sell endless consulting.' },
      support:  { title: 'Real post-launch support',                               desc: 'Active monitoring, model refinement and guaranteed scalability.' },
    },

    cta: {
      mainTitle:    'Ready to transform your operation?',
      mainSubtitle: 'Choose the option that best fits your need',
      route1: {
        title:    'For products (Atendi / Cualix)',
        question: 'Want to see how it works in your industry?',
        button:   'Request 30-minute demo',
      },
      route2: {
        title:    'For enterprise/custom',
        question: 'Is your case more complex? Let's talk architecture.',
        button:   'Schedule strategic session',
      },
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
