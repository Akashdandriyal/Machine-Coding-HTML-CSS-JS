const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const getData = () => {
  console.log("Fetching data");
};

window.addEventListener("resize", throttle(getData, 3000));
