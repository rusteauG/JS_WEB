//? Math.floor() round down to nearest int
let num1 = 4.7;
let num2 = 4.3;

let floorNum1 = Math.floor(num1);
let floorNum2 = Math.floor(num2);
console.log(floorNum1, floorNum2);

//to Round up
let ceilNum1 = Math.ceil(num1);
let ceilNum2 = Math.ceil(num2);
console.log(ceilNum1, ceilNum2);

//Round to nearest int Math.Round
console.log(Math.round(num1), Math.round(num2));
//2dp
let rnd = Math.round(2.4567 * 100) / 100;
console.log(rnd);

function round2dp(num) {
  return Math.round(num * 100) / 100;
}

let randomNum1 = Math.random() * 10;
console.log(randomNum1);
console.log(Math.trunc(randomNum1)); //trunc removes fractional digit

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

console.log(round2dp(randomNum1));

//OR use , but it returns it as a string
// ? Note that toFixed() always returns a string, so if you need the result as a number, you’d need to convert it back using parseFloat() or another method.
console.log(randomNum1.toFixed(2));

// isNaN  is Not a Number
// To determine wheter a value is not a valid number
//true if the value is noet a number
console.log(isNaN(23));
console.log(isNaN('hello'));

console.log('0' == 0);
