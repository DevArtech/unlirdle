const modal = document.getElementById('infoModal');
const modalCont = document.getElementById('m-container');
const span = document.getElementsByClassName("close")[0];

setTimeout(function() {
    modal.classList.add('active');
    setTimeout(function() {
        modalCont.classList.add('active');
    }, 100);
}, 500);

span.onclick = function() {
    modalCont.classList.remove('active');
    
    setTimeout(function() {
        modal.classList.remove('active');
    }, 250);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modalCont.classList.remove('active');

        setTimeout(function() {
            modal.classList.remove('active');
        }, 250);
    }
}