// PRELOADER
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  preloader.classList.add("hide");
  setTimeout(() => preloader.remove(), 600);
});

// HOVER DESTEĞİ
const hasHover = window.matchMedia('(hover: hover)').matches;

document.addEventListener('DOMContentLoaded', () => {

  /* LOGO INK – SADECE DESKTOP */
  if (hasHover) {
    const logo = document.querySelector('.logo-container');
    if (logo) {
      logo.style.cursor = 'pointer';
      logo.addEventListener('click', e => {
        for (let i = 0; i < 3; i++) {
          const ink = document.createElement('div');
          ink.className = 'ink';
          ink.style.left = (e.clientX + Math.random() * 60 - 30) + 'px';
          ink.style.top = (e.clientY + Math.random() * 60 - 30) + 'px';
          document.body.appendChild(ink);
          setTimeout(() => ink.remove(), 1600);
        }
      });
    }
  }

  /* WORKS HOVER – SADECE DESKTOP */
  if (hasHover) {
    document.querySelectorAll('.works .work').forEach(work => {
      work.addEventListener('mousemove', e => {
        const rect = work.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        work.style.transform = `translateY(-6px) scale(1.03) rotateX(${dy * 3}deg) rotateY(${dx * 3}deg)`;
      });
      work.addEventListener('mouseleave', () => {
        work.style.transform = '';
      });
    });
  }

});

// WATER COLOR CLICK EFFECT
document.addEventListener('click', e => {
  const colors = [
    'rgba(120,180,255,',
    'rgba(180,120,255,',
    'rgba(255,180,120,',
    'rgba(120,200,160,',
    'rgba(200,140,160,'
  ];
  const c1 = colors[Math.floor(Math.random() * colors.length)];
  const c2 = colors[Math.floor(Math.random() * colors.length)];
  const c3 = colors[Math.floor(Math.random() * colors.length)];

  const water = document.createElement('div');
  water.className = 'watercolor';
  water.style.left = (e.clientX - 80) + 'px';
  water.style.top = (e.clientY - 80) + 'px';
  water.style.background = `radial-gradient(circle at 30% 30%, ${c1}0.55, ${c2}0.35, ${c3}0.25, transparent 70%)`;
  document.body.appendChild(water);
  setTimeout(() => water.remove(), 2600);
});

// WORKS TITLE SCROLL EFFECT
window.addEventListener('scroll', () => {
  const title = document.querySelector('.works-title');
  const works = document.querySelector('.works');
  if (!title || !works) return;

  const scrollY = window.scrollY;
  const start = works.offsetTop - window.innerHeight * 0.5;
  const end = works.offsetTop + works.offsetHeight * 0.3;

  if (scrollY < start) {
    title.style.transform = 'translateY(0px)';
    title.style.opacity = 1;
    return;
  }

  const progress = Math.min(scrollY - start, end - start);
  title.style.transform = `translateY(${progress * 0.25}px)`;
  title.style.opacity = Math.max(1 - progress / 300, 0);
});

// LOAD FADE
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-load").forEach(el => {
    el.classList.add("show");
  });
});

// SCROLL FADE
const isMobile = window.innerWidth <= 768;

document.querySelectorAll(".fade-scroll").forEach(el => {
  observer.observe(el);
});
document.querySelectorAll('.hero-lightbox').forEach(img => {
  img.addEventListener('click', () => {
    openLightbox(img);
  });
});
document.querySelector('.hero-detail-btn')?.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.hero-lightbox')?.click();
});

if (!isMobile) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-scroll").forEach(el => {
    observer.observe(el);
  });
} else {
  document.querySelectorAll(".fade-scroll").forEach(el => {
    el.classList.add("visible");
  });
}

