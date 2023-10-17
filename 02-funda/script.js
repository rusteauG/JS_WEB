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
const totalAmounts = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];

console.log(
	`The bill#1 was $${bill[0]}, the tip was $${tip[0]}, and the total value ${totalAmounts[0]}   
	The bill#2 was $${bill[1]}, the tip was $${tip[1]}, and the total value ${totalAmounts[1]}	
	The bill#3 was $${bill[2]}, the tip was $${tip[2]}, and the total value ${totalAmounts[2]}
	`
);

console.log(`   The bill#1 was $${bill[0]
	.toFixed(2)
	.padEnd(10, " ")}, the tip was $${tip[0]
	.toFixed(2)
	.padEnd(10, " ")}, and the total value ${totalAmounts[0]
	.toFixed(2)
	.padEnd(10, " ")}
   The bill#2 was $${bill[1].toFixed(2).padEnd(10, " ")}, the tip was $${tip[1]
	.toFixed(2)
	.padEnd(10, " ")}, and the total value ${totalAmounts[1]
	.toFixed(2)
	.padEnd(10, " ")}
   The bill#3 was $${bill[2].toFixed(2).padEnd(10, " ")}, the tip was $${tip[2]
	.toFixed(2)
	.padEnd(10, " ")}, and the total value ${totalAmounts[2]
	.toFixed(2)
	.padEnd(10, " ")}`);

//objects

const jonas = {
	firstName: "Jonas",
	lastName: "Schmedtmann",
	age: 2037 - 1991,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
//DOT NOTATION
console.log(jonas.lastName);
//bracket notation
console.log(jonas["lastName"]);
//WE CAN USE AN EXPRESSION IN BRACKET NOTATION
const namekey = "Name";
console.log(jonas["first" + namekey]);
console.log(jonas["last" + namekey]);

/*const interest = prompt(
	"what do you want to know about Jonas?,choose between firstName, lastName, age, job, friends"
);
console.log(jonas.interest); //undefined ,  there's no property called interest
console.log(jonas[interest]); // brackets notation , accept an expression so this works

//if a value doesn't exist, it will return undefined
if (jonas[interest]) {
	console.log(jonas[interest]);
} else {
	console.log(
		"Wrong request! Please choose between firstName, lastName, age, job, friends"
	);
}
*/
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

const numFriends = jonas.friends.length;
const bestFriend = jonas.friends[0];
console.log(
	jonas.firstName +
		" has " +
		numFriends +
		", and his best friend is called " +
		bestFriend
);

//Object Methods
const jonas1 = {
	firstName: "Jonas",
	lastName: "Schmedtmann",
	birthYear: 1990,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
	hasDriversLicense: false,

	//this is Reference the jonas1 object
	// calcaulate_Age: function () {
	// return 2037 - this.birthYear;
	// },
	//Add a Property age using this
	calcaulate_Age: function () {
		this.age = 2037 - this.birthYear;
		return this.age;
	},
	getSummary: function () {
		return `${this.firstName} is a ${this.calcaulate_Age()} year old ${
			this.job
		}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
	},
};

console.log(jonas1.age + 1);
console.log(jonas1.age);
console.log(jonas1.age);
console.log(jonas1.getSummary());

//code challenge#3
const mark = {
	fullname: "Mark Miller",
	mass: 78,
	height: 1.69,

	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI.toFixed(2);
	},
};
const john = {
	fullname: "John Smith",
	mass: 92,
	height: 1.95,

	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI.toFixed(2);
	},
};

const str =
	mark.calcBMI() > john.calcBMI()
		? mark.fullname +
		  " BMI (" +
		  mark.calcBMI() +
		  ") is higher than " +
		  john.fullname +
		  " BMI (" +
		  john.calcBMI() +
		  ")!"
		: john.fullname + "BMI (" + john.calcBMI() + "is higher than mark's BMI";
console.log(str);
