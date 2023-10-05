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
const ageSarah = 15;

if (ageSarah >= 18) {
	console.log("Sarah can start driving license 😜");
} else {
	const ageLeft = 18 - ageSarah;
	console.log(
		`Sarah is too young to start driving license 😭 ${ageLeft} years left to Drive!`
	);
}

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
