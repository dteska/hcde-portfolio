/*  Created by Danielle Teska
    Last edited 2/9/17
    Shifty eyed and jumping monster
    Uses functions and parameters
*/

var page = 0
var eyeDirectionHorizontal = 0
var eyeDirectionVertical = 0
var jumpValue = 320
var jumpDir = -2

function setup() {
  createCanvas(800, 800); // drawing out the canvas v
  smooth(); // anti-alias edges
}

function draw() {
  background(50); // dark grey background
  lilmonster(360, jumpValue); // draws monster at 360, 380\
  if (page == 0) { // for the shifty-eyed monster experience
    if (mouseX < 383 && mouseX > 340) { // if the mouse is between 340 and 383
      eyeDirectionHorizontal = mouseX - 360; // then set the pupil to move in the same horizontal direction as the mouse
    } else if (mouseY < 383 && mouseY > 340) { // otherwise if the mouse Y is between 340 and 383
      eyeDirectionVertical = mouseY - 360; // then set the pupil to move in the same vertical direction as the mouse
    }
  } else { // for the jumping monster experience
    if (jumpValue < 198 || jumpValue > 615) { // when monster gets to top and bottom edges
      jumpDir = jumpDir * -1; // then change direction
    }
    jumpValue = jumpValue + jumpDir; // otherwise, keep calm & carry on
  }
}

// provides ability to toggle between shifty eyes and jumping 
function mousePressed() {
  page = 1 - page;
}

// draws a monster at the x,y location passed
// this monster includes a body, legs, mouth, and eye
function lilmonster(x, y) {
  body(x, y);
  legs(x, y);
  mouth(x, y);
  eye(x, y);
  pupil(x + eyeDirectionHorizontal, y + eyeDirectionVertical);
}

// drawing the monster's body at the x, y location
function body(x, y) {
  noStroke();
  fill(64, 99, 174);
  ellipse(x, y - 16, 360, 360);
}

// drawing the monster's white of his eye at the x, y location
function eye(x, y) {
  fill(255);
  ellipse(x, y - 60, 210, 210);
}

// drawing the monster's pupil at the x, y location
function pupil(x, y) {
  fill(50);
  ellipse(x, y - 60, 175, 175);
}

// drawing the monster's mouth at the x, y location
function mouth(x, y) {
  fill(50);
  ellipse(x, y + 96, 140, 31);
}

// drawing the monster's legs at the x, y location
function legs(x, y) {
  //left leg
  rect(x - 123, y + 175, 115, 16);
  rect(x - 18, y + 155, 10, 31);
  //right leg
  rect(x + 2, y + 175, 115, 16);
  rect(x + 2, y + 155, 10, 31);
}