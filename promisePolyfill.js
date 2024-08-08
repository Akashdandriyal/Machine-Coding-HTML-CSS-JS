function MyPromise(executor) {
  let onResolve;
  let onReject;
  let value;
  let error;
  let isCalled = false;
  let isFullfilled = false;
  let isRejected = false;

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFullfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
  }
  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === "function" && !isCalled) {
      onReject(error);
      isCalled = true;
    }
  }

  executor(resolve, reject);
}

let promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 3000);
});

let promise2 = new MyPromise((resolve, reject) => {
  resolve("Hello World");
});

promise1.then((data) => {
  console.log(data);
});

promise2.then((data) => {
  console.log(data);
});
