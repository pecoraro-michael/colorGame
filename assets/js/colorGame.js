var numSquares = 6
var colors = generateRandomColors(numSquares);

var numWon = 0;
var numLost = 0;

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var navColor = document.getElementById('navBar');
var resetButton = document.getElementById('resetButton');
var easyButton = document.getElementById('easyButton');
var hardButton = document.getElementById('hardButton');
var numWon = document.getElementById('numWon');
var numLost = document.getElementById('numLost');

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
    //generate all new colors
    //pick a new random color
    //change colors of squares
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    // messageDisplay.textContent = "";
    navColor.classList.add('bg-primary');
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
})

easyButton.addEventListener('click', function () {
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    // messageDisplay.textContent = "";
    navColor.style.backgroundColor = "#273246";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
})


hardButton.addEventListener('click', function () {
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    // messageDisplay.textContent = "";
    navColor.style.backgroundColor = "#273246";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
})


for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    //add click listerners to squares
    //grab color of clicked square
    //compare color to pickedColor
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            // messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            // messageDisplay.style.color = pickedColor;
            changeColors(clickedColor);
            navColor.classList.remove('bg-primary');
            navColor.style.backgroundColor = pickedColor;
            counterWon();
        } else {
            this.style.backgroundColor = "#eeeded"
            // messageDisplay.textContent = "Try Again!"
        }
    })

}


function changeColors(color) {
    //loop through all squares
    //change each color to match given color
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;

    }
}


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num) {
    //make an array
    //add num random colors to arr
    //get random color and push into array
    //return array
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}


function randomColor() {
    // pick a red from 0 - 255
    // pick a green from 0 - 255
    // pick a blue from 0 - 255
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function counterWon() {
    numWon.textContent = numWon++;
}