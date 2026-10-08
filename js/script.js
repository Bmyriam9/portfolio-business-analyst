const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
if (glow && window.matchMedia("(pointer:fine)").matches) {
  glow.style.cssText = `
    position:fixed;width:220px;height:220px;border-radius:50%;
    pointer-events:none;z-index:-1;opacity:.06;
    background:#38bdf8;filter:blur(60px);transform:translate(-50%,-50%);
  `;
  window.addEventListener("pointermove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}
