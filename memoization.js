const productSum = (m, n) => {
  let sum = 0;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      sum += i * j;
    }
  }
  return sum;
};

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let cacheKey = JSON.stringify(args);
    if (!cache[cacheKey]) {
      cache[cacheKey] = fn(...args);
    }
    return cache[cacheKey];
  };
};

const memoizedProductSum = memoize(productSum);

console.time("Product Sum: ");
console.log(memoizedProductSum(4567, 8654));
console.timeEnd("Product Sum: ");
console.time("Product Sum: ");
console.log(memoizedProductSum(4567, 8654));
console.timeEnd("Product Sum: ");
console.time("Product Sum: ");
console.log(memoizedProductSum(4566, 8654));
console.timeEnd("Product Sum: ");
console.time("Product Sum: ");
console.log(memoizedProductSum(4566, 8654));
console.timeEnd("Product Sum: ");
console.time("Product Sum: ");
console.log(memoizedProductSum(4566, 8654));
console.timeEnd("Product Sum: ");
