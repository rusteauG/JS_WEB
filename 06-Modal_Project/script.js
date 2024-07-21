'use strict';
const btnShowModals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModals.length; i++) {
  btnShowModals[i].addEventListener('click', function () {
    openModal();
  });
}

overlay.addEventListener('click', closeModal);

// Add event listeners to close modal button and overlay
btnCloseModal.addEventListener('click', function () {
  closeModal();
});

// Optional: Close modal with 'Esc' key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if the model doesn't contain the hidden class - it's Open
    closeModal();
  }
});
