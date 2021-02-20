//Initialize Default Grid On Page Loard, Dimensions/Grid Size

createGrid(64,500);

//Drawing/Erasing Booleans and Background Color

let isDrawing = true;
let isErasing = false;

//Shapes

const shapes = {
    circle: `border-radius: 50%;`,
    oval: `border-radius: 100px/50px;`,
    triangle: `border-left: ${pixels}px solid transparent; border-right: ${pixels}px solid transparent; border-bottom: ${Math.floor(pixels*2)}px solid ${currentBG};`
}

//Color Schemes

const random = function(){
    randNum1 = Math.floor(Math.random() * 255);
    randNum2 = Math.floor(Math.random() * 255);
    randNum3 = Math.floor(Math.random() * 255);
    return `rgb(${randNum1},${randNum2},${randNum3})`;
}
const darkforest = function(){
    randNum = Math.floor(Math.random() * 255);
    return `rgb(25,${randNum},25)`;
}
const volcano = function(){
    randNum = Math.floor(Math.random() * 255);
    return `rgb(${randNum},25,25)`;
}
const rainbow = ["red","orange","yellow","green","blue","indigo","violet"];
const newspaper = ["black","grey","lightgrey","silver","darkgrey","dimgrey","slategrey","gainsboro","whitesmoke"];
const autumn = ["orange","brown","#181818","gold","#D9b382","darkorange","#B5651D","#B73239"];
const christmas = ["#BB2528","#146B3A","#165B33","#EA4630","#F8B229"];
const valentines = ["#5E081E", "#B51A3A", "#E24767", "#E48397", "#E4CDD3"];
const sky = ["#79b9e1","#43677d","#6ca4c8","#5e90af","#87cefa","#93d2fa","#9fd7fb","#abdcfb","#b7e1fc","#c3e6fc","#cfebfd","#dbf0fd","#e7f5fe","#f3fafe"];

//Functions

function createGrid(dimensions,size){
pixels = Math.floor(size/dimensions);
currentBG = currentBackground();
grid_wrapper = document.getElementById("grid_wrapper");
grid_container = document.createElement("div");
grid_container.setAttribute("id","grid_container");
grid_wrapper.appendChild(grid_container);
grid = document.getElementById("grid_container");
grid.style = `grid-template-columns: repeat(${dimensions}, ${pixels}px); grid-template-rows: repeat(${dimensions}, ${pixels}px); background: ${currentBackground()}`

for(let i = 0; i < dimensions*dimensions; i++){
    grid_item = document.createElement("div");
    grid_item.setAttribute("class","grid-item");
    grid_item.setAttribute("id",`grid-item${i}`);
    grid_item.addEventListener("contextmenu", e => e.preventDefault());
    grid_item.addEventListener("mousedown", function(e){
        buttonClicked = logMouseButton(e);
        if(buttonClicked === "left"){
            grid_container.style.cursor = "default";
            isDrawing = !isDrawing;
            isErasing = false;
        } else if(buttonClicked === "right"){
            grid_container.style.cursor = "not-allowed";
            isErasing = !isErasing;
            isDrawing = false;
        } 
    })
    grid_item.addEventListener("mouseover",function(){
        grid_square = document.getElementById(`grid-item${i}`)
        if(isDrawing){
        grid_square.style = `background-color: ${randomColor(submitScheme())};}` /*${currentShape("triangle") Add this parameter for custom shape*/
        } else if(isErasing){
        grid_square.style = `background-color: ${currentBG};`
        }
    })
    grid.appendChild(grid_item);   
  }
}

function submitCustomGrid(){
    areainput = document.querySelector("input");
    sizeinput = document.querySelectorAll("input")[1];
    dimensions = Number(areainput.value);
    size =  Number(sizeinput.value);
    if(dimensions < 2 || dimensions > 64 || size < 320 || size > 640){
        alert("Dimensions Minimum = 2 | Dimensions Maximum = 64 | Size Minimum = 320 | Size Maximum = 640 | \n\n Please try again.");
        return;
    } 
    grid.remove();
    createGrid(dimensions,size);
}

function clearGrid(){
    currentBG = currentBackground();
    gridsquares = document.getElementsByClassName("grid-item");
    for(let i = 0; i < gridsquares.length; i++){
        gridsquares[i].style = `background-color: ${currentBG};`
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

function currentBackground(){
      return document.getElementById("bgcolor").value;
}

function currentShape(shape){
    return shapes[shape];
}

function logMouseButton(e) {
    if (typeof e === 'object') {
      switch (e.button) {
        case 0:
          return "left";
        case 1:
          return "middle";
        case 2:
          return "right";
        default:
          return "unknown";
      }
    }
  }

