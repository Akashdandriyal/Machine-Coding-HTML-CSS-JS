const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

function getData() {
  //make api call
  console.log("Fetching data");
}

document
  .querySelector("#search")
  .addEventListener("change", debounce(getData, 300));
