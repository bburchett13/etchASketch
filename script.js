let dim = 10;

buildGrid(dim);

//Function to get User Input for Grid Size
const gridSizeBtn = document.querySelector('#gridSize');
gridSizeBtn.addEventListener('click', getGridSize);

function getGridSize(){
    document.getElementById("gridContainer").innerHTML = '';
    dim = prompt("Enter the desired grid dimension\nOnly integers from 1 to 100 are accepted");
    if (dim < 1 || dim > 100 || dim % 1 != 0) {

        dim = getGridSize();

    }
    buildGrid(dim);
}

// Function to create the grid
function buildGrid() {

    for (let i = 0; i < dim**2; i++) {
        let gridElement = document.createElement("div");
        gridElement.className = "gridElement";
        gridElement.addEventListener('mouseover', draw);
        gridElement.addEventListener('mousedown', draw);
        gridElement.style.width = `${400/dim}px`;
        gridElement.style.height = `${400/dim}px`;
        document.getElementById("gridContainer").appendChild(gridElement);
    
    }

}


// Function to handle drawing
function draw(event) {
    if (event.type === 'mouseover' && !event.buttons) return;
    const element = event.target;
    color = 'black';
    element.style.backgroundColor = color;

}

