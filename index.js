// Local Storage'dan verileri al ve ekrana ekle
document.addEventListener("DOMContentLoaded", function () {
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(function (todo) {
    addTodoToList(todo);
  });
});

// Yeni bir yapılacak ekle
function addTodo() {
  var input = document.getElementById("todoInput");
  var todoText = input.value.trim();
  if (todoText === "") {
    alert("Yapılacak bir şey girin!");
    return;
  }

  addTodoToList(todoText);
  input.value = "";

  // Local Storage'a veriyi ekle
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Yapılacakları listeye ekle
function addTodoToList(todoText) {
  var todoList = document.getElementById("todoList");

  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(todoText));

  var button = document.createElement("button");
  button.className = "btn btn-ligth btn-sm float-right ";
  button.appendChild(document.createTextNode("X"));
  button.onclick = function () {
    removeTodoFromList(li, todoText);
  };

  li.appendChild(button);
  todoList.appendChild(li);
}

// Yapılacakları listeden sil
function removeTodoFromList(todoItem, todoText) {
  if (confirm("Bu yapılacak işi silmek istediğinizden emin misiniz?")) {
    todoItem.remove();

    // Local Storage'dan veriyi sil
    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(function (todo) {
      return todo !== todoText;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}
