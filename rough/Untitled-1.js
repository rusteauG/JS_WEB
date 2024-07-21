// getName();
// console.log(x);

// var x = 7;

// function getName() {
//   console.log("Namaste JS");
// }

// console.log(getName);

// function exampleVar() {
//   console.log(a); // undefined (due to hoisting)
//   var a = 10;
//   console.log(a); // 10
//   var a = "20"; // Re-declaration is allowed
//   console.log(a); // 20
// }

// exampleVar();

// //Function

// var x = 1;
// a();
// b();

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }
// console.log(x);

// var a = "neville";
// first();
// // function first() {
// //   const age = 30;

// //   if (age >= 30) {
// //     const decade = 3;
// //     var millenail = true;
// //   }

// //   function second() {
// //     const job = "teacher";
// //     console.log(`${myName} is  a ${age}-old ${job}`);
// //   }
// //   second();
// // }

// // first();

// function first() {
//   const b = "hello";
//   second();

//   function second() {
//     var c = "Hi!";
//     third();

//     function third() {
//       const d = "hey!";
//       console.log(d + b + c + a);
//     }
//   }
// }

// //Scoping

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// }

// const firstName = "neville";
// calcAge(1991);

function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}
const birthYear = 1993;
calcAge(birthYear);
console.log(birthYear);

//Hoisting
console.log(add(1, 2));
// console.log(addExpr(2, 34));

function add(a, b) {
  return a + b;
}

// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   a + b;
// };

//Eg
