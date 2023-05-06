const todoInput = document.querySelector(".todo__input");
const addBtn = document.querySelector(".todo__btn");
const todoList = document.querySelector(".todo__list");

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
savedTodos.forEach((todo) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <input type='checkbox' />
    <span>${todo.value}</span>
    <button>Видалити</button>
    `;
  todoList.appendChild(li);
});
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (todoInput.value !== "") {
    const todo = {
      text: todoInput.value,
      completed: false,
    };
    const li = document.createElement("li");
    li.innerHTML = `
        <input type='checkbox' />
        <span>${todoInput.value}</span>
        <button>Видалити</button>
        `;

    todoList.appendChild(li);
    savedTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    todoInput.value = "";
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentNode.remove();
  }
});
