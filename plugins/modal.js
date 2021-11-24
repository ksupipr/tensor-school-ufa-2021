function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal__overlay" >
            <div class="modal__body" data-close="true">
                <div class="modal__content">
                    <span class="modal__close" data-close="true">&times;</span>
                    <div class="modal__title">Frontend</div>
                    <div class="modal__maincontent">
                        <div class="modal__text">
                            <p class="modal__subtitle">На уроках frontend-разработки вы научитесь:</p>
                            <p class="modal__point">- верстке интерфейсов на HTML и CSS</p>
                            <p class="modal__point">- адаптивной верстке</p>
                            <p class="modal__point">- программированию на JavaScript</p>
                            <p class="modal__point">- работе с специальным программным обеспечением </p>
                            <p class="modal__point">- работе с браузером</p>
                        </div>
                        <img src="img/Код2.png" alt="">
                    </div>
                    <div class="button">
                        <button class="button__join in-card">
                            <span class="button-text">Записаться</span>
                        </button>

                    </div>


                </div>
            </div>
        </div>
    
    `)
    document.body.appendChild(modal)
    return modal
}


$.modal = function(options){
    const $modal = _createModal(options)
    let destroyed = false

    const modal = {
        open() {
            if (destroyed){
                return console.log('Modal is destroyed ')
            }
            $modal.classList.add ('open')
        },
        close() {
            $modal.classList.remove ('open')
        }
        
    }

    const listener = event => {
        console.log('Clicked', event.target.dataset.close)
        if (event.target.dataset.close) {
            modal.close()
        }
    }
    $modal.addEventListener('click', listener )

    return Object.assign(modal, {
        destroy()
        {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true

        }
    })
       
     
}