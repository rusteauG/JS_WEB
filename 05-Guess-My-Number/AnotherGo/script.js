"use strict";
const btnCheck = document.querySelector(".check");

const number = document.querySelector(".number");

const btnAgain = document.querySelector(".again");
const guessInput = document.querySelector(".guess"); // Store the input element

btnAgain.style.display = "none";

let randomNumber = Math.floor(Math.random() * 20) + 1;

number.textContent = "?";

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

btnCheck.addEventListener("click", function () {
  const guessValue = guessInput.value;
  const guess = parseInt(guessValue); // Convert to integer for comparison
  // Access user input directly

  // CHECK IF EMPTY VALUE
  if (!guessValue) {
    displayMessage("⛔️ No number!");
    return;
  }
  if (isNaN(guess)) {
    displayMessage("⛔️ Please enter a valid number!");
    return;
  }

  if (guess >= 1) {
    checkWin(guess > randomNumber ? "toohigh" : "toolow");
  }
  // When guess is too High
  // } else if (guess > randomNumber) {
  //   if (score > 1) {
  //     displayMessage("📈 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     score = 0;
  //     displayMessage("You Lost the Game";
  //     document.querySelector(".score").textContent = score;
  //   }

  //   // When guess is too Low
  // } else if (guess < randomNumber) {
  //   if (score > 1) {
  //     displayMessage("📉 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     score = 0;
  //     displayMessage("You Lost the Game";
  //     document.querySelector(".score").textContent = score;
  //   }
  else {
    displayMessage("🐷Oii🐷nnn🐷n🐷Kkkkk🐷!🐷");
  }
  // }
});

btnAgain.addEventListener("click", function () {
  number.textContent = "?";
  guessInput.value = ""; // Clear guess input
  randomNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#333";
  number.style.width = "15rem";
  guessInput.disabled = false;
  btnCheck.disabled = false;
  btnAgain.style.display = "none";
});
function wins() {
  displayMessage("🎉 Correct Number!");
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
    displayMessage(guessInput.validationMessage); // Update message based on validationMessage
  } else {
    guessInput.setCustomValidity("");
    displayMessage(""); // Clear message element
  }
});

function checkWin(output) {
  if (output === "toohigh") {
    score--;
    displayMessage("📈 Too high!");
  } else if (output === "toolow") {
    score--;
    displayMessage("📉 Too low!");
  }
  if (score === 0) {
    displayMessage("You Lost the Game");
  } else {
    document.querySelector(".score").textContent = score;
  }

  if (Number(guessInput.value) === randomNumber) {
    wins();
  }
}
