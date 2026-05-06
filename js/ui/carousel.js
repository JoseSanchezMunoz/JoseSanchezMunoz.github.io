(function () {
window.Portfolio = window.Portfolio || {};

window.Portfolio.initProjectCarousels = () => {
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
})();
