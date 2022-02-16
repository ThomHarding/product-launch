const form = document.getElementById("name");
const links = document.getElementById("links");
const youFoolDiv = document.getElementById("youFoolDiv");
var trueName = document.getElementById("truername").innerText;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(trueName);
  youFoolDiv.classList.remove("hide");
  youFoolDiv.innerText = (trueName + " ... do you even realise what's happened to you?")
  form.classList.add("hide");
  links.classList.add("hide");
  });