const isMobile = window.innerWidth <= 768;

window.addEventListener('load', () => {
  document.body.classList.add('loaded');

  if (window.innerWidth <= 768) {
    const logo = document.querySelector('.logo-container');
    if (logo) {
      setTimeout(() => {
        logo.style.opacity = '0';
        logo.style.pointerEvents = 'none';
        logo.style.height = '0';
        logo.style.overflow = 'hidden';
      }, 800);
    }
  }
});


document.addEventListener('DOMContentLoaded', () => {

  // HERO MODAL SLIDER
  const showDetailBtns = document.querySelectorAll('.show-detail');
  const heroModal = document.querySelector('.hero-modal');

  if (heroModal) {
    const closeModal = heroModal.querySelector('.close-modal');
    const prev = heroModal.querySelector('.prev');
    const next = heroModal.querySelector('.next');
    const slides = heroModal.querySelectorAll('.slide');
    let slideIndex = 0;

    const showSlide = n => {
      slides.forEach(s => s.style.display = 'none');
      slides[n].style.display = 'block';
    };

    showDetailBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        heroModal.style.display = 'flex';
        showSlide(slideIndex);
      });
    });

    closeModal.addEventListener('click', () => heroModal.style.display = 'none');
    prev.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    });
    next.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    });

    heroModal.addEventListener('click', e => {
      if (e.target === heroModal) heroModal.style.display = 'none';
    });

    document.addEventListener('keydown', e => {
      if (e.key === "Escape") heroModal.style.display = "none";
    });
  }

  // SMOOTH SCROLL
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // WORKS TITLE FADE
  const worksTitle = document.querySelector('.works-title');
  const worksSection = document.querySelector('.works');

  if (worksTitle && worksSection) {
    window.addEventListener('scroll', () => {
      worksTitle.classList.toggle('is-fading', window.scrollY - worksSection.offsetTop > 300);
    });
  }

  // WATERCOLOUR DROPS ON CLICK
  document.addEventListener('click', e => {
    if (e.target.closest('a, button, nav')) return;

    const colors = [
      'rgba(220,70,90,0.35)',
      'rgba(60,120,200,0.35)',
      'rgba(240,180,70,0.35)',
      'rgba(80,170,130,0.35)',
      'rgba(160,90,200,0.35)'
    ];

    const drops = Math.floor(Math.random() * 3) + 2;

    for (let i = 0; i < drops; i++) {
      const drop = document.createElement('div');
      drop.className = 'watercolor';
      const size = Math.random() * 100 + 80;
      drop.style.width = drop.style.height = size + 'px';
      drop.style.left = (e.clientX + Math.random() * 80 - 40) + 'px';
      drop.style.top  = (e.clientY + Math.random() * 80 - 40) + 'px';
      drop.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 2400);
    }
  });

  // WORKS HOVER EFFECT
  document.querySelectorAll('.works .work').forEach(work => {
    work.addEventListener('mousemove', e => {
      const rect = work.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      work.style.transform = `translateY(-6px) scale(1.03) rotateX(${dy * 3}deg) rotateY(${dx * 3}deg)`;
    });
    work.addEventListener('mouseleave', () => work.style.transform = '');
  });

// LOGO INK EFFECT (SADECE DESKTOP)
if (!isMobile) {
  const logo = document.querySelector('.logo-container');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', e => {
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
}


  // ABOUT CURSOR TRACE
  const about = document.querySelector('.about');
  const trace = document.querySelector('.cursor-trace');

  if (about && trace) {
     let tx = 0, ty = 0, cx = 0, cy = 0;
    about.addEventListener('mouseenter', () => trace.style.opacity = 1);
    about.addEventListener('mouseleave', () => trace.style.opacity = 0);
    about.addEventListener('mousemove', e => {
      const r = about.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    });
     (function animate() {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      trace.style.left = cx + 'px';
      trace.style.top = cy + 'px';
      requestAnimationFrame(animate);
    })();
  }

});
