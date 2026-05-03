const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.add("js-ready");

/* ── Header scroll state ── */
const header = document.querySelector(".site-header");
const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

/* ── Scroll-triggered reveal animations ── */
const revealItems = document.querySelectorAll(
  "[data-anim], section:not(.hero):not(.home-video-hero):not(.page-hero):not(.jw-video-hero), article, .shop-card, .mini-card, .page-hero-copy, .feature-panel, .jw-shop-card, .ritual-card, .ritual-practice"
);

const revealVisibleItems = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const enters = rect.top < window.innerHeight * 0.88 && rect.bottom > window.innerHeight * 0.08;
    if (enters) item.classList.add("is-visible");
  });
};

if (!prefersReduced && "IntersectionObserver" in window) {
  revealItems.forEach((item) => {
    item.classList.add("reveal");
    const anim = item.dataset.anim;
    if (anim) item.classList.add(`reveal-${anim}`);
    const delay = item.dataset.delay;
    if (delay) item.style.transitionDelay = `${delay}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
  requestAnimationFrame(revealVisibleItems);
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* ── Parallax scrolling ── */
const parallaxItems = document.querySelectorAll("[data-parallax]");
const parallax = () => {
  if (prefersReduced) return;

  const viewport = window.innerHeight;
  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallax || 0.18);
    const rect = item.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2 - viewport / 2;
    const shift = Math.max(-80, Math.min(80, -midpoint * speed));
    item.style.setProperty("--parallax-y", `${shift}px`);
  });
};

/* ── Smooth scroll tick ── */
let ticking = false;
const scrollTick = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      setHeaderState();
      revealVisibleItems();
      parallax();
      ticking = false;
    });
    ticking = true;
  }
};

window.addEventListener("scroll", scrollTick, { passive: true });
window.addEventListener("resize", parallax);
scrollTick();

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  });
});
