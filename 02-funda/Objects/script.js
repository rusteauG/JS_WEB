//A D.S- we can give each data a name and a value
//an objetc contains 5 key:value pairs
//each key  is called a property
//Object Literal Syntax
const person = {
	firstName: "John",
	lastName: "Doe",
	birthYear: 1976,
	hasDriversLicense: false,
	job: "teacher",
	friends: ["Jane", "Mark", "Bob"],

	//
	// calcAge: function(birthYear){
	// return 2023 - birthYear;
	// }

	// calcAge: function () {
	// console.log(this);
	// return 2023 - this.birthYear;

	//Create a property called age using this
	//Store the age in the object,if we call the function multiple times
	calcAge: function () {
		this.age = 2023 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.age} year old ${
			this.job
		}, and he has ${this.hasDriversLicense ? "a" : "no"}
             driver's license`;
	},
};
console.log(person);
console.log(person.lastName);
//bracket notation - we can add an expression inside the bracket
console.log(person["lastName"]);

const nameKey = "Name";
console.log(person["first" + nameKey]);

// const question = prompt("What do you  want to know bout the person?");
// if (person[question]) {
// console.log(person[question]);
// } else {
// // console.log("We don't know anything about " + question);
//}
//challenge
//John has 3 friends, and his best friend is called Jane
console.log(
	`${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`
);

//Keep the Code DRY Don't Repeat Yourself
console.log(person.calcAge(person.birthYear));
//call using bracket notation
console.log(person["calcAge"](person.birthYear));

//this  ->Ref the Object itself
console.log(person.calcAge());
//calling multiple times, age is calculated only once , more efficient solution
console.log(person.age);
console.log(person.age);
console.log(person.age);

//challenge
//"jonas is a 46 year old teacher, and has a Driver Licencse
console.log(person.getSummary());

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}
*/
//Coding Challenge #3
/*  
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall
*/
const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

console.log(mark.calcBMI().toFixed(2));

const John = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};
const markBMI = mark.calcBMI();
const johnBMI = John.calcBMI();
if (markBMI > johnBMI) {
	console.log(
		`Mark's BMI (${markBMI.toFixed(
			2
		)}) is higher than John's (${johnBMI.toFixed(2)})!`
	);
} else {
	console.log(
		`John's BMI (${johnBMI.toFixed(
			2
		)}) is higher than Marks's (${markBMI.toFixed(2)})!`
	);
}
