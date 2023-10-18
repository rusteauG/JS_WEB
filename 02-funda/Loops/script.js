"use strict";
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Repetion ${rep}`);
}

const jonasArray = [
	"Jonas",
	"Schmedtmann",
	2037 - 1991,
	"teacher",
	["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
	//Filling types array
	//types[i] = typeof jonasArray[i];
	types.push(typeof jonasArray[i]);
	console.log(jonasArray[i], types[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break statements
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
	if (typeof jonasArray[i] !== "string") continue;
	console.log(jonasArray[i]);
}

//Loop Backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
	console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`-------- Starting exercise ${exercise} --------`);
	for (let rep = 1; rep <= 10; rep++) {
		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🪐`);
	}
	console.log(`-------- Finished exercise ${exercise} --------`);
}

//using Random
const testRand = Math.floor(Math.random() * 10) + 1;
console.log(testRand);

const testRand1 = Math.trunc(Math.random() * 10) + 1;
console.log(testRand1);

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) {
		console.log("Loop is about to end...");
		break;
	}
}

//Coding Challenge #4
/*  const bill = 275;

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

};
let bill = [100, 200, 400];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const totalAmounts = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];


*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bills) {
	for (let i = 0; i < bills.length; i++) {
		const tip =
			bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;

		tips.push(tip);
		totals.push(tips[i] + bills[i]);
	}
};

calcTip(bills);
console.log(totals);

//------------------DONE!--------------------------------

//BONUS
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const calcAvg = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
};
console.log(calcAvg(arr));
