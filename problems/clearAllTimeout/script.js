const originalTimeoutFn = window.setTimeout;
window.timeoutIds = [];
window.setTimeout = function (fn, delay) {
  let timeoutId = originalTimeoutFn(fn, delay);
  timeoutIds.push(timeoutId);
  return timeoutId;
};

window.clearAllTimeout = function () {
  while (timeoutIds.length > 0) {
    clearTimeout(timeoutIds.shift());
  }
};

setTimeout(() => {
  console.log("hey");
}, 2000);
setTimeout(() => {
  console.log("hey1");
}, 3000);
setTimeout(() => {
  console.log("hey2");
}, 4000);
setTimeout(() => {
  console.log("hey3");
}, 5000);

clearAllTimeout();
