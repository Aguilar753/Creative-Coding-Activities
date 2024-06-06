var table; // Data table

var colors = [ // Various type of colors
  
	" #CC3544", 
  
	" #FF9789", 
  
	" #00FFCA", 
  
	" #148FCC", 
  
	" #3D7A99", 
  
];

// Loads the data

function preload() {
  
table = loadTable("movies.csv", "csv", "header"); // Added csv file to my p5js
  
}

// Added canva sizes and other functions

function setup() {
  
createCanvas(800, 400);
  
textAlign(CENTER, CENTER);
  
textSize(20);
  
}

// Style of the datas

function draw() {
  
background(255);
  
fill(0);
  
noStroke();
  
textStyle(BOLD);
  
textSize(20);
  
text("Pupular movies rating.", width / 2, 50);

if (table) {
  
var recWidth = -600; // The width and position of the bar
  
var recHeight = 4; // Bar height
  
var rowCount = table.getRowCount(); // The row number of the table
  
var colCount = table.getColumnCount(); // Table column
  
var startX = width / 2 - recWidth / 20; // Bar position
  
for (var i = 0; i < rowCount; i++) { // Row numbers
  
var fillColor = colors[i % colors.length]; // Colors
  
fill(fillColor); // There are 5 bars of different colors
  
var value = parseFloat(table.getString(i, 1)); // Gets the value of the second column from the current row
  
var recLength = map(value,-5, 100, 0, recWidth); // the values and the width of the bar
  
rect(startX, (i + 2) * 50 - recHeight / 1, recLength, recHeight); // Determines the bar position and size.
  
for (var j = 0; j < colCount; j++) { // Loop column of the data
  
var value = table.getString(i, j); // Gets the data from the current cell of the table.
  
// Displays the movies and the ratings shown in the screen
  
text(value, (j + 1) * width / (colCount + 1), (i + 2) * 50);
  
      }
    }
  }
}
