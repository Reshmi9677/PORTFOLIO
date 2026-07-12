// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Typing effect for hero role line
const roles = [
  "CSE undergrad.",
  "building stuff that (mostly) works.",
  "into code, content & marketing.",
  "always debugging something."
];



const typedEl = document.getElementById('typed');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typedEl) {
  if (prefersReducedMotion) {
    typedEl.textContent = roles[0];
  } else {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 60);
    }
    tick();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const text = "Hi, I'm Reshmi kumari";
  const heroTitle = document.getElementById("heroTitle");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      heroTitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});


const text = "Reshmi Kumari";
const nameElement = document.getElementById("name");

let index = 0;

function typeWriter() {
  if (index < text.length) {
    nameElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150);
  }
}

typeWriter();
