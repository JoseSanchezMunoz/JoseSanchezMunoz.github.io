(function () {
window.Portfolio = window.Portfolio || {};

window.Portfolio.applyTranslations = (currentLang) => {
  const {
    renderAnalysisProcess,
    renderExperience,
    renderFacts,
    renderProjects,
    renderSkills,
    renderTimeline,
    resolvePath,
    translations,
  } = window.Portfolio;
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
})();
