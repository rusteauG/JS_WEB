'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],



  // function to order Food
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
};



const [stater, mainCourse] = restaurant.order(2, 0);
console.log(stater,mainCourse);

 

const [category1, category2] = restaurant['categories'];
const [cat1, cat2] = restaurant.categories;
console.log(category1, category2);
console.log(cat1, cat2);

let [main, , three] = restaurant.categories;
console.log(three, main);
// switch main and three
let temp = main;
main = three;
three = temp;
console.log(three, main);
// instead of using let as above, no need for temp var in the middle
[main, three] = [three, main]; //mutaing the var
console.log(three, main); //Switch back!

// Eg

const arr = [1, 2, 3, 4];

//with destructuring
const [x, y, z] = arr; //! [x,y,z] destrcuturing assignment that extracts rthe first 3 elem and assign them to var x gets the value 1 (the first element of arr).,...original array Not Affected, onml;y unpacking
console.log(x, y, z);

//? Destructuring way of extracting multiple values from arrays or objects and assigning them to vars
//? Skipping Elements
const [first, , third] = arr;
console.log(first, third);

//? Default vals
const [p = 10, q = 20, r = 30, s = 50, t = 50] = arr;
console.log(p, q, r, s, t); //defalut

//? Destructuring with Rest ... operator  Rest operator ... to collect the remaining elements into a new array.
const [num1, ...rest] = arr;
console.log(num1, rest);

// openingHours: {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,


const nested = [2, 4, [5, 6]];
const [i,, j] = nested;
console.log(typeof i, typeof j,j);
console.log(j[0], j[1]);

const [a, , [l, k]] = nested;
console.log(a, l, k);





// destructure Objects
