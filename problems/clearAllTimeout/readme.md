# clearAllTimeout

Implement the clearAllTimeout function, ClearAllTimeout clears all the setTimeout which are active.

setTimeout is an asynchronous function that executes a function or a piece of code after a specified amount of time.

setTimeout method returns a unique Id when it is invoked, which can be used to cancel the timer anytime using the clearTimeout method which is inbuilt.

## Example

setTimeout(() => {console.log("hello")}, 2000);
setTimeout(() => {console.log("hello1")}, 3000);
setTimeout(() => {console.log("hello2")}, 4000);
setTimeout(() => {console.log("hello3")}, 5000);

clearAllTimeout();
