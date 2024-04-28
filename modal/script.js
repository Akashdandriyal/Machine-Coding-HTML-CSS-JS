const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

const control = document.querySelector(".control");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", () => {
  control.style.visibility = "hidden";
  modal.style.transform = "scale(1)";
});

closeBtn.addEventListener("click", () => {
  control.style.visibility = "visible";
  modal.style.transform = "scale(0)";
});
