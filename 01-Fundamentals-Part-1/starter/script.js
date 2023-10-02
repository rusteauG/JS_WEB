// 1. Splitting the country's population in half
let countryPopulation = 22; // Assuming the country's population is 22 million

let halfPopulation = countryPopulation / 2; // Calculate half of the population
console.log(`Each half of the country would contain ${halfPopulation} million people.`);

// 2. Increasing the population by 1
countryPopulation++;
console.log(`After increasing the population by 1, it is now ${countryPopulation} million.`);

// 3. Comparing the population with Finland
let finlandPopulation = 6; // Finland's population is 6 million
if (countryPopulation > finlandPopulation) {
  console.log("Yes, the country has more people than Finland.");
} else {
  console.log("No, the country has fewer people than Finland.");
}

// 4. Comparing the population with the average country population
let averageCountryPopulation = 33; // Average country population is 33 million
if (countryPopulation < averageCountryPopulation) {
  console.log("Yes, the country has fewer people than the average country.");
} else {
  console.log("No, the country has more people than the average country.");
}

// 5. Creating a description string
let description = `Portugal is in Europe, and its ${countryPopulation} million people speak Portuguese.`;
console.log(description);

age = 16;
age =10; //mutate the variable
console.log(age);

const birthYear = 1976; //umutable var
//birthYear = 1977;
console.log(birthYear);
now =2023
const ageNeville = now - 1976;
const ageSarah = now - 1991;
console.log(ageNeville,ageSarah);
let YearBorn = now - 17 

  console.log("You where Born in :");
  console.log(YearBorn);

console.log(ageNeville*2,ageSarah /10,2**3,)
console.log('9' - '5'); // -> 4 avaScript attempts to perform type coercion when it encounters operators like - that expect numeric operands. In this case:
console.log('9 - 5');
console.log(String(9) + ' - ' + String(5)); 
console.log("19" - "13" + "17"); // -> '617'
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); 
//cODE CHALLENGE 1
// Data for Mark
// const markWeight1 = 78; // kg
// const markHeight1 = 1.69; // meters

// // Data for John
// const johnWeight1 = 92; // kg
// const johnHeight1 = 1.95; // meters

// // Calculate BMIs
// const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
// const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

// // Determine if Mark has a higher BMI than John
// const markHigherBMI1 = markBMI1 > johnBMI1;

// // Display the results
// console.log("Data 1:");
// console.log("Mark's BMI:", markBMI1);
// console.log("John's BMI:", johnBMI1);
// console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI1);

// // Data for Mark and John (Data 2)
// const markWeight2 = 95; // kg
// const markHeight2 = 1.88; // meters
// const johnWeight2 = 85; // kg
// const johnHeight2 = 1.76; // meters

// // Calculate BMIs (Data 2)
// const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
// const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// // Determine if Mark has a higher BMI than John (Data 2)
// const markHigherBMI2 = markBMI2 > johnBMI2;

// // Display the results (Data 2)
// console.log("\nData 2:");
// console.log("Mark's BMI:", markBMI2);
// console.log("John's BMI:", johnBMI2);
// console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI2);

//CODE CHALLENGE 1_2
// Data for Mark and John (Data 1)
const markWeight1 = 78; // kg
const markHeight1 = 1.69; // meters
const johnWeight1 = 92; // kg
const johnHeight1 = 1.95; // meters

// Calculate BMIs (Data 1)
const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

// Data for Mark and John (Data 2)
const markWeight2 = 95; // kg
const markHeight2 = 1.88; // meters
const johnWeight2 = 85; // kg
const johnHeight2 = 1.76; // meters

// Calculate BMIs (Data 2)
const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// Determine who has the higher BMI for Data 1
let higherBMI1;
if (markBMI1 > johnBMI1) {
  higherBMI1 = "Mark";
} else if (johnBMI1 > markBMI1) {
  higherBMI1 = "John";
} else {
  higherBMI1 = "Mark and John";
}

// Determine who has the higher BMI for Data 2
let higherBMI2;
if (markBMI2 > johnBMI2) {
  higherBMI2 = "Mark";
} else if (johnBMI2 > markBMI2) {
  higherBMI2 = "John";
} else {
  higherBMI2 = "Mark and John";
}

// Display the results
console.log("Data 1:");
console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);

console.log("\nData 2:");
console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);

//code chanlege 2
// Test data
const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 88;
const koalasScore2 = 150;
const koalasScore3 = 110;

// Calculate average scores
function calcAverage(a, b, c) {
    return (a + b + c) / 3;
  }
//does the same thing as the function above
//const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolphinsAverage = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const koalasAverage = calcAverage(koalasScore1, koalasScore2, koalasScore3);

// Check the winner
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins win with an average score of ${dolphinsAverage} points.`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas win with an average score of ${koalasAverage} points.`);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log("It's a draw with both teams having an average score of at least 100 points.");
} else {
  console.log("No team wins the trophy.");
}

//Coding Challenge #4
// Test data
// Test data
const billValue1 = 275;
const billValue2 = 40;
const billValue3 = 430;

// Calculate the tip using a ternary operator
//const tip1 = billValue1 >= 50 && billValue1 <= 300 ? billValue1 * 0.15 : billValue1 * 0.2;
if (billValue1 >= 50 && billValue1 <= 300) {
  tip1 = billValue1 * 0.15;
}
const tip2 = billValue2 >= 50 && billValue2 <= 300 ? billValue2 * 0.15 : billValue2 * 0.2;
const tip3 = billValue3 >= 50 && billValue3 <= 300 ? billValue3 * 0.15 : billValue3 * 0.2;

// Calculate the total value
const totalValue1 = billValue1 + tip1;
const totalValue2 = billValue2 + tip2;
const totalValue3 = billValue3 + tip3;

// Print the bill value, tip, and total value to the console
console.log(`The bill was ${billValue1}, the tip was ${tip1}, and the total value ${totalValue1}`);
console.log(`The bill was ${billValue2}, the tip was ${tip2}, and the total value ${totalValue2}`);
console.log(`The bill was ${billValue3}, the tip was ${tip3}, and the total value ${totalValue3}`);
