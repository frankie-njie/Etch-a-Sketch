const container = document.querySelector('.container');
const gridSize = document.querySelector('#input');
const gridRow = document.querySelector('.gridRow');
const gridCol = document.querySelector('.gridCol');
const resizeBtn = document.querySelector('.button');

let blackBtn = document.querySelector('#black');
let randomBtn = document.querySelector('#random');

createGrid(16, 16);

// Create Grid 
function createGrid(rows, cols) {
    //const grid = gridSize.value ** 2;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let grids = document.createElement("div");
        grids.classList.add('gridItem')
        let squareHeightAndWidth = 600 / Number(gridSize.value);

        //grids.style.backgroundColor = '#333333';
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
    console.log(grids)
}

function randomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let baseColor = '#' + randomColor;
    grids = document.querySelectorAll('.gridItem');


    grids.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', function(e) {
            gridItem.style.backgroundColor = baseColor;
        });
    });

    //console.log(baseColor);
}

function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let baseColor = '#' + randomColor;
    x = baseColor;
}


// button events listeners
resizeBtn.addEventListener('click', resizeGrid);
blackBtn.addEventListener('click', blackColor);
randomBtn.addEventListener('click', randomColor);