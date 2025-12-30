document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Toggle Menu
  hamburger.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");
    // Change icon between Menu and Close
    hamburger.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
    e.stopPropagation();
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.innerHTML = "☰";
    }
  });
});