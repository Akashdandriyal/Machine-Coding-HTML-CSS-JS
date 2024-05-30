function showDetails(state, country) {
  console.log(
    `${this.name} is a ${this.role}, who lives in ${state} ${country}.`
  );
}

let person = {
  name: "Akash",
  role: "Frontend developer",
};

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error(this, "Invalid Call!");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  context.fn = this;
  context.fn(...args);
};

showDetails.apply(person, ["Uttarakhand", "India"]);
showDetails.myApply(person, ["Uttarakhand", "India"]);
