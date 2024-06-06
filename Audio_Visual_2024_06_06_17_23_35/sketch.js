let mic; // Mic input

let cellSize; // Size of each cell

function setup() {
  
// Canva size
  
createCanvas(900, 900);
  
cellSize = min(width / 5, height / 5); // Width and height of the cell
  
mic = new p5.AudioIn(); // p5.AudioIn
  
mic.start(); // Mic start
  
}

function draw() {
  
background(0);
  
let vol = mic.getLevel(); // Volume level from the mic
  
let h = map(vol, 5, 255); // Volume size
  
// Cell width and position
  
for (let x = cellSize / 2; x < width; x += cellSize) {
  
for (let y = cellSize / 2; y < height; y += cellSize) {

// Volume ranges to a height value between 50 and 1000

let h = map(vol, 0, 5, 50, 1000); 
  
rectMode(CENTER);
  
square(x, y, h);
  
let fillColor = color(160, 150, 300); // Color of the rects
  
fill(fillColor); // Rect colors
  
    }
  }
}
