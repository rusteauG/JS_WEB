'use strict';
// Initialize active player

const score0El = document.querySelector('#score--0');
//same
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// Initialize scores
score0El.textContent = 0;
score1El.textContent = 0; // Hide the dice image (Create a Hidden Class)
diceEl.classList.add('hidden');

let currentScore, activePlayer, playing;
const scores = [0, 0];

const init = function () {
  activePlayer = 0;
  playing = true;
  // Reset the scores array to [0, 0]
  // Initialize the scores array and set its elements to 0
  scores.fill(0);
  currentScore = 0;
  // Reset UI scores
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  // Remove winner class and set active player class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  // Hide dice image
  diceEl.classList.add('hidden');
};

init();

//Roll dice func
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generating Randomm Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.Display dice
    diceEl.src = `img/dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    //3.Check for rolled 1: If true ,switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //dynamically set the score
      // current0El.textContent = currentScore;
    } else {
      //Switch to next player
      //reset currrentScore

      switchPlayer();
    }
  }
});

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //shorthand
  //Remove active class from current player and add it to the other player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current score to active player
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.Check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      //Finish Game
      playing = false;

      //hide dice
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
