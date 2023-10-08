"use strict";
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

//function declaration
function CalculateAge(birthYear) {
	return 2023 - birthYear;
}
let age = CalculateAge(1991);

//function expression
const calculateAge = function (birthYear) {
	return 2023 - birthYear;
};
const age2 = calculateAge(1991);

console.log(age, age2);
//Function calling function
function CutFriutPieces(fruit) {
	return fruit * 4;
}
function fruitProcessor(apples, oranges) {
	const applePieces = CutFriutPieces(apples);
	const orangePieces = CutFriutPieces(oranges);
	const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
	return juice;
}
console.log(fruitProcessor(5, 2));

//review func declaration expression
const yearsUntilRetirement = function (birthYear, firstName) {
	const age = 2023 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
//using arrow function
//birthYear is a local parameter to the function
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};
const yearsUntilRetirement2 = (birthYear, firstName) => {
	const age2 = calcAge2(birthYear);
	const retirement = 65 - age2;
	if (retirement > 0) {
		return retirement;
	} else {
		return -1;
	}
};

//Coding Challenge #1 Part#2
const calcAverage = (score1, score2, score3) => score1 + score2 + score3 / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
const checkWinner = (avgDolphins, avgKoalas) => {
	if (avgDolphins >= 2 * avgKoalas) {
		return "Dolphins win";
	} else if (avgKoalas >= 2 * avgDolphins) {
		return "Koalas win";
	} else {
		return "No team wins";
	}
};

console.log(checkWinner(avgDolphins, avgKoalas));

avgDolphins = calcAverage(244, 23, 71);
avgKoalas = calcAverage(35, 54, 49);

console.log(checkWinner(avgDolphins, avgKoalas));

//Arrays
const friends = ["Michael", "Steven", "Peter"];
const years = new Array(1991, 1984, 2008, 2020);
console.log(friends);
console.log(years.length);
console.log("The Last Element in the array is " + friends[friends.length - 1]);

const ages = [
	calculateAge(years[0]),
	calculateAge(years[1]),
	calculateAge(years[2]),
];
console.log(ages);

//Array Operations
//const friends = ["Michael", "Steven", "Peter"];
//push -ADDS AN ELEMENT At The END
const length = friends.push("Jay");
console.log(friends, length);
//unshift - ADDS AN ELEMENT AT THE BEGINNING
const newLength = friends.unshift("John");
console.log(friends, newLength);
//REMOVE AN ELEMENT AT THE END
const popped = friends.pop();
console.log(friends, popped);
//REMOVE AN ELEMENT AT THE BEGINNING
friends.shift();
console.log(friends);
//In Which Posistion a Element is
console.log(friends.indexOf("Steven"));
//In Which Posistion a Element is
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("23"));
console.log(friends.indexOf("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
	console.log("You have a friend called Steven");
}

//Coding Challenge #2

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
let bill = [100, 200, 400];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

console.log(
	`The bill#1 was $${bill[0]}, the tip was $${tip[0]}, and the total value ${
		tip[0] + bill[0]
	}   
	The bill#2 was $${bill[1]}, the tip was $${tip[1]}, and the total value ${
		tip[1] + bill[1]
	}	
	The bill#3 was $${bill[2]}, the tip was $${tip[2]}, and the total value ${
		tip[2] + bill[2]
	}
	`
);
