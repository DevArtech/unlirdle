const modal = document.getElementById('infoModal');
const modalCont = document.getElementById('m-container');

const warnModal= document.getElementById('warnModal');
const wModalCont = document.getElementById('wm-container');

const span = document.getElementsByClassName("close")[0];
const correct = document.getElementById('}');
const spot = document.getElementById('{');
const invalid = document.getElementById('|');
const letters = document.getElementsByClassName('alpha');
const rows = document.getElementsByClassName('row');
let charSpots = [];
let running = false;

let active_row = 0;

let word_list = ["pearl", "amber", "court", "count", "cloth", "clock", "reach", "teach", "peach", "beach", "insert", "tools", "fools", "pools", "spool", "cruel", "quote", "quick", "hairy", "store", "share", "trick", "trout", "helps", "files", "topic", "warms", "worms", "dream", "burns", "limes", "night", "lemon", "fruit", "water", "drops", "rains", "cloud", "foggy", "diner", "march", "straw", "jokes", "other", "sense", "aware", "awake", "alarm", "roses", "tulip", "makes", "marks", "stripe", "solid", "light", "fight", "kites", "frogs", "marsh", "grows", "funny", "heavy", "floor", "flood", "strike", "rebel", "learn", "words", "goods", "views", "files", "bunch", "works", "ocean", "inbox", "green", "blues", "raven", "color", "tales", "tails", "snaps", "woods", "stars", "enjoy", "carry", "woman", "women", "books", "skull", "flour", "latin", "bones", "dolls", "storm", "snows", "saves", "saved", "saver", "black", "house", "fiber", "bells", "goals", "slice", "spice", "hates", "gives", "paper", "story", "sweet", "witch", "apart", "armor", "purse", "gears", "nails", "spring", "girls", "drive", "every", "world", "karma", "range", "model", "shark", "charm", "board", "ferry", "verse", "serve", "canal", "shame", "total", "loyal", "drunk", "flush", "blush", "crush", "brake", "brain", "quake", "punch", "lunch", "risky", "rests", "trunk", "train", "stunk", "stink", "skunk", "trace", "frame", "grade", "grape", "grain", "cause", "pause", "quiet", "penny", "dense", "fence", "bench", "stake", "crate", "grate", "coach", "keeps", "dates", "chalk", "frees", "means", "large", "group", "small", "stray", "terms", "teams", "style", "movie", "login", "video", "image", "bless", "slows", "crows", "about", "parts", "apply", "diets", "media", "kitty", "birds", "songs", "blogs", "notch", "month", "thank", "seats", "shear", "sheer", "issue", "opium", "walls", "fuzzy", "adopt", "admit", "moans", "trees", "crane", "mason", "prank", "warns", "lucks"];
let the_word = word_list[Math.floor(Math.random() * word_list.length)];
let user_word = [];

let green_letters = [];
let yellow_letters = [];
let yellow_letters_temp = [];
let gray_letters = [];

window.addEventListener('keydown', (event) =>
{
    if(running == false) {
    if(event.key === 'a') 
    {
        addLetter('a');
    }
    else if(event.key === 'b') {
        addLetter('b');
    }
    else if(event.key === 'c') {
        addLetter('c');
    }
    else if(event.key === 'd') {
        addLetter('d');
    }
    else if(event.key === 'e') {
        addLetter('e');
    }
    else if(event.key === 'f') {
        addLetter('f');
    }
    else if(event.key === 'g') {
        addLetter('g');
    }
    else if(event.key === 'h') {
        addLetter('h');
    }
    else if(event.key === 'i') {
        addLetter('i');
    }
    else if(event.key === 'j') {
        addLetter('j');
    }
    else if(event.key === 'k') {
        addLetter('k');
    }
    else if(event.key === 'l') {
        addLetter('l');
    }
    else if(event.key === 'm') {
        addLetter('m');
    }
    else if(event.key === 'n') {
        addLetter('n');
    }
    else if(event.key === 'o') {
        addLetter('o');
    }
    else if(event.key === 'p') {
        addLetter('p');
    }
    else if(event.key === 'q') {
        addLetter('q');
    }
    else if(event.key === 'r') {
        addLetter('r');
    }
    else if(event.key === 's') {
        addLetter('s');
    }
    else if(event.key === 't') {
        addLetter('t');
    }
    else if(event.key === 'u') {
        addLetter('u');
    }
    else if(event.key === 'v') {
        addLetter('v');
    }
    else if(event.key === 'w') {
        addLetter('w');
    }
    else if(event.key === 'x') {
        addLetter('x');
    }
    else if(event.key === 'y') {
        addLetter('y');
    }
    else if(event.key === 'z') {
        addLetter('z');
    }
    else if(event.key === 'Enter') {
        if(running == false) {
            Enter()
        }
    }
    else if(event.key === 'Backspace') {
        removeLetter();
    }
    else if(event.key === '/') {
        localStorage.removeItem("hasCodeRunBefore");
    }
}
});

function Enter() {
    if(running == false) {
        game_checker(the_word, user_word, green_letters, yellow_letters_temp, gray_letters)
    }
}

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

function warning(warning) {
    warnModal.classList.add('active');
    wModalCont.innerHTML = warning;
    wModalCont.classList.add('active');
    setTimeout(function() {
        wModalCont.classList.remove('active');
        setTimeout(function () {
            warnModal.classList.remove('active')
        }, 250);
    }, 1000);
}

function addLetter(letter) {
    if(user_word.length < 5) {
        letter = letter.toUpperCase();
        user_word.push(letter);
        for(let j = 0; j < charSpots.length; j++) {
            if(charSpots[j].className == "letter") {
                charSpots[j].firstChild.innerHTML = letter.toString();
                charSpots[j].classList.add('sel');
                j = charSpots.length;
            }
        }
    }
    else {
        console.log("Max limit reached")
    }
}

function removeLetter() {
    if(user_word.length > 0) {
        let letter = user_word[user_word.length - 1];
        user_word.pop();

        let j = user_word.length;
        charSpots[j].firstChild.innerHTML = '';
        charSpots[j].classList.remove('sel');
        j = charSpots.length;
    }
    else {
        console.log("No more letters to remove")
    }
}

let k = 0;

function game_checker(gWord, uWord, green, yellow, gray) {
    if(uWord.length == 5) {
    setTimeout(function() { 
        running = true;
        gWord = gWord.toUpperCase();

        let gArray = gWord.split("");

        if(k < uWord.length) {
            char = uWord[k];
                if(gArray.includes(char)) {
                    if(yellow_letters_temp.includes(char)) 
                    {
                        gray.push(char);
                        charSpots[k].setAttribute('id', 'invalid');
                        k++;
                        game_checker(the_word, user_word, green_letters, yellow_letters, gray_letters);
                    }
                    else 
                    {
                        if(gArray[k] == char) {
                            if (green.includes(char)) {
                                charSpots[k].setAttribute('id', 'correct');
                                k++;
                                game_checker(the_word, user_word, green_letters, yellow_letters, gray_letters);
                            } 
                            else {
                                green.push(char);
                                charSpots[k].setAttribute('id', 'correct');
                                k++;
                                game_checker(the_word, user_word, green_letters, yellow_letters, gray_letters);
                            }
                        }
                        else {
                            yellow.push(char);
                            charSpots[k].setAttribute('id', 'spot');
                            yellow_letters_temp = yellow;
                            k++;
                            game_checker(the_word, user_word, green_letters, yellow_letters, gray_letters);
                        }   
                    }
                }
                else {
                    gray.push(char);
                    charSpots[k].setAttribute('id', 'invalid');
                    k++;
                    game_checker(the_word, user_word, green_letters, yellow_letters, gray_letters);
                }
            } 
            else {
                if(green_letters.length < 5) {
                    let lettersInput = user_word;
                    let letterValue = [];
                    for(let i = 0; i < lettersInput.length; i++) {
                        if(charSpots[i].getAttribute('id') === "correct") {
                            letterValue.push(2);
                        }
                        else if(charSpots[i].getAttribute('id') === "spot") {
                            letterValue.push(1);
                        }
                        else if(charSpots[i].getAttribute('id') === "invalid") {
                            letterValue.push(0);
                        }
                    }
                    active_row++;
                    rows[active_row].classList.add('active');
                    charSpots = rows[active_row].children;
                    console.log(charSpots);
                    yellow_letters_temp = [];
                    k = 0;
                    user_word = [];
                    keyboardUpdate(lettersInput, letterValue);
                } 
                else if(green_letters.length >= 5) {
                console.log("Winner!");
                }
            }  
        }, 250);
    }
    else {
        warning('Not enough letters')
        console.log("Not enough letters");
    }
}

function keyboardUpdate(letters, value) {

    for (let i = 0; i < letters.length; i++) {
        let letterKey = document.getElementById(letters[i].toLowerCase());
        if(value[i] === 0) {
            letterKey.classList.add('invalid');
        }
        if(value[i] === 1) {
            letterKey.classList.add('spot');
        }
        if(value[i] === 2) {
            letterKey.classList.add('correct');
        }
    }

    running = false;
}
