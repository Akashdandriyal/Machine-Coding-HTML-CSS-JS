Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

const sum = function (a, b, i, arr) {
  return a + b;
};

const arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.reduce(sum, 0);
console.log("Reduce Result: ", newArr);
let newArr2 = arr.myReduce(sum, 0);
console.log("Reduce Result: ", newArr2);
