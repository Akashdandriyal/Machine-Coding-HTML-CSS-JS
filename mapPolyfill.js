Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const multiplyByTen = function (num, index, arr) {
  return num * 10;
};

const arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.map(multiplyByTen);
console.log("Map Result: ", newArr);
let newArr2 = arr.myMap(multiplyByTen);
console.log("MyMap Result: ", newArr2);
