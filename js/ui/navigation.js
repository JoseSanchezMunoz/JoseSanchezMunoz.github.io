(function () {
window.Portfolio = window.Portfolio || {};

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

window.Portfolio.initNavigation = () => {
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
})();
