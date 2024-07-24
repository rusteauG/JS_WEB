//Define game variables
let SecretNumber = Math.floor(Math.random() * 2) + 1;
let guesses = 0;
const guess = playGame();

// Create the h1 element in the global scope
let h1Element = document.createElement("h1"); // Create

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
//Note* When using prompt, if the user cancels the input, it returns null. However, when parseInt is applied to null, it results in NaN. You can handle this by checking for null before converting the input to a number.

function playGame() {
  let guess = null;
  while (guess !== SecretNumber) {
    guess = prompt("Enter a number between 1 and 2:");

    // Handle the case where the user cancels the prompt
    if (guess === null) {
      console.log("Game cancelled by the User.");
      // let h1 = document.createElement("h1"); // Create the h1 element
      h1Element.textContent = "Game cancelled by the user."; // Set its text content
      document.body.appendChild(h1Element); // Append the h1 element to the body
      break;
    }
    // Convert input to a number and validate
    guess = parseInt(guess);

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
}

h1Element.textContent = guess; //Set
document.body.appendChild(h1Element); //append
