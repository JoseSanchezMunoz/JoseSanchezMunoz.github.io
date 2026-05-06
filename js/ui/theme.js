(function () {
window.Portfolio = window.Portfolio || {};

const { STORAGE_KEYS } = window.Portfolio;

window.Portfolio.getPreferredTheme = () => {
  const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  if (storedTheme) return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

window.Portfolio.setTheme = (theme, shouldPersist = true) => {
  document.documentElement.dataset.theme = theme;
  if (shouldPersist) localStorage.setItem(STORAGE_KEYS.theme, theme);
  document.querySelector(".theme-toggle")?.setAttribute("aria-label", theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
};
})();
