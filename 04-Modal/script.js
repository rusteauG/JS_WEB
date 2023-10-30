'use strict';
//store the selection in varuables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
btnCloseModal.addEventListener('click', function () {
  closeModal();
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  closeModal();
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
});
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//keyboard event
//keydown event -fires as we press down the keyboard✅ thats the One we use!
//keypress event - fires continously as we keep our finger on the keyboard
//keyup event -when we lift our finger off the keyboard
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
