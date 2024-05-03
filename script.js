const textarea = document.querySelector("#textarea");

let data = "";

textarea.addEventListener("keyup", () => {
  data = textarea.value;
  JSON.stringify(localStorage.setItem("query", data));
});

window.addEventListener("load", () => {
  if (localStorage.getItem("query")) {
    textarea.value = localStorage.getItem("query");
  }
});
