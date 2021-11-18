
class Popup {
    constructor(element) {
        this.mount(element);
    };
    destroy() {
        this.container.remove();
    };
     hide() {
        this.container.setAttribute('hidden', 'true');
    };
    render() {
                return `<div class="popup"><div class="popup__container"><div class="popup__close">X</div><div class="popup__content"></div></div></div>`
            }
        
    show() {
        this.container.removeAttribute('hidden');
    };
    afterRender() {
        let el =this.container.querySelector('.popup__close');
        el.addEventListener('click', (e) => { this.hide(); this.destroy();});
        this.container.setAttribute('hidden', 'true');
    };
    mount(element) {
        this.container = document.createElement('div');
        this.container.innerHTML = this.render();
        this.afterRender();
        element.insertAdjacentElement('beforeend', this.container);
    };
    setContent(content) { 
        this.container.querySelector('.popup__content').innerHTML = content;
        //if(el){
            
        //}
    };
        
}
const recording_links = document.querySelectorAll('.popup_callback');
let recording_link;
if(recording_links.length>0){
    for(let index=0;index<recording_links.length;index++){
        recording_link = recording_links[index];
        recording_link.addEventListener('click',(e) => { const popup = new Popup(document.body);
            popup.setContent(`<div class="recording">
            <div class="recording__item">
            <div class="recording__itemheader">Фамилия Имя Отчество</div>
            <div id="fioin" class="recording__iteminput">Фамилия Имя Отчество</div>
            </div>
            <div class="recording__item">
            <div class="recording__itemheader">Номер Телефона</div>
            <div id="nomerin" class="recording__iteminput">+7 (       ) ___ - __ - __</div>
            </div>
            <div class="recording__item">
            <div class="recording__itemheader">Курс, на который вы хотите записаться</div>
            <div id="coursein" class="recording__iteminput">Выберите курс</div>
            </div></div>
            <a class="recording__btn">Записаться на курс</a>
            <span class="recording__footer">Наш HR свяжется с вами и проинформирует по дальнейшим действиям</span>`);
            popup.show();})
    }
}

