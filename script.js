// ===== Mobile menu =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Status indicator =====
const statusText = document.getElementById("statusText");
const statusDot = document.getElementById("statusDot");

// Open | Busy | Closed
const status = "Open";

const setStatus = (label, color, ring) => {
  if (!statusText || !statusDot) return;
  statusText.textContent = label;
  statusDot.style.background = color;
  statusDot.style.boxShadow = `0 0 0 6px ${ring}`;
};

if (status === "Open") {
  setStatus("Open to internships • Summer 2025", "#22c55e", "rgba(34,197,94,.12)");
} else if (status === "Busy") {
  setStatus("Currently busy • Limited availability", "#f59e0b", "rgba(245,158,11,.14)");
} else {
  setStatus("Not currently available", "#ef4444", "rgba(239,68,68,.14)");
}

// ===== Terminal typing (C) =====
const typeLine1 = document.getElementById("typeLine1");
const typeLine2 = document.getElementById("typeLine2");
const typeLine3 = document.getElementById("typeLine3");

const lines = [
  { el: typeLine1, text: "Angela Shaji — Computer Engineering portfolio" },
  { el: typeLine2, text: "Hardware • Embedded Systems • Software that ships" },
  { el: typeLine3, text: "Building projects + documenting results (GitHub: shajmahal)" }
];

function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

async function typeInto(el, text, speed = 18) {
  if (!el) return;
  el.textContent = "";
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i];
    await sleep(speed);
  }
  el.innerHTML += '<span class="cursor">▌</span>';
  await sleep(450);
  el.innerHTML = el.textContent; // remove cursor from finished line
}

(async function runTyping() {
  for (const l of lines) {
    await typeInto(l.el, l.text, 14);
    await sleep(180);
  }
})();

// ===== Project filter (B) =====
const filterBtns = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".pcard");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter; // all | hardware | embedded | software | systems

    projectCards.forEach(card => {
      const tags = (card.dataset.tags || "").split(" ");
      const show = (filter === "all") || tags.includes(filter);

      card.style.display = show ? "" : "none";
    });
  });
});

// ===== Reveal-on-scroll (smooth polish) =====
const revealTargets = document.querySelectorAll(
  ".section, .pcard, .skill-group, .impact__card, .coursework__card, .timeline__content, .contact__card, .sidecard, .terminal"
);

revealTargets.forEach(el => el.classList.add("reveal"));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.style.transition = "opacity .55s ease, transform .55s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
    io.unobserve(el);
  });
}, { threshold: 0.08 });

revealTargets.forEach(el => io.observe(el));
