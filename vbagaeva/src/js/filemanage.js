var modal = document.getElementById('modal_window');
var span = document.getElementsByClassName("modal_header_close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll('.courses2__item_more').forEach(function(btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
})