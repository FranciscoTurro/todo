const form = document.getElementById("formID");
const input = document.getElementById("input");
const mainDiv = document.getElementById("big");
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //cancels the event, meaning that the page wont reset every time i press the submit button
  createTodo();
});

function createTodo() {
  const newTodo = document.createElement("li");
  list.append(newTodo);
  newTodo.textContent = input.value;
  input.value = "";
}

function createTODO() {
  //this one uses an array, just in case i need it
  const newTodo = document.createElement("li");
  list.append(newTodo);
  const todos = [];
  todos.push(input.value);
  todos.forEach((todo) => {
    newTodo.textContent = todo;
    console.log(todo);
  });
  input.value = "";
}
