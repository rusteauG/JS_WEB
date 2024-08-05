// pack Element  intop an array
//SPREAD,because on the RIGHT side of = ( = operation)
// Detructuring Arrays
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST, because on the LEFT side of = ( = operation)
const [a,b,...others] = [1,2,3,4,5];
console.log(others);


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


const [pizza,,risotto,...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu] 
console.log(pizza, risotto, otherFood);

// Objects
console.log(restaurant.openingHours);
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);
console.log(sat.open, sat.close);

const { thu, fri } = weekDays;
console.log(thu.open, thu.close);


// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);