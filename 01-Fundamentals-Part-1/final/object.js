'use strcit';

const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 12,
  key5: [1, 2, 3, 4, 5],
};
for (let key in obj) {
  console.log(obj[key]);
}
//-----------------------------------------------------
const person = {
  name: 'John',
  age: 31,
};
console.log(person.age);
person.age = 90;
console.log(person['age']); //dynamically acces the object
//-dynamically access object properties based on variables using bracket notation:

const propertyName = 'name';
console.log(person[propertyName]);

const calcBirthday = birthyear => 2024 - birthyear;
//------------
// VIDEO FIXME TODO

//-----------
/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

 */

// function greet(input) {
//   return (`Hello, ${input} how are you doing today?`);
// }

// greet(input);

// const greet = input =>
//   'Hello, <name> how are you doing today?'.replace('<name>', input);

console.log(greet('neville'));
//TODO Using Regular expression multiple instances  /g for multiple instances
function greet(name) {
  return 'Hello, <name> how are you doing <name> today?'.replace(
    /<name>/g,
    name
  );
}

// function greet(name) {
//   return 'Hello, <name> how are you doing today?'.replace('<name>', name);
// }

// console.log(greet('John')); // Output: Hello, John how are you doing today?

// console.log(greet('Bob')); // Output: Hello, Bob how are you doing Bob today?

//TODO
function greetCBack(name) {
  return 'Hello, <name> how are you doing today?'.replace(/<name>/, () =>
    name.toUpperCase()
  );
}

console.log(greetCBack('Emily')); // Output: Hello, EMILY how are you doing today?

let name = 'John';
let a = name.split('');
console.log(a);

const myname = 'neville';
const lastChar = myname.slice(-1);
console.log(lastChar);

const firstChar_AndLast_removed = myname.slice(1, -1);
console.log(firstChar_AndLast_removed);

function removeChar(str) {
  return str.substring(1, str.length - 1);
}
console.log(removeChar('neville'));

const str = 'Hello, World!';
const subStr = str.substring(str.length - 1);
console.log(subStr);
console.log(str.slice(str.length - 1));

function strSplit(str) {
  str1 = str.split(' '); //--The split(' ') method in JavaScript is used to split a string into an array of substrings based on a specified separator.// Split the string into an array of substrings based on spaces
  str1 = str1.slice(1).join(); // Remove the first element and join the remaining elements with the default separator (comma)

  str2 = str1.slice(-1); // Extract the last character of the resulting string
  return str2;
}
console.log(strSplit('Hello World!'));
