class Popup {
    constructor(element) {
        this.mount(element);
    }

    mount(element) {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.innerHTML = this.render();
        this.afterRender();
        element.insertAdjacentElement('beforeend', this.container);
    }

    destroy() {
        this.container.remove();
    }

   render() {
        return `
  <div class="model-background">
  <div class="model-background__close"></div>
  <div class="model-block">
    <div class="model-close">
      <div class="model-close__btn">X</div>
    </div>
    <div class="model-content">
      <div class="model-content__text">Заявка успешно отправлена!</div>
      <div class="model-content-btn">
        <a class="model-link" href="index.html">
          <div class="model-link-block">
            <div>
              Вернуться на главную
            </div>
          </div>
        </a>
        <a class="model-link">
          <div class="model-link-block model-link-block_cancel">
            <div>
              Закрыть
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
<style>
  .model-background {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  .model-background__close {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0, 0.5);
  }

  .model-block {
    width: 400px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    z-index: 10;
  }

  .model-close {
      height: 20%;
      padding: 0 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-end
  }

  .model-content {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
  }

  .model-content__text {
    margin: 0 auto;
    font-size: 24px;
  }

  .model-content-btn {

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .model-link {
    text-decoration: none;
    font-size: 16px;
  }

  .model-link-block {
    width: 150px;
    height: 40px;
    border: 3px solid #073356;
    background-color: #073356;
    color: white;
    font-weight: bold;

    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .model-link-block:hover {
    border: 3px solid #073356;
    background-color: white;
    color: #073356;
    cursor: pointer;
  }

  .model-link-block_cancel {
    border: 3px solid #073356;
    background-color: white;
    color: #073356;
  }

  .model-link-block_cancel:hover {
    border: 3px solid #073356;
    background-color: #073356;
    color: white;
  }


</style>`
    }

    afterRender() {
        this.container.querySelector('.model-link-block_cancel').addEventListener(
             'click', (e) => { this.destroy();  }
         );
        this.container.querySelector('.model-background__close').addEventListener(
             'click', (e) => { this.destroy();  }
         );
        this.container.querySelector('.model-close__btn').addEventListener(
            'click', (e) => { this.destroy();  }
        );
     }

}

    document.querySelector('.form-submit__input').addEventListener(
            'click', (e) => { const popup = new Popup(document.body);  }
       );
