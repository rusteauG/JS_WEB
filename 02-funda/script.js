"use strict";
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

//function declaration
function CalculateAge(birthYear) {
	return 2023 - birthYear;
}
const age = CalculateAge(1991);

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
