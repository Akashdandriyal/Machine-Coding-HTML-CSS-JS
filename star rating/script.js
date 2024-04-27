const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("over");
    }
  });
  star.addEventListener("mouseout", () => {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.remove("over");
    }
  });
  star.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      if (i <= index) stars[i].classList.add("checked");
      else stars[i].classList.remove("checked");
    }
  });
});
