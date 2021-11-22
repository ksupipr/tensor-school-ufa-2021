class Popup {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'popup';          
        this.container.innerHTML = this.render(); 
        button.addEventListener(
            'click',
            (e) => { popup.open(); }
        );  
    }   
    
    render() {  return `                
        <div class="popup__body">
            <div class="popup__content">
                <div class="popup__title">Разработка сайтов</div>
                <a href="#header" class="popup__close close-popup">X</a>
                <form class="form">
                    <div class="form__item">
                        <div class="form__label">Имя</div>
                        <input type="text" placeholder="Как к вам обращаться?" class="form__input">
                    </div>       
                    <div class="form__item">
                        <div class="form__label">Телефон</div>
                        <input type="text" placeholder="+7 (...)" class="form__input">
                    </div>                  
                </form>
                <button class="form__button button">Записаться</button>
            </div>
        </div>
        `              
    }
    hide() {   

        this.container.classList.remove('open');
        setTimeout(() => {  this.destroy(); }, 1000);          
    }

    open() {
        wrapper.insertAdjacentElement('beforeend', this.container);
        this.container.classList.add('open');
        
        const closeLink = document.querySelector('.close-popup');
        closeLink.addEventListener(
            'click',
            (e) => { this.hide(); }
        );   
        this.container.addEventListener('click', (e) =>{
            if(!e.target.closest('.popup__content')) {
                this.hide();
            }
        });
         
    }             
    destroy() {
        this.container.remove();
    }

}

const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.popup-link');
   
const popup = new Popup();


