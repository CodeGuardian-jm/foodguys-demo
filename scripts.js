document.addEventListener("DOMContentLoaded", function () {
  // === MOBILE NAV TOGGLE LOGIC ===
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // === MODAL LOGIC ===
  const modals = document.querySelectorAll(".section-modal");
  // Select all links that should open a modal (from both desktop and mobile nav)
  const navLinks = document.querySelectorAll("[data-modal]");
  const closeButtons = document.querySelectorAll(".modal-close");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-modal");

      // Close mobile menu if it's open
      if (mobileNav) mobileNav.classList.remove("open");

      // Close all modals first
      modals.forEach(modal => modal.classList.remove("active"));

      // Open target modal
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scroll
      }
    });
  });

  // Close modal logic
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".section-modal").classList.remove("active");
      document.body.style.overflow = "auto"; 
    });
  });

  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Dynamic Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
