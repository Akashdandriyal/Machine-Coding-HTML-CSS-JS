Array.prototype.myFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const isEven = function (num, index, arr) {
  return num % 2 == 0;
};

const arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.filter(isEven);
console.log("Filter Result: ", newArr);
let newArr2 = arr.myFilter(isEven);
console.log("MyFilter Result: ", newArr2);
