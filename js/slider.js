// Slider configuration and data
const slides = [
  {
    title: "Nuestras",
    titleBold: "Raquetas",
    description:
      "Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.",
    image: "./img/ball-color-court-14053553x.png",
  },
  {
    title: "Mejores",
    titleBold: "Accesorios",
    description:
      "Descubre nuestra selección de accesorios premium para tu juego.",
    image: "./img/ball-color-court-14053553x.png",
  },
  {
    title: "Pelotas",
    titleBold: "Deportivas",
    description: "Las mejores pelotas para un juego profesional y duradero.",
    image: "./img/ball-color-court-14053553x.png",
  },
  {
    title: "Equipo",
    titleBold: "Completo",
    description: "Todo lo que necesitas para destacar en la cancha.",
    image: "./img/ball-color-court-14053553x.png",
  },
];

const cards = [
  { image: "./img/group-10@3x.png" },
  { image: "./img/group-10@3x.png" },
  { image: "./img/group-10@3x.png" },
  { image: "./img/group-10@3x.png" },
  { image: "./img/group-10@3x.png" },
];

document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slidesContainer = document.getElementById("slidesContainer");
  const dotsNavigation = document.getElementById("dotsNavigation");
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");
  const cardsContainer = document.getElementById("cardsContainer");

  // Initialize slides
  function initializeSlides() {
    // Create slides
    slides.forEach((slide, index) => {
      const slideElement = document.createElement("div");
      slideElement.className = "slide";
      slideElement.style.left = `${index * 100}%`;

      slideElement.innerHTML = `
                <img src="${slide.image}" alt="Tennis Court" class="slide-image">
                <div class="slide-content">
                    <div class="slide-title">
                        ${slide.title} <span class="bold">${slide.titleBold}</span>
                    </div>
                    <p class="slide-description">${slide.description}</p>
                </div>
            `;

      slidesContainer.appendChild(slideElement);
    });

    // Create navigation dots
    slides.forEach((_, index) => {
      const dot = document.createElement("img");
      dot.src = index === 0 ? "./img/oval@3x.png" : "./img/oval-2@3x.png";
      dot.alt = index === 0 ? "Active Dot" : "Dot";
      dot.className = "slider-dot";
      dot.addEventListener("click", () => goToSlide(index));
      dotsNavigation.appendChild(dot);
    });

    // Initialize cards
    cards.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.innerHTML = `
                <div class="card-number">${index + 1}</div>
                <img src="${card.image}" alt="Card ${
        index + 1
      }" class="card-image">
            `;
      cardsContainer.appendChild(cardElement);
    });
  }

  function updateSlides() {
    // Update slides position
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    const dots = dotsNavigation.querySelectorAll(".slider-dot");
    dots.forEach((dot, index) => {
      dot.src =
        index === currentSlide ? "./img/oval@3x.png" : "./img/oval-2@3x.png";
      dot.alt = index === currentSlide ? "Active Dot" : "Dot";
    });
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlides();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  }

  // Event listeners
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Initialize slider
  initializeSlides();
});
