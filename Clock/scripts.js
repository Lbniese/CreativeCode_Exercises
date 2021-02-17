console.log("Loaded: scripts.js")

// // retrieve the node in the DOM representing the <canvas> element
const canvas = document.getElementById("canvas");
//returns two-dimensional rendering context of canvas
const ctx = canvas.getContext("2d");
// get distance form center of circle to perimeter (radius)
let radius = canvas.height / 2;
// translate() method adds a translation transformation to the current matrix
//by moving the canvas and its origin x units horizontally and y units vertically on the grid.
ctx.translate(radius, radius);
// reducing size of clock radius to fit it inside the canvas
radius = radius * 0.90
// drawClock() is the method containing the calls to draw the clock
drawClock();


// method to draw clock - currently draws white circle
function drawClock() {
    console.log("Called: drawClock()")
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}
