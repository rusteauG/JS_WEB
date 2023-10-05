/* Coding Challenge #2 */
let mark_Weight = 78;
let john_Weight = 92;
let mark_Height = 1.69;
let john_Height = 1.95;

//BMI Calculator BMI = weight / (height * height)
function calculateBMI(mark_Weight, mark_Height) {
	return mark_Weight / mark_Height ** 2;
}

let mark_BMI = calculateBMI(mark_Weight, mark_Height).toFixed(2); // Round to 2 decimal places;
let john_BMI = calculateBMI(john_Weight, john_Height).toFixed(2); // Round to 2 decimal places;
let markHigherBMI1 = mark_BMI > john_BMI;
if (markHigherBMI1) {
	console.log(`Mark's BMI ${mark_BMI} is higher than John's BMI ${john_BMI}`);
} else {
	console.log(`John's BMI ${john_BMI} is higher than Mark's BMI ${mark_BMI}`);
}

// Determine who has the higher BMI for Data 2
// let higherBMI2;
let mark_Weight2 = 95;
let john_Weight2 = 85;
let mark_Height2 = 1.88;
let john_Height2 = 1.76;

function calculateBMI(mark_Weight, mark_Height) {
	return mark_Weight / mark_Height ** 2;
}
let mark_BMI2 = calculateBMI(mark_Weight2, mark_Height2);
let john_BMI2 = calculateBMI(john_Weight2, john_Height2);
let markHigherBMI2 = mark_BMI2 > john_BMI2;
if (markHigherBMI2) {
	console.log("Mark's BMI is higher than John's BMI");
} else {
	console.log("John's BMI is higher than Mark's BMI");
}
