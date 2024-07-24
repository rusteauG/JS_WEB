//Define game variables
let SecretNumber = Math.floor(Math.random() * 2) + 1;
let guesses = 0;
const guess = playGame();

let h1Element = document.createElement("h1"); //create

function guessNumber(guess) {
  guesses++;
  if (SecretNumber === guess) {
    console.log(
      `Congratulations! You guessed the number in ${guesses} attempts.`
    );

    return true;
  } else if (guess < SecretNumber) {
    console.log("Too low! Try again.");
    return false;
  } else {
    console.log("Too high! Try again.");
    return false;
  }
}

function playGame() {
  let guess = null;
  while (guess !== SecretNumber) {
    guess = parseInt(prompt("Enter a number between 1 and 2:"));

    // Check if the guess is a valid number and within the range
    if (isNaN(guess) || guess < 1 || guess > 2) {
      console.log("Invalid input. Please enter a number between 1 and 2.");
      continue; // Continue the loop without counting this as an attempt
    }

    if (guessNumber(guess)) {
      break;
    }
  }
  return guess;
  2;
}

h1Element.textContent = guess; //Set
document.body.appendChild(h1Element); //append
