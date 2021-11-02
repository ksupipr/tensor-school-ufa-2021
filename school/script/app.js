const modalLayout = `
    <div class="modal">
        <div class="modal__wrapper">
            <div class="modal__headline">
                <div class="modal__title">
                    Запись на курс Frontend-разработка
                </div>
                <div class="modal_close btn__close">
                    <svg class="btn__closeCross" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <form action="#" class="modal__body form-signUp">
                <div class="form-signUp__areas">
                    <label for="name" class="form-signUp__item">
                        <p class="form-signUp__description">Имя</p>
                        <input type="text" name="userName" id="name" class="form-signUp__input" placeholder="Введите Ваше имя">
                    </label>
                    <label for="phone" class="form-signUp__item">
                        <p class="form-signUp__description">Телефон</p>
                        <input type="text" name="userPhone" id="phone" class="form-signUp__input" placeholder="+7 (***)">
                    </label>
                </div>
                <div class="form-signUp__bottom">
                    <a href="#" class="btn btn-secondary btn__form_singUp">Записаться</a>
                </div>
            </form>
        </div>
    </div>
`;

function beforeRender(event) {
    event.preventDefault();
    event.stopPropagation()

    render();
}

function render() {
    // псевдо рендер 
    let renderModalLayout = modalLayout;

    mountModal(renderModalLayout, '.wrapper', '.modal');
}

function mountModal(layout, mountPlace, layoutSelector) {
    document.querySelector(mountPlace).insertAdjacentHTML('beforeEnd', layout);

    beforeMountModal(layoutSelector);
}

function beforeMountModal(modalWindow) {
    let btnClose = document.querySelector(modalWindow).querySelector('.btn__closeCross');
    let btnSingUp = document.querySelector(modalWindow).querySelector('.btn__form_singUp');
    
    btnClose.addEventListener('click', closeModal);
    btnSingUp.addEventListener('click', getForm);
}

function closeModal() {
    beforeUnmount();
    unmount('.modal');
}

function beforeUnmount() {
    document.querySelector('.btn__closeCross').removeEventListener('click', closeModal);
    document.querySelector('.btn__form_singUp').removeEventListener('submit', getForm);
}

function unmount(removableElement) {
    document.querySelector(removableElement).remove();
}

function getForm(event) {
    event.preventDefault();

    let formElement = document.querySelector('.form-signUp');
    const form = new FormData(formElement);
    console.log(form.get('userName'));
    console.log(form.get('userPhone'));
}

let btnSingUp = document.querySelector('.btn-signUp');

btnSingUp.addEventListener('click', beforeRender);