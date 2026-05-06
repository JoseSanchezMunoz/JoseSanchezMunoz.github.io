(function () {
window.Portfolio = window.Portfolio || {};

window.Portfolio.resolvePath = (source, path) => path.split(".").reduce((value, key) => value?.[key], source);
})();
