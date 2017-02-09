/*  Created by Danielle Teska
    Last edited 2/6/17
    Shifty eyed and jumping monster
    Uses functions and parameters
*/

function setup() {
  createCanvas(800, 800); // drawing out the canvas v
  smooth(); // anti-alias edges
}

function draw() {
  background(50); // dark grey background
  lilbuddy(225, 150);
  //if mouse moves, then shift pupil to move, but only within coordinates of the eye itself.  
  // if ((mouseX > 0 || mouseX < 800) && (mouseY > 0 && mouseY < 800)) {
  //   pupil(xposPupil + dist(xposPupil, mouseX, yposPupil, mouseY), yposPupil + dist(xposPupil, mouseX, yposPupil, mouseY));
  //   //dist(mouseX, mouseY, 360, 320);
  // } else if ((xposPupil > 255 && xposPupil < 466) && (yposPupil > 425 && yposPupil < 215)); {
  //   ellipse(xposPupil, yposPupil, 175, 175);
  // }
}

// draws a monster at the x,y location passed
// this monster includes a body, legs, mouth, and eyes
function lilbuddy(x, y) {
  body();
  leftLeg();
  rightLeg();
  mouth();
  eye();
  pupil(360, 320);
}

//jumping on click
function mousePressed() {

}

function mouseReleased() {

}

// drawing the monster's body
function body() {
  noStroke();
  fill(64, 99, 174);
  ellipse(360, 364, 360, 360);
}

// drawing the monster's white of his eye
function eye() {
  fill(255);
  ellipse(360, 320, 210, 210);
}

// drawing the monster's pupil
function pupil() {
  fill(50);
  ellipse(360, 320, 175, 175);
}

// drawing the monster's mouth
function mouth() {
  fill(50);
  ellipse(360, 476, 140, 31);
}

// drawing the monster's left leg
function leftLeg() {
  rect(237, 555, 115, 16);
  rect(342, 535, 10, 31);
}

// drawing the monster's right leg
function rightLeg() {
  rect(362, 555, 115, 16);
  rect(362, 535, 10, 31);
}