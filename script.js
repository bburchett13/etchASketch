let dim = 16;


for (let j = 0; j < dim; j++) {

    let gridRow = document.createElement("div");
    gridRow.className = "gridRow";
    gridRow.id = `row${j}`;
    document.getElementById("grid-container").appendChild(gridRow);

    for (let i = 0; i < dim; i++) {
        let gridElement = document.createElement("div");
        gridElement.innerHTML = "x";
        gridElement.className = "gridElement";
        document.getElementById(`row${j}`).appendChild(gridElement);
    
    }
}

