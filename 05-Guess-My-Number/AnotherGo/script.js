"use strict";
const btnCheck = document.querySelector(".check");

const number = document.querySelector(".number");
const message = document.querySelector(".message");
const btnAgain = document.querySelector(".again");
const guessInput = document.querySelector(".guess"); // Store the input element

btnAgain.style.display = "none";

let randomNumber = Math.floor(Math.random() * 20) + 1;

number.textContent = "?";

let score = 20;
let highscore = 0;

btnCheck.addEventListener("click", function () {
  const guessValue = guessInput.value;
  // Access user input directly

  // CHECK IF EMPTY VALUE
  if (!guessValue) {
    message.textContent = "⛔️ No number!";
    return;
  }
  const guess = parseInt(guessValue); // Convert to integer for comparison
  if (isNaN(guess)) {
    message.textContent = "⛔️ Please enter a valid number!";
    return;
  }

  if (guess >= 1) {
    // when plaYER WINS
    if (guess === randomNumber) {
      wins();
      // When guess is too High
    } else if (guess > randomNumber) {
      if (score > 1) {
        message.textContent = "📈 Too high!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        score = 0;
        message.textContent = "You  Lost the Game";
        document.querySelector(".score").textContent = score;
      }
      // When guess is too Low
    } else if (guess < randomNumber) {
      if (score > 1) {
        message.textContent = "📉 Too low!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        score = 0;
        message.textContent = "You  Lost the Game";
        document.querySelector(".score").textContent = score;
      }
    } else {
      message.textContent = "🐷Oii🐷nnn🐷n🐷Kkkkk🐷!🐷";
    }
  }
});

btnAgain.addEventListener("click", function () {
  number.textContent = "?";
  guessInput.value = ""; // Clear guess input
  randomNumber = Math.floor(Math.random() * 20) + 1;

  message.textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#333";
  number.style.width = "15rem";
  guessInput.disabled = false;
  btnCheck.disabled = false;
  btnAgain.style.display = "none";
});
function wins() {
  message.textContent = "🎉 Correct Number!";
  document.querySelector("body").style.backgroundColor = "#60b347";
  number.textContent = randomNumber;
  number.style.width = "30rem";
  // diable input and button
  guessInput.disabled = true;
  btnCheck.disabled = true;
  btnAgain.style.display = "inline-block";

  if (highscore <= score) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
}
guessInput.addEventListener("input", () => {
  // Range validation and updating message based on validationMessage (optional)
  if (guessInput.value < 1 || guessInput.value > 20) {
    guessInput.setCustomValidity("Please enter a number between 1 and 20 ");
    message.textContent = guessInput.validationMessage; // Update message based on validationMessage
  } else {
    guessInput.setCustomValidity("");
    message.textContent = ""; // Clear message element
  }
});
