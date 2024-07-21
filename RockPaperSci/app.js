document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");
  const tryAgainButton = document.getElementById("try-again");

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      // Reset border color for all choices
      choices.forEach((c) => (c.style.borderColor = "white"));

      // Change border color of the clicked choice
      choice.style.borderColor = "red";

      // Add bounce effect
      choice.classList.add("bounce");
      setTimeout(() => {
        choice.classList.remove("bounce");
      }, 500); // Duration of the bounce animation
    });
  });
  // Add event listener to "Try Again" button
  tryAgainButton.addEventListener("click", resetGame);
});
//Bouce    Effect

//intiaiaze Score
let userScore = 0;
let computerScore = 0;
let trails = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const actionMessage = document.getElementById("action-message");

function getComputerChoice() {
  const choicesn = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3); //?scale 0 ,1,2
  return choicesn[randomNumber];
}

function game(userChoice) {
  if (trails < 10) {
    trails++;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateScores(winner);
    displayResult(winner, userChoice, computerChoice);

    if (trails === 10) {
      determineFinalWinner();
      document.getElementById("try-again").style.display = "block"; // Show the Try Again button
    }
  }
}

function determineFinalWinner() {
  let finalMessage;
  if (userScore > computerScore) {
    finalMessage = "Congratulations! You won the game.";
  } else if (userScore < computerScore) {
    finalMessage = "Sorry! The computer won the game.";
  } else {
    finalMessage = "It's a draw! No one wins.";
  }

  actionMessage.textContent = finalMessage;
  // Disable further interactions
  // Disable further interactions
  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice) => {
    choice.style.pointerEvents = "none";
  });
}

function determineWinner(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    return "draw";
  } else if (
    (userChoice === "r" && computerChoice === "s") ||
    (userChoice === "p" && computerChoice == "r") ||
    (userChoice == "s" && computerChoice === "p")
  ) {
    return "user";
  } else {
    return "computer";
  }
}

function updateScores(winner) {
  if (winner === "user") {
    userScore++;
    userScore_span.textContent = userScore;
  } else if (winner == "computer") {
    computerScore++;
    compScore_span.textContent = computerScore;
  }
}

function displayResult(winner, userChoice, computerChoice) {
  const choices = {
    r: "Rock",
    p: "Paper",
    s: "Scissors",
  };

  if (winner === "draw") {
    result_div.textContent = `It's a draw! You both chose ${choices[userChoice]}.`;
  } else if (winner === "user") {
    result_div.textContent = `You win! ${choices[userChoice]} beats ${choices[computerChoice]}.`;
  } else {
    result_div.textContent = `Computer wins! ${choices[computerChoice]} beats ${choices[userChoice]}.`;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

// Start the game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  trails = 0;

  userScore_span.textContent = userScore;
  compScore_span.textContent = computerScore;
  result_div.textContent = "";
  actionMessage.textContent = "Make Your Move";

  // Reset choice borders and re-enable interactions
  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice) => {
    choice.style.borderColor = "white";
    choice.style.pointerEvents = "auto";
  });

  // Hide the Try Again button
  document.getElementById("try-again").style.display = "none";
}

main();
