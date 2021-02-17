console.log("Loaded: scripts.js");

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


// drawClock() calls the functions that draws each part of the clock
function drawClock() {
    console.log("Called: drawClock()");
    drawFace(ctx, radius);
}

function drawFace(ctx, radius) {
    console.log("Called: drawFace()");

    let grad;

    // draw white circle
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    // draw pastelle green ring
    // radial gradient (95% and 105% of original clock radius)
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    // adds pastelle green color to the ring
    grad.addColorStop(0, '#CAE7C1');
    // define the gradient as the stroke style of the drawing object
    ctx.strokeStyle = grad;
    // define the line width of the drawing object (10% of radius)
    ctx.lineWidth = radius * 0.1;
    // draw circle
    ctx.stroke();

    // draw clock center
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#CAE7C1';
    ctx.fill();
}
