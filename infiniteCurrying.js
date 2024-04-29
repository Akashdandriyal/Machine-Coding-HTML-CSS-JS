const sum = (a) => {
  return (b) => {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(10)(20)(30)(40)());
