function showDetails(state, country, num) {
  console.log(
    `${num}. ${this.name} is a ${this.role}, who lives in ${state} ${country}.`
  );
}

let person = {
  name: "Akash",
  role: "Frontend developer",
};

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "Invalid Call!");
  }
  context.fn = this;
  return function (...nextArgs) {
    context.fn(...args, nextArgs);
  };
};

let bindedFn = showDetails.bind(person, "Uttarakhand", "India");
bindedFn(1);
bindedFn(2);

let bindedFn2 = showDetails.myBind(person, "Uttarakhand", "India");
bindedFn2(1);
bindedFn2(2);
