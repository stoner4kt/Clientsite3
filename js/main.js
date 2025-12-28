// ================= NAVBAR HAMBURGER =================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ================= OPTIONAL: SMOOTH SCROLL FOR INTERNAL LINKS =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
