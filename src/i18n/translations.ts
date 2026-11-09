export type Lang = 'en' | 'es';

export const translations = {
  en: {
    meta: {
      title: 'Juan Luis Soto — Sr. Software Developer & Integration Specialist',
      description:
        'Sr. Software Developer & Integration Specialist at ARTEXA México. Building ERP extensions, API gateways, and cloud integrations with AL, Python, FastAPI, and Azure.',
      lang: 'en',
    },
    nav: {
      links: [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
      langSwitch: { label: 'ES', href: '/es/' },
    },
    hero: {
      eyebrow: 'Sr. Software Developer & Integration Specialist',
      tagline:
        'Architecting APIs, ERP integrations, and cloud infrastructure. Navigating complex backend systems — from Business Central to Azure.',
      statusHtml:
        '<a href="https://artexa.com" target="_blank" rel="noopener noreferrer" class="hover:text-ocean-400 transition-colors">ARTEXA México</a> &nbsp;·&nbsp; Remote &nbsp;·&nbsp; Open to BC consulting &amp; backend projects',
      ctaContact: 'Get in touch',
      ctaCv: 'Download CV',
      cvHref: '/cv/juan-luis-soto-cv-en.pdf',
      scroll: 'Scroll',
    },
    about: {
      label: 'About',
      title: 'A bit about me',
      bio1Html:
        'I\'m a Sr. Software Developer & Integration Specialist at <a href="https://artexa.com" target="_blank" rel="noopener noreferrer" class="text-white font-medium hover:text-ocean-400 transition-colors">ARTEXA México</a>, where I build ERP extensions, API gateways, and cloud integrations. I joined in 2022 and grew into the senior role by mid-2024, working fully remote.',
      bio2Html:
        'My day-to-day revolves around extending <span class="text-ocean-400 font-medium">Microsoft Dynamics 365 Business Central</span> with AL, designing Python/FastAPI services deployed on Azure Container Apps, and wiring enterprise systems to e-commerce platforms like Adobe Commerce.',
      bio3Html:
        'I hold a B.S. in Computer Science and Technology from <span class="text-white font-medium">Tecnológico de Monterrey</span> (Cuernavaca campus). Originally from Villahermosa, Tabasco — currently in Morelos, relocating to Monterrey.',
      cv: 'Download CV',
      comment: '// Backend-first. Cloud-native.',
      facts: [
        { label: 'Location', value: 'Xochitepec, MOR → Monterrey, NL' },
        { label: 'Role', value: 'Sr. SWE & Integration Specialist' },
        { label: 'Company', value: 'ARTEXA México', href: 'https://artexa.com' },
        { label: 'Focus', value: 'ERP · APIs · Cloud' },
        { label: 'Education', value: 'B.S. in CS & Technology — Tec de Monterrey' },
        { label: 'Languages', value: 'Spanish (native) · English (B2+/C1)' },
        { label: 'Email', value: 'jlusomart@gmail.com', href: 'mailto:jlusomart@gmail.com' },
      ],
    },
    experience: {
      label: 'Experience',
      title: "Where I've worked",
      educationTitle: 'Education',
      certificationsTitle: 'Certifications',
      languagesTitle: 'Languages',
      currentLabel: 'Current',
      jobs: [
        {
          role: 'Sr. Software Developer & Integration Specialist',
          company: 'ARTEXA México',
          companyUrl: 'https://artexa.com',
          period: 'Jul 2024 – Present',
          type: 'Full-time · Remote',
          description:
            'After the previous lead left, I stepped into the senior role and became the de facto architecture owner for integrations and ERP extensions. Fully remote from Morelos.',
          highlights: [
            '20+ custom Business Central extensions across multiple modules — reporting, integrations, workflow automation, and business process customization',
            'ERP administration: updates, L1 support, and currently leading a multi-company BC migration initiative',
            'Led backend integration for ArtexaPRO — B2B platform connecting Adobe Commerce with Dynamics 365 BC',
            'Built the internal API Gateway centralizing ERP, e-commerce, and PIM integrations',
            'Technical supervisor for ArtexaGPT, an LLM-based distributor-facing chatbot powered by the API Gateway',
            'Mentors and leads a junior Business Central developer on the team',
          ],
          tech: ['AL / Business Central', 'Python', 'FastAPI', 'Azure', 'PostgreSQL', 'Adobe Commerce'],
          current: true,
          minimal: false,
        },
        {
          role: 'Jr. Software Developer',
          company: 'ARTEXA México',
          companyUrl: 'https://artexa.com',
          period: 'Dec 2022 – Jul 2024',
          type: 'Full-time · Remote',
          description:
            'Started as an intern and grew into a junior developer role, taking on increasing responsibility across backend services and ERP projects.',
          highlights: [
            'Maintenance and feature development on the Entrenator LMS platform (VueJS + Quasar + Laravel)',
            'WordPress development for public sector clients in Morelos',
            'Initial Business Central customizations and integrations',
          ],
          tech: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'WordPress'],
          current: false,
          minimal: false,
        },
        {
          role: 'Backend Developer',
          company: 'Clik Graphics',
          companyUrl: undefined,
          period: 'Jul 2022 – Oct 2022',
          type: 'Part-time · 4 months',
          description:
            'Short engagement building backend components and assisting with a legacy database migration.',
          highlights: [
            'REST API development connecting databases to web applications',
            'Assisted in legacy database migration',
          ],
          tech: ['NestJS', 'TypeScript', 'TypeORM'],
          current: false,
          minimal: true,
        },
        {
          role: 'Backend Developer',
          company: 'OMRI Tech',
          companyUrl: undefined,
          period: 'Aug 2021 – Feb 2022',
          type: 'Part-time · 7 months',
          description:
            'First tech job. OMRI Tech is the development house for the Olimpiada Morelense de Robótica e Informática, building tools for the competition and small businesses.',
          highlights: [
            'Feature development and maintenance for the OMRI LMS platform',
            'Maintained the OMRI public website (PHP7, Laravel, HTML/CSS, jQuery)',
            'Built the web presence for the Entidad Superior de Auditoría y Fiscalización del Congreso de Morelos (WordPress)',
          ],
          tech: ['PHP7', 'Laravel', 'AXIOS', 'jQuery', 'WordPress'],
          current: false,
          minimal: false,
        },
      ],
      education: [
        {
          degree: 'B.S. in Computer Science and Technology',
          institution: 'Tecnológico de Monterrey — Campus Cuernavaca',
          period: 'Aug 2019 – 2024',
          note: 'GPA: 89.5 · Tec21 challenge-based model',
        },
        {
          degree: 'Bachillerato General Bilingüe',
          institution: 'Universidad Tecmilenio — Campus Villahermosa',
          period: 'Aug 2016 – Jun 2019',
          note: 'GPA: 89.9 · 50% coursework in English',
        },
      ],
      faraday: {
        team: 'Team 5696 "Faraday" — FIRST Robotics Competition',
        institution: 'Tecmilenio Villahermosa',
        period: '2016 – 2019',
        role: 'Scouting Captain (final role)',
        highlights: [
          'First FRC team in southeastern Mexico',
          'Toluca Regional, Monterrey Regional & Santa Fe Regional',
          'FIRST Championship — Houston',
        ],
      },
      certifications: [
        { name: 'CCNA: Introduction to Networks', issuer: 'Cisco / Tec de Monterrey', date: 'Aug 2021' },
        { name: 'M001: MongoDB Basics', issuer: 'MongoDB University', date: 'Apr 2021' },
        { name: 'SCRUM Fundamentals Certified', issuer: 'SCRUMstudy', date: 'Feb 2021' },
      ],
      languages: [
        { lang: 'Spanish', level: 'Native' },
        { lang: 'English', level: 'B2+/C1 — LinguaSkill certified' },
      ],
    },
    skills: {
      label: 'Skills',
      title: 'Tech stack',
      secondaryLabel: 'Previous & secondary',
      primary: [
        { name: 'AL / Business Central', description: 'ERP extensions, codeunits, pages, reports for Dynamics 365 BC', icon: '⚙' },
        { name: 'Python · FastAPI', description: 'API design with FastAPI and Pydantic, async services, data modeling', icon: '⚡' },
        { name: 'Azure', description: 'Container Apps, Functions, DevOps, Logic Apps, Azure AD / Entra ID', icon: '☁' },
        { name: 'PostgreSQL · MongoDB', description: 'Relational and document databases, schema design, query optimization', icon: '⬡' },
        { name: 'Adobe Commerce', description: 'Magento integrations and API connections with ERP backends', icon: '⬡' },
        { name: 'REST API Design', description: 'API-first development, versioning, auth patterns, OpenAPI docs', icon: '◈' },
      ],
      secondary: ['NestJS', 'Node.js', 'TypeScript', 'JavaScript', 'Vue.js', 'Laravel', 'PHP', 'MySQL', 'Git', 'Docker', 'Linux', 'Postman'],
      softLabel: 'Working style',
      soft: [
        {
          name: 'Translator mindset',
          description: 'Bridges the gap between business needs and technical solutions. Asks first, assumes later, and thinks through edge cases before they become problems.',
        },
        {
          name: 'Self-directed under pressure',
          description: 'Took on a de facto lead role without a formal handoff. Learned to prioritize in a fast-changing business environment where requirements shift constantly.',
        },
        {
          name: 'Adaptive learner',
          description: 'Picks up new technologies as needed — through docs, videos, or learning from others. Comfort with uncertainty is part of the job.',
        },
      ],
    },
    projects: {
      label: 'Projects',
      title: "Things I've built",
      featured: [
        {
          name: 'ArtexaPRO',
          tagline: 'B2B e-commerce platform — ERP integration lead',
          description:
            "Led backend integration for ArtexaPRO, a B2B platform connecting a luxury e-commerce frontend with Microsoft Dynamics 365 BC as the operational backbone — handling order flow, inventory sync, and product data pipelines through custom-built APIs.",
          tech: ['Adobe Commerce', 'Dynamics 365 BC', 'REST APIs', 'AL'],
          status: 'Production' as const,
          flagship: true,
          href: 'https://artexa.com',
        },
        {
          name: 'API Gateway',
          tagline: 'Internal integration layer — architecture lead',
          description:
            'Internal integration layer unifying Dynamics 365 ERP, Adobe Commerce, and Plytix PIM into a single API endpoint — reducing integration complexity and powering the ArtexaGPT chatbot.',
          tech: ['FastAPI', 'Python', 'Azure Container Apps', 'PostgreSQL', 'Azure AD'],
          status: 'Production' as const,
          flagship: false,
          href: undefined,
        },
        {
          name: 'ArtexaGPT',
          tagline: 'LLM-based internal chatbot — technical supervisor',
          description:
            "Distributor-facing AI chatbot running on Azure. Handles customer auth, ERP queries, and service integrations through the API Gateway. My role: technical supervisor and Gateway provider.",
          tech: ['Azure', 'OpenAI API', 'Python', 'FastAPI'],
          status: 'Production' as const,
          flagship: false,
          href: undefined,
        },
        {
          name: 'Electronic Accounting',
          tagline: 'SAT XML Pólizas generator — AL extension',
          description:
            'Automates generation of SAT-compliant XML accounting files (contabilidad electrónica) directly within Business Central, eliminating a fully manual process for the finance team.',
          tech: ['AL', 'Business Central', 'XML'],
          status: 'Production' as const,
          flagship: false,
          href: undefined,
        },
      ],
      bcVolume: {
        count: 20,
        label: 'BC Extensions deployed',
        description:
          'Custom Business Central extensions across multiple modules — reporting, integrations, workflow automation, and business process customization. All built to spec, fully closed source, and actively maintained.',
        tech: ['AL', 'Dynamics 365 BC', 'ERP Admin', 'Multi-module'],
      },
      personalLabel: 'Personal',
      personal: [
        {
          name: 'DepaSearch',
          tagline: 'Apartment search aggregator — personal project',
          description:
            'Python app to search, filter, and rank apartment listings using the Strategy design pattern. Integrates Google Maps API and OpenStreetMap for commute-based filtering.',
          tech: ['Python', 'Strategy Pattern', 'Google Maps API', 'OpenStreetMap'],
          status: 'Coming Soon' as const,
        },
      ],
      academicLabel: 'Academic',
      academicNote:
        "Developed under Tec de Monterrey's Tec21 challenge-based learning model, in collaboration with real organizations.",
      academic: [
        {
          name: 'SIGO++ / BAMX',
          description: 'Tec21 challenge-based reto in collaboration with a real partner organization.',
          tech: ['Node.js', 'MySQL'],
        },
        {
          name: 'The Chamber',
          description: 'Partner-facing web solution — Tec21 reto at Tec de Monterrey.',
          tech: ['Vue.js', 'Laravel'],
        },
      ],
      statusLabels: {
        Production: 'Production',
        'Coming Soon': 'Coming Soon',
      },
    },
    contact: {
      label: 'Contact',
      title: "Let's connect",
      cta1Html:
        'Currently building integrations at <a href="https://artexa.com" target="_blank" rel="noopener noreferrer" class="text-white font-medium hover:text-ocean-400 transition-colors">ARTEXA</a>. Open to interesting backend challenges, BC consulting, and freelance projects.',
      cta2: "Whether it's an ERP integration, a cloud backend, or just talking shop — you know where to find me.",
      signoff: '// Charting a course — from Morelos to Monterrey',
      links: [
        { label: 'Email', value: 'jlusomart@gmail.com', href: 'mailto:jlusomart@gmail.com', icon: 'mail', external: false },
        { label: 'LinkedIn', value: 'linkedin.com/in/grandeotos', href: 'https://linkedin.com/in/grandeotos', icon: 'linkedin', external: true },
        { label: 'GitHub', value: 'github.com/grandeotos', href: 'https://github.com/grandeotos', icon: 'github', external: true },
        { label: 'X / Twitter', value: 'x.com/grandeotos', href: 'https://x.com/grandeotos', icon: 'x', external: true },
      ],
    },
  },

  es: {
    meta: {
      title: 'Juan Luis Soto — Desarrollador de Software Sr. & Especialista en Integraciones',
      description:
        'Desarrollador de Software Sr. & Especialista en Integraciones en ARTEXA México. Construyendo extensiones ERP, API gateways e integraciones cloud con AL, Python, FastAPI y Azure.',
      lang: 'es',
    },
    nav: {
      links: [
        { label: 'Sobre mí', href: '#about' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Habilidades', href: '#skills' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#contact' },
      ],
      langSwitch: { label: 'EN', href: '/' },
    },
    hero: {
      eyebrow: 'Desarrollador de Software Sr. & Especialista en Integraciones',
      tagline:
        'Arquitectando APIs, integraciones ERP e infraestructura cloud. Navegando sistemas backend complejos — de Business Central a Azure.',
      statusHtml:
        '<a href="https://artexa.com" target="_blank" rel="noopener noreferrer" class="hover:text-ocean-400 transition-colors">ARTEXA México</a> &nbsp;·&nbsp; Remoto &nbsp;·&nbsp; Abierto a consultoría BC y proyectos backend',
      ctaContact: 'Contáctame',
      ctaCv: 'Descargar CV',
      cvHref: '/cv/juan-luis-soto-cv-es.pdf',
      scroll: 'Bajar',
    },
    about: {
      label: 'Sobre mí',
      title: 'Un poco sobre mí',
      bio1Html:
        'Soy Desarrollador de Software Sr. y Especialista en Integraciones en <a href="https://artexa.com" target="_blank" rel="noopener noreferrer" class="text-white font-medium hover:text-ocean-400 transition-colors">ARTEXA México</a>, donde construyo extensiones ERP, API gateways e integraciones cloud. Me incorporé en 2022 y alcancé el rol senior a mediados de 2024, trabajando 100% remoto.',
      bio2Html:
        'Mi día a día gira en torno a extender <span class="text-ocean-400 font-medium">Microsoft Dynamics 365 Business Central</span> con AL, diseñar servicios Python/FastAPI desplegados en Azure Container Apps, y conectar sistemas empresariales con plataformas de e-commerce como Adobe Commerce.',
      bio3Html:
        'Soy Ing. en Tecnologías Computacionales por el <span class="text-white font-medium">Tecnológico de Monterrey</span> (Campus Cuernavaca). Originario de Villahermosa, Tabasco — actualmente en Morelos, en proceso de reubicación a Monterrey.',
      cv: 'Descargar CV',
      comment: '// Backend-first. Cloud-native.',
      facts: [
        { label: 'Ubicación', value: 'Xochitepec, MOR → Monterrey, NL' },
        { label: 'Rol', value: 'Desarrollador Sr. & Esp. Integraciones' },
        { label: 'Empresa', value: 'ARTEXA México', href: 'https://artexa.com' },
        { label: 'Enfoque', value: 'ERP · APIs · Cloud' },
        { label: 'Formación', value: 'Ing. En Tecnologías Computacionales — Tec de Monterrey' },
        { label: 'Idiomas', value: 'Español (nativo) · Inglés (B2+/C1)' },
        { label: 'Email', value: 'jlusomart@gmail.com', href: 'mailto:jlusomart@gmail.com' },
      ],
    },
    experience: {
      label: 'Experiencia',
      title: 'Dónde he trabajado',
      educationTitle: 'Formación',
      certificationsTitle: 'Certificaciones',
      languagesTitle: 'Idiomas',
      currentLabel: 'Activo',
      jobs: [
        {
          role: 'Desarrollador de Software Sr. & Especialista en Integraciones',
          company: 'ARTEXA México',
          companyUrl: 'https://artexa.com',
          period: 'Jul 2024 – Presente',
          type: 'Tiempo completo · Remoto',
          description:
            'Al salir el lead anterior, asumí el rol senior y me convertí en el dueño de arquitectura de facto para integraciones y extensiones ERP. 100% remoto desde Morelos.',
          highlights: [
            '20+ extensiones personalizadas de Business Central en múltiples módulos — reportes, integraciones, automatización de flujos y personalización de procesos',
            'Administración ERP: actualizaciones, soporte L1 y liderando actualmente una migración multi-empresa de BC',
            'Lideré la integración backend de ArtexaPRO — plataforma B2B que conecta Adobe Commerce con Dynamics 365 BC',
            'Construí el API Gateway interno centralizando integraciones de ERP, e-commerce y PIM',
            'Supervisor técnico de ArtexaGPT, un chatbot basado en LLM para distribuidores impulsado por el API Gateway',
            'Mentorea y lidera a un desarrollador junior de Business Central en el equipo',
          ],
          tech: ['AL / Business Central', 'Python', 'FastAPI', 'Azure', 'PostgreSQL', 'Adobe Commerce'],
          current: true,
          minimal: false,
        },
        {
          role: 'Desarrollador de Software Jr.',
          company: 'ARTEXA México',
          companyUrl: 'https://artexa.com',
          period: 'Dic 2022 – Jul 2024',
          type: 'Tiempo completo · Remoto',
          description:
            'Comencé como pasante y crecí al rol de desarrollador junior, asumiendo responsabilidades progresivas en servicios backend y proyectos ERP.',
          highlights: [
            'Mantenimiento y desarrollo de funcionalidades en la plataforma LMS Entrenator (VueJS + Quasar + Laravel)',
            'Desarrollo WordPress para clientes del sector público en Morelos',
            'Primeras personalizaciones e integraciones de Business Central',
          ],
          tech: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'WordPress'],
          current: false,
          minimal: false,
        },
        {
          role: 'Desarrollador Backend',
          company: 'Clik Graphics',
          companyUrl: undefined,
          period: 'Jul 2022 – Oct 2022',
          type: 'Medio tiempo · 4 meses',
          description:
            'Participación corta construyendo componentes backend y apoyando una migración de base de datos legacy.',
          highlights: [
            'Desarrollo de REST APIs conectando bases de datos a aplicaciones web',
            'Apoyo en migración de base de datos legacy',
          ],
          tech: ['NestJS', 'TypeScript', 'TypeORM'],
          current: false,
          minimal: true,
        },
        {
          role: 'Desarrollador Backend',
          company: 'OMRI Tech',
          companyUrl: undefined,
          period: 'Ago 2021 – Feb 2022',
          type: 'Medio tiempo · 7 meses',
          description:
            'Primer trabajo en tecnología. OMRI Tech es la casa de desarrollo de la Olimpiada Morelense de Robótica e Informática, construyendo herramientas para la competencia y pequeñas empresas.',
          highlights: [
            'Desarrollo de funcionalidades y mantenimiento de la plataforma LMS de OMRI',
            'Mantenimiento del sitio público de OMRI (PHP7, Laravel, HTML/CSS, jQuery)',
            'Construcción de presencia web para la Entidad Superior de Auditoría y Fiscalización del Congreso de Morelos (WordPress)',
          ],
          tech: ['PHP7', 'Laravel', 'AXIOS', 'jQuery', 'WordPress'],
          current: false,
          minimal: false,
        },
      ],
      education: [
        {
          degree: 'Ing. en Tecnologías Computacionales',
          institution: 'Tecnológico de Monterrey — Campus Cuernavaca',
          period: 'Ago 2019 – 2024',
          note: 'Promedio: 89.5 · Modelo retador Tec21',
        },
        {
          degree: 'Bachillerato General Bilingüe',
          institution: 'Universidad Tecmilenio — Campus Villahermosa',
          period: 'Ago 2016 – Jun 2019',
          note: 'Promedio: 89.9 · 50% del plan en inglés',
        },
      ],
      faraday: {
        team: 'Equipo 5696 "Faraday" — FIRST Robotics Competition',
        institution: 'Tecmilenio Villahermosa',
        period: '2016 – 2019',
        role: 'Capitán de Scouting (rol final)',
        highlights: [
          'Primer equipo FRC en el sureste de México',
          'Regional Toluca, Regional Monterrey y Regional Santa Fe',
          'Campeonato FIRST — Houston',
        ],
      },
      certifications: [
        { name: 'CCNA: Introduction to Networks', issuer: 'Cisco / Tec de Monterrey', date: 'Ago 2021' },
        { name: 'M001: MongoDB Basics', issuer: 'MongoDB University', date: 'Abr 2021' },
        { name: 'SCRUM Fundamentals Certified', issuer: 'SCRUMstudy', date: 'Feb 2021' },
      ],
      languages: [
        { lang: 'Español', level: 'Nativo' },
        { lang: 'Inglés', level: 'B2+/C1 — Certificado LinguaSkill' },
      ],
    },
    skills: {
      label: 'Habilidades',
      title: 'Stack tecnológico',
      secondaryLabel: 'Previo y secundario',
      primary: [
        { name: 'AL / Business Central', description: 'Extensiones ERP, codeunits, páginas y reportes para Dynamics 365 BC', icon: '⚙' },
        { name: 'Python · FastAPI', description: 'Diseño de APIs con FastAPI y Pydantic, servicios asíncronos, modelado de datos', icon: '⚡' },
        { name: 'Azure', description: 'Container Apps, Functions, DevOps, Logic Apps, Azure AD / Entra ID', icon: '☁' },
        { name: 'PostgreSQL · MongoDB', description: 'Bases de datos relacionales y de documentos, diseño de esquemas, optimización de consultas', icon: '⬡' },
        { name: 'Adobe Commerce', description: 'Integraciones con Magento y conexiones API con backends ERP', icon: '⬡' },
        { name: 'REST API Design', description: 'Desarrollo API-first, versionado, patrones de autenticación, documentación OpenAPI', icon: '◈' },
      ],
      secondary: ['NestJS', 'Node.js', 'TypeScript', 'JavaScript', 'Vue.js', 'Laravel', 'PHP', 'MySQL', 'Git', 'Docker', 'Linux', 'Postman'],
      softLabel: 'Forma de trabajo',
      soft: [
        {
          name: 'Mentalidad de traductor',
          description: 'Conecta las necesidades del negocio con soluciones técnicas. Pregunta primero, asume después, y anticipa casos borde antes de que se conviertan en problemas.',
        },
        {
          name: 'Autonomía bajo presión',
          description: 'Asumió el rol de líder de facto sin un traspaso formal. Aprendió a priorizar en un entorno empresarial cambiante donde los requerimientos evolucionan constantemente.',
        },
        {
          name: 'Aprendizaje adaptativo',
          description: 'Incorpora nuevas tecnologías según se necesita — a través de documentación, videos o aprendizaje colaborativo. La comodidad con la incertidumbre es parte del trabajo.',
        },
      ],
    },
    projects: {
      label: 'Proyectos',
      title: 'Lo que he construido',
      featured: [
        {
          name: 'ArtexaPRO',
          tagline: 'Plataforma B2B de e-commerce — líder de integración ERP',
          description:
            'Lideré la integración backend de ArtexaPRO, una plataforma B2B que conecta un frontend de e-commerce de lujo con Microsoft Dynamics 365 BC como columna vertebral operativa — gestionando flujo de órdenes, sincronización de inventario y pipelines de datos a través de APIs propias.',
          tech: ['Adobe Commerce', 'Dynamics 365 BC', 'REST APIs', 'AL'],
          status: 'Production' as const,
          flagship: true,
          href: 'https://artexa.com',
        },
        {
          name: 'API Gateway',
          tagline: 'Capa de integración interna — líder de arquitectura',
          description:
            'Capa de integración interna que unifica Dynamics 365 ERP, Adobe Commerce y Plytix PIM en un único endpoint — reduciendo la complejidad de integraciones e impulsando el chatbot ArtexaGPT.',
          tech: ['FastAPI', 'Python', 'Azure Container Apps', 'PostgreSQL', 'Azure AD'],
          status: 'Production' as const,
          flagship: false,
          href: undefined,
        },
        {
          name: 'ArtexaGPT',
          tagline: 'Chatbot interno basado en LLM — supervisor técnico',
          description:
            'Chatbot de IA para distribuidores corriendo en Azure. Gestiona autenticación de clientes, consultas ERP e integraciones de servicios a través del API Gateway. Mi rol: supervisor técnico y proveedor del Gateway.',
          tech: ['Azure', 'OpenAI API', 'Python', 'FastAPI'],
          status: 'Production' as const,
          flagship: false,
          href: undefined,
        },
        {
          name: 'Contabilidad Electrónica',
          tagline: 'Generador XML Pólizas SAT — extensión AL',
          description:
            'Automatiza la generación de archivos XML de contabilidad electrónica cumpliendo con SAT directamente en Business Central, eliminando un proceso completamente manual para el equipo de finanzas.',
          tech: ['AL', 'Business Central', 'XML'],
          status: 'Production' as const,
          flagship: false,
          href: undefined,
        },
      ],
      bcVolume: {
        count: 20,
        label: 'Extensiones BC desplegadas',
        description:
          'Extensiones personalizadas de Business Central en múltiples módulos — reportes, integraciones, automatización de flujos y personalización de procesos. Todas construidas a medida, código cerrado y activamente mantenidas.',
        tech: ['AL', 'Dynamics 365 BC', 'ERP Admin', 'Multi-módulo'],
      },
      personalLabel: 'Personales',
      personal: [
        {
          name: 'DepaSearch',
          tagline: 'Agregador de búsqueda de departamentos — proyecto personal',
          description:
            'Aplicación en Python para buscar, filtrar y clasificar listados de departamentos usando el patrón de diseño Strategy. Integra Google Maps API y OpenStreetMap para filtrado por tiempo de traslado.',
          tech: ['Python', 'Strategy Pattern', 'Google Maps API', 'OpenStreetMap'],
          status: 'Coming Soon' as const,
        },
      ],
      academicLabel: 'Académicos',
      academicNote:
        'Desarrollados bajo el modelo de aprendizaje retador Tec21 del Tecnológico de Monterrey, en colaboración con organizaciones reales.',
      academic: [
        {
          name: 'SIGO++ / BAMX',
          description: 'Reto Tec21 en colaboración con una organización socia real.',
          tech: ['Node.js', 'MySQL'],
        },
        {
          name: 'The Chamber',
          description: 'Solución web para socios — reto Tec21 en Tec de Monterrey.',
          tech: ['Vue.js', 'Laravel'],
        },
      ],
      statusLabels: {
        Production: 'Producción',
        'Coming Soon': 'Próximamente',
      },
    },
    contact: {
      label: 'Contacto',
      title: 'Conectemos',
      cta1Html:
        'Actualmente construyendo integraciones en <a href="https://artexa.com" target="_blank" rel="noopener noreferrer" class="text-white font-medium hover:text-ocean-400 transition-colors">ARTEXA</a>. Abierto a retos backend interesantes, consultoría BC y proyectos freelance.',
      cta2: 'Ya sea una integración ERP, un backend en cloud, o simplemente platicar del tema — ya sabes dónde encontrarme.',
      signoff: '// Trazando rumbo — de Morelos a Monterrey',
      links: [
        { label: 'Email', value: 'jlusomart@gmail.com', href: 'mailto:jlusomart@gmail.com', icon: 'mail', external: false },
        { label: 'LinkedIn', value: 'linkedin.com/in/grandeotos', href: 'https://linkedin.com/in/grandeotos', icon: 'linkedin', external: true },
        { label: 'GitHub', value: 'github.com/grandeotos', href: 'https://github.com/grandeotos', icon: 'github', external: true },
        { label: 'X / Twitter', value: 'x.com/grandeotos', href: 'https://x.com/grandeotos', icon: 'x', external: true },
      ],
    },
  },
};

export type Translations = typeof translations.en;
