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
