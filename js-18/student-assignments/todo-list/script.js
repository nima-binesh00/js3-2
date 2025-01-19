function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    let t = document.createElement("span");
    t.textContent = todo.task;
    if (todo.completed) {
      t.style.textDecoration = "line-through";
    }

    let b = document.createElement("span");
    b.className = "badge bg-primary rounded-pill";

    let com = document.createElement("i");
    com.className = "fa fa-check";
    com.onclick = function () {
      todo.completed = !todo.completed;
      populateTodoList(todos);
    };

    let d = document.createElement("i");
    d.className = "fa fa-trash";
    d.onclick = function () {
      todos.splice(todos.indexOf(todo), 1);
      populateTodoList(todos);
    };

    b.appendChild(com);
    b.appendChild(d);
    li.appendChild(t);
    li.appendChild(b);
    list.appendChild(li);
  });
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inp = document.getElementById("todoInput");
  let ne = inp.value.trim();

  if (ne) {
    todos.push({ task: ne, completed: false });
    populateTodoList(todos);
    inp.value = "";
  }
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: true }, // Marked as completed for demonstration
];

populateTodoList(todos);
