const form = document.getElementById("formID");
const input = document.getElementById("input");
const mainDiv = document.getElementById("big");
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //cancels the event, meaning that the page wont reset every time i press the submit button
  addTodo();
});

function addTodo() {
  if (input.value.length == 0) return;
  const newTodo = document.createElement("li");
  list.append(newTodo);
  newTodo.textContent = input.value;
  input.value = "";
  newTodo.addEventListener("contextmenu", (e) => {
    e.preventDefault(); //stops normal right click functions from appearing
    newTodo.remove();
  });
  newTodo.addEventListener("click", (e) => {
    newTodo.classList.toggle("done");
  });
}
