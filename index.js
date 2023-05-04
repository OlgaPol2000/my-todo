const todoInput = document.querySelector(".todo__input")
const addBtn = document.querySelector(".todo__btn")
const todoList = document.querySelector(".todo__list")

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (todoInput.value !== "") {}
    const todo = document.createElement("li");
    todo.innerHTML =`
    <input type='checkbox' />
    <span>${todoInput.value}</span>
    <button>Видалити</button>
    `;

    todoList.appendChild(todo)
    todoInput.value = ""
});

todoList.addEventLestener('click', (e)=>{
    if(e.targer.tagName === 'BUTTON'){
        e.target.parentNode.remove();
        }
    })