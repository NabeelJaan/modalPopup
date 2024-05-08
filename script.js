'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Open modal function
const openModal = function () {
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
}

// close model function
const closeModal = function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
   btnsOpenModal[i].addEventListener('click', openModal);
}

btncloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


