const container = document.querySelector('.container');
const gridSize = document.querySelector('#input');
const gridRow = document.querySelector('.gridRow');
const gridCol = document.querySelector('.gridCol');
const resizeBtn = document.querySelector('.button');


// Create Grid 
function createGrid(rows, cols) {
    //const grid = gridSize.value ** 2;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let grids = document.createElement("div");
        let squareHeightAndWidth = 600 / Number(gridSize.value);

        grids.style.backgroundColor = '#333333';
        grids.style.height = squareHeightAndWidth + 'px'
        grids.style.width = squareHeightAndWidth + 'px'

        container.appendChild(grids);

    }
}
// createGrid(10, 10);

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

// button events listeners
resizeBtn.addEventListener('click', resizeGrid);