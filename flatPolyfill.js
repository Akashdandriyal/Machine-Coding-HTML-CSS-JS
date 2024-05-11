Array.prototype.myFlat = function (depth = 1) {
  var flattened = [];
  function flatten(arr, currentDepth) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && currentDepth < depth) {
        flatten(arr[i], currentDepth + 1);
      } else if (arr[i] !== undefined) {
        flattened.push(arr[i]);
      }
    }
  }
  flatten(this, 0);
  return flattened;
};

let arr = [1, 2, 3, 4, [5, 6, 7, 8], 9, 10, [11, 12, [13, 14, []]], 15];
console.log(arr.flat());
console.log(arr.myFlat());
