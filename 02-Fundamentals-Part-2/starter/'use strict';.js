'use strict';
const currentYear = new Date().getFullYear();
//- callback function
const calcAge = function (birthYear) {
  const age = currentYear - birthYear
  return age;
}

console.log(calcAge(1991))
const years = [1990, 1965, 1937, 2005, 1998];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages)

years.forEach(function (year) {
  console.log(calcAge(year))
})
//- Using a Callback function with forEach Method
//- The forEach method is an array method that executes a provided function once for each array element. It's a higher-order function because it takes another function (the callback) as an argument.

//exerise 1 - show hw to use shift,unshift,push,pop,slice and 2 ways of copying and array
//research on shallow copying and deep copying

const arr = [1, 2, 3, 4, 5];
console.log(arr.push(6));
console.log(arr);

console.log(arr.pop(6));
console.log(arr);

console.log(arr.shift()); 
console.log(arr);

console.log(arr.unshift(1));
console.log(arr);

const arrCopySlice = arr.slice();
console.log(arrCopySlice);

const arrSpread = [...arrCopySlice];
console.log(arrSpread);

//- Both Create a Shallow Copy of the Array
const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray]; //differrent ref

console.log(originalArray === copiedArray);
console.log(arr === arrCopySlice);  //dif Ref


//- The spread operator only creates a shallow copy and is primarily used for copying the entire array.
//- The slice method can be used to copy the entire array or a portion of it by providing start and end indices.
//- Shallow Copy Explanation
//- New Array Instance:
//- When you create a shallow copy, the new array is a completely new instance. This is why copiedArray === originalArray returns false—they are two separate arrays in memory.

//- Shared References for Objects:
//- If the original array contains objects, both the original and copied arrays will hold references to the same objects. Therefore, changes to the objects' properties will be reflected in both arrays.
// Objects within the array are not copied but referenced, so changes to these objects affect all arrays referencing them.
// To fully copy nested objects, a deep copy is needed, often achieved using methods like JSON.parse(JSON.stringify(array)) for plain objects or libraries like Lodash for more complex structures.
const partialCopy = originalArray.slice(1, 3);
console.log(partialCopy);

//add 1 at index 0
partialCopy.splice(0, 0, 1);  //0 means ADD
console.log(partialCopy);
//ADD MORE THAN 1ELEMENT
partialCopy.splice(partialCopy.length,0,4,5,6,7)
console.log(partialCopy);

//remove at inde 2 
partialCopy.splice(2, 3, 1, 2, 3)  //start at index 2 , remove 3 , with 1,2,3
partialCopy.splice(2,1) // at index 2 remove 1 element
console.log(partialCopy)

const friends = ['neville', 'koon', 'lam',23];
console.log(friends.indexOf("neville"));
console.log(friends.indexOf("23"));
// new in ES6 includes -> true or false
console.log(friends.includes('23')); //strict equality test, doesnt do type type coercion

//Objects REview
//-Group Variables that Belong together
//Key Value Pair
// -an object is a collection of properties, each of which has a unique name and a value. Key:Valie Pairs
//-Properties define the characteristics of an object.
//-Key ->name identifier,always a string, value can be any type,also an object,function,prmitive
//-2ways to create Object
//- To Acces the Order doesnt matter like in Arrays
//- Use Objects for unstrutured Data
//*Object Literal
const person = {
  fullname: 'John Doe',       // name is a property with the value 'John Doe'
  age: 30,                // age is a property with the value 30
  isEmployed: true,       // isEmployed is a property with the value true
  address: {              // address is a property with an object as its value
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
  },
  greet: function() {     // greet is a property with a function as its value
    console.log('Hello!');
  }
};

//-Access using .Dot Nototion
console.log(person.address.city);
person.greet()

//- using  Bracket Notation-- in the [ place an expression-Computed a value]
console.log(person["age"]);

//- dynamically accessing and manipulating object properties
const nameKey = "name";
console.log(person[`full${nameKey}`]);

//*2.Using the Object Constructor
const person1 = new Object();
person1.name = "Rusteau";
person1.address = {
  street: '456 Main St',
  city: 'Mahe',
  country: 'Seychelles'
};
person1.greet = function() {
  console.log('Hello!');
};

person1.greet()

const Employed = "isEmployed";
console.log(person.Employed);//-To dynamically access and manipulate object properties in JavaScript, you need to use bracket notation. Bracket notation allows you to use variables to access object properties.
console.log(person[Employed]);
