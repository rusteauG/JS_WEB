'use strict';

let randNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameOver = false; // New variable to track game state

document.querySelector('.emoji-cont').style.display = 'none';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function handleScore(guess) {
  if (score > 0) {
    displayMessage(
      guess > randNum ? 'Guess is Too High📈' : 'Guess is Too Low📉'
    );
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('body').style.backgroundColor = '#FFaE25';
    document.querySelector('.emoji-cont').style.display = 'inline';

    //Disable the button and set gameOver to true
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true; // Disable the input field
    displayMessage('👎🏻Game Over Try Again');
    gameOver = true;
  }
}

function handleWin() {
  displayMessage('You Guessed Correctly!🎉');
  document.querySelector('.number').textContent = randNum;
  // Update Body Styles
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';

  // HighScore
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  // Disable the button and set gameOver to true
  document.querySelector('.emoji-cont').style.display = 'inline';
  gameOver = true;
  document.querySelector('.check').disabled = true;
  document.querySelector('.guess').disabled = true; // Disable the input field
}

// Listen for Event on the check button
document.querySelector('.check').addEventListener('click', function () {
  if (gameOver) return; // If game is over, exit the function

  let guess = parseInt(document.querySelector('.guess').value); // Convert to number from string
  console.log(guess, randNum);

  // No input
  if (isNaN(guess)) {
    displayMessage('Please enter a valid number!');
    return; // Exit the function if the input is not a valid number
  }
  // Check if the guess is equal to the random number
  if (guess === randNum) {
    handleWin();
  } else {
    // If guess is not equal to randNum, decrement score and display appropriate message
    handleScore(guess);
  }
});

// Additional checks for guess outside the event listener
document.querySelector('.guess').addEventListener('input', function () {
  let guess = parseInt(document.querySelector('.guess').value);
  if (!isNaN(guess) && guess !== randNum) {
    // Additional logic for when guess is not equal to randNum
    handleScore(guess);
  }
  // Check for win condition
  if (guess === randNum && !gameOver) {
    handleWin(); // Call handleWin function when player wins
  }
});

// Again Listener
document.querySelector('.again').addEventListener('click', function () {
  console.log('Again:' + gameOver);
  if (gameOver) {
    randNum = Math.floor(Math.random() * 20) + 1;

    // Reset Score
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').disabled = false; // Enable the input field

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.emoji-cont').style.display = 'none';
    displayMessage('Try Again: Enter Number');
  }
  gameOver = false; // Reset gameOver before checking it
});

// 'use strict';

// let randNum = Math.floor(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// let gameOver = false; // New variable to track game state
// document.querySelector('.emoji-cont').style.display = 'none';

// function handleScore(guess) {
//   if (score > 0) {
//     document.querySelector('.message').textContent =
//       guess > randNum ? 'Guess is Too High📈' : 'Guess is Too Low📉'; //DONE REFActor
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('body').style.backgroundColor = '#FFEE22';
//     document.querySelector('.emoji-cont').style.display = 'inline';

//     //Disable the button and set gameOver to true
//     document.querySelector('.check').disabled = true;
//     document.querySelector('.guess').disabled = true; // Disable the input field

//     gameOver = true;
//   }
// }

// //Listen for Event on the check button
// document.querySelector('.check').addEventListener('click', function () {
//   if (gameOver) return; // If game is over, exit the function

//   let guess = parseInt(document.querySelector('.guess').value); //convert to number from string
//   console.log(guess, randNum);

//   //No input
//   if (isNaN(guess)) {
//     document.querySelector('.message').textContent =
//       'Please enter a valid number!';
//     return; // Exit the function if the input is not a valid number
//   }
//   // Check if the guess is equal to the random number
//   if (guess === randNum) {
//     document.querySelector('.message').textContent = 'You Guessed Correctly!🎉';
//     document.querySelector('.number').textContent = randNum;
//     //update Body Styles
//     document.querySelector('body').style.backgroundColor = '#60b347';

//     document.querySelector('.number').style.width = '30rem';

//     //HighScore
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     //Disable the button and set gameOver to true
//     document.querySelector('.emoji-cont').style.display = 'inline';
//     gameOver = true;
//     document.querySelector('.check').disabled = true;

//     //When Guess !== ranNum
//   } else {
//     // If guess is not equal to randNum, decrement score and display appropriate message
//     handleScore(guess);
//   }
//   //guess too High
//   // } else if (guess > randNum) {
//   //   if (score > 0) {
//   //     document.querySelector('.message').textContent = 'Guess is Too High👅';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'You Lost the Game';
//   //     //Disable the button and set gameOver to true
//   //     // Update Body Styles
//   //     document.querySelector('body').style.backgroundColor = '#FF00CC';
//   //     document.querySelector('.emoji-cont').style.display = 'inline';

//   //     document.querySelector('.check').disabled = true;
//   //     gameOver = true;
//   //   }

//   //   //guess Too Low
//   // } else if (guess < randNum) {
//   // if (score > 0) {
//   //   document.querySelector('.message').textContent = 'Guess is Too Low!😪';
//   //   score--;
//   //   document.querySelector('.score').textContent = score;
//   // } else {
//   //   document.querySelector('.message').textContent = 'You Lost the Game';
//   //   document.querySelector('body').style.backgroundColor = '#FFCC00';
//   //   document.querySelector('.emoji-cont').style.display = 'inline';

//   //   //Disable the button and set gameOver to true
//   //   document.querySelector('.check').disabled = true;
//   //   gameOver = true;
//   // }
// });

// // Additional checks for guess outside the event listener
// document.querySelector('.guess').addEventListener('input', function () {
//   let guess = parseInt(document.querySelector('.guess').value);
//   if (!isNaN(guess) && guess !== randNum) {
//     // Additional logic for when guess is not equal to randNum
//     handleScore(guess);
//   }
// });

// //Again Listener
// // gameOver = true> player has WIN,
// //Reset
// document
//   .querySelector('.again')

//   .addEventListener('click', function () {
//     console.log('Again:' + gameOver);
//     if (gameOver) {
//       randNum = Math.floor(Math.random() * 20) + 1;

//       //Reset Score
//       score = 20;
//       document.querySelector('.number').textContent = '?';
//       document.querySelector('.number').style.width = '15rem';
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.guess').value = '';
//       document.querySelector('.check').disabled = false;
//       document.querySelector('.guess').disabled = false; // Disable the input field

//       document.querySelector('body').style.backgroundColor = '#222';
//       document.querySelector('.emoji-cont').style.display = 'none';
//       document.querySelector('.message').textContent =
//         'Try Again: Enter Number';
//     }
//     gameOver = false;
//   });
