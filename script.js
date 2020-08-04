//Caching the DOM
const container = document.getElementById("container");
const gridItem = document.getElementsByClassName("grid-item");
const buttonGrid = document.getElementById("grid-size");
const buttonRandom = document.getElementById("random-colors");
const buttonColorPicker = document.getElementById("color-picker");
const buttonGridLines = document.getElementById("grid-lines");
const buttonErase = document.getElementById("erase");
const colorValue = document.getElementById("color-value");




// Create Grid 
function makeGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";

    };

    colorHoverEffect();

};


// Call Function Make Grid
makeGrid(16, 16);

// Reset Grid Every Time User Give New Size
function resetGrid() {
    container.textContent = "";
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}


// Change Grid Size Event
buttonGrid.addEventListener("click", function () {
    resetGrid();
    var size = prompt("Choose grid size");
    var num1 = parseInt(size);
    var num2 = parseInt(size);
    makeGrid(num1, num2);
})

// Generate Random Color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Random Color Hover Effect
function randomHoverEffect() {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener("mouseover", function () {

            gridItem[i].style.backgroundColor = getRandomColor();
        })
        
    }
}

// Color Picker Hover Effect
function colorHoverEffect() {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener("mouseover", function () {

            gridItem[i].style.backgroundColor = buttonColorPicker.value;
        })
    }
    colorValue.style.color = buttonColorPicker.value;
    colorValue.textContent = buttonColorPicker.value;
}

// Grid Lines On-Off
function gridLines() {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].classList.toggle("grid-lines");

    }
}

// Clear Pixels Brush
function clearPixels() {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.backgroundColor = "white";

    }
}



buttonRandom.addEventListener("click", randomHoverEffect);
buttonColorPicker.addEventListener("input", colorHoverEffect);
buttonGridLines.addEventListener("click", gridLines);
buttonErase.addEventListener("click", clearPixels);