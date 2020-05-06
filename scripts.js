const container = document.querySelector('.container');
const gridSize = document.querySelector('#input');
const gridRow = document.querySelector('.gridRow');
const gridCol = document.querySelector('.gridCol');
const resizeBtn = document.querySelector('.button');

let blackBtn = document.querySelector('#black');
let randomBtn = document.querySelector('#random');
let grayBtn = document.querySelector('#gray');

createGrid(16, 16);

// Create Grid 
function createGrid(rows, cols) {
    //const grid = gridSize.value ** 2;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let grids = document.createElement("div");
        grids.classList.add('gridItem')
        let squareHeightAndWidth = 480 / Number(gridSize.value);

        grids.style.height = squareHeightAndWidth + 'px'
        grids.style.width = squareHeightAndWidth + 'px'

        container.appendChild(grids);
        grids.addEventListener('mouseover', function(e) {
            grids.style.backgroundColor = '#333333';
        });
        grids.addEventListener('click', function(e) {
            grids.style.backgroundColor = 'white';
        });
    }
}

function resizeGrid() {
    let newGridRow = document.querySelector('.gridRow').value;
    let newGridCol = document.querySelector('.gridCol').value;

    resetGrid();
    createGrid(newGridCol, newGridRow);
}

function resetGrid() {
    let oldGrid = document.querySelector('.container');
    oldGrid.innerHTML = "";
}

//Change colors
function blackColor() {
    grids = document.querySelectorAll('.gridItem');
    grids.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', function(e) {
            gridItem.style.backgroundColor = '#000';
        });
    });
}

function randomColor() {
    grids = document.querySelectorAll('.gridItem');
    grids.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', function(e) {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            let baseColor = '#' + randomColor;
            gridItem.style.backgroundColor = baseColor;
        });
    });
}

function grayColor() {
    grids = document.querySelectorAll('.gridItem');


    grids.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', function(e) {
            let opacity = Number(gridItem.style.opacity);
            gridItem.style.opacity = opacity += 0.1;
            gridItem.style.backgroundColor = '#000';
            gridItem.style.transition = 'background-color 0.25s';
        });
    });
}

// button events listeners
resizeBtn.addEventListener('click', resizeGrid);
blackBtn.addEventListener('click', blackColor);
randomBtn.addEventListener('click', randomColor);
grayBtn.addEventListener('click', grayColor);