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

//Given an array of numbers, return the sum of all of the positives ones.
const sumOfPositives = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
};
const arr = [1, -2, 3, -4, 5];
console.log(sumOfPositives(arr));
//Given an array of temperatures, return an array converted to Fahrenheit.
const convertToFahrenheit = array => {
  let convertedArray = [];
  for (let i = 0; i < array.length; i++) {
    convertedArray.push((array[i] * 9) / 5 + 32);
  }
  return convertedArray;
};
const arr1 = [1, 2, 3, 4, 5];
console.log(convertToFahrenheit(arr1));

//Given an array of temperatures of one day, calculate the amplitude of the temperature variation.Keep in mind that sometimes there might be a sensor error.
//?Understand the problem 1)What is temp amplitude?
//!Diff between hihest and lowest temp
const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calculateTempAmplitude = function (temps) {
  // Filter out non-numeric values
  const filteredTemps = temps.filter(temp => typeof temp === 'number');

  // Check if there are any valid temperatures
  if (filteredTemps.length === 0) {
    return 'No valid temperatures found';
  }

  const maxTemp = Math.max(...filteredTemps);
  const minTemp = Math.min(...filteredTemps);

  const amplitude = maxTemp - minTemp;
  return amplitude;
};

const tempAmplitude = calculateTempAmplitude(temp);
console.log(`Temp Amplitude: ${tempAmplitude}`);

//Using Loops to calculate the amplitude of the temperature variation.
const temp2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calculateTempAmplitude2 = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
  }
  const amplitude = maxTemp - minTemp;
  return amplitude;
};
const tempAmplitude2 = calculateTempAmplitude2(temp2);
console.log(`Temp Amplitude: ${tempAmplitude2}`);

//Array .push , Adds zero or more elements to the end of an array and returns the new length of the array.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const count = animals.push('zebra');
console.log(count);
console.log(animals);
animals.push('lion', 'tiger');
console.log(animals);

//concat()
const animals1 = ['cow', 'horse', 'sheep'];
const animals2 = ['cat', 'dog'];
const allAnimals = animals.concat(animals1.concat(animals2));
console.log(allAnimals);

//convert temp to celsius
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 10, //prompt('Enter a temperature in Celsius:'),
  };
  console.log(measurement);
  console.table(measurement);
  const Kelvin = parseInt(measurement.value) + 273;
  return Kelvin;
};
console.log(measureKelvin());

//!Code Chanllenge #1
/*Given Array of forecasted max temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ...".*/

const forecast = [17, 21, 23];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}\u00B0C in ${i + 1} days ... `;
  }
  console.log(`... ${str}...`);
};
printForecast(forecast);
