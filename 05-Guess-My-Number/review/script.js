'use strict';

let randNum = Math.floor(Math.random() * 7 + 1);
let score = 20;
let highscore = 0;
let gameOver = false; //var to track game state

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

// const message = document.querySelector('.message');
// const number = document.querySelector('.number');
// let testNumber = document.querySelector('.test');
// let btnCheck = document.querySelector('.check');
// let input = document.querySelector('.guess');

// //  Again button
// const btnAgain = document.querySelector('.again');
// btnAgain.style.display = 'none';

// document.querySelector('.score').textContent = score;
// function handleCheck() {
//   //event handler function
//   const guess = Number(input.value);
//   testNumber.textContent = randNum;

//   // score used up
//   if (score > 1) {
//     // when there is no input
//     if (!guess) {
//       message.textContent = `👀 No Number`;

//       // when player wins
//     } else if (guess === randNum) {
//       // highScore

//       if (score > highscore) {
//         highscore = score;
//         document.querySelector('.highscore').textContent = score;
//       }
//       // Compare and update if the new score is higher

//       message.textContent = `Correct 👌`;
//       // show randNum on correct guess
//       number.textContent = `${randNum}`;
//       document.querySelector('body').style.backgroundColor = '#60b347';
//       document.querySelector('.number').style.width = '30rem';
//       // disble the check btn
//       btnCheck.style.display = 'none';

//       // tryAgin
//       // show again btn
//       btnAgain.style.display = 'inline-block';
//     } else if (guess !== randNum) {
//       const str = guess > randNum ? `📈 Guess Too High` : `📉 Guess Too Low`;
//       message.textContent = str;
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//     // when guess is too Low
//     // } else if (guess < randNum) {
//     //   message.textContent = `📉 Guess Too Low`;
//     //   score--;
//     //   document.querySelector('.score').textContent = score;

//     //   // When guess is Too High
//     // } else {
//     //   message.textContent = `📈 Guess Too High`;
//     //   score--;
//     //   document.querySelector('.score').textContent = score;
//     // }
//   } //score used up  GAMEOVER
//   else {
//     message.textContent = `👻 You Lost the Game`;
//     document.querySelector('.score').textContent = 0;
//   }
// }

// // listen for Event on click
// btnCheck.addEventListener('click', handleCheck);

// // btnAgain Handler
// btnAgain.addEventListener('click', function () {
//   // reset values

//   score = 20;
//   randNum = 0;
//   input.value = '';
//   document.querySelector('.score').textContent = score;

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';

//   number.textContent = '?';
//   message.textContent = `Start guessing... `; //reset message
//   // show the check btn
//   btnCheck.style.display = 'inline-block';
//   btnAgain.style.display = 'none';
// });

// Programmatically trigger the button's click event
// window.addEventListener('load', () => {
//   input.value = 1;
//   btnCheck.click(); // This simulates a click on the button and triggers the handleCheck function
// });
