// create Arrays
//? 1 using Array Literals
let array1 = [1, 2, 3, 4, 5];
//? Performance: Generally, array literals are faster and more performant than using the new Array() constructor.
//? Limited to initialization: You can't use this method to create arrays with a specific length without specifying initial values for each element.
// 2. new Array Constructor Flexible length initializatio
let array2 = new Array(5); //creates an array with 5 empty slots
let array3 = new Array(1, 2, 3, 4, 5);

  // 2d Array
const row = 10;
const columns = 8;
const myArray = new Array(row);

// 2nd way
for (let i = 0; i < row; i++){
   myArray[i] = []; // need to initialize each row as a seperate arraynitialize myArray[i] as an empty array
  for (let j = 0; j < columns; j++){
    myArray[i][j]=null; // Set the value of myArray[i][j]
  }
}
console.log(myArray);


// 3. way

const myArray2 = new Array(row);
for (let i = 0; i < myArray2.length; i++){
  myArray2[i] = new Array(columns);
  
}
console.log(myArray2);