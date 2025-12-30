document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // 1. Mobile Menu Logic
  hamburger.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");
    hamburger.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
    e.stopPropagation();
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.innerHTML = "☰";
    }
  });

  // 2. Functional Scroll Animations
  const revealElements = document.querySelectorAll(".section, .card, form");
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("active");
      }
    });
  };

  // Add the "reveal" class initially to elements
  revealElements.forEach(el => el.classList.add("reveal"));
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on load
});