// Language handling
document.addEventListener("DOMContentLoaded", () => {
  const languageButtons = document.querySelectorAll(".lang-btn");
  let currentLanguage = "es";

  // Handle language selection
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;

      // Update active state for all language buttons
      languageButtons.forEach((btn) => {
        if (btn.dataset.lang === lang) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      currentLanguage = lang;

      // Close mobile menu if language changed from mobile menu
      const mobileMenu = document.getElementById("mobileMenu");
      if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
});
