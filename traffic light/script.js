const lights = document.querySelectorAll(".light");
let index = 0;
setInterval(() => {
  console.log(index);
  if (index == 0) {
    lights[1].classList.remove("yellow-light");
    lights[0].classList.add("red-light");
  } else if (index == 1) {
    lights[2].classList.remove("green-light");
    lights[1].classList.add("yellow-light");
  } else {
    lights[0].classList.remove("red-light");
    lights[2].classList.add("green-light");
  }
  index--;
  if (index < 0) index = 2;
}, 3000);
