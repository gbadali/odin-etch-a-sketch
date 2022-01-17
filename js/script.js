// A simple JS Etch-A-Sketch Game

let resuolution = 16;

let grid = document.getElementById('grid');
let slider = document.getElementById("resolution");
let clear = document.querySelector("#clear");


function genGrid(size, parent) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.className = 'square';
        square.style.backgroundColor = '#ffffff'
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = '#000000';
        });
        parent.appendChild(square);
    }
}

genGrid(resuolution, grid)

slider.addEventListener('input', function () {
    if (this.value > 0 && this.value < 65) {
        resuolution = this.value;
    }
});

clear.addEventListener('click', function () {
    let squares = document.getElementsByClassName("square");
    genGrid(resuolution, grid)
})