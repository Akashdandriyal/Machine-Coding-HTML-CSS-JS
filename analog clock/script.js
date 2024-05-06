const clock = document.querySelector(".clock");
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const timeContainer = document.querySelector(".time");
const dayContainer = document.querySelector(".day");
const dayOptions = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};
let date = new Date();
let seconds = date.getSeconds(),
  minutes = date.getMinutes(),
  hours = date.getHours();
timeContainer.innerHTML = date.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
dayContainer.innerHTML = date.toLocaleDateString("en-US", dayOptions);
for (let i = 0; i < 12; i++) {
  let tick = document.createElement("div");
  tick.classList.add("tick");
  let point = document.createElement("div");
  point.classList.add("point");
  tick.appendChild(point);
  tick.style.transform = `rotate(${i * 30}deg)`;
  clock.appendChild(tick);
}
setInterval(() => {
  date = new Date();
  seconds += 1;
  if (seconds == 60) {
    minutes += 1;
    seconds = 0;
    timeContainer.innerHTML = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }
  if (minutes == 60) {
    hours += 1;
    minutes = 0;
    timeContainer.innerHTML = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }
  if (hours == 12) {
    hours = 0;
  }
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  minuteHand.style.transform = `rotate(${seconds * 0.1 + minutes * 6}deg)`;
  hourHand.style.transform = `rotate(${minutes * 0.5 + hours * 30}deg)`;
}, 1000);
