const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const normal = document.getElementById("normal");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const Text = document.getElementById("text");

let firstClick = null;  // To store the style of the first click

function handleStyleClick(style) {
    if (firstClick === null) {
        firstClick = style;  // Store the first click style
    } else {
        Text.className = firstClick + ' ' + style;  // Apply the second click style along with first click
        firstClick = null;  // Reset after applying the second click style
    }
}

bold.addEventListener("click", function() {
    handleStyleClick('bold');
});

italic.addEventListener("click", function() {
    handleStyleClick('italic');
});

normal.addEventListener("click", function() {
    handleStyleClick('normal');
});

red.addEventListener("click", function() {
    handleStyleClick('red');
});

blue.addEventListener("click", function() {
    handleStyleClick('blue');
});

green.addEventListener("click", function() {
    handleStyleClick('green');
});
