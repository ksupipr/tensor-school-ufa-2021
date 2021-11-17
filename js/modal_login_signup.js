/**
 * Class Popup - попап для логина или регистрации на сайт
 */

class Popup {
    constructor(selector) {
        this.$el = document.querySelector(selector)
        this.container = document.createElement('div')
        this.container.setAttribute('class', 'modal')
        this.container.innerHTML = (new DOMParser()).parseFromString(this.render(), "text/html").body.innerHTML
        this.afterRender()
        this.$el.insertAdjacentElement('beforeend', this.container)
    }

    render() {
        return `
            <div class="modal__content model__content_animate">
                <div class="modal__close-button">+</div>
                <div class="modal__left">
                    <div class="modal__left-logo">
                        <a href="index.html" class="logo__link">
                            <img class="logo__img" src="img/logo.jpg" alt="Логотип компании Тензор">
                            <span class="logo__text">TensorSchool</span>
                        </a>
                    </div>
                    <div class="modal__left-center">
                        <div class="modal__left-bar"></div>
                        <div class="modal__left-text">
                            <span class="modal__text">Начать ваше</span>
                            <span class="modal__text">обучение с</span>
                            <span class="modal__text">TensorSchool</span>
                        </div>
                    </div>
                </div>
                <div class="modal__right">
                    <div class="modal__login-signup">
                        <nav class="login-signup__navbar">
                            <ul class="login-signup__list">
                                <li class="login-signup__item login-signup__item_active"><a href="#" class="login-signup__link">Войти</a></li>
                                <li class="login-signup__item"><a href="#" class="login-signup__link">Регистрация</a></li>
                            </ul>
                        </nav>
                        <div class="login-signup__form">
                            <!-- Login form -->
                            <form action="" class="login__form">
                                <div class="form__container">
                                    <div class="form__row">
                                        <label for="username"><b>Логин</b></label>
                                        <input type="text" placeholder="Enter Username" name="username" required>
                                    </div>
                              
                                    <div class="form__row">
                                        <label for="password"><b>Пароль</b></label>
                                        <input type="password" placeholder="Enter Password" name="passeword" required>
                                    </div>
                                    
                                    <div class="form__row">
                                        <button type="submit">Вход</button>
                                        <label>
                                            <input type="checkbox" checked="checked" name="remember"> Запомни меня
                                        </label>
                                    </div>
                                  </div>
                                  <div class="form__footer-container">
                                        <div class="password">Или <a href="#">Забыли пароль?</a></div>
                                  </div>
                            </form>

                            <!-- Registration form -->
                            <form action="" class="signup__form form__deactivated">
                                <div class="form__container">
                                    <div class="form__row">
                                        <label for="username"><b>Ф.И.О</b></label>
                                        <input type="text" placeholder="Ф.И.О" name="username" required>
                                    </div>
                            
                                    <div class="form__row">
                                        <label for="email"><b>Email</b></label>
                                        <input type="email" placeholder="Email" name="email" required>
                                    </div>
                                    
                                    <div class="form__row">
                                        <label for="pseudo"><b>Pseudo</b></label>
                                        <input type="text" placeholder="Pseudo" name="pseudo" required>
                                    </div>

                                    <div class="form__row">
                                        <label for="password"><b>Пароль</b></label>
                                        <input type="password" placeholder="Enter Password" name="passeword" required>
                                    </div>

                                    <div class="form__row">
                                        <label>
                                            <input type="checkbox" checked="checked" name="remember"> Создавая учетную запись, я соглашаюсь с политикой конфиденциальности.
                                        </label>
                                        <button type="submit">Зарегистрироваться</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`
    }

    hide() {
        this.container.remove()
    }

    afterRender() {
        let form__link = this.container.querySelectorAll(".login-signup__item");
        let login__form = this.container.querySelector('.login__form');
        let signup__form = this.container.querySelector('.signup__form');
    
        form__link.forEach(function(current) {
            current.addEventListener('click', function(){
                form__link.forEach(function(element) {
                    element.classList.remove('login-signup__item_active')
                })
                current.classList.add('login-signup__item_active')
                if(current.textContent == "Войти") {
                    login__form.classList.remove('form__deactivated')
                    signup__form.classList.add('form__deactivated')
                }else if(current.textContent == "Регистрация") {
                    login__form.classList.add('form__deactivated')
                    signup__form.classList.remove('form__deactivated')
                }
            })
        })
    }
}

let auth_button = document.querySelector(".header__authentication-button")
auth_button.addEventListener('click', function() {
    const modal_pop = new Popup('.wrapper');
    document.querySelector('.modal__close-button').addEventListener('click', () => modal_pop.hide())
    window.onclick = function(event) {
        if (event.target == document.querySelector('.modal')) {
            modal_pop.hide()
        }
    }
})
