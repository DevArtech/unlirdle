const modal = document.getElementById('infoModal');
const modalCont = document.getElementById('m-container');
const span = document.getElementsByClassName("close")[0];
const correct = document.getElementById('a');
const spot = document.getElementById('b');
const invalid = document.getElementById('c');

window.onload = function () {

    //localStorage.removeItem("hasCodeRunBefore"); // REMOVE LATER

    if (localStorage.getItem("hasCodeRunBefore") === null) {
        setTimeout(function() {
            modal.classList.add('active');
            setTimeout(function() {
                modalCont.classList.add('active');
                setTimeout(function() {
                    correct.setAttribute('id', 'correct');
                    spot.setAttribute('id', 'spot');
                    invalid.setAttribute('id', 'invalid');
                }, 250);
            }, 100);
        }, 500);
        localStorage.setItem("hasCodeRunBefore", true);
    }
}

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