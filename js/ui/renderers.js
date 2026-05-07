(function () {
window.Portfolio = window.Portfolio || {};

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
  wrapper.addEventListener("pointerenter", () => alignTooltip(wrapper, tooltip));
  wrapper.addEventListener("focus", () => alignTooltip(wrapper, tooltip));
  return wrapper;
};

const alignTooltip = (wrapper, tooltip) => {
  wrapper.style.setProperty("--tooltip-offset", "0px");
  wrapper.style.setProperty("--tooltip-arrow-offset", "0px");

  const margin = 16;
  const wrapperRect = wrapper.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth;
  const viewportWidth = document.documentElement.clientWidth;
  const centeredLeft = wrapperRect.left + (wrapperRect.width / 2) - (tooltipWidth / 2);
  const centeredRight = centeredLeft + tooltipWidth;
  let offset = 0;

  if (centeredLeft < margin) {
    offset = margin - centeredLeft;
  } else if (centeredRight > viewportWidth - margin) {
    offset = viewportWidth - margin - centeredRight;
  }

  wrapper.style.setProperty("--tooltip-offset", `${offset}px`);
  wrapper.style.setProperty("--tooltip-arrow-offset", `${-offset}px`);
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
  window.Portfolio.initProjectCarousels();
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

Object.assign(window.Portfolio, {
  renderAnalysisProcess,
  renderExperience,
  renderFacts,
  renderProjects,
  renderSkills,
  renderTimeline,
});
})();
