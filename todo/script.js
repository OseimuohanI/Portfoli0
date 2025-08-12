
// To-Do logic
document.addEventListener('DOMContentLoaded', ()=>{
  document.body.classList.add('page-loaded');
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  let todos = JSON.parse(localStorage.getItem('todos_v1') || '[]');
  function render() {
    todoList.innerHTML = '';
    todos.forEach((t, idx) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = `<span ${t.done ? 'style="text-decoration:line-through;opacity:0.7"' : ''}>${t.text}</span>
        <div>
          <button data-idx="${idx}" class="toggle">✓</button>
          <button data-idx="${idx}" class="del">✕</button>
        </div>`;
      todoList.appendChild(li);
    });
    localStorage.setItem('todos_v1', JSON.stringify(todos));
  }
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = todoInput.value.trim();
    if (!v) return;
    todos.unshift({text:v, done:false});
    todoInput.value = '';
    render();
  });
  todoList.addEventListener('click', (e) => {
    const idx = e.target.dataset.idx;
    if (e.target.classList.contains('toggle')) {
      todos[idx].done = !todos[idx].done; render();
    } else if (e.target.classList.contains('del')) {
      todos.splice(idx,1); render();
    }
  });
  render();
});
