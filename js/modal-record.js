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
  @import url("blocks/modal/modal-record.css");
</style>
`
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
