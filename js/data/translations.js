(function () {
window.Portfolio = window.Portfolio || {};

window.Portfolio.translations = {
  es: {
    skipLink: "Saltar al contenido principal",
    sectionLabel: "Portfolio profesional",
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      certifications: "Certificados",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Desarrollo | Automatización | Datos",
      title: "José Sánchez Muñoz",
      summary: "Bachiller en Ingeniería de Sistemas enfocado en desarrollar soluciones internas, automatizar procesos y trabajar con datos operativos para mejorar trazabilidad y eficiencia.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactar",
      role: "Desarrollo de soluciones internas y automatización",
      note: "Python, SQL, Excel avanzado, bases de datos, reportería operativa y validación funcional.",
    },
    about: {
      title: "Bachiller en Ingeniería de Sistemas por la Universidad Nacional Mayor de San Marcos (UNMSM)",
      p1: "Experiencia construyendo herramientas internas para procesos contables, comerciales y operativos.",
      p2: "Trabajo con programación, bases de datos y reportería para reducir tareas manuales, estructurar información operativa y mejorar la trazabilidad.",
      p3: "Antes de desarrollar una solución, busco entender el problema, sus reglas de negocio y el impacto que tendrá en el proceso.",
      processHeading: "Cómo abordo una solución",
      processText: "Un enfoque práctico para convertir necesidades operativas en herramientas claras, útiles y mantenibles."
    },
    skills: {
      title: "Herramientas organizadas por uso profesional.",
    },
    experience: {
      title: "Experiencia aplicando desarrollo, automatización, datos y validación funcional en procesos reales.",
    },
    projects: {
      title: "Proyectos y evidencias de automatización, desarrollo y validación.",
      carouselLabel: "Galería de capturas",
      carouselPrev: "Imagen anterior",
      carouselNext: "Imagen siguiente",
    },
    certifications: {
      title: "Formación complementaria en programación, datos, automatización, calidad y gestión.",
    },
    contact: {
      title: "Conversemos sobre oportunidades en tecnología.",
      availability: "Disponible para oportunidades profesionales",
      roleTitle: "Desarrollo, automatización y soporte de desarrollo",
      text: "Estoy abierto a oportunidades vinculadas con desarrollo de software, automatización de procesos, soporte de desarrollo, análisis técnico y validación funcional.",
      cardTitle: "¿Hablamos?",
      cardText: "Si tienes una oportunidad laboral, propuesta o quieres conversar sobre soluciones internas, automatización o soporte de desarrollo, puedes escribirme directamente.",
      emailButton: "Enviarme un correo"
    },
    footer: {
      copy: "2026 José Sánchez Muñoz. Portfolio profesional.",
      back: "Volver arriba",
    },
    facts: [
      ["Perfil", "Desarrollo + Automatización"],
      ["Base técnica", "Python · SQL · Excel"],
      ["Enfoque", "Procesos · Datos · Trazabilidad"],
      ["Disponibilidad", "Remoto · Híbrido · Presencial"],
    ],
    skillGroups: [
      {
        title: "Gestión y colaboración",
        text: "Organización de tareas, seguimiento de requerimientos e incidencias, y comunicación con usuarios o equipos técnicos.",
        icons: [
          ["assets/icons/jira.png", "Jira", "Herramienta para seguimiento de tareas, incidencias y coordinación de trabajo técnico."],
          ["assets/icons/trello.png", "Trello", "Permite organizar tareas y flujos de trabajo mediante tableros visuales y listas."],
        ],
      },
      {
        title: "Control de versiones",
        text: "Historial de cambios, colaboración técnica y trazabilidad del desarrollo.",
        icons: [
          ["assets/icons/github.png", "GitHub", "Facilita control de versiones, revisión de código y trabajo colaborativo."],
        ],
      },
      {
        title: "Automatización y validación",
        text: "Automatización de flujos, validación funcional y control de consistencia antes de entregar una solución.",
        icons: [
          ["assets/icons/selenium_webdriver.png", "Selenium WebDriver", "Permite automatizar validaciones funcionales en aplicaciones web."],
          ["assets/icons/serenity_bdd.png", "Serenity BDD", "Framework BDD útil para estructurar pruebas trazables y reportes de evidencia."],
        ],
      },
      {
        title: "APIs y soporte técnico",
        text: "Validación de servicios, revisión de respuestas y análisis técnico de incidencias.",
        icons: [
          ["assets/icons/postman.png", "Postman", "Herramienta para probar, validar y documentar APIs REST."],
        ],
      },
      {
        title: "Bases de datos",
        text: "Consultas, extracción de información, validación de datos y soporte a reportería operativa.",
        icons: [
          ["assets/icons/sql.png", "SQL", "Permite consultar, validar y analizar datos en bases relacionales."],
        ],
      },
      {
        title: "Entornos de desarrollo",
        text: "Ejecución, depuración, mantenimiento de scripts y desarrollo de soluciones internas.",
        icons: [
          ["assets/icons/vscode.png", "Visual Studio Code", "Editor utilizado para desarrollo, scripts de automatización y mantenimiento técnico."],
          ["assets/icons/intellij.png", "IntelliJ IDEA", "IDE usado para desarrollo en Java y automatización de pruebas."],
        ],
      },
      {
        title: "Lenguajes",
        text: "Desarrollo, scripting, automatización, validación frontend y soporte técnico.",
        icons: [
          ["assets/icons/python.png", "Python", "Útil para automatizar procesos, transformar datos, generar reportes y construir herramientas internas."],
          ["assets/icons/java.png", "Java", "Lenguaje utilizado para desarrollo y automatización con Selenium, Cucumber y frameworks BDD."],
          ["assets/icons/javascript.png", "JavaScript", "Apoya el desarrollo y mantenimiento de interfaces web internas."],
          ["assets/icons/html.png", "HTML", "Ayuda a revisar estructura, accesibilidad básica y comportamiento de interfaces web."],
          ["assets/icons/css.png", "CSS", "Permite validar estilos, responsive design y consistencia visual de componentes."],
        ],
      },
    ],
    experienceData: [
      {
        company: "Asesores & Multinegocios Cesar Eduardo E.I.R.L.",
        role: "Desarrollador de Software y Automatización",
        type: "Experiencia profesional",
        period: "Feb. 2025 - Actualidad",
        description: "Desarrollo de soluciones internas y automatizaciones a medida para procesos contables, comerciales y operativos, incorporando validación funcional y soporte técnico.",
        highlights: ["Herramientas internas con Python, Excel y bases de datos", "Mantenimiento de aplicaciones web internas", "Análisis de requerimientos e incidencias"],
      },
      {
        company: "Banco de la Nación",
        role: "Practicante Profesional de Automatización, Control de Calidad de Datos y Reportería",
        type: "Practicante profesional",
        period: "Ene. 2024 - Ene. 2025",
        description: "Automatización, reportería y validación de datos en el entorno de gestión de reclamos, con apoyo en SQL, Excel avanzado, Python y control funcional.",
        highlights: ["Automatización de reportería operativa", "Validación de reglas funcionales y consistencia de datos", "Documentación de incidencias con evidencias"],
      },
    ],
    projectsData: [
      {
        title: "OrangeHRM Selenium WebDriver",
        media: {
          images: ["assets/img/OrangeHRM.png"],
          video: "",
        },
        description: "Framework de automatización web en Java con Selenium y Cucumber, enfocado en validación funcional, BDD y estructura mantenible.",
        tags: ["Java", "Selenium", "Cucumber", "BDD"],
        results: ["Flujo login/logout automatizado", "Casos escritos en Gherkin", "Evidencia y estrategia documentadas"],
        resources: [
          ["Código", "https://github.com/JoseSanchezMunoz/OrangeHRM-SeleniumWebdriver"],
          ["Documentación", "https://www.notion.so/Portafolio-Jos-Anderson-S-nchez-Mu-oz-302b11de3f518070bb1dd1be77294b30"],
        ],
      },
    ],
    certificationsData: [
      { category: "Automatización y calidad", name: "Selenium con Java y Cucumber", issuer: "The Free Range Tester (Udemy)" },
      { category: "Programación", name: "Curso de Java Profesional", issuer: "Código Facilito" },
      { category: "Programación", name: "Curso de Python Profesional", issuer: "Código Facilito" },
      { category: "Programación", name: "Python", issuer: "Kaggle" },
      { category: "Metodologías ágiles", name: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy" },
      { category: "Gestión", name: "Fundamentos profesionales de Análisis Empresarial", issuer: "Microsoft & LinkedIn" },
      { category: "Gestión", name: "Fundamentos de Gestión de Proyectos", issuer: "Microsoft & LinkedIn" },
      { category: "Datos y reportería", name: "Fundamentos de Análisis de Datos", issuer: "Microsoft & LinkedIn" },
      { category: "Datos y reportería", name: "Curso de Power BI", issuer: "Udemy" },
    ],

    analysisProcessData: [
      [
        "Análisis",
        "Entiendo el problema, las reglas de negocio y el impacto operativo antes de proponer una solución."
      ],
      [
        "Construcción",
        "Desarrollo herramientas, automatizaciones o consultas que reduzcan trabajo manual y mejoren la trazabilidad."
      ],
      [
        "Validación",
        "Reviso datos, reglas funcionales e incidencias para asegurar resultados útiles, consistentes y mantenibles."
      ],
    ],
  },
  en: {
    skipLink: "Skip to main content",
    sectionLabel: "Professional portfolio",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certificates",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Development | Automation | Data",
      title: "José Sánchez Muñoz",
      summary: "Systems Engineering graduate focused on building internal solutions, automating processes, and working with operational data to improve traceability and efficiency.",
      primaryCta: "View projects",
      secondaryCta: "Contact",
      role: "Internal tools development and process automation",
      note: "Python, SQL, advanced Excel, databases, operational reporting, and functional validation.",
    },
    about: {
      title: "Systems Engineering graduate from the National University of San Marcos (UNMSM)",
      p1: "Experience building internal tools for accounting, commercial, and operational processes.",
      p2: "I work with programming, databases, and reporting to reduce manual tasks, structure operational information, and improve traceability.",
      p3: "Before developing a solution, I aim to understand the problem, its business rules, and the impact it will have on the process.",
      processHeading: "How I approach a solution",
      processText: "A practical approach to turn operational needs into clear, useful, and maintainable tools."
    },
    skills: {
      title: "Tools organized by professional use.",
    },
    experience: {
      title: "Experience applying development, automation, data, and functional validation to real processes.",
    },
    projects: {
      title: "Projects and evidence of automation, development, and validation.",
      carouselLabel: "Screenshot gallery",
      carouselPrev: "Previous image",
      carouselNext: "Next image",
    },
    certifications: {
      title: "Complementary training in programming, data, automation, quality, and management.",
    },
    contact: {
      title: "Let's talk about technology opportunities.",
      availability: "Available for professional opportunities",
      roleTitle: "Development, automation, and development support",
      text: "I am open to opportunities related to software development, process automation, development support, technical analysis, and functional validation.",
      cardTitle: "Shall we talk?",
      cardText: "If you have a job opportunity, proposal, or would like to discuss internal tools, automation, or development support, feel free to contact me directly.",
      emailButton: "Send me an email"
    },
    footer: {
      copy: "2026 José Sánchez Muñoz. Professional portfolio.",
      back: "Back to top",
    },
    facts: [
      ["Profile", "Development + Automation"],
      ["Technical base", "Python · SQL · Excel"],
      ["Approach", "Processes · Data · Traceability"],
      ["Availability", "Remote · Hybrid · On-site"]
    ],
    skillGroups: [
      {
        title: "Management and collaboration",
        text: "Task organization, requirements and incident tracking, and communication with users or technical teams.",
        icons: [
          ["assets/icons/jira.png", "Jira", "Tool for task tracking, incident management, and technical coordination."],
          ["assets/icons/trello.png", "Trello", "Helps organize tasks and workflows through visual boards and lists."],
        ],
      },
      {
        title: "Version control",
        text: "Change history, technical collaboration, and development traceability.",
        icons: [
          ["assets/icons/github.png", "GitHub", "Supports version control, code review, and collaborative development."],
        ],
      },
      {
        title: "Automation and validation",
        text: "Workflow automation, functional validation, and consistency checks before delivering a solution.",
        icons: [
          ["assets/icons/selenium_webdriver.png", "Selenium WebDriver", "Used to automate functional validations in web applications."],
          ["assets/icons/serenity_bdd.png", "Serenity BDD", "BDD framework useful for structuring traceable tests and evidence reports."],
        ],
      },
      {
        title: "APIs and technical support",
        text: "Service validation, response review, and technical incident analysis.",
        icons: [
          ["assets/icons/postman.png", "Postman", "Tool for testing, validating, and documenting REST APIs."],
        ],
      },
      {
        title: "Databases",
        text: "Queries, information extraction, data validation, and operational reporting support.",
        icons: [
          ["assets/icons/sql.png", "SQL", "Used to query, validate, and analyze relational data."],
        ],
      },
      {
        title: "Development environments",
        text: "Execution, debugging, script maintenance, and development of internal solutions.",
        icons: [
          ["assets/icons/vscode.png", "Visual Studio Code", "Editor used for development, automation scripts, and technical maintenance."],
          ["assets/icons/intellij.png", "IntelliJ IDEA", "IDE used for Java development and test automation."],
        ],
      },
      {
        title: "Languages",
        text: "Development, scripting, automation, frontend validation, and technical support.",
        icons: [
          ["assets/icons/python.png", "Python", "Useful for process automation, data transformation, reporting, and internal tools."],
          ["assets/icons/java.png", "Java", "Language used for development and automation with Selenium, Cucumber, and BDD frameworks."],
          ["assets/icons/javascript.png", "JavaScript", "Supports development and maintenance of internal web interfaces."],
          ["assets/icons/html.png", "HTML", "Helps review structure, basic accessibility, and web interface behavior."],
          ["assets/icons/css.png", "CSS", "Used to validate styles, responsive design, and component visual consistency."],
        ],
      },
    ],
    experienceData: [
      {
        company: "Asesores & Multinegocios Cesar Eduardo E.I.R.L.",
        role: "Software Developer and Automation",
        type: "Professional experience",
        period: "Feb. 2025 - Present",
        description: "Development of internal solutions and custom automations for accounting, commercial, and operational processes, including functional validation and technical support.",
        highlights: ["Internal tools with Python, Excel, and databases", "Maintenance of internal web applications", "Requirements and incident analysis"],
      },
      {
        company: "Banco de la Nación",
        role: "Professional Intern in Automation, Data Quality Control, and Reporting",
        type: "Professional intern",
        period: "Jan. 2024 - Jan. 2025",
        description: "Automation, reporting, and data validation in a complaint management environment, using SQL, advanced Excel, Python, and functional control.",
        highlights: ["Operational reporting automation", "Functional rule and data consistency validation", "Incident documentation with evidence"],
      },
    ],
    projectsData: [
      {
        title: "OrangeHRM Selenium WebDriver",
        media: {
          images: ["assets/img/OrangeHRM.png"],
          video: "",
        },
        description: "Web automation framework in Java with Selenium and Cucumber, focused on functional validation, BDD, and maintainable structure.",
        tags: ["Java", "Selenium", "Cucumber", "BDD"],
        results: ["Automated login/logout flow", "Gherkin test cases", "Documented evidence and strategy"],
        resources: [
          ["Code", "https://github.com/JoseSanchezMunoz/OrangeHRM-SeleniumWebdriver"],
          ["Documentation", "https://www.notion.so/Portafolio-Jos-Anderson-S-nchez-Mu-oz-302b11de3f518070bb1dd1be77294b30"],
        ],
      },
    ],
    certificationsData: [
      { category: "Automation and quality", name: "Selenium with Java and Cucumber", issuer: "The Free Range Tester (Udemy)" },
      { category: "Programming", name: "Professional Java Course", issuer: "Código Facilito" },
      { category: "Programming", name: "Professional Python Course", issuer: "Código Facilito" },
      { category: "Programming", name: "Python", issuer: "Kaggle" },
      { category: "Agile methodologies", name: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy" },
      { category: "Management", name: "Professional Foundations of Business Analysis", issuer: "Microsoft & LinkedIn" },
      { category: "Management", name: "Project Management Foundations", issuer: "Microsoft & LinkedIn" },
      { category: "Data and reporting", name: "Data Analysis Foundations", issuer: "Microsoft & LinkedIn" },
      { category: "Data and reporting", name: "Power BI Course", issuer: "Udemy" },
    ],
    analysisProcessData: [
      [
        "Analysis",
        "I understand the problem, business rules, and operational impact before proposing a solution."
      ],
      [
        "Build",
        "I develop tools, automations, or queries that reduce manual work and improve traceability."
      ],
      [
        "Validation",
        "I review data, functional rules, and incidents to deliver useful, consistent, and maintainable results."
      ],
    ]
  }
};
})();
