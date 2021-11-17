/**
 * Class PopupApplication - попап для записи на курс
 */

class PopupApplication {
    constructor(selector) {
        this.$el = document.querySelector(selector)
        this.container = document.createElement('div')
        this.container.setAttribute('class', 'application__model')
        this.container.innerHTML = (new DOMParser()).parseFromString(this.render(), "text/html").body.innerHTML
        this.$el.insertAdjacentElement('beforeend', this.container)
    }

    render() {
        return `
            <div class="application__content model__content_animate">
                <div class="application-modal__close-button">+</div>
                <div class="application__form">
                    <div class="application__header">
                        <h1 class="application_title">Заявка на записи к уроку</h1>
                        <p class="application__text">мы свяжимся с Вами в ближайшее время</p>
                        <div class="application__img">
                            <div class="application__underline"></div>
                            <img src="img/hat.svg" alt="Hat application modal" class="application__image">
                            <div class="application__underline"></div>
                        </div>
                    </div>
                    <form action="" class="signup__form">
                        <div class="form__container">
                            <div class="form__row">
                                <input type="text" placeholder="Pseudo*" name="username" required>
                            </div>
                            
                            <div class="form__row">
                                <input type="text" placeholder="Ф.И.О*" name="username" required>
                            </div>
                    
                            <div class="form__row">
                                <input type="email" placeholder="Email*" name="email" required>
                            </div>
                            
                            <div class="form__row">
                                <input type="tel" placeholder="+7 900 000 00 00" name="pseudo" required>
                            </div>

                            <div class="form__row">
                                <select class="application__selected">
                                    <option value="">Python - Курс</option>
                                    <option value="">Javascript - Курс</option>
                                    <option value="">HTML & CSS- курс</option>
                                </select>
                            </div>
                            
                            <div class="form__row">
                                <input type="text" placeholder="Место жительства" name="living_place" required>
                            </div>

                            <div class="form__row">
                                <input type="text" placeholder="Место работы" name="work_place" required>
                            </div>

                            <div class="form__row">
                                <textarea placeholder="Сообщение..." name="message" rows="5"></textarea>
                            </div>

                            <div class="form__row">
                                <button type="submit">Отправить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>`
    }

    hide() {
        this.container.remove()
    }
}


let app_button = document.querySelector(".lesson__enroll-button")
app_button.addEventListener('click', function() {
    const modal_popupApplication = new PopupApplication('.wrapper');
    document.querySelector('.application-modal__close-button').addEventListener('click', () => modal_popupApplication.hide())
    window.onclick = function(event) {
        if (event.target == document.querySelector('.application__model')) {
            modal_popupApplication.hide()
        }
    }
})
