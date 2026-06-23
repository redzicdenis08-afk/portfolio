// year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// scroll-spy: highlight the nav item for the section in view
const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if (sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = "#" + e.target.id;
          navLinks.forEach((a) =>
            a.classList.toggle("active", a.getAttribute("href") === id)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => spy.observe(s));
}

// subtle reveal on scroll (no-JS safe: defaults to visible)
const revealTargets = document.querySelectorAll(".prose, .entry, .toolset, .contact__links");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = (i % 3) * 0.05 + "s";
  io.observe(el);
});
