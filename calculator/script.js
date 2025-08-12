// Calculator logic
document.addEventListener('DOMContentLoaded', ()=>{
  document.body.classList.add('page-loaded');
  const display = document.getElementById('calc-display');
  const buttons = Array.from(document.querySelectorAll('.calc-btn'));

  function update(){ display.value = current; }
  let current = '';
  document.addEventListener('click', (e)=>{
    if(!e.target.classList) return;
    if(!e.target.classList.contains('calc-btn')) return;
    const val = e.target.getAttribute('data-val');
    if (!val) return;
    if (val === 'C') { current = ''; update(); return; }
    if (val === '=') {
      try {
        if (/^[0-9+\-*/(). \t]+$/.test(current)) {
          current = String(eval(current));
        } else { current = 'ERR'; }
      } catch { current = 'ERR'; }
      update(); return;
    }
    current += val;
    update();
  });
});
