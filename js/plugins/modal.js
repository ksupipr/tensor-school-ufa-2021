function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Запись на курсы</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p> Имя </p>
                    <input type="text">
                    <p> Телефон </p>
                    <input type="text">
                </div>
                <div class="modal-footer">
                    <button>Записаться</button>
                    <button>Отмена</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}


$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false

    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() {}
    }

}