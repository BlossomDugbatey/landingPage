const search = document.querySelector(".searching");
const btn = document.querySelector(".searchButton")
const input = document.querySelector("input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});