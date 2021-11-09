const modal = $.modal()
const btn = document.getElementById("btn")
const btnClose = document.getElementsByClassName("modal-close")[0]

btn.onclick = function() {
    modal.open()
}

btnClose.onclick = function() {
    modal.close()
}
