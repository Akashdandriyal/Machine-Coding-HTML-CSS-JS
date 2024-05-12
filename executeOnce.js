function executeOnce() {
  let executed = false;
  return function (a, b) {
    if (!executed) {
      let sum = a + b;
      console.log(`Sum of ${a} and ${b} is: ${sum}`);
      executed = true;
    } else {
      console.log("Can only be called once!!");
    }
  };
}

const sumOnce = executeOnce();
sumOnce(10, 21);
sumOnce(10, 21);
