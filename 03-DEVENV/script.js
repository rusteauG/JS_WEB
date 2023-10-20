'use strict';

const x = '23';
const calcAge = birthYear => 2023 - birthYear;
//  1 type
//! type checking
//? type 3 checking
// // const calcAge = function (birthYear) {
//todo gdsgkdpskgpskdg[k
//* fkgjfkjg;fjg;fgj;lfdjgdfjg
//todo  kkkkkkkkkk
//todo: pdfpkaspk
//func ijfsdjgsjdgpjpdosjgopjsdpjgopjsdgpjpsgj
console.log('Hello NodeJs');

//# How to check if a variable is a number
/*function isNumber(variable) {
  return typeof variable == 'number';
}*/

//convert int0 arrow function
const checkDataType = variable => {
  switch (typeof variable) {
    case 'number':
      return 'number';
    case 'string':
      return 'string';
    case 'boolean':
      return 'boolean';
    case 'undefined':
      return 'undefined';
    case 'object':
      if (Array.isArray(variable)) {
        return 'array';
      } else {
        return 'object';
      }
    case 'function':
      return 'function';
    case 'symbol':
      return 'symbol';
    default:
      return null;
  }
};
const a = [1, 2, 3];
console.log(checkDataType(a));

//how to check if a variable is an array
const variable = [1, 2, 3];
const isArray = Array.isArray(variable);
console.log(isArray); // true

//Reverse a Number
const reverseNumber = num => {
  let reverse = 0;
  while (num !== 0) {
    let remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return reverse;
};
console.log(reverseNumber(1243));

//reverse a number with split NOLOOP Needed!
const reverseNumber2 = num => {
  const reversedString = num.toString().split('').reverse().join('');
  //Convert to number
  return parseInt(reversedString);
}; //OR

console.log(reverseNumber(1243 + 1234));
const num = 1243;
const r = num.toString().split('').reverse().join('');
//?r is still a string here so we need to convert it to number
console.log(Number(r) + 1);
console.log(`---------------------------`);

//? add the reverse number to new Array of Numbers
const reverseNumber3 = num => {
  const reversedString = num.toString().split('').reverse().join('');
  //?r is still a string here so we need to convert it to number

  //Convert to number
  const reversedNumber = parseInt(reversedString);
  return reversedNumber;
};
console.log(reverseNumber3(1243));

//? add the reverse number to new Array of Numbers
const reverseNumber4 = num => {
  const reversedString = num.toString().split('').reverse().join('');
  const reversedNumber = parseInt(reversedString);

  const newArray = [reversedNumber]; // add the reverse number to new Array of Numbers

  return newArray;
};
console.log(reverseNumber4(1243));

//Make an Reverse array from a number
const revArray = function (num) {
  const reversedString = num.toString().split('').reverse().map(Number);
  return reversedString;
};
console.log(revArray(1243));

//? max min
const array = [1, 2, 3, 4, 5];
const max = Math.max(...array);
const min = Math.min(...array);
console.log(max); // Output: 5
console.log(min); // Output: 1

//!edge case
/*
In this example, an empty array is passed to Math.max and Math.min. Because there are no elements in the array, the maximum and minimum values are set to -Infinity and Infinity, respectively.*/

const array1 = [];
const max1 = Math.max(...array1);
const min1 = Math.min(...array1);
console.log(max1); // Output: -Infinity
console.log(min1); // Output: Infinity

/*Array with NaN values:
In this example, an array with some NaN values is passed to Math.max and Math.min. Because NaN is not a valid number, the maximum and minimum values are set to NaN.

In both of these examples, Math.max and Math.min handle the edge cases more efficiently than custom code would.
*/
const array2 = [1, 2, NaN, 4, 5];
const max2 = Math.max(...array2);
const min2 = Math.min(...array2);
console.log(max2); // Output: NaN
console.log(min2); // Output: NaN
