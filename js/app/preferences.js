(function () {
window.Portfolio = window.Portfolio || {};

const { STORAGE_KEYS } = window.Portfolio;

const getPreferredLang = () => {
  const storedLang = localStorage.getItem(STORAGE_KEYS.lang);
  if (storedLang) return storedLang;
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
};

const initPreferences = ({ onLanguageChange }) => {
  const { getPreferredTheme, setTheme } = window.Portfolio;

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
      const nextLang = button.dataset.langOption;
      localStorage.setItem(STORAGE_KEYS.lang, nextLang);
      onLanguageChange(nextLang);
    });
  });
};

Object.assign(window.Portfolio, {
  getPreferredLang,
  initPreferences,
});
})();
