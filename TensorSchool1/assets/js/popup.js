class Popup {
        constructor(element) {
                this.mount(element);
            }
        mount(element) {
            this.container = document.createElement('div');
            this.container.innerHTML = this.render();
            this.afterRender();
            element.insertAdjacentElement('beforeend', this.container);
        }
    
        destroy() {
            this.container.remove();
        }
        render() {
            return '<div class="popup"><div class="popup__container"><a class="popup__close" href="#">X</a><div class="popup__content"></div></div></div>'
        }
        afterRender() {
            this.container.querySelector('.popup__close').addEventListener(
                'click', (e) => { this.hide(); gitthis.destroy(); document.body.style.overflow = 'visible';}
            );
            this.container.setAttribute('hidden', 'true');
        }
        setContent(content) { 
                this.container.querySelector('.popup__content').innerHTML = content;
                };
        hide() {
            this.container.setAttribute('hidden', 'true');
            }
        show() {
            this.container.removeAttribute('hidden');
            }   
    }
        
    const signer__links = document.querySelectorAll('.signer__link');
    let signer__link;
    if (signer__links.length > 0) {
        for(let index = 0; index < signer__links.length; index++) {
            signer__link = signer__links[index];
            signer__link.addEventListener('click', (e) => {const popup = new Popup(document.body);
                popup.setContent(`
                    <div class="popup__header">Запись на курс</div>
                    <div class="popup__inner">
                        <div class="popup__suptext">Фамилия Имя Отчество</div>
                        <div class="popup__box">
                            <div class="box__input">Фамилия Имя Отчество</div>
                        </div>
                        <div class="popup__suptext">Номер телефона</div>
                        <div class="popup__box">
                            <div class="box__input">+7()___-__-__</div>
                        </div>
                        <div class="popup__suptext">Курс, на который вы хотите записаться</div>
                        <div class="popup__box">
                            <div class="box__input">Выберите курс<div class="box__arrow"></div></div>
                        </div>
                        <div class="box__helptext">Наш HR свяжется с вами и проинформирует по дальнейшим действиям</div>
                        <a class="popup__btn btn" href="#">Записаться</a>
                    </div>`);
                popup.show();
                document.body.style.overflow = 'hidden';
            })
        }
    }