
let el = document.querySelector("#gridContainer");

let gridWidth = el.clientWidth;
let gridHeight = el.clientHeight;

let dim = 10;
let drawMode = 'pen';
let penColor = 'black';
buildGrid(dim);

// Defining Buttons
const gridSizeBtn = document.querySelector('#gridSize');
gridSizeBtn.addEventListener('click', getGridSize);

const penBtn = document.querySelector('#pen');
penBtn.addEventListener('click', () => {

    drawMode = 'pen';

})

const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click', () => {

    drawMode = 'eraser';

})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {

    buildGrid(dim);

})

//Function to get User Input for Grid Size
function getGridSize(){
    
    dim = prompt("Enter the desired grid dimension\nOnly integers from 1 to 100 are accepted");
    if (dim < 1 || dim > 100 || dim % 1 != 0) {

        dim = getGridSize();

    }
    buildGrid(dim);
}

// Function to create the grid
function buildGrid(dim) {
    document.getElementById("gridContainer").innerHTML = '';
    for (let i = 0; i < dim**2; i++) {
        let gridElement = document.createElement("div");
        gridElement.className = "gridElement";
        gridElement.addEventListener('mouseover', draw);
        gridElement.addEventListener('mousedown', draw);
        gridElement.style.width = `${gridWidth/dim}px`;
        gridElement.style.height = `${gridHeight/dim}px`;
        document.getElementById("gridContainer").appendChild(gridElement);
    
    }

}

// Function to handle drawing
function draw(event) {
    if (event.type === 'mouseover' && !event.buttons) return;
    const element = event.target;
    if (drawMode === 'pen') {

        color = penColor;

    }
    else if (drawMode === 'eraser') {

        color = '#EEEEEE';

    }
    
    element.style.backgroundColor = color;

}

const colorPicker = document.querySelector('#colorSelector');
colorPicker.addEventListener('input', (e) => {

    penColor = e.target.value;
    drawMode = 'pen';

});