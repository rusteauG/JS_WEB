// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: parseInt(prompt("Degrees celsius:")),
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

const calcTempLitBug = function (t1, t2) {
  // Check if t1 and t2 are arrays
  if (!Array.isArray(t1) || !Array.isArray(t2)) {
    console.error("Inputs must be arrays");
    return;
  }

  // Filter out non-numeric values from t1 and t2
  t1 = t1.filter((value) => typeof value === "number");
  t2 = t2.filter((value) => typeof value === "number");

  // Concatenate the arrays
  const temps = t1.concat(t2);
  if (temps.length === 0) {
    console.error("No valid temperatures found");
    return;
  }

  let max = temps[0];
  let min = temps[0];
  // debugger;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

console.log(calcTempLitBug([3, "k", 1], [9, 0, 6]));

//-Filter even num from array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterEven = numbers.filter((num) => num % 2 === 0);
console.log(filterEven);

//-Filtering strings longer than a certain length:
const words = ["apple", "banana", "orange", "grape", "kiwi"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords);

//-Filtering objects based on a property value:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];
const adults = people.filter((person) => person.age >= 18);
console.log(adults); // Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'David', age: 35 }]

//-Filtering out null or undefined values from an array:
const values = [1, null, "hello", undefined, 5, null, "world"];
const filteredValues = values.filter(
  (value) => value !== null && value !== undefined
);
console.log(filteredValues); // Output: [1, 'hello', 5, 'world']

//-Filtering duplicate values from an array:
const number = [1, 2, 3, 2, 4, 5, 3, 6];
const uniqueNumbers = number.filter(
  (value, index, array) => array.indexOf(value) === index
);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

//-----------indexof
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const fruitsToString = fruits.join(" ");
//-convert arr to string 2 methods
console.log(fruitsToString);
console.log(fruits.toString());

// Find the index of 'orange'
const index1 = fruits.indexOf("orange");
console.log(index1); // Output: 2 (index of 'orange' in the array)
// Find the index of 'watermelon' (not in the array)
const index2 = fruits.indexOf("watermelon");
console.log(index2); // Output: -1 (not found in the array)

//----------------CAALBACK func
function doSomething(value) {
  value();
}
doSomething(function () {
  console.log("Hello");
});
//Function passed as an argument to another function
//*Using CALLBACK func allows to call a function from another function

//*eg2
function log(value) {
  console.log(value);
}

function calcSum(num1, num2, print) {
  const sum = num1 + num2;
  print(sum);
}
calcSum(1, 2, log);

//---challenge4
//"... 17ºC in 1days ... 21ºC in 2 days ... 23ºC in 3 days ..."
const forecastedTemp = [17, 21, 23];
const thermometerDisplay = (temp) => {
  let str3 = "";
  for (let i = 0; i < forecastedTemp.length; i++) {
    const days = i;
    str3 += `... ${forecastedTemp[i]}ºC in ${i + 1} days`;
  }
  return console.log(str3);
};

thermometerDisplay(forecastedTemp);
