function Calculator() {
  this.total = 0;
  this.add = function (a) {
    this.total += a;
    return this;
  };
  this.subtract = function (a) {
    this.total -= a;
    return this;
  };
  this.divide = function (a) {
    this.total /= a;
    return this;
  };
  this.multiply = function (a) {
    this.total *= a;
    return this;
  };
  this.reset = function () {
    this.total = 0;
  };
}

const obj = new Calculator();
let res = obj.add(100).subtract(20).divide(2).multiply(3);
console.log(res.total);
obj.reset();
res = obj.add(50).multiply(10);
console.log(res.total);
