// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);
//
// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);
//
// const YearNow = 2023;
// const nevAge = YearNow - 1976;
// const AniAge = YearNow - 1991;
// console.log(nevAge, AniAge);
//
// const fname = "neville";
// const lname = "schmedtmann";
// console.log(fname + " " + lname);
//
// console.log(
// "String  with \n\
// mulitple \n\
// lines"
// );
//
// console.log(`
// String
// with
// multiple
// lines
// `);
//
// const ageSarah = 15;
//
// if (ageSarah >= 18) {
// // console.log("Sarah can start driving license 😜");
// } else {
// const ageLeft = 18 - ageSarah;
// console.log(
// // // `Sarah is too young to start driving license 😭 ${ageLeft} years left to Drive!`
// );
// }
//
//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
//
// console.log(Number("Jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23);
//
//type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
//
// let fav = prompt("What's your favorite number?");
// console.log(typeof fav);
// if (fav != 23) {
// console.log("23 is not THE number");
// } else {
// console.log("23 is  THE number");
// }
//

//Coding Challenge #3
// let Dolphins;
// let Koalas;
// Data#1
// const Dolphins_Average = (96 + 108 + 89) / 3;
// const Koalas_Average = (88 + 91 + 110) / 3;
// Data#2
// const Dolphins_Average = (97 + 112 + 101) / 3;
// const Koalas_Average = (109 + 95 + 123) / 3;
// const minScore = 100;
// if (
// Dolphins_Average === Koalas_Average &&
// Dolphins_Average >= minScore &&
// Koalas_Average >= minScore
// ) {
// console.log("Both Teams Wins 🏆");
// // } else if (Dolphins_Average > Koalas_Average && Dolphins_Average >= minScore) {
// console.log("Dolphins Win 🏆");
// // } else if (Koalas_Average > Dolphins_Average && Koalas_Average >= minScore) {
// console.log("Koalas Win 🏆");
// } else {
// console.log("No Team Wins 🏈");
// }
// // const minimum = Math.min(Dolphins_Average, Koalas_Average);
// console.log(minimum);
//

//Switch
const day = "sunday";
switch (day) {
	case "monday":
		console.log("Plan course structure");
		console.log("Go to coding meetup");
		break;
	case "tuesday":
		console.log("Prepare theory videos");
		break;
	case "wednesday":
	case "thursday":
		console.log("Write code examples");
		break;
	case "friday":
		console.log("Record videos");
		break;
	case "saturday":
	case "sunday":
		console.log("Enjoy the weekend :D");
		break;
	default:
		console.log("Not a valid day!");
}

//Ternary Operator
let age = 23;
age >= 18
	? console.log("I like to drink wine 🍷")
	: console.log("I like to drink water 💧");

//code Challenge #4
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
	`The bill was ${bill}, the tip was ${tip}., and the total value ${tip + bill}`
);

const bill2 = 40;
const tip2 = bill2 >= 50 && bill2 <= 300 ? 0.15 * bill2 : 0.2 * bill2;
console.log(
	`The bill was ${bill2}, the tip was ${tip2}., and the total value ${
		tip2 + bill2
	}`
);
