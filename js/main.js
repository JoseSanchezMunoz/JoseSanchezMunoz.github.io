(function () {
const { applyTranslations, getPreferredLang, initNavigation, initPreferences } = window.Portfolio;

let currentLang = getPreferredLang();

initPreferences({
  onLanguageChange: (nextLang) => {
    currentLang = nextLang;
    applyTranslations(currentLang);
  },
});
applyTranslations(currentLang);
initNavigation();
})();
