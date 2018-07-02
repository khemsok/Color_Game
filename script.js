var box = document.getElementsByClassName("square");
var boxColor = [];
var rgbName = document.getElementById("rgbName");
var newColor = document.getElementById("newColor");
var randomNumber = 0;
var hello = document.getElementById("hello");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var length = 0;
var result = document.getElementById("result");

beginning();

for (i = 0; i < length; i++) {
    box[i].addEventListener("click", function () {
        if (this.style.backgroundColor == boxColor[randomNumber]) {
            for (var x = 0; x < length; x++) {
                box[x].style.backgroundColor = boxColor[randomNumber];
            }
            hello.style.backgroundColor = boxColor[randomNumber];
            result.textContent = "Correct!";
        } else {
            this.style.backgroundColor = "#232323"
            result.textContent = "Try Again!";

        }
    });
}


function beginning(){
    Math.floor(Math.random() * 6);
    length = 6;
    generateRandomColor(length);

}

function reset(x) {
    length = x;
    result.textContent = "";
    randomNumber = Math.floor(Math.random() * x);
    generateRandomColor(x);
    if (x == 3) {
        for (var i = 3; i < 6; i++) {
            box[i].style.display = "none";
        }
    }
    else{
        for (var i = 0; i < 6; i++) {
            box[i].style.display = "block";
        }
    }
    hello.style.backgroundColor = "rgb(7, 168, 221)";
    rgbName.textContent = boxColor[randomNumber];
}



function generateRandomColor(length) {
    for (var i = 0; i < length; i++) {
        boxColor[i] = randomize();
        box[i].style.backgroundColor = boxColor[i];
    }
    rgbName.textContent = boxColor[randomNumber];
}


function randomize() {
    var r = Math.floor((Math.random() * 255));
    var g = Math.floor((Math.random() * 255));
    var b = Math.floor((Math.random() * 255));
    var thergb = "rgb(" + r + ", " + g + ", " + b + ")";
    return thergb;
}


easy.addEventListener("mouseover", function () {
    easy.classList.add("hoverover");
});
easy.addEventListener("mouseout", function () {
    easy.classList.remove("hoverover");
});

hard.addEventListener("mouseover", function () {
    hard.classList.add("hoverover");
});
hard.addEventListener("mouseout", function () {
    hard.classList.remove("hoverover");
});

newColor.addEventListener("mouseover", function () {
    newColor.classList.add("hoverover");
});

newColor.addEventListener("mouseout", function () {
    newColor.classList.remove("hoverover");
});

easy.addEventListener("click", function () {
    reset(3);
});

hard.addEventListener("click", function () {
    reset(6);
});

newColor.addEventListener("click", function () {
    reset(length);
});
