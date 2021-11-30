class ModalWindow {
    constructor(input = "another") {
        this.container = document.createElement('div');
        this.container.classList.add("modal");
        this.modalId = input;
        this.container.innerHTML = this.mounting();
    }
    mounting() {
        if (this.modalId === 'simple') {
            return `
                <div class="modal__content modal__content_course">
                    <span class="modal__closebtn">
                    </span>
                    <h2>Запись на курс</h2>
                    <form action="" method="post">
                        <input type="text" name="username" placeholder="Ваше имя" />
                        <input type="text" name="usersurname" placeholder="Ваша фамилия" />
                        <input type="tel" name="userphone" placeholder="Номер телефона" />
                        <input type="email" name="email" placeholder="E-mail" />
                        <button type="submit" class="button">Записаться</button>
                    </form>
                </div>
            `
        } else return `
                        <div class="modal__content modal__content_list">
                            <span class="modal__closebtn">
                            </span>
                            <h2>Список уроков</h2>
                            <div class="accordion">
                                <div class="accordion__item">
                                    <h3 class="accordion__header">
                                        Дизайн мобильных интерфейсов
                                    </h3>
                                    <div class="accordion__body">
                                        <div class="accordion__content">
                                            <ul>
                                                <li>Основы работы в Фигма</li>
                                                <li>Основы прототипирования</li>
                                                <li>Композиция и цвет</li>
                                                <li>Системная аналитика</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion__item">
                                    <h3 class="accordion__header">
                                        Проектирование UX и прототипирование
                                    </h3>
                                    <div class="accordion__body">
                                        <div class="accordion__content">
                                            <ul>
                                                <li>Основы работы в Фигма</li>
                                                <li>Основы прототипирования</li>
                                                <li>Композиция и цвет</li>
                                                <li>Системная аналитика</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion__item">
                                    <h3 class="accordion__header">
                                        Сбор и анализ пользовательских данных
                                    </h3>
                                    <div class="accordion__body">
                                        <div class="accordion__content">
                                            <ul>
                                                <li>Основы работы в Фигма</li>
                                                <li>Основы прототипирования</li>
                                                <li>Композиция и цвет</li>
                                                <li>Системная аналитика</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion__item">
                                    <h3 class="accordion__header">
                                        Дизайн - менеджмент
                                    </h3>
                                    <div class="accordion__body">
                                        <div class="accordion__content">
                                            <ul>
                                                <li>Основы работы в Фигма</li>
                                                <li>Основы прототипирования</li>
                                                <li>Композиция и цвет</li>
                                                <li>Системная аналитика</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
    }
    open() {
        let insertIn = document.querySelector("#mainheader");
        insertIn.insertAdjacentElement('afterend', this.container);
        this.container.style.display = "block";
        document.body.classList.toggle("no-scroll");
        this.closeBtn = document.querySelector(".modal__closebtn");
        if (this.input !== "simple") {
            const accordionHeaders = document.querySelectorAll(".accordion__header");
            accordionHeaders.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("active");
                    const accordionBody = item.nextElementSibling;
                    if (item.classList.contains("active")) {
                        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
                    } else {
                        accordionBody.style.maxHeight = 0;
                    }
                });
            });
        }
        this.closeBtn.addEventListener("click", event => {
            this.closeModal();
        }, { once: true });
        window.addEventListener("click", (event) => {
            if (event.target === this.container) {
                this.closeModal();
            }
        });
    }
    closeModal() {
        this.container.style.display = "none";
        document.body.classList.toggle("no-scroll");
        this.container.remove();
    }
}
let enrollButtons = document.querySelectorAll(".button");
enrollButtons.forEach((button) => {
    button.addEventListener('click', event => {
        event.preventDefault();
        if (button.classList.contains('card__button') || button.classList.contains('reviews__button')) {
            console.log("hello");
            openModal = new ModalWindow('simple');
        } else {
            openModal = new ModalWindow('another');
        }
        openModal.open();
    });
});

