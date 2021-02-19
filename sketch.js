//Initialize Default Grid On Page Loard, Dimensions/Grid Size

createGrid(64,500)

//Drawing/Erasing Booleans and Background Color

let isDrawing = true;
let isErasing = false;
// let bgColor = "white";

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
const darkforest = function(){
    randNum = Math.floor(Math.random() * 255);
    return `rgb(25,${randNum},25)`
}
const volcano = function(){
    randNum = Math.floor(Math.random() * 255);
    return `rgb(${randNum},25,25)`
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
            grid_container.style.cursor = "url('http://www.rw-designer.com/cursor-view/61841.png') 32.5 10, auto"
            isDrawing = !isDrawing;
            isErasing = false;
            console.log("isDrawing is " + isDrawing);
        } else if(buttonClicked === "right"){
            grid_container.style.cursor = "url('http://www.rw-designer.com/cursor-view/72976.png') 20 20, auto"
            isErasing = !isErasing;
            isDrawing = false;
            console.log("isErasing is " + isErasing);
        } 
    })
    // pageBody = document.querySelector("body");
    // pageBody.addEventListener("mouseover",function(){
    //     grid.style.background = currentBackground();
    // })
    grid_item.addEventListener("mouseover",function(){
        grid_square = document.getElementById(`grid-item${i}`)
        if(isDrawing){
        grid_square.style = `background-color: ${randomColor(submitScheme())};`
        } else if(isErasing){
        grid_square.style = `background-color: ${currentBackground()};`
        }
    })
    grid.appendChild(grid_item);
    
    // optionBG = document.querySelectorAll("option");
    
    // optionBG.addEventListener('click',function(){
    //     grid.style.background = `${currentBackground()};`
    // })
    
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
        gridsquares[i].style = `background-color: ${currentBackground()};`
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

  function currentBackground(){
      return document.getElementById("bgcolor").value;
}

