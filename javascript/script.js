const alert = document.querySelector("#alert");
const text = document.querySelector(".text");
const styleText = document.querySelector(".container p");
let check = false;
alert.addEventListener("click", function () {
  if (check) {
    text.innerHTML = "Welcome SWP project...";
    check = false;
  } else {
    text.innerHTML = "Happy....";
    check = true;
  }
});
