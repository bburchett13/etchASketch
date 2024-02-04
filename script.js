let dim = 9;

// Creating the grid
for (let i = 0; i < dim; i++) {
    let gridElement = document.createElement("div");
    gridElement.className = "gridElement";
    gridElement.addEventListener('mouseover', draw);
    gridElement.addEventListener('mousedown', draw);
    gridElement.style.width = `${400/Math.sqrt(dim)}px`;
    gridElement.style.height = `${400/Math.sqrt(dim)}px`;
    document.getElementById("gridContainer").appendChild(gridElement);

}

// Function to handle drawing
function draw(event) {
    if (event.type === 'mouseover' && !event.buttons) return;
    const gridElement = event.target;
    color = 'black';
    cell.style.backgroundColor = color;

}