// Navigation handling
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const navItems = document.querySelectorAll(".nav-item, .mobile-nav-item");
  let activeItem = "Inicio";

  // Toggle mobile menu
  menuButton.addEventListener("click", () => {
    const isMenuOpen = mobileMenu.classList.contains("active");
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  });

  // Handle navigation item clicks
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const itemText = item.dataset.item || item.textContent;

      // Update active state
      navItems.forEach((navItem) => {
        if (
          navItem.dataset.item === itemText ||
          navItem.textContent === itemText
        ) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      });

      activeItem = itemText;

      // Close mobile menu if open
      if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
});
