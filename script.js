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

  document.addEventListener('click', (e) => {

  if (e.target.closest('a, button, nav')) return;

  const colors = [
    'rgba(220, 70, 90, 0.35)',   // kırmızımsı
    'rgba(60, 120, 200, 0.35)', // mavi
    'rgba(240, 180, 70, 0.35)', // sarı
    'rgba(80, 170, 130, 0.35)', // yeşil
    'rgba(160, 90, 200, 0.35)'  // mor
  ];

  const drops = Math.floor(Math.random() * 3) + 2; // 2–4 damla

  for (let i = 0; i < drops; i++) {
    const drop = document.createElement('div');
    drop.className = 'watercolor';

    const size = Math.random() * 100 + 80;
    drop.style.width = size + 'px';
    drop.style.height = size + 'px';

    drop.style.left = (e.clientX + Math.random() * 80 - 40) + 'px';
    drop.style.top  = (e.clientY + Math.random() * 80 - 40) + 'px';

    drop.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(drop);
    setTimeout(() => drop.remove(), 2400);
  }
});

// LOGO INK EFFECT
const logo = document.querySelector('.logo-container');

if (logo) {
  logo.style.cursor = 'pointer';

  logo.addEventListener('click', (e) => {
    for (let i = 0; i < 3; i++) {
      const ink = document.createElement('div');
      ink.className = 'ink';

      ink.style.left = (e.clientX + Math.random() * 60 - 30) + 'px';
      ink.style.top  = (e.clientY + Math.random() * 60 - 30) + 'px';

      document.body.appendChild(ink);
      setTimeout(() => ink.remove(), 1600);
    }
  });
}
>>>>>>> 932d68f (logo düzeltildi)
