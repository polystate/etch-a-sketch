//Initialize Default Grid On Page Loard, Dimensions/Grid Size

createGrid(64,500)

//Color Schemes

const greyscale = function(){
    randNum = Math.floor(Math.random() * 255);
    console.log(randNum)
    return `rgb(${randNum},${randNum},${randNum})`
}
const random = function(){
    randNum1 = Math.floor(Math.random() * 255);
    randNum2 = Math.floor(Math.random() * 255);
    randNum3 = Math.floor(Math.random() * 255);
    return `rgb(${randNum1},${randNum2},${randNum3})`
}
const rainbow = ["red","orange","yellow","green","blue","indigo","violet"];
const newspaper = ["black","grey","lightgrey","silver","darkgrey","dimgrey","slategrey","gainsboro","whitesmoke"]
const autumn = ["orange","brown","#181818","gold","#D9b382","darkorange","#B5651D","#B73239"];
const test = ["#36454f"];

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
    grid_item.addEventListener("mouseover",function(){
        // console.log(`I am hovering over grid # ${i}`)
        grid_square = document.getElementById(`grid-item${i}`)
        grid_square.style = `background-color: ${randomColor(submitScheme())};`
        
    })
    grid.appendChild(grid_item);
}
}

function submitCustomGrid(){
    areainput = document.querySelector("input");
    sizeinput = document.querySelectorAll("input")[1];
    dimensions = Number(areainput.value);
    size =  Number(sizeinput.value);
    if(dimensions < 2 || dimensions > 64 || size < 320 || size > 640) return;
    grid.remove();
    createGrid(dimensions,size);
}


function clearGrid(){
    gridsquares = document.getElementsByClassName("grid-item");
    for(let i = 0; i < gridsquares.length; i++){
        gridsquares[i].style = "background-color: white;"
    }
}

function randomColor(arr){
    if(typeof(arr) === "string") return arr;
    randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

function submitScheme(){
    optionSelect = document.getElementById("colors").value
    return eval(optionSelect);
}