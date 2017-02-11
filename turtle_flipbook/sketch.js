var dudeX = 450
var aspectRatio = 4608 / 3072;

// preloads all five images
function preload() {
  dude = loadImage("DSC_0129.jpg");
  dude1 = loadImage("DSC_0130.jpg");
  dude2 = loadImage("DSC_0131.jpg");
  dude3 = loadImage("DSC_0133.jpg");
  dude4 = loadImage("DSC_0139.jpg");
}

function setup() {
  createCanvas(1150, 750); // draws canvas 1150 wide and 750 high
  textFont("Lobster"); // sets default font to Lobster Google Font
  background(255); // sets background to white
  textSize(40); // sets default text size
}

function draw() {
  instructions(); // calls instructions functiojn
  noLoop(); // but only plays it once so that the text goes away.
}

// creates line of text instructions with blinking 'cursor'
function instructions() {
  background(255);
  fill(55, 55, 55);
  text("type 'Dude!' to begin", 320, 680);
}

// calls a new image for each letter of "Dude!", shows the word as it forms, and changes color to white at end.
function keyTyped() {
  background(0);
  image(dude, 0, 0, 1150, 750 * aspectRatio);
  if (key == "D") { //will check for uppercase D
    text("D", dudeX, 680);
  }
  if (key == "u") { //will check for lowercase u
    background(0);
    image(dude1, 0, 0, 1150, 750 * aspectRatio);
    text("D", dudeX, 680);
    text("u", dudeX + 28, 680);
  } else if (key == "d") { //will check for lowercase d
    background(0);
    image(dude2, 0, 0, 1150, 750 * aspectRatio);
    text("D", dudeX, 680);
    text("u", dudeX + 28, 680);
    text("d", dudeX + 48, 680);
  } else if (key == "e") { //will check for lowercase e
    background(0);
    image(dude3, 0, 0, 1150, 750 * aspectRatio);
    text("D", dudeX, 680);
    text("u", dudeX + 28, 680);
    text("d", dudeX + 48, 680);
    text("e", dudeX + 71, 680);
  } else if (key == "!") { //will check for !
    background(0);
    image(dude4, 0, 0, 1150, 750 * aspectRatio);
    fill(255);
    text("D", dudeX, 680);
    text("u", dudeX + 28, 680);
    text("d", dudeX + 48, 680);
    text("e", dudeX + 71, 680);
    text("!", dudeX + 99, 680);
  }
}