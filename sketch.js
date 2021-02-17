//Initialize Default Grid On Page Loard, Dimensions/Grid Size

createGrid(8,320)

//Functions

function createGrid(dimensions,size){
pixels = Math.floor(size/dimensions);
grid_wrapper = document.getElementById("grid_wrapper");
grid_container = document.createElement("div");
grid_container.setAttribute("id","grid_container");
grid_wrapper.appendChild(grid_container);
grid = document.getElementById("grid_container");
grid.style = `grid-template-columns: repeat(${dimensions}, ${pixels}px); grid-template-rows: repeat(${dimensions}, ${pixels}px); `

for(let i = 0; i < dimensions*dimensions; i++){
    grid_item = document.createElement("div");
    grid_item.setAttribute("class","grid-item");
    grid_item.setAttribute("id",`grid-item${i}`);
    grid.appendChild(grid_item);
}
}



function submitCustomGrid(){
    areainput = document.querySelector("input");
    sizeinput = document.querySelectorAll("input")[1];
    dimensions = Number(areainput.value);
    size =  Number(sizeinput.value);
    if(dimensions < 2 || dimensions > 24 || size < 120 || size > 640) return;
    grid.remove();
    createGrid(dimensions,size);
}

