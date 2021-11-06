import Component from "./Component.js";

export default class Modal extends Component {
    className = 'modal';

    /**
     * рендер модального окна
     * @returns верстку
     */
    renderModalWindow() {
        let modal = this.createClassElement('div', this.className);
        modal.insertAdjacentHTML(
            'afterbegin',
            `<div class="modal__wrapper">
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
            </div>`
        );
        return modal;
    };

    /**
     * передает в метод mount верстку и элемент куда смонтировать
     */
    beforeMount() {
        this.mount(this.renderModalWindow(), '.wrapper');
    }

    /**
     * ищет элемент куда смонтировать
     * @param {String} layuot верстка
     * @param {String} targetElement элемент куда смонтировать
     */
    mount(layuot, targetElement) {
        let element = document.querySelector(targetElement);

        element.append(layuot)
        this.afterMount();
    }

    /**
     * подписываемся на кнопки в модальном окне
     */
    afterMount() {
        let closeBtn = document.querySelector('.btn__close');
        this.setSubscribeFunction('closeModalWindow', this.closeModalWindow.bind(this));
        this.subscibe(closeBtn, 'click', this.getSubscribeFunction('closeModalWindow'));

        let sendBtn = document.querySelector('.btn__form_singUp');
        this.setSubscribeFunction('singUp', this.singUp.bind(this));
        this.subscibe(sendBtn, 'click', this.getSubscribeFunction('singUp'));
    }

    /**
     * инициализирует удаление модального окна
     */
    closeModalWindow() {
        this.beforeUnmount();
        this.unmount();
    }

    /**
     * отписываемся от событий на кнопках в модальном окне
     */
    beforeUnmount() {
        let closeBtn = document.querySelector('.btn__close');
        this.unsubscibe(closeBtn, 'click', this.getSubscribeFunction('closeModalWindow'));

        let sendBtn = document.querySelector('.btn__form_singUp');
        this.unsubscibe(sendBtn, 'click', this.getSubscribeFunction('singUp'));
    }

    /**
     * удоляет модальное окно
     */
    unmount() {
        document.querySelector('.modal').remove();
    }

    /**
     * получает объект формы и передает в метод sendForm
     * @param {Object} event 
     */
    singUp(event) {
        event.preventDefault();

        let formElement = document.querySelector('.form-signUp');
        const form = new FormData(formElement);
        this.sendForm(form);

        this.closeModalWindow();
        alert('Вы записались');
    }

    /**
     * имитация отправки формы на сервер
     * @param {Object} form объект формы
     */
    sendForm(form) {
        console.log(form.get('userName'));
        console.log(form.get('userPhone'));
    }
}