const switcher = document.querySelector(".switch");
const switchBox = document.querySelector(".switch-box");
const body = document.querySelector("body");

switcher.addEventListener("click", () => {
  if (body.id === "theme--light") {
    body.setAttribute("id", "theme--dark");
    switchBox.style.justifyContent = "flex-end";
  } else {
    body.setAttribute("id", "theme--light");
    switchBox.style.justifyContent = "flex-start";
  }
});
