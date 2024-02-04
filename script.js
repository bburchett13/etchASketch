let dim = 32;

for (let j = 0; j < dim; j++) {

    let gridRow = document.createElement("div");
    gridRow.className = "gridRow";
    gridRow.id = `row${j}`;
    document.getElementById("gridContainer").appendChild(gridRow);

    for (let i = 0; i < dim; i++) {
        let gridElement = document.createElement("div");
        gridElement.className = "gridElement";
        gridElement.style.width = `${400/dim}px`;
        gridElement.style.height = `${400/dim}px`;
        document.getElementById(`row${j}`).appendChild(gridElement);
    
    }
}

