
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');
  const cards = document.querySelectorAll('.card');
  cards.forEach((c,i) => {
    c.style.opacity = 0;
    c.style.transform = 'translateY(10px)';
    setTimeout(()=> {
      c.style.transition = 'opacity 400ms ease, transform 400ms ease';
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
    }, 120 * i);
  });

  // Fade out when clicking a project link and then navigate
  document.querySelectorAll('a.project-link').forEach(a => {
    a.addEventListener('click', function(e){
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      const href = this.getAttribute('href');
      document.body.classList.remove('page-loaded');
      setTimeout(()=> { window.location.href = href; }, 350);
    });
  });
});
