const board = document.querySelector(".board");
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let cube = document.createElement("div");
    cube.classList.add("cube");
    if ((i + j) % 2 == 0) {
      cube.classList.add("white");
    } else {
      cube.classList.add("black");
    }
    board.appendChild(cube);
  }
}

const cubes = document.querySelectorAll(".cube");
for (let i = 0; i < cubes.length; i++) {
  cubes[i].addEventListener("mouseover", () => {
    let x = Math.floor(i / 8),
      y = i % 8;
    cubes[i].classList.add("over");
    while (x > 0 && y > 0) {
      x--;
      y--;
      let position = x * 8 + y;
      cubes[position].classList.add("path");
    }
    (x = Math.floor(i / 8)), (y = i % 8);
    while (x < 7 && y < 7) {
      x++;
      y++;
      let position = x * 8 + y;
      cubes[position].classList.add("path");
    }
    (x = Math.floor(i / 8)), (y = i % 8);
    while (x > 0 && y < 7) {
      x--;
      y++;
      let position = x * 8 + y;
      cubes[position].classList.add("path");
    }
    (x = Math.floor(i / 8)), (y = i % 8);
    while (x < 7 && y > 0) {
      x++;
      y--;
      let position = x * 8 + y;
      cubes[position].classList.add("path");
    }
  });
  cubes[i].addEventListener("mouseout", () => {
    let x = Math.floor(i / 8),
      y = i % 8;
    cubes[i].classList.remove("over");
    while (x > 0 && y > 0) {
      x--;
      y--;
      let position = x * 8 + y;
      cubes[position].classList.remove("path");
    }
    (x = Math.floor(i / 8)), (y = i % 8);
    while (x < 7 && y < 7) {
      x++;
      y++;
      let position = x * 8 + y;
      cubes[position].classList.remove("path");
    }
    (x = Math.floor(i / 8)), (y = i % 8);
    while (x > 0 && y < 7) {
      x--;
      y++;
      let position = x * 8 + y;
      cubes[position].classList.remove("path");
    }
    (x = Math.floor(i / 8)), (y = i % 8);
    while (x < 7 && y > 0) {
      x++;
      y--;
      let position = x * 8 + y;
      cubes[position].classList.remove("path");
    }
  });
  cubes[i].addEventListener("click", () => {
    if (cubes[i].classList.contains("selected"))
      cubes[i].classList.remove("selected");
    else cubes[i].classList.add("selected");
  });
}
