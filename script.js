window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  preloader.classList.add("hide");
  setTimeout(() => preloader.remove(), 600);
});

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
          ink.style.top  = (e.clientY + Math.random() * 60 - 30) + 'px';
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
        work.style.transform =
          `translateY(-6px) scale(1.03) rotateX(${dy * 3}deg) rotateY(${dx * 3}deg)`;
      });
      work.addEventListener('mouseleave', () => {
        work.style.transform = '';
      });
    });
  }

});
