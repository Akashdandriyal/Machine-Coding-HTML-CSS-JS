const throttle = (fn, task, count, delay) => {
  let flag = true;
  let queue = [];
  return function () {
    let context = this;
    queue = [...queue, ...task];
    if (flag) {
      fn.apply(context, queue.splice(0, count));
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const showData = (...data) => {
  console.log(data);
};
const btn = document.querySelector("#submit");
btn.addEventListener(
  "click",
  throttle(showData, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 2000)
);
