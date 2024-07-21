const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMI = (mass, height) => mass / height ** 2;

const BMI_Mark = BMI(massMark, heightMark);
const BMI_John = BMI(massJohn, heightJohn);
console.log(BMI_Mark);

const BMI_higher =
  BMI_John > BMI_Mark
    ? `John's BMI (${BMI_John.toFixed(
        2
      )}) is higher than Mark's (${BMI_Mark.toFixed(2)})!`
    : `Mark's BMI (${BMI_Mark}) is higher than John's (${BMI_John})!`;
console.log(BMI_higher);

//- Type Coercion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log('23' - '10');
console.log('23' / '2');

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

//* Equality
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = 7;

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');

function FooBar(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FooBar');
  } else if (number % 3 === 0) console.log('Foo');
}

FooBar(3);

let char = 'A';
console.log(char.charCodeAt(0));

let strin = 'Neville Kalebi';
console.log(strin.length);
let asciiStrin = [];
for (let i = 0; i < strin.length; i++) {
  asciiStrin.push(strin.charCodeAt(i));
}

console.log(asciiStrin);

//!---------Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

calcTips = bills => {
  const tips = [];
  const Total = [];
  for (let i = 0; i < bills.length; i++) {
    tips.push(
      bills[i] <= 300 && bills[i] >= 50 ? bills[i] * 0.15 : bills[i] * 0.2
    );
    Total.push(bills[i] + tips[i]);
  }

  return { tip: tips, bill: Total };
  // var TotalBill = [Total, tips];
  // return TotalBill;
};
const { tip, bill } = calcTips(bills);
console.log(tip);
console.log(bill);
//---calc the avg of the tip and bill

//BUG FIXME

const calcAvg = (tip, bill) => {
  let sumTips = 0;
  let sumBills = 0;
  for (let i = 0; i < tip.length; i++) {
    sumTips += tip[i];
    sumBills += bill[i];
  }
  const avgTips = sumTips / tip.length;
  const avgBills = sumBills / tip.length;
  return { avgT: avgTips, avgB: avgBills };
};

const { avgT, avgB } = calcAvg(tip, bill);
console.log(avgT);
console.log(avgB);

// const TotalBill = calcTips(bills);
// console.log(TotalBill[0]);
// console.log(TotalBill[1]);

//* Tet Return more than 1 value from a function
//todo  you can return multiple values from a function by wrapping them in an array or an object
//Returning an Array:
//-------------Eg1
function Return2Values() {
  x = 'A';
  y = 'B';
  var t = [x, y]; //*wrap them in array
  return t;
}

const d = Return2Values();
console.log(d[0], d[1]);
console.log(typeof d);

const [e, f] = Return2Values();
console.log(typeof e, e, f);
//---------------------Eg2
function returnMultipleValuesArray() {
  const value1 = 'First value';
  const value2 = 'Second value';
  return [value1, value2];
}

const [result1, result2] = returnMultipleValuesArray();
console.log(result1); // Output: First value
console.log(result2); // Output: Second value

//------------------------------Returning an Object:

function returnMultipleValuesObject() {
  const value1 = 'First value';
  const value2 = 'Second value';
  return { result1: value1, result2: value2 };
}

const { resultO1, resultO2 } = returnMultipleValuesObject();
console.log(resultO1); // Output: First value
console.log(resultO2); // Output: Second value

//---------------

const CutFruitPieces = fruits => fruits * 4;

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${CutFruitPieces(
    apples
  )} aples and ${CutFruitPieces(oranges)} oranges`;
  return juice;
}

console.log(fruitProcessor(4, 7));
const num1 = parseInt('33');
console.log(num1);

function birthYear(year, yeaarNo) {
  return yeaarNo - year;
}
const age1 = birthYear(1976, 2050);
console.log(age1);

const calcAge = function (birthYear, year) {
  return year - birthYear;
};

var x1 = 5;
var updateVal1 = value1 => (value1 = 10);
console.log(updateVal1(x1));
console.log(x1);

function updateVal(object) {
  object.value = 10;
}

var x = { value: 5 };
updateVal(x);
console.log(x.value);

//todo shift  -Removes the fIrst Element in the Array,  & Returns that Element Removed
const sArr = [1, 2, 3, 4, 5, 6];
const removedElement = sArr.shift();
console.log(removedElement);

//todo Add one of multiple element to the beginning of the Array,returns the new len of the Array
console.log(sArr);
const addElement = sArr.unshift(10);
console.log(addElement);
console.log(sArr);
//-------------------------------------------------------
//--Adding with splice() ,can Add or Remove, it modifies the array in place and return the array with the elements added or removed
sArr.splice(1, 0, 1);
console.log(sArr);
sArr.splice(0, 1); //* Start at index 0 and del 1 element
console.log(sArr);

//-slice
/* slice(): This method returns a new array containing elements from the original array based on the specified start and end indices. It doesn't modify the original array  (like splice ) but instead returns a subset of it. If you want to remove elements using slice(), you would need to create a new array with the elements you want to keep.  */
const arrSlice = [10, 20, 30, 40, 50];
const newArraySlice = arrSlice.slice(0, 2);
console.log(newArraySlice);
console.log(arrSlice.slice(2)); //start at index 2
console.log(newArraySlice.concat(arrSlice.slice(2)));

//----------------------------------------------------------------------------------
//done---splice
/* splice(): This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array. splice() takes three parameters: the start index, the number of elements to remove, and optional elements to add. without specifying any parameters, it doesn't remove any elements from the array because it requires at least one parameter to function properly.. */

const arrSplice = [10, 20, 30, 40, 50];
arrSplice.splice(0);
console.log(arrSplice);
arrSplice.splice(0, 5, 10, 20, 30, 40, 50);
console.log(arrSplice);
console.log(arrSlice.slice(0, 0, 5));
//------------------------------------------
const array = [1, 2, 3, 4, 5];
const sliceArr = array.slice(2); //extract elements from index 2

console.log(sliceArr); //shallow copy
console.log(array); //original array same

array[array.length] = 6;
console.log(array);

const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
const slicedArray = originalArray.slice();

// Now let's modify an object in the original array
originalArray[0].id = 100;
originalArray[1].id = 11;
console.log(originalArray);
console.log(slicedArray);

//?new array created by slice() contains new references to the objects (if any) stored in the original array, the objects themselves are not duplicated. Instead, the references to these objects are copied over to the new array.
//?Array.prototype.slice() creates a shallow copy of an array. This means that while the new array is a separate array instance, the elements //?within it are still references to the same objects as those in the original array.As a result, changes to the objects themselves will be reflected in both arrays.
//! ARR

const arr = [1, 2, 3];
const newArr = arr.slice();
const newArr1 = [...arr];
console.log(newArr);
newArr[1] = 5;
console.log(newArr);
console.log(newArr1);

//- Splice Adding, Remove,Replace
newArr1.splice(2, 0, 6);
console.log(newArr1);

newArr1.splice(2, 2); //- At index 2 remove 2 elements
console.log(newArr1);
newArr1.splice(2, 0, 6, 7); // Replace 2 elements starting from index 2 with 6 and 7

console.log(newArr1);

//done OBJECTS
const neville = {
  firstName: 'Neville',
  lastName: 'Kalebi',
  birthYear: 1979,
  job: 'Bank It Tech',
  Mates: ['Anille', 'Lola', 'Money'],
  hasDriverLicense: true,

  calcAge: function () {
    this.age1 = 2024 - this.birthYear;
    return this.age1;
  },

  summary: function () {
    this.summaryText = `${this.firstName} ${
      this.lastName
    } is a ${this.calcAge()} , ${this.age1} year old ${this.job}, and he ${
      this.hasDriverLicense
        ? 'has a Driver License'
        : "doesn't have a Driver License"
    }.`;
    return this.summaryText;
  },
};
// console.log(neville.calcAge());
console.log(neville.summary()); //With Return
console.log(neville.summaryText); //A property
console.log(neville);
console.log(neville.summaryText);

console.log(neville);
console.log(neville.age);
const nameKey = 'Name';
console.log(neville['first' + nameKey]);

const interestedIn = 'firstName';
console.log(neville[interestedIn]);

console.log(neville.calcAge());
console.log(neville['calcAge']());

//done WE CAN OMIT THE RETURN ABOVE SINCE WE HAV?E CREATED A PROPERTY age
console.log(neville.age);
//* this way we dont have to call the function for each, if we had seveeral calls to the function, we onllly calculate the AGE ONCE

//Code Challenge Objects#3
mark = {
  firstName: 'Mark',
  lastName: 'Smith',
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
  },
};
mark.calcBMI();
console.log(mark.BMI.toFixed(2));

john = {
  firstName: 'John',
  lastName: 'Miller',
  height: 1.95,
  mass: 192,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
  },
};
john.calcBMI();
console.log(john.BMI.toFixed(2));

const Test_BMI =
  mark.BMI.toFixed(2) > john.BMI.toFixed(2)
    ? `${mark.firstName}'s BMI (${mark.BMI.toFixed(2)}) is Higher than ${
        john.firstName
      }'s BMI (${john.BMI.toFixed(2)})`
    : `${john.firstName}'s BMI (${john.BMI.toFixed(2)}) is Higher than ${
        mark.firstName
      }'s BMI (${mark.BMI.toFixed(2)})`;
console.log(Test_BMI);

const jonas = [
  'jonas',
  'Schmedtman',
  2024 - 1977,
  'Teacher',
  ['Neville', 'Lola', 'Bronie'],
  true,
];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  console.log(jonas[i], i);
  if (Array.isArray(jonas[i])) {
    console.log(jonas[i], i);
    //* If the current element is an array, loop through its elements
    for (let j = 0; j < jonas[i].length; j++) {
      console.log(jonas[i][j]);
      console.log(' ', jonas[i][j], typeof jonas[i][j]);
    }
  }
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue; //if the element is not a string,Skip iteration next
  console.log(jonas[i], typeof jonas[i]);
}

//---Testing 2D Arr

for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(`i=${i} j=${j}`);
  }
}
var numberGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
console.log(numberGrid.length);
console.log(numberGrid[0]);
console.log(numberGrid[0].length);

for (let i = 0; i <= numberGrid.length; i++) {
  for (let j = 0; j < numberGrid[i].length; j++) {
    console.log(numberGrid[i][j]);
  }
}
