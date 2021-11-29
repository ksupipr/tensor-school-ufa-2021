document.addEventListener('DOMContentLoaded', () => {

    let callBackButton = document.querySelector('.join-button');
    console.log(callBackButton);

    let modal1 = document.querySelector('#modal-1');

    let closeButton = modal1.querySelector('#modal__close-button');

    let tagBody = document.querySelector('body');

    callBackButton.onclick = function (event) {
      event.preventDefault();
      modal1.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }
    
    closeButton.onclick = function (event) {
      event.preventDefault();
      modal1.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
  
    modal1.onmousedown = function (event) {
      let target = event.target;
      let modalContent = modal1.querySelector('.modal__content');
      if (event.target.closest('.' + modalContent.className) === null) {
        this.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
      }
    };  
  });