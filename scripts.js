const container = document.querySelector('.container');

// let grid = document.createElement('div');
// grid.textContent = 'This is the glorious text-content!';

// container.appendChild(grid);


// Create Grid 
function createGrid(rows, cols) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let grids = document.createElement("div");
        // grids.innerText = (i + 1);
        container.appendChild(grids).className = "grid-item";


        // let gridSize = 16
        // for (let i = 0; i < gridSize; i++) {
        //     let gridItem = document.createElement("div");
        //     gridItem.style.cssText = 'background-color : blue; height : 20px; width : 20px';
        //     gridItem.classList.add('grid-item')
        //     container.appendChild(gridItem);
    }

}
createGrid(16, 16);