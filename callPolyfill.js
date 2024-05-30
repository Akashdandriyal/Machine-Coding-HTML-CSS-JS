function showDetails(state, country) {
  console.log(
    `${this.name} is a ${this.role}, who lives in ${state} ${country}.`
  );
}

let person = {
  name: "Akash",
  role: "Frontend developer",
};

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "Invalid Call!");
  }
  context.fn = this;
  context.fn(...args);
};

showDetails.call(person, "Uttarakhand", "India");
showDetails.myCall(person, "Uttarakhand", "India");
