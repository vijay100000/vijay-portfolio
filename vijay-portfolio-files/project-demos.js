const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginMessage.textContent = "Login form submitted successfully.";
    loginForm.reset();
  });
}

if (todoForm) {
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return;
    }

    const listItem = document.createElement("li");
    const task = document.createElement("span");
    const removeButton = document.createElement("button");

    task.textContent = taskText;
    removeButton.type = "button";
    removeButton.textContent = "Done";
    removeButton.setAttribute("aria-label", "Remove task");

    listItem.append(task, removeButton);
    todoList.appendChild(listItem);
    todoInput.value = "";
  });

  todoList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    }
  });
}
