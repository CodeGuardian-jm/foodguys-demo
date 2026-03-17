// =========================================
// BASIC INTERACTIVITY
// - Mobile nav toggle
// - Smooth scrolling for internal links
// - Dynamic year in footer
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".section-modal");
  const navLinks = document.querySelectorAll("[data-modal]");
  const closeButtons = document.querySelectorAll(".modal-close");

  // Open modal when nav link clicked
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-modal");

      // Close all modals
      modals.forEach(modal => modal.classList.remove("active"));

      // Open target modal
      const targetModal = document.getElementById(targetId);
      if (targetModal) targetModal.classList.add("active");
    });
  });

  // Close modal when close button clicked
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".section-modal").classList.remove("active");
    });
  });

  // Optional: close modal on clicking outside content
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  });
});