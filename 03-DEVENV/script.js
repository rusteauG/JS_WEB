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
