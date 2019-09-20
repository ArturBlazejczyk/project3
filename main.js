const square = document.createElement('div');
let squareSize = 100;
let grow = true;

document.body.appendChild(square);

square.style.width = squareSize + "px";
square.style.height = squareSize + "px";

window.addEventListener('scroll', function () {

    if (squareSize >= window.innerWidth / 2) {
        grow = !grow;
    } else if (squareSize == 0) {
        grow = !grow;
    }
    if (grow) {
        squareSize += 5;
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
    } else {
        squareSize -= 5;
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
    }
})