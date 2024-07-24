const arr = [7, 8, 9];

// create a new array with some elements from the begining
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array

// 1.using Spread
const mainMenuCopy = [...restaurant.mainMenu];

// Array.slice()  returns a shallow copy of a portion of an array into a new array object.
const originalArray = [1, 2, 3, 4, 5];
const copiedArraySlice = originalArray.slice();
console.log(copiedArraySlice);

// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
const copiedArrayFrom = Array.from(originalArray);
console.log(copiedArrayFrom);

// The map() method creates a new array with the results of calling a provided function on every element in the calling array. For copying, you can use a function that just returns the element itself.
const copiedArrayMap = originalArray.map(item => item);
console.log(copiedArrayMap);

// concat
const copiedArrayConcat = originalArray.concat();
console.log(copiedArrayConcat);

// Join 2 Array
const mergedMenu = [restaurant.starterMenu, ...mainMenuCopy];
console.log(mergedMenu);
// OR
const combinedArray = mergedMenu.concat(copiedArrayConcat);
console.log(combinedArray);

// spread operator works on all iterables
// arrays,string,sets,map BUT NOT OBJECTS
// Most built-in D.S in J.S are iterable except objects

const str = 'nevillek';
const letters = [...str, ' ', 's.']; //unpack the string into chars
console.log(letters);

// Template literals (${}) are designed to interpolate expressions but don’t support the spread operator inside them.
//If you want to use the spread operator with strings, you typically use it to convert a string into an array of characters
const text = 'hello';
const strArray = [...text]; // Convert string to array of characters
console.log(strArray); // ['h', 'e', 'l', 'l', 'o']

// Join Array Elements into a String

// If you want to insert characters from a string into another string, you can join the characters back into a string:
console.log(`${[...strArray].join('')} `);

// Using Spread Operator in Function Calls

// If you need to use the spread operator to pass characters as separate arguments, you could use it in a function call

function printCharacters(...chars) {
  console.log(chars);
  return chars;
}

const c = printCharacters(strArray);
console.log(c);

//? The .join() method in JavaScript is used to combine all elements of an array into a single string. It’s particularly useful when you want to convert an array into a string with a specific separator between the elements.
const joinedString = c.join('');
console.log(joinedString);
const result = joinedString.split(',').join(''); // Split by commas and join with empty string
console.log(result);
