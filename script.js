
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
    
    let userInput = prompt("Enter the desired grid dimension.\nOnly integers from 1 to 100 are accepted.\nEntering a valid number will delete your artwork.");

    if (userInput === null) {

        return dim;

    }
    if (userInput < 1 || userInput > 100 || userInput % 1 != 0) {

        userInput = getGridSize();

    }
    
    dim = userInput;
    buildGrid(dim);
    return userInput;
}

// Function to create the grid
function buildGrid(dim) {
    document.getElementById("gridContainer").innerHTML = '';
    for (let j = 0; j < dim; j++) {

        let gridRow = document.createElement('div');
        gridRow.className = 'gridRow';
        gridRow.style.display = 'flex';
        gridRow.style.flexShrink = '1';
        gridRow.style.flexGrow = '1';
        gridRow.id = `row${j}`;
        document.getElementById('gridContainer').appendChild(gridRow);

        for (let i = 0; i < dim; i++) {
            let gridElement = document.createElement("div");
            gridElement.className = "gridElement";
            gridElement.addEventListener('mouseover', draw);
            gridElement.addEventListener('mousedown', draw);
            gridElement.style.width = `${gridWidth/dim}px`;
            gridElement.style.height = `${gridHeight/dim}px`;
            gridElement.style.flexGrow = '1';
            gridElement.style.flexShrink = '1';
            document.getElementById(`row${j}`).appendChild(gridElement);
        
        }

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