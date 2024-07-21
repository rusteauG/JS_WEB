// // let startTime = Date.now();
// // console.log(startTime);
// // // Simulate a task with a delay
// // setTimeout(() => {
// //   let endTime = Date.now();
// //   console.log(endTime);
// //   let elapsedTime = endTime - startTime; // Calculate the elapsed time in milliseconds
// //   console.log(`Elapsed time: ${elapsedTime} ms`);
// // }, 2000);

// //setTimeout(callback,delay)
// // clearTimeout(timeoutId)

// // function sayHello() {
// //   window.alert("Hello");
// // }

// // setTimeout(sayHello, 3000);
// // setTimeout(function () {
// //   window.alert("Bye");
// // }, 4000);

// const timeoutId = setTimeout(() => window.alert("Again"), 7000);
// clearTimeout(timeoutId); //cancel the setTimeout

// // function startTimer() {
// //   setTimeout(() => window.alert("Hello"), 3000);
// // }

// // Start the timer and store the timeout ID
// let timeId;

// startTimer = function () {
//   timeId = setTimeout(() => window.alert("Hello"), 3000);
// };

// const btnStopTimer = document.getElementById("stopTimer");
// btnStopTimer.addEventListener("click", () => clearTimeout(timeId));

// var a = 2;
// function b() {
//   var x = 10;
//   console.log(x);
// }
// /** ? ou can use properties to store metadata about the function, such as configuration options, counters, or other related information that doesn't belong to the function's local scope. */
// function process(data) {
//   console.log(`Processing data with version: ${process.version}`);
// }
// process.version = "1.0.0";
// // process("sOME dATA");
// function deleteShopCart() {
//   console.log(`all product deleted!`);
// }
// const numProduct = 10;
// console.log(Boolean(numProduct), numProduct);
// if (!numProduct) {
//   deleteShopCart();
// }

// console.log(numProduct);

// Scope Chain

// const myName = "neville"

// function first()
// {
//   const age = 31;
//   if (age > 30) {
//     const decade = 3;// Block scoped (within the if block)
//     var millenial = true;// Function scoped (within the first function)
//   }

//   function second() {
//     const job = "teacher";
//     console.log(`${myName} is a ${age} yrl Old ${job} with decade ${millenial}`);

//   }

//   second();

// }

// // first();
// console.log(calcAge(1976));

// function calcAge(birthYear) {
// //   const d = new Date();
// //   const age = d.getFullYear() - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = `You are ${age},born in ${birthYear}`
//     console.log(output);
// }
// printAge()
//   return age;
// }

// var firstName = 'Nevillek'

// define the Event Handler function
const handleClick = () => {
  alert(":Button Clikced");
};

const myButton = document.getElementById("myButton");
// Attach the event handler to the button click event
myButton.addEventListener("click", handleClick);

// Invoke the event handler directly
myButton.click();
