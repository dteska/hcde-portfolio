/*  Created by Danielle Teska
    Last edited 1/30/17
    Lego Scooby Gang – builds five characters starts them on the edges, brings them in and out, and loops.
*/
var ypos1 = 30; // scooby y position
var xpos2 = 30; // velma xposition
var ypos2 = 30; // velma yposition
var xpos3 = 921; // shaggy xposition
var ypos3 = 30; // shaggy yposition
var xpos4 = 90; // fred xposition
var ypos4 = 528; // fred yposition
var xpos5 = 850; // daphne xposition
var ypos5 = 553; // daphne yposition
var dir = 1
var dir2 = 1
var dir3 = 1
var dir4 = 1
var dir5 = 1

function setup() {
  createCanvas(1000, 750); // drawing out the canvas
  smooth(); // anti-alias edges
}

function draw() {
  background(250, 244, 229); // creme background
  velma(); // calling velma function
  if (xpos2 > 466 || xpos2 < 30) { // when velma gets to 466,y and 30,y
    dir2 = dir2 * -1; // then change direction
  }
  xpos2 = xpos2 + dir2; // otherwise, keep calm & carry on
  if (ypos2 > 308 || ypos2 < 30) { // when velma gets to x,308 and x,30
    dir2 = dir2 * -1; // then change direction
  }
  ypos2 = ypos2 + dir2; // otherwise, keep calm & carry on
  fred(); // calling fred function
  if (xpos4 > 335 || xpos4 < 90) { // when fred gets to 508, y and 335, y
    dir4 = dir4 * 1; // then change direction
  }
  xpos4 = xpos4 + dir4; // otherwise, keep calm & carry on
  if (ypos4 > 528 || ypos4 < 250) { // when fred gets to x,528 and x,250
    dir4 = dir4 * -1; // then change direction
  }
  ypos4 = ypos4 - dir4; // otherwise, keep calm & carry on
  shaggy(); // calling shaggy function  
  if (xpos3 > 535 || xpos3 < 30) { // when shaggy gets to 535,y and 30,y
    dir3 = dir3 * 1; // then change direction
  }
  xpos3 = xpos3 - dir3; // otherwise, keep calm & carry on
  if (ypos3 > 308 || ypos3 < 30) { // when shaggy gets to x,308 and x,30
    dir3 = dir3 * -1; // then change direction
  }
  ypos3 = ypos3 + dir3; // otherwise, keep calm & carry on
  daphne(); // calling daphne function
  if (xpos5 > 850 || xpos5 < 735) { // when daphne gets to 930, y and 735, y
    dir5 = dir5 * 1; // then change direction
  }
  xpos5 = xpos5 - dir5; // otherwise, keep calm & carry on
  if (ypos5 > 553 || ypos5 < 275) { // when daphne gets to x,553 and x,275
    dir5 = dir5 * -1; // then change direction
  }
  ypos5 = ypos5 - dir5; // otherwise, keep calm & carry on
  scooby(); // calling scooby function
  if (ypos1 > 308 || ypos1 < 30) { // when scooby gets to x, 308 or x, 30...
    dir = dir * -1; // then change direction
  }
  ypos1 = ypos1 + dir; // otherwise, keep calm and carry on
}

// Sending Shaggy from 930, 30 to 535, 308. Moves 395 across and 278 down.
function shaggy() { 
  fill(250, 164, 37); 
  rect(xpos3, ypos3 - 60, 42, 25); 
  fill(255, 233, 196); 
  rect(xpos3, ypos3 - 35, 42, 26); 
  fill(222, 226, 42); 
  rect(xpos3, ypos3 - 10, 42, 92); 
  fill(168, 84, 73); 
  rect(xpos3, ypos3 + 71, 42, 51); 
  fill(0, 28, 45); 
  rect(xpos3, ypos3 + 122, 42, 12); 
}

// Sending Velma from 80,30 to 466, 308. Moves 386 over and 278 down. 
function velma() { 
  fill(168, 84, 73); 
  rect(xpos2 - 20, ypos2 - 18, 42, 25); 
  rect(xpos2 - 20, ypos2 + 72, 42, 32); 
  rect(xpos2 - 20, ypos2 + 122, 42, 12); 
  fill(255, 233, 196); 
  rect(xpos2 - 20, ypos2 - 2, 42, 26); 
  rect(xpos2 - 20, ypos2 + 100, 42, 6);
  fill(250, 164, 37);
  rect(xpos2 - 20, ypos2 + 24, 42, 54); 
  rect(xpos2 - 20, ypos2 + 105, 42, 17); 
  fill(90, 208, 231); 
  stroke(0); 
  strokeWeight(1); 
  rect(xpos2 - 16, ypos2, 14, 11);
  rect(xpos2 + 4, ypos2, 14, 11); 
}

// Sending Fred from 30,528  to 335, 250. Moves 305 over and 278 up
function fred() { 
  noStroke(); 
  fill(255, 230, 0); 
  rect(xpos4, ypos4, 42, 25);  
  fill(255, 233, 196); 
  rect(xpos4, ypos4 + 25, 42, 26); 
  fill(90, 208, 231); 
  rect(xpos4, ypos4 + 50, 42, 7); 
  rect(xpos4, ypos4 + 129, 42, 51); 
  fill(255); 
  rect(xpos4, ypos4 + 57, 42, 71); 
  fill(250, 164, 37); 
  rect(xpos4, ypos4 + 180, 42, 12); 
  quad(xpos4 + 23, ypos4 + 52, xpos4 + 35, ypos4 + 66, xpos4 + 23, ypos4 + 79, xpos4 + 10, ypos4 + 66); 
}

//sending Daphne from 930,553 to 735, 275. Moves 395 over and 278 up.
function daphne() { 
  fill(250, 164, 37); 
  rect(xpos5, ypos5, 42, 30); 
  fill(132, 112, 181); 
  rect(xpos5, ypos5 + 55, 42, 92); 
  rect(xpos5, ypos5 + 138, 42, 17); 
  fill(255, 233, 196); 
  rect(xpos5, ypos5 + 31, 42, 26); 
  rect(xpos5, ypos5 + 139, 42, 16); 
  fill(191, 173, 212); 
  rect(xpos5, ypos5 + 13, 42, 6); 
  rect(xpos5, ypos5 + 107, 42, 6); 
  rect(xpos5, ypos5 + 133, 42, 6); 
  rect(xpos5, ypos5 + 155, 42, 12); 
  fill(222, 226, 42); 
  rect(xpos5, ypos5 + 55, 42, 5); 
  quad(xpos5 + 23, ypos5 + 57, xpos5 + 35, ypos5 + 69, xpos5 + 23, ypos5 + 81, xpos5 + 10, ypos5 + 69); 
}
// Moving Scooby from 466, 30 to 466, 308. Moves 278 down.
function scooby() { 
  fill(198, 138, 15); 
  rect(466, ypos1, 53, 121); 
  rect(466, ypos1 - 14, 20, 12); 
  rect(499, ypos1 - 14, 20, 12); 
  rect(453, ypos1 + 74, 12, 60); 
  rect(466, ypos1 + 122, 24, 12); 
  rect(495, ypos1 + 122, 24, 12);  
  fill(0, 28, 45); 
  rect(483, ypos1 + 20, 21, 13); 
  fill(247, 154, 171); 
  rect(483, ypos1 + 37, 21, 13); 
  fill(90, 208, 231); 
  rect(466, ypos1 + 54, 54, 8); 
  quad(494, ypos1 + 60, 506, ypos1 + 73, 494, ypos1 + 84, 482, ypos1 + 73); 
} 