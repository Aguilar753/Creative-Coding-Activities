// Created by Kirk Aguilar and Wyxy Santiago on P5js

// Welcome to BathSpa University.

// This is our own concept idea for our group activity!

function setup() {
  createCanvas(windowWidth, windowHeight); // Canva's size
}

function draw() {
  if (showIntro) {
    intro();
  } else {
    mainSketch();
  }
}

function keyPressed() {
  if (keyCode === ENTER)
    // Enter key function

    showIntro = false; // As soon as the "Enter" key is pressed, the introduction fades out.
}

function intro() {
  background(255); // Background color

  fill(126, 161, 255, introAlpha); // Fade in color.

  noStroke();

  textAlign(CENTER); // Centering text on the screen.

  textFont("Gaegu"); // Custom font "Gaegu"

  textSize(40); // Text size

  text("<<Press Enter to reveal>>", width / 2, height - height / 2); // A welcome message will appear on the screen as an introduction.

  introAlpha = min(300, introAlpha + 2); // Increase intro fade in transition.
}

let showIntro = true; // Intro display.

let introAlpha = 3; // Value of the fade in transition.

function mainSketch() {
  background(0); // Background color.

  textFont("Neonderthaw"); // Custom font "Neonderthaw"

  textSize(50); // Text size.

  textNeon(); // Neon text effect function.

  fill(255, introAlpha); // Fade in color with different color.

  textAlign(CENTER); // Text aligntment.

  text("Welcome to BathSpa University!", width / 2, height / 2);

  introAlpha = min(290, introAlpha + 10); // Fade in transition settings.
}

function textNeon(glowColor) {
  for (let i = 4; i < 20; i++) {
    let glowColor = color(91, 188, 255); // Neon Color.

    let glowSize = 45; // Size of the glow.

    let alphaValue = map(sin(frameCount / 35), -0, 1, 100, 500); // Pulse effect.

    glowColor.setAlpha(alphaValue);

    drawingContext.shadowColor = glowColor;

    drawingContext.shadowBlur = glowSize;
  }
}

// The End :D
