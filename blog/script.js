document.addEventListener('DOMContentLoaded', ()=>{
  document.body.classList.add('page-loaded');
  const posts = [
    {id:1, title:'Welcome to My Blog', date:'2025-01-10', excerpt:'This is a sample post to show the blog layout.'},
    {id:2, title:'Building Stylish UI', date:'2025-02-14', excerpt:'Tips on creating cohesive color themes and layouts.'},
    {id:3, title:'JavaScript Patterns', date:'2025-03-22', excerpt:'A few practical patterns for everyday JS work.'}
  ];
  const list = document.getElementById('posts-list');
  posts.forEach(p => {
    const el = document.createElement('article');
    el.className = 'post';
    el.innerHTML = `<h3>${p.title}</h3><div class="small">${p.date}</div><p>${p.excerpt}</p>`;
    list.appendChild(el);
  });
});
