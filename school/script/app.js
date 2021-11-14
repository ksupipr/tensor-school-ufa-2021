'use strict'

import Modal from '../script/classes/Modal.js';

function createModalWindow(event) {
    event.preventDefault();

    const modalWindow = new Modal();
    modalWindow.beforeMount();
}

const btnSingUp = document.querySelector('.btn-signUp');
btnSingUp.addEventListener('click', createModalWindow);

