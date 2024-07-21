"use strict";

// let hasDriversLicense = false;
// const passTest = true;
// hasDriversLicense ? console.log("I can drive") : console.log("I can't drive");
// if (passTest) hasDriversLicense = true;
// hasDriversLicense ? console.log("I can drive") : console.log("I can't drive");

// //Function
// function logger() {
//   console.log("My name is Jonas");
// }
// //calling / running / invoking function
// logger();
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

const CutFruitPieces = (fruit) => fruit * 4;

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${CutFruitPieces(
    apples
  )} aples and ${CutFruitPieces(oranges)} oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));
// const juice = fruitProcessor(5, 0);
// console.log(juice);

// const num = Number("23");
// const num1 = parseInt("33");

//<  Types  of Function
//done 1. Function Declaration,
const age = calcAge(1990, 2024); //we can call it before it is defined in code

function calcAge(birthYear, yearNow) {
  const age = yearNow - birthYear;
  return age;
}
console.log(`My Age : ${age}`);

//<   2.Function Expression
//? Function without a Name:anonymous Function
//? Expression will produce a value store in calcAge2, this is the function
//? function is a value , we can store it in a variable
const calcAge2 = function (birthYear, yearNow) {
  return yearNow - birthYear;
};
const age2 = calcAge2(1981, 2024); // we need to intiliaze the funtion first before calling, happens\
//due to Hoisting? more later!

console.log(`Age: ${age2}`);

/*  
When you pass primitive data types (such as numbers, strings, booleans) to a function in JavaScript,
 they are passed by value.
This means that a copy of the value is passed to the function, and any changes made to the parameter
 inside the function do not affect the original value outside the function.
 */
// function updateValue1(value1) {
//   value1 = 10;
// }
var updateValue1 = (value1) => (value1 = 10);

var x1 = 5;
console.log(`Calling update ${updateValue1(x1)}`);
console.log(x1); // Output: 5 (original value is unchanged)

//? If you want to pass a variable by reference in var JavaScript, you can wrap it in
//? an object.
function updateValue(object) {
  object.value = 10;
}

var x = { value: 5 }; // Wrap x in an object
updateValue(x);
console.log(x.value); // Output: 10

var passByRef = (object) => {
  object.value = 10;
};

var x = { value: 5 }; // Wrap x in an object
passByRef(x);
console.log(x.value); // Output: 10

/**
*?  x is an object with a property value. When you pass x to the updateValue function, 
*? you're passing a reference to the object, not a copy of the object itself. 
*? Therefore, changes made to obj inside the function will affect the original object referenced by x.


//<  HOW TO USE BETTER COMMENTS
/**
 * 
 * this is a Simple comment
 * ! Red Color
 * ?Blue color
 * todo: Orange Color                               
 *  //-jfjfjfjfjjf
 * 
 */
//
// done yellow text
// <  Yellow bg

//?  default parameters
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}
greet();
//?   Since we have not passed any argument to the function, it uses the default value.

function sum(x = 3, y = 4) {
  return x + y;
}
console.log(sum());
// pass argument to x but not to y
var result = sum(7);
console.log(`${result}`);

//?  pass one parameter as the default value for another
function asum(x = 1, y = x, z = x + y) {
  return x + y + z;
}
console.log(`aSum: ${asum()}`);

//< Arrow Function
// *function calcAge(birthYear, yearNow) {
// *  const age = yearNow - birthYear;
//*   return age;
//* }

var calcAge3 = (birthYear, yearNow) => yearNow - birthYear; //?Implicitly return the value, good fr 1 line function
console.log(calcAge3(1976, 2024));

var retire = (birthYear, yearNow) => {
  const age = yearNow - birthYear;
  const retirement = 65 - age;
  return retirement; //? Need Return for MultiLine
};

console.log(retire(1976, 2024));

//< Coding Challenge #3
// const dolphinsAvgScore = (96 + 108 + 89) / 3;
// const koalasAvgScore = (88 + 91 + 110) / 3;
console.log(`--------Coding Challenge #3--------`);
const calcAverage = (score1, score2, score3) => score1 + score2 + score3 / 3;

const dolphinsAvgScore = calcAverage(85, 54, 41);
const koalasAvgScore = calcAverage(23, 34, 49);

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(
      `Dolphins Wins ${dolphinsAvgScore.toFixed(
        2
      )} vs. ${koalasAvgScore.toFixed(2)}`
    );
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(
      `Koalas Wins ${koalasAvgScore.toFixed(2)}
       vs. ${dolphinsAvgScore.toFixed(2)}`
    );
  } else {
    console.log("No team wins the trophy");
  }
};

checkWinner(dolphinsAvgScore, koalasAvgScore);
//!----------------------------------------------------------------------------------------------------
//<ARRAYS
console.log();
console.log("ARRAYS");
const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);
console.log(friends[2]); //* peter
console.log(friends[friends.length - 1]); //* peter
//* in the  brackets we can place an expression(produce a  value)
// *  [expression]
//- even with const we can mutate the Array WHY ?  const only applies to the reference itself, not the contents of the array.
//- If you want to make the contents of the array immutable, you would need to use techniques or libraries that provide immutability, such as Object.freeze:

//- const arrF = Object.freeze([1, 2, 3, 4, 5]);
//- // This will not change the array because it's frozen
//- arrF[0] = 10;
//- arrF.push(4);
//- console.log(arrF);

//done : primitive are immutable not objects .i.e Arrays ar Mutable in JS

const neville = ["Neville", "Kal", 2024 - 1977];
console.log(`FOR EACH`);
neville.forEach((element) => {
  console.log(element);
});

//- MUTATE THE  ARRAYss
friends[2] = "Nevillek";
console.log([friends.length - 1]); //- Nevillek

//- Create arrays we use ARRAY lierals common way  Readability: More concise and easier to read.
//- Performance: Generally faster because it is more optimized by JavaScript engines.
const years1 = new Array(1991, 1984, 2008, 2009);

//- Array Constructor   less commonly used for simple array creation.
const arr2 = new Array(1, 2, 3);

const arr3 = [3];
console.log(arr3);

const arr4 = new Array(3);
console.log(arr4);

//- When using the Array constructor with a single numeric argument, it creates an array with the specified length filled with undefined elements. In contrast, using an array literal with a single number creates an array with that number as its first element.

const years = new Array(1991, 1984, 2008, 2009);
console.log(years);

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

arr.push(6); //done Adds an element to the end of the array
console.log(arr);

//< SHORTCUT keybindings
//done CTRL + SHIFT + ,
console.log();

//done CTRL + SHIFT + l
console.log("");

console.log(arr.length);
arr.pop(); //done Removes the last element from the array
console.log(arr);

//- shift and unshift are array methods tha manipul;ate the elements at the  Begining
//-  shift method removes the first element from an array and returns that removed element. 
const arrShift = [1, 2, 3, 4, 5];

const firstElement = arrShift.shift();
console.log(arrShift,'Removed: ',firstElement);

//- Effect: Modifies the original array by removing its first element and shifting all other elements one position to the left

//done unshift
const arrUnShift = [1, 2, 3, 4, 5];
console.log(arrUnShift.unshift(0)); //return the new len
console.log(arrUnShift);

arrShift.unshift(1);
console.log(arrShift);
//back to 1,2,3,4,5



//- create a new copy of the array with the mutation applied,
//- you can use methods like slice() or the spread operator(...)

const originalArray = [1, 2, 3];
const newArray = originalArray.slice(); //* // Create a copy of the original array
newArray[1] = 5;
console.log(originalArray); //* / Output: [1, 2, 3]
console.log(newArray); //* Output: [1, 5, 3]

//-Using the spread operator (...):
const originalArrayS = [1, 2, 3];

const newArrayS = [...originalArrayS]; // Create a copy of the original array
newArrayS[1] = 5; // Mutate the copy

console.log(originalArrayS); // Output: [1, 2, 3]
console.log(newArrayS); // Output: [1, 5, 3]

//- splice() method when you want to modify the original array by adding or removing elements at specific positions.

//* Removing Elements: If you want to remove elements from an array, you can use splice() to specify the index of the element to start removing from and the number of elements to remove
const arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(2, 0, 6); //- ADD 6 at index 2
