const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  opemingHours: {
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
  // function to order Food
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  //? pratical way of using destructuring {
//?  uses object destructuring in the function parameter list to directly extract startIndex, mainIndex, time, and address properties from the passed object.


  orderDelivery: function ({ startIndex = 1, mainIndex = 0, time ='20:00',address}) { //on the func we can do destructuuring right away
    console.log(startIndex,mainIndex,time,address);
  },
};

const { name, opemingHours, categories } = restaurant;
console.log(name, opemingHours, categories);

const {
  name: restaurantName,
  opemingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutatiing Variables
let a = 111;
let b = 999;
console.log(a,b);
const obj = { a: 23, b: 7, c: 14 };
 ({ a, b } = obj);
console.log(a, b);


console.log(opemingHours);
// destrcuture opening hrs
const {thu,fri,sat} = opemingHours
console.log(fri);

// further destruct the object since fri is an object with open and close property
({ fri: { open:o, close:c } }) = opemingHours;
console.log(fri.open, fri.close, o, c);


// restaurant.orderDelivery({
//   time: '22:30', address: 'Via De Loka', mainIndex: 2, startIndex: 2,
// }
// );

restaurant.orderDelivery({
  address: 'Villa Roka',}); //the rest uses the defaulkt values