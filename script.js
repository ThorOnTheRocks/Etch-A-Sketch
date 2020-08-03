//Caching the DOM
const container = document.getElementById("container");
const gridItem = document.getElementsByClassName("grid-item");
const button = document.getElementById("grid-size");



// Create Grid 
function makeGrid(rows, cols){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    container.style.setProperty("height", "800px");
    container.style.setProperty("width", "600px");
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        
        container.appendChild(cell).className = "grid-item";
    };

};

// Call Function Make Grid
makeGrid(16, 16);



button.addEventListener("click", function(){
    var size = prompt("Which grid size would you like?");
    var num1 = parseInt(size);
    var num2 = parseInt(size);
    makeGrid(num1,num2);
    for(let i=0; i<gridItem.length; i++){
    gridItem[i].addEventListener("mouseenter", function (){
        gridItem[i].style.backgroundColor = "blue";
       
    })
}
   
    
})

// Hover Effect
for(let i=0; i<gridItem.length; i++){
    gridItem[i].addEventListener("mouseenter", function (){
        gridItem[i].style.backgroundColor = "blue";
       
    })
}










    









 











