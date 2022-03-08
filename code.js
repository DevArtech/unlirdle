const modal = document.getElementById('infoModal');
const modalCont = document.getElementById('m-container');
const span = document.getElementsByClassName("close")[0];
const correct = document.getElementById('a');
const spot = document.getElementById('b');
const invalid = document.getElementById('c');
const letters = document.getElementsByClassName('alpha');
const rows = document.getElementsByClassName('row');
let charSpots = [];

let active_row = 0;

let user_word = [];

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

    for (var i = 0; i < letters.length; i++) {
        (function(index) {
             letters[index].addEventListener("click", function() {
                letter = letters[index].getAttribute('id');
                addLetter(letter);
              })
        })(i);
    }

    rows[active_row].classList.add('active');
    charSpots = rows[active_row].children;
    console.log(charSpots);
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

function addLetter(letter) {
    if(user_word.length < 5) {
        letter = letter.toUpperCase();
        user_word.push(letter);
        for(let j = 0; j < charSpots.length; j++) {
            if(charSpots[j].className == "letter") {
                charSpots[j].innerHTML = letter.toString();
                charSpots[j].classList.add('sel');
                j = charSpots.length;
            }
        }
        console.log(user_word.join(''));
    }
    else {
        console.log("Max character limit reached")
    }
}

function removeLetter() {
    if(user_word.length > 0) {
        let letter = user_word[user_word.length - 1];
        user_word.pop();

        let j = user_word.length;
        charSpots[j].innerHTML = '';
        charSpots[j].classList.remove('sel');
        j = charSpots.length;

        console.log(user_word.join(''));
    }
    else {
        console.log("No more letters to remove")
    }
}