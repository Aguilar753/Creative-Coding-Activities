let showIntro = true; // Displays in the intro first

let introAlpha = 20; // Duration of the intro

var posX = 20; // Starting horizontal position of an object to 10

var posY = 200; // Starting point position of the moving obstacle

var rectx = 10; // Obstacle moves in a horizontal position

var recty = 10; // Obstacle moves in a vertical position

var x = 20; // Speed of the cube going left to right

var y = 5; // Speed of the cube going up and down

var playerRectY = 400; // Position of the player's obstacle

var rectSpeed = 10; // Speed of the player's obstacle

var player_score = 10; // The score of the player

var opps_score = 10; // Opp's score


var img; // Background image


// This will load the background image

function preload() {
  
img = loadImage("Galaxy.jpg"); 
  
}

// Canva size

function setup() {
  
createCanvas(800, 800);
  
}

// An image will be displayed as the background

function draw() {
  
image(img, 0, 0, 900);
  
// Decides whether to show the intro or the main game

if (showIntro) {
      
intro();
      
} else {
      
mainSketch();
      
    }
  
}

// Fade in intro

// As soon as you press "enter" key, the game begins

function keyPressed() {
  
if (keyCode === ENTER) {
      
showIntro = false;
  
    }
  
}

function intro() {
  
background(0);
  
textFont("Silkscreen");
  
fill(0, introAlpha);
  
noStroke();
  
textAlign(CENTER);
  
textSize(55);
  
fill(255, introAlpha);
  
frameRate(30);
  
text("The Cube Game", 390, 255);
  
textSize(15);
  
textStyle(BOLD);
  
fill(random(255, 0, 0));
  
text("[ Press Enter to play! ]", width / 2, height - height / 3);
  
introAlpha = min(300, introAlpha + 3);
  
}

// Main sketch

function mainSketch() {
  
textSize(20);
  
fill(255);
  
rect(750, playerRectY, 50, 100);  
  
fill(255);
  
rect(rectx, recty, 5, 200);
  
fill(246, 128, 90);
  
rect(posX, posY, 20);
  
textSize(25);
  
fill(210, 60, 146);
  
text(opps_score, 90, 760);
  
textStyle(BOLD);
  
text("Your Score: " + player_score, 600, 760);
  
// The cubes movement
  
posY += y;
  
posX += x;
  
// The cube bounces off the walls when collided

if (posX > 800 || posX < 15) {
  
x = -x;

}

if (posY > 800 || posY < 10) {
  
y = -y;
  
}

// Update opponent's points after collision with obstacle
  
if ((posY > recty && posY < recty + 90) && (posX + 10 <= 15)) {
  
let choice = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  
opps_score += random(choice);
  
}

if ((posY > playerRectY && posY < playerRectY + 90) && (posX + 10 >= 700)) {
  
player_score += 1;
  
}

if (posX < 900) {
  
recty = posY - 50;
  
}

// Displays a message saying you won
  
if (player_score === 400 && opps_score < 400) {
  
textSize(40);
  
textStyle(BOLD);
  
textSize(30);
  
background(0);
  
textAlign(CENTER);
  
fill(random(255, 0, 0));
  
text("You win!!!", 390, 200);
  
noLoop();
  
    }

// Displays a message saying "The opps wins"
  
if (opps_score === 400 && player_score < 400) {
  
textStyle(BOLD);
  
textSize(40);
  
background(0);
  
textAlign(CENTER);
  
fill(random(255, 0, 0));
  
text("The opps wins...", 390, 200);
  
noLoop(); // Stops the loop
  
}

  
// Control keys
  
if (keyIsDown(UP_ARROW)) {
  
playerRectY = playerRectY - rectSpeed
  
}

if (keyIsDown(DOWN_ARROW)) {
  
playerRectY = playerRectY + rectSpeed
  
}

// Display game title with instructions
  
textSize(70);
  
textStyle(BOLD);
  
text("The Cube Game", 395, 90);
  
textSize(20);
  
text("Reach 400 score to win.", 395, 120);
  
}
