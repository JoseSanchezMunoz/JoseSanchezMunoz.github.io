const STORAGE_KEYS = {
  theme: "portfolio-theme",
  lang: "portfolio-lang"
};

const translations = {
  es: {
    skipLink: "Saltar al contenido principal",
    sectionLabel: "Portfolio QA",
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
      eyebrow: "QA Tester | Manual + Automatización",
      title: "José Sánchez Muñoz",
      summary: "QA Tester orientado a prevenir defectos, validar flujos críticos y entregar software confiable con criterios claros de calidad.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactar",
      role: "QA Tester orientado a automatización",
      note: "Testing funcional, automatización web, APIs, SQL y reporte de incidencias.",
    },
    about: {
      title: "QA Tester, Bachiller en Ingeniería de Sistemas de la Universidad Nacional Mayor de San Marcos (UNMSM)",
      p1: "Experiencia en pruebas funcionales, análisis de incidencias y automatización.",
      p2: "Validación de flujos críticos, detección de defectos y aseguramiento de la estabilidad funcional mediante evidencia y trazabilidad.",
      p3: "Busco aportar en QA manual o automatización fortaleciendo calidad, cobertura y prevención de errores.",
      processHeading: "¿Cómo abordo un proceso de pruebas?",
      processText: "Proceso estructurado para asegurar cobertura, trazabilidad y calidad funcional."
    },
    skills: {
      title: "Herramientas organizadas por flujo de trabajo.",
    },
    experience: {
      title: "Experiencia real aplicando QA en productos y operaciones.",
    },
    projects: {
      title: "Evidencia práctica del ciclo de vida de pruebas.",
      carouselLabel: "Galería de capturas",
      carouselPrev: "Imagen anterior",
      carouselNext: "Imagen siguiente",
    },
    certifications: {
      title: "Formación enfocada en testing, automatización y gestión.",
    },
    contact: {
      title: "Conversemos sobre oportunidades QA.",
      availability: "Disponible para oportunidades QA",
      roleTitle: "QA Tester orientado a calidad y automatización",
      text: "Estoy disponible para roles de QA Tester, automatización QA o posiciones donde la calidad sea parte real del producto.",
      cardTitle: "¿Hablamos?",
      cardText: "Si tienes una oportunidad laboral, propuesta o quieres conversar sobre QA y automatización, puedes escribirme directamente.",
      emailButton: "Enviarme un correo"
    },
    footer: {
      copy: "2026 José Sánchez Muñoz. QA Tester Portfolio.",
      back: "Volver arriba",
    },
    facts: [
      ["Perfil", "QA Funcional + Automatización"],
      ["Base técnica", "Web · APIs · SQL"],
      ["Enfoque", "Defectos · Calidad · Evidencia"],
      ["Disponibilidad", "Remoto · Híbrido · Presencial"],
    ],
    skillGroups: [
      {
        title: "Gestión y colaboración",
        text: "Organización de tareas, seguimiento de incidencias y comunicación con equipos ágiles.",
        icons: [
          ["assets/icons/jira.png", "Jira", "Se utiliza para la gestión de proyectos ágiles y el seguimiento de incidencias y bugs."],
          ["assets/icons/trello.png", "Trello", "Permite organizar tareas y flujos de trabajo mediante tableros visuales y listas."],
        ],
      },
      {
        title: "Control de versiones",
        text: "Historial de cambios, colaboración técnica y trazabilidad del trabajo.",
        icons: [
          ["assets/icons/github.png", "GitHub", "Facilita control de versiones, revisión de código y trabajo colaborativo."],
        ],
      },
      {
        title: "Automatización de pruebas",
        text: "Pruebas funcionales automatizadas, BDD y reportes orientados a evidencia.",
        icons: [
          ["assets/icons/selenium_webdriver.png", "Selenium WebDriver", "Permite automatizar pruebas funcionales en aplicaciones web y validar flujos críticos."],
          ["assets/icons/serenity_bdd.png", "Serenity BDD", "Framework para automatización BDD con reportes claros, trazables y orientados a evidencia."],
        ],
      },
      {
        title: "APIs y testing",
        text: "Validación de endpoints, contratos, respuestas y escenarios de prueba.",
        icons: [
          ["assets/icons/postman.png", "Postman", "Herramienta para probar, validar y documentar APIs REST de forma eficiente."],
        ],
      },
      {
        title: "Bases de datos",
        text: "Consultas, validación de datos y soporte al análisis de resultados.",
        icons: [
          ["assets/icons/sql.png", "SQL", "Permite consultar, validar y analizar datos en bases relacionales durante pruebas."],
        ],
      },
      {
        title: "Entornos de desarrollo",
        text: "Ejecución, depuración y mantenimiento de pruebas automatizadas.",
        icons: [
          ["assets/icons/vscode.png", "Visual Studio Code", "Editor utilizado para revisar, mantener y ejecutar scripts de apoyo QA."],
          ["assets/icons/intellij.png", "IntelliJ IDEA", "IDE usado para desarrollo y ejecución de pruebas automatizadas en Java."],
        ],
      },
      {
        title: "Lenguajes",
        text: "Automatización, scripting, validación frontend y soporte técnico.",
        icons: [
          ["assets/icons/python.png", "Python", "Útil para scripting, automatización de controles, reporterías y apoyo al análisis QA."],
          ["assets/icons/java.png", "Java", "Lenguaje utilizado para automatización con Selenium, Cucumber y frameworks BDD."],
          ["assets/icons/javascript.png", "JavaScript", "Apoya la validación frontend, pruebas de comportamiento y entendimiento de flujos web."],
          ["assets/icons/html.png", "HTML", "Ayuda a revisar estructura, accesibilidad básica y comportamiento de interfaces web."],
          ["assets/icons/css.png", "CSS", "Permite validar estilos, responsive design y consistencia visual de componentes."],
        ],
      },
    ],
    experienceData: [
      {
        company: "Banco de la Nación",
        role: "QA Engineer - Control de Calidad y Reporterías",
        type: "Practicante profesional",
        period: "Ene. 2024 - Ene. 2025",
        description: "QA en sistemas bancarios de reclamos, con foco en pruebas funcionales, gestión de incidencias en producción, controles de calidad y reporterías.",
        highlights: ["Pruebas funcionales y regresión", "Análisis de incidencias productivas", "Automatización de controles con Python y SQL"],
      },
      {
        company: "Asesores & Multinegocios Cesar Eduardo E.I.R.L.",
        role: "QA / Soporte de Desarrollo",
        type: "Practicante preprofesional",
        period: "Sept. 2022 - Dic. 2023",
        description: "Ejecución de pruebas funcionales en aplicaciones web internas, soporte QA mediante análisis de logs y mantenimiento básico frontend/backend.",
        highlights: ["Validación de flujos web internos", "Revisión de logs y soporte técnico", "Apoyo en mantenimiento frontend/backend"],
      },
    ],
    projectsData: [
      {
        title: "OrangeHRM Selenium WebDriver",
        media: {
          images: ["assets/img/OrangeHRM.png"],
          video: "",
        },
        description: "Framework de automatización QA en Java con Selenium y Cucumber, enfocado en login/logout, BDD y arquitectura escalable.",
        tags: ["Java", "Selenium", "Cucumber", "BDD"],
        results: ["Flujo login/logout automatizado", "Casos escritos en Gherkin", "Evidencia y estrategia documentadas"],
        resources: [
          ["Código", "https://github.com/JoseSanchezMunoz/OrangeHRM-SeleniumWebdriver"],
          ["Documentación", "https://www.notion.so/Portafolio-Jos-Anderson-S-nchez-Mu-oz-302b11de3f518070bb1dd1be77294b30"],
        ],
      },
    ],
    certificationsData: [
      { category: "Automatización de pruebas", name: "Selenium con Java y Cucumber", issuer: "The Free Range Tester (Udemy)" },
      { category: "Programación", name: "Curso de Java Profesional", issuer: "Código Facilito" },
      { category: "Programación", name: "Curso de Python Profesional", issuer: "Código Facilito" },
      { category: "Programación", name: "Python", issuer: "Kaggle" },
      { category: "Metodologías ágiles", name: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy" },
      { category: "Gestión", name: "Fundamentos profesionales de Análisis Empresarial", issuer: "Microsoft & LinkedIn" },
      { category: "Gestión", name: "Fundamentos de Gestión de Proyectos", issuer: "Microsoft & LinkedIn" },
      { category: "Datos y reporting", name: "Fundamentos de Análisis de Datos", issuer: "Microsoft & LinkedIn" },
      { category: "Datos y reporting", name: "Curso de Power BI", issuer: "Udemy" },
    ],

    analysisProcessData: [
      [
        "Análisis",
        "Analizo requerimientos y criterios de aceptación para definir alcance y estrategia de pruebas."
      ],
      [
        "Diseño",
        "Diseño escenarios y casos priorizando flujos críticos y cobertura funcional."
      ],
      [
        "Ejecución",
        "Ejecuto pruebas, documento evidencias y reporto incidencias con trazabilidad."
      ],
    ],
  },
  en: {
    skipLink: "Skip to main content",
    sectionLabel: "QA portfolio",
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
      eyebrow: "QA Tester | Manual + Automation",
      title: "José Sánchez Muñoz",
      summary: "QA Tester focused on preventing defects, validating critical flows, and delivering reliable software with clear quality criteria.",
      primaryCta: "View projects",
      secondaryCta: "Contact",
      role: "QA Tester focused on automation",
      note: "Functional testing, web automation, APIs, SQL, and defect reporting.",
    },
    about: {
      title: "QA Tester, Bachelor's Degree in Systems Engineering from the National University of San Marcos (UNMSM)",
      p1: "Experience in functional testing, incident analysis, and automation.",
      p2: "Validation of critical flows, defect detection, and functional stability through evidence and traceability.",
      p3: "I seek to contribute in manual QA or automation, strengthening quality, coverage, and error prevention.",
      processHeading: "How do I approach a testing process?",
      processText: "Structured process to ensure coverage, traceability, and functional quality."
    },
    skills: {
      title: "Tools organized by workflow.",
    },
    experience: {
      title: "Real experience applying QA to products and operations.",
    },
    projects: {
      title: "Practical evidence of the testing life cycle.",
      carouselLabel: "Screenshot gallery",
      carouselPrev: "Previous image",
      carouselNext: "Next image",
    },
    certifications: {
      title: "Training focused on testing, automation, and management.",
    },
    contact: {
      title: "Let's talk about QA opportunities.",
      availability: "Available for QA opportunities",
      roleTitle: "QA Tester focused on quality and automation",
      text: "I am available for QA Tester, QA automation, or positions where quality is a real part of the product.",
      cardTitle: "Shall we talk?",
      cardText: "If you have a job opportunity, proposal, or would like to talk about QA and automation, feel free to contact me directly.",
      emailButton: "Send me an email"
    },
    footer: {
      copy: "2026 José Sánchez Muñoz. QA Tester Portfolio.",
      back: "Back to top",
    },
    facts: [
      ["Profile", "Functional QA + Automation"],
      ["Technical base", "Web · APIs · SQL"],
      ["Approach", "Defects · Quality · Evidence"],
      ["Availability", "Remote · Hybrid · On-site"]
    ],
    skillGroups: [
      {
        title: "Management and collaboration",
        text: "Task organization, defect tracking, and communication with agile teams.",
        icons: [
          ["assets/icons/jira.png", "Jira", "Used for agile project management and tracking incidents and bugs."],
          ["assets/icons/trello.png", "Trello", "Helps organize tasks and workflows through visual boards and lists."],
        ],
      },
      {
        title: "Version control",
        text: "Change history, technical collaboration, and work traceability.",
        icons: [
          ["assets/icons/github.png", "GitHub", "Supports version control, code review, and collaborative development."],
        ],
      },
      {
        title: "Test automation",
        text: "Automated functional testing, BDD, and evidence-oriented reports.",
        icons: [
          ["assets/icons/selenium_webdriver.png", "Selenium WebDriver", "Used to automate functional tests in web applications and validate critical flows."],
          ["assets/icons/serenity_bdd.png", "Serenity BDD", "BDD automation framework with clear, traceable, evidence-oriented reports."],
        ],
      },
      {
        title: "APIs and testing",
        text: "Endpoint validation, contracts, responses, and test scenarios.",
        icons: [
          ["assets/icons/postman.png", "Postman", "Tool for testing, validating, and documenting REST APIs efficiently."],
        ],
      },
      {
        title: "Databases",
        text: "Queries, data validation, and support for result analysis.",
        icons: [
          ["assets/icons/sql.png", "SQL", "Used to query, validate, and analyze relational data during testing."],
        ],
      },
      {
        title: "Development environments",
        text: "Execution, debugging, and maintenance of automated tests.",
        icons: [
          ["assets/icons/vscode.png", "Visual Studio Code", "Editor used to review, maintain, and run QA support scripts."],
          ["assets/icons/intellij.png", "IntelliJ IDEA", "IDE used to develop and execute automated tests in Java."],
        ],
      },
      {
        title: "Languages",
        text: "Automation, scripting, frontend validation, and technical support.",
        icons: [
          ["assets/icons/python.png", "Python", "Useful for scripting, control automation, reporting, and QA analysis support."],
          ["assets/icons/java.png", "Java", "Language used for automation with Selenium, Cucumber, and BDD frameworks."],
          ["assets/icons/javascript.png", "JavaScript", "Supports frontend validation, behavior checks, and web flow understanding."],
          ["assets/icons/html.png", "HTML", "Helps review structure, basic accessibility, and web interface behavior."],
          ["assets/icons/css.png", "CSS", "Used to validate styles, responsive design, and component visual consistency."],
        ],
      },
    ],
    experienceData: [
      {
        company: "Banco de la Nación",
        role: "QA Engineer - Quality Control and Reporting",
        type: "Professional intern",
        period: "Jan. 2024 - Jan. 2025",
        description: "QA work on banking complaint systems, focused on functional testing, production incident management, quality controls, and reporting.",
        highlights: ["Functional and regression testing", "Production incident analysis", "Control automation with Python and SQL"],
      },
      {
        company: "Asesores & Multinegocios Cesar Eduardo E.I.R.L.",
        role: "QA / Development Support",
        type: "Pre-professional intern",
        period: "Sep. 2022 - Dec. 2023",
        description: "Functional testing on internal web applications, QA support through log analysis, and basic frontend/backend maintenance.",
        highlights: ["Internal web flow validation", "Log review and technical support", "Frontend/backend maintenance support"],
      },
    ],
    projectsData: [
      {
        title: "OrangeHRM Selenium WebDriver",
        media: {
          images: ["assets/img/OrangeHRM.png"],
          video: "",
        },
        description: "QA automation framework in Java with Selenium and Cucumber, focused on login/logout, BDD, and scalable architecture.",
        tags: ["Java", "Selenium", "Cucumber", "BDD"],
        results: ["Automated login/logout flow", "Gherkin test cases", "Documented evidence and strategy"],
        resources: [
          ["Code", "https://github.com/JoseSanchezMunoz/OrangeHRM-SeleniumWebdriver"],
          ["Documentation", "https://www.notion.so/Portafolio-Jos-Anderson-S-nchez-Mu-oz-302b11de3f518070bb1dd1be77294b30"],
        ],
      },
    ],
    certificationsData: [
      { category: "Test automation", name: "Selenium with Java and Cucumber", issuer: "The Free Range Tester (Udemy)" },
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
        "I analyze requirements, business rules, and acceptance criteria to define test scope and strategy."
      ],
      [
        "Design",
        "I design scenarios and test cases prioritizing critical flows, functional risks, and relevant coverage."
      ],
      [
        "Execution",
        "I execute tests, document evidence, and report incidents with traceability."
      ],
    ]
  }
};

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  if (storedTheme) return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getPreferredLang = () => {
  const storedLang = localStorage.getItem(STORAGE_KEYS.lang);
  if (storedLang) return storedLang;
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
};

let currentLang = getPreferredLang();


const resolvePath = (source, path) => path.split(".").reduce((value, key) => value?.[key], source);

const setTheme = (theme, shouldPersist = true) => {
  document.documentElement.dataset.theme = theme;
  if (shouldPersist) localStorage.setItem(STORAGE_KEYS.theme, theme);
  document.querySelector(".theme-toggle")?.setAttribute("aria-label", theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
};

const createIcon = ([src, alt, description]) => {
  const wrapper = document.createElement("button");
  wrapper.className = "skill-tooltip";
  wrapper.type = "button";
  wrapper.setAttribute("aria-label", `${alt}: ${description}`);

  const img = document.createElement("img");
  img.className = "skill-icon";
  img.src = src;
  img.alt = alt;

  const tooltip = document.createElement("span");
  tooltip.className = "tooltip-text";
  tooltip.innerHTML = `<strong>${alt}</strong>${description}`;

  wrapper.append(img, tooltip);
  return wrapper;
};

const renderFacts = (data) => {
  const container = document.querySelector("#facts-grid");
  if (!container) return;
  container.innerHTML = "";
  data.facts.forEach(([label, value]) => {
    const article = document.createElement("article");
    article.className = "fact-card";
    article.innerHTML = `<strong>${label}</strong><span>${value}</span>`;
    container.append(article);
  });
};

const renderSkills = (data) => {
  const container = document.querySelector("#skills-grid");
  if (!container) return;
  container.innerHTML = "";
  data.skillGroups.forEach((skill) => {
    const article = document.createElement("article");
    article.className = "skill-card";
    const icons = document.createElement("div");
    icons.className = "skill-icons";
    skill.icons.forEach((icon) => icons.append(createIcon(icon)));
    article.innerHTML = `<h3>${skill.title}</h3><p>${skill.text}</p>`;
    article.append(icons);
    container.append(article);
  });
};

const getProjectImages = (project) => {
  const media = project.media ?? {};
  if (Array.isArray(media.images) && media.images.length) return media.images;
  return media.image ? [media.image] : [];
};

const renderProjectMedia = (project, data) => {
  if (project.media?.video) {
    return `<video class="project-media" src="${project.media.video}" controls preload="metadata"></video>`;
  }

  const images = getProjectImages(project);
  const [firstImage] = images;
  if (!firstImage) return "";

  const controls = images.length > 1
    ? `
        <div class="carousel-controls" aria-label="${data.projects.carouselLabel}">
          <button class="carousel-button" type="button" data-carousel-prev aria-label="${data.projects.carouselPrev}">‹</button>
          <div class="carousel-dots" aria-hidden="true">
            ${images.map((_, imageIndex) => `<span class="${imageIndex === 0 ? "active" : ""}"></span>`).join("")}
          </div>
          <button class="carousel-button" type="button" data-carousel-next aria-label="${data.projects.carouselNext}">›</button>
        </div>
      `
    : "";

  return `
    <figure class="project-media carousel" data-carousel data-images='${JSON.stringify(images)}' data-current-image="0">
      <img src="${firstImage}" alt="${project.title} captura 1" data-carousel-image>
      ${controls}
    </figure>
  `;
};

const initProjectCarousels = () => {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const images = JSON.parse(carousel.dataset.images ?? "[]");
    if (images.length < 2) return;

    const img = carousel.querySelector("[data-carousel-image]");
    const dots = Array.from(carousel.querySelectorAll(".carousel-dots span"));
    const updateImage = (nextIndex) => {
      const currentIndex = (nextIndex + images.length) % images.length;
      carousel.dataset.currentImage = String(currentIndex);
      img.src = images[currentIndex];
      img.alt = `${img.alt.replace(/ captura \d+$/, "")} captura ${currentIndex + 1}`;
      dots.forEach((dot, index) => dot.classList.toggle("active", index === currentIndex));
    };

    carousel.querySelector("[data-carousel-prev]")?.addEventListener("click", () => {
      updateImage(Number(carousel.dataset.currentImage) - 1);
    });

    carousel.querySelector("[data-carousel-next]")?.addEventListener("click", () => {
      updateImage(Number(carousel.dataset.currentImage) + 1);
    });
  });
};

const renderProjects = (data) => {
  const container = document.querySelector("#projects-grid");
  if (!container) return;
  container.innerHTML = "";
  data.projectsData.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project-card";
    article.innerHTML = `
      ${renderProjectMedia(project, data)}
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <ul class="project-results">${project.results.map((result) => `<li>${result}</li>`).join("")}</ul>
        <div class="resource-list">${project.resources.map(([label, href]) => `<a class="button button-secondary" href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}</div>
      </div>
    `;
    container.append(article);
  });
  initProjectCarousels();
};

const renderExperience = (data) => {
  const container = document.querySelector("#experience-list");
  if (!container) return;
  container.innerHTML = "";
  data.experienceData.forEach((job) => {
    const article = document.createElement("article");
    article.className = "experience-card";
    article.innerHTML = `
      <div class="experience-meta">
        <span>${job.period}</span>
        <strong>${job.type}</strong>
      </div>
      <div class="experience-body">
        <h3>${job.company}</h3>
        <p class="experience-role">${job.role}</p>
        <p>${job.description}</p>
        <ul>${job.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
      </div>
    `;
    container.append(article);
  });
};

const renderTimeline = (data) => {
  const container = document.querySelector("#certifications-list");
  if (!container) return;
  container.innerHTML = "";
  data.certificationsData.forEach((cert) => {
    const article = document.createElement("article");
    article.className = "timeline-item";
    article.innerHTML = `
      <span class="cert-category">${cert.category}</span>
      <h3>${cert.name}</h3>
      <p class="cert-issuer">${cert.issuer}</p>
    `;
    container.append(article);
  });
};

const renderAnalysisProcess = (data) => {
  const container = document.querySelector("#analysis-process-grid");
  if (!container) return;
  container.innerHTML = "";
  data.analysisProcessData.forEach(([title, text]) => {
    const article = document.createElement("article");
    article.className = "process-card";
    article.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
    container.append(article);
  });
};

const applyTranslations = () => {
  const data = translations[currentLang] ?? translations.es;
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = resolvePath(data, element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langOption === currentLang);
    button.setAttribute("aria-pressed", String(button.dataset.langOption === currentLang));
  });

  renderFacts(data);
  renderSkills(data);
  renderExperience(data);
  renderProjects(data);
  renderTimeline(data);
  renderAnalysisProcess(data);
};

const closeNav = () => {
  document.body.classList.remove("nav-open");
  document.querySelector(".nav-toggle")?.classList.remove("active");
  document.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
  document.querySelector(".nav-panel")?.classList.remove("active");
};

const scrollToSection = (target) => {
  if (target.id === "home") {
    window.scrollTo({ top: 0 });
    return;
  }

  const heading = target.querySelector(".section-heading, .hero-copy") ?? target;
  const headerHeight = document.querySelector(".site-header")?.offsetHeight ?? 0;
  const top = heading.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
};

const initNavigation = () => {
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector(".nav-panel");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("active");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      closeNav();
      scrollToSection(target);
    });
  });
};

const initPreferences = () => {
  setTheme(getPreferredTheme(), false);

  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme, true);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (!localStorage.getItem(STORAGE_KEYS.theme)) {
      setTheme(event.matches ? "dark" : "light", false);
    }
  });

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.langOption;
      localStorage.setItem(STORAGE_KEYS.lang, currentLang);
      applyTranslations();
    });
  });
};




initPreferences();
applyTranslations();
initNavigation();
