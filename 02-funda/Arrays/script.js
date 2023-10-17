const array = [1, 2, 3, 4, 5];
const elementToAdd = 6;
const index = 2; // Index where you want to add the element

const newArray = array.slice(0, index).concat(elementToAdd, array.slice(index));
console.log(newArray); // [1, 2, 6, 3, 4, 5]

const friends = ["Neville", "Amelly", "Anille"];
const friendsEmail = [
	"rrusteau@gmail.com",
	"rrusteau@gmail.com",
	"rrusteau@gmail.com",
];

const newFriends = friends.concat(friendsEmail);
console.log(newFriends);

const newValue = 4;
const newFriends2 = newFriends.concat(newValue);
console.log(newFriends2);

const newLength = newFriends2.push("hjay");
console.log(newFriends2, newLength);
console.log("The Last Element in the array is " + newFriends2[newLength - 1]);

const calcAge = (birthYear) => 2037 - birthYear;
const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[2]),
	calcAge(years[3]),
	calcAge(years[4]),
];
console.log(ages);

const fruits = ["apple", "banana", "cherry"];

const newfruits = fruits.push("orange"); //new lenth of the array , adding the element at the end
console.log(newfruits);
console.log(fruits);
console.log(fruits[newfruits - 1]); //the last element

//2. Adding Multiple Elements:
const newFruits2 = fruits.push("kiwi", "strawberry");
console.log(newFruits2);

//Adding Elements from Another Array:
const newFruits3 = fruits.concat(["mango", "grapes"]);
console.log(newFruits3);

console.log(fruits);

const colors = [];
for (let i = 0; i < 10; i++) {
	colors.push("colors" + i);
}
console.log(colors);

//Chaining push() Calls
const animals = [];
animals.push("lion");
animals.push("tiger");
animals.push("bear");
console.log(animals); // ["lion", "tiger", "bear"]

newFruits3.unshift("tomato"); //adding the element at the beginning
console.log(newFruits3);

//Adding Multiple Elements at the Beginning:
const numbers = [4, 5, 6];
numbers.unshift(1, 2, 3); // Adds 1, 2, and 3 to the beginning of the array
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Adding Elements from Another Array:
const firstArray = [4, 5, 6];
const secondArray = [1, 2, 3];
firstArray.unshift(...secondArray); // Adds elements from secondArray to the beginning of firstArray
console.log(firstArray); // [1, 2, 3, 4, 5, 6]

//Dynamically Adding Elements:
const colorsD = [];
for (let i = 0; i < 5; i++) {
	colorsD.unshift("color" + i); // Adds "color4", "color3", ..., "color0"
}
console.log(colorsD);
