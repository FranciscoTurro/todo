const form = document.getElementById("formID");
const input = document.getElementById("test");

form.addEventListener("submit", () => {
  //   e.preventDefault(); i have no idea what this might be but i leave this commented just in case. if you use it put e above
  alert(input.value);
});
