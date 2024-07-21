const fast = `⚡`;
const slow = `🐌`;
console.log(`go ${fast},not ${slow}`);

const friends = ["neville", "Panashe", "Lola"];
const firstName = friends[0];
const nev = [firstName, "Kalebi", 2024 - 1997, "teacher", friends];
console.log(nev);

//<ARRAY METHODS

//- ADD to the End of Array   .push(), retruns new len
let newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//- ADD to beginning  .unshift()

newLength = friends.unshift("Lola");
console.log(friends);
console.log(newLength);

//done: To fix this | .toLowerCase() is a string method Not Array Method

const lowerCaseFriends = [];
for (let i = 0; i < friends.length; i++) {
  lowerCaseFriends.push(friends[i].toLowerCase());
}
lowerCaseFriends;

//-ADD at a particular index  -> array.splice(startIndex, deleteCount, item1, item2, ...)
//-  startIndex: The index at which to start changing the array (required)
// - deleteCount: The number of elements to remove (optional)
// - item1, item2, ...: The elements to add to the array (optional)
const array = [1, 2, 3, 4, 5];
array.splice(2, 0, "newElement"); // Add 'newElement' at index 2
console.log(array);

//- Remove
//- Remove the last Element  .pop()  ->Returns the  element remove
array.pop();
array;

const elementPopped = array.pop();
elementPopped;

//- Remove the begining Element
array;
array.shift();
array;

//* index Where Element is Located
friends;
console.log(friends.indexOf("neville"));
console.log(friends.indexOf("Neville"));

console.log(friends.includes("Lola"));
console.log(friends.includes("lola"));

//* Convert both strings to lower case and then check for inclusion
const string = "Hello, world!";
const searchString = "hello";

const includesCaseInsensitive = string
  .toLowerCase()
  .includes(searchString.toLowerCase());
console.log(includesCaseInsensitive);

friends;
if (friends.includes("Neville".toLowerCase())) {
  console.log(`you have a new friend`);
}
//-----------------------------------------------------------------------

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [1978, 1979, 1981, 1985, 1981, 1982];
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
  calcAge(years[4]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
//-----------------------------------------------------------------
//-Tips Exercise2 with Arrays

const bill = [125, 555, 44];

const tips = [];
for (let i = 0; i < bill.length; i++) {
  tips.push(bill[i] <= 300 && bill[i] >= 50 ? bill[i] * 0.15 : bill[i] * 0.2);
  bill[i] = tips[i] + bill[i];
}

tips;

bill;



//- With Function
// function CalcTip(bills) {
//   const tip = [];
//   const updatedBills = [];

//   for (let i = 0; i < bills.length; i++) {
//     tip.push(
//       bills[i] <= 300 && bills[i] >= 50 ? bills[i] * 0.15 : bills[i] * 0.2
//     );
//     updatedBills.push(bills[i] + tips[i]);
//   }
//   return [tips, updatedBills];
// }
// const bills = [125, 555, 44];
// const resultArray = CalcTip(bills);
// console.log(resultArray[0]);
// const updatedBills = resultArray[1];
// console.log(updatedBills);
// console.log("Tips:", tips);
// console.log("Updated bills with tips included:", updatedBills);
//!!WROOOOOONG HERE
const CalcTips = (bills) => {
  const Tips = [];
  const UpdateBills = [];
  for (let i = 0; i < bills.length; i++) {
    Tips.push(
      bills[i] <= 300 && bills[i] >= 50 ? bills[i] * 0.15 : bills[i] * 0.2
    );
    UpdateBills.push(bills[i] + Tips[i]);
  }
  return [Tips, UpdateBills];//Return 2 vals
};

const bills = [125, 555, 44];
const returnUpdatedBills = CalcTips(bills);
console.log(returnUpdatedBills[1]);//Totals Bill
const tipsReturn = returnUpdatedBills[0];
console.log(tipsReturn);

console.log(returnUpdatedBills[1]);
const UpdatedBills = returnUpdatedBills[1];
console.log(UpdatedBills);

//done  Returned an Object of both Arrays

function calcTip(billArray) {
  const tips_1 = [];
  const updatedBills = [];

  for (let i = 0; i < billArray.length; i++) {
    const tip =
      billArray[i] <= 300 && billArray[i] >= 50
        ? billArray[i] * 0.15
        : billArray[i] * 0.2;
    tips_1.push(tip);
    updatedBills.push(billArray[i] + tip);
  }

  return { tips_1, updatedBills }; //* The function returns an object containing both arrays.
}

//* Outside the function, we call calcTip() with the bill array, and then we destructure the returned object to extract the tips and updatedBills arrays.
const bill_1 = [125, 555, 44];
const { tips_1, updatedBills } = calcTip(bill_1);
//* when you return an object from a function and use object destructuring to extract its properties, the variable names used in the destructuring assignment should match the property names of the object.

console.log("Original bills:", bill_1);
console.log("Tips:", tips_1);
console.log("Updated bills with tips included:", updatedBills);

//* If the property names in the object returned by the function were different, you'd need to use those names in the destructuring assignment to match them correctly. For example:
//done return { tipArray: tips, updatedBillArray: updatedBills };
//*Then, when you destructure outside the function, you'd use the same property names:
//done  const { tipArray, updatedBillArray } = calcTip(bill);

//--------------------------------------------------------
//-Testing
function CreateArray() {
  return [1, 2, 3, 4, 5];
}
const myArray = CreateArray();

console.log(typeof myArray, myArray);

//-----------------------------------
//*OBJECTS
const neville = {
  firstName: "Neville",
  lastName: "Kalebi",
  age: 2024 - 1976,
  job: "Teacher",
  friends: ["Anille", "Pike", "monpe"],
};
///- using dot Notation
console.log(neville.firstName);
console.log(neville.age);
//--Using Bracket Notation - we can put any Expression in Bracket, no need for a string inside the bracket , we can compute from an operation inside the bracket
console.log(neville["job"]);

//*the Repeating Part  -->Name  in firstName and lasstName
const nameKey = "Name";
console.log(neville["first" + nameKey]);
console.log(neville["last" + nameKey]);
const fullName = neville["first" + nameKey] + " " + neville["last" + nameKey];
fullName;

const interestedIn = "firstName";
console.log(neville[interestedIn]); //*if we get undefeined , we know it's a Falsy logic

console.log(
  neville[interestedIn] !== undefined //*explicitly checking for the absence of undefined
    ? `${interestedIn} is ${neville[interestedIn]}`
    : `No Such Property Exists in the Object`
);

//- Adding a property
neville.location = "Portugal";
neville["Email"] = "nevkale@outlook.com";

neville;
