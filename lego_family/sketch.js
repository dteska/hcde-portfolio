/*  Created by Danielle Teska
    Last edited 1/28/17
    Lego Scooby Gang 
*/
var ypos1 = 30;
var xpos2 = 30;
var ypos2 = 30;
var xpos3 = 921;
var ypos3 = 30;
var xpos4 = 90;
var ypos4 = 528;
var xpos5 = 850;
var ypos5 = 553;
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
  fred(); // calling fred function
  shaggy(); // calling shaggy function
  daphne(); // calling daphne function
  scooby(); // calling scooby function
}
function shaggy() { // Sending Shaggy from 930, 30 to 535, 308. Moves 395 across and 278 down.
  fill(250, 164, 37); // shaggy's orange hair
  rect(xpos3, ypos3, 42, 25); // hair rectangle 
  fill(255, 233, 196); // shaggy's face
  rect(xpos3, ypos3 + 25, 42, 26); // face rectangle
  fill(222, 226, 42); // shaggy's shirt
  rect(xpos3, ypos3 + 50, 42, 92); // shirt rectangle
  fill(168, 84, 73); // shaggy's pants
  rect(xpos3, ypos3 + 131, 42, 51); // pants rectangle
  fill(0, 28, 45); // shaggy's shoes
  rect(xpos3, ypos3 + 182, 42, 12); // shoe rectangle
  if (xpos3 > 535 || xpos3 < 30) { // when shaggy gets to 535,y and 30,y
    dir3 = dir3 * 1; // then change direction
  }
  xpos3 = xpos3 - dir3; // otherwise, keep calm & carry on
  if (ypos3 > 308 || ypos3 < 30) { // when shaggy gets to x,308 and x,30
    dir3 = dir3 * -1; // then change direction
  }
  ypos3 = ypos3 + dir3; // otherwise, keep calm & carry on
}
function velma() { // Sending Velma from 80,30 to 466, 308. Moves 386 over and 278 down. 
  fill(168, 84, 73); // velma's red hair, skirt, and socks
  rect(xpos2 - 20, ypos2 - 18, 42, 25); // hair rectangle 
  rect(xpos2 - 20, ypos2 + 72, 42, 32); // skirt rectangle
  rect(xpos2 - 20, ypos2 + 122, 42, 12); // shoe rectangle
  fill(255, 233, 196); // velma's face
  rect(xpos2 - 20, ypos2 - 2, 42, 26); // face rectangle
  rect(xpos2 - 20, ypos2 + 100, 42, 6); // leg rectangle
  fill(250, 164, 37); // velma's shirt & socks
  rect(xpos2 - 20, ypos2 + 24, 42, 54); // shirt rectangle
  rect(xpos2 - 20, ypos2 + 105, 42, 17); // socks rectangle
  fill(90, 208, 231); // velma's glasses
  stroke(0); // setting glass frame to black
  strokeWeight(1); // setting glasses thickness to 1
  rect(xpos2 - 16, ypos2, 14, 11); // left pane of glasses 
  rect(xpos2 + 4, ypos2, 14, 11); // right pane of glasses   
  if (xpos2 > 466 || xpos2 < 30) { // when velma gets to 466,y and 30,y
    dir2 = dir2 * -1; // then change direction
  }
  xpos2 = xpos2 + dir2; // otherwise, keep calm & carry on
  if (ypos2 > 308 || ypos2 < 30) { // when velma gets to x,308 and x,30
    dir2 = dir2 * -1; // then change direction
  }
  ypos2 = ypos2 + dir2; // otherwise, keep calm & carry on
}
function fred() { // Sending Fred from 30,528  to 335, 250. Moves 305 over and 278 up
  noStroke(); // removing stroke from velma's glasses
  fill(255, 230, 0); // fred's blonde hair
  rect(xpos4, ypos4, 42, 25); // hair rectangle 
  fill(255, 233, 196); // fred's face
  rect(xpos4, ypos4 + 25, 42, 26); // face rectangle
  fill(90, 208, 231); // fred's collar & pants
  rect(xpos4, ypos4 + 50, 42, 7); // collar rectangle
  rect(xpos4, ypos4 + 129, 42, 51); // pants rectangle
  fill(255); // fred's shirt
  rect(xpos4, ypos4 + 57, 42, 71); // shirt rectangle
  fill(250, 164, 37); // fred's shoes and tie
  rect(xpos4, ypos4 + 180, 42, 12); // shoe rectangle
  quad(xpos4 + 23, ypos4 + 52, xpos4 + 35, ypos4 + 66, xpos4 + 23, ypos4 + 79, xpos4 + 10, ypos4 + 66); // tie quadrangle
  if (xpos4 > 335 || xpos4 < 90) { // when fred gets to 508, y and 335, y
    dir4 = dir4 * 1; // then change direction
  }
  xpos4 = xpos4 + dir4; // otherwise, keep calm & carry on
  if (ypos4 > 528 || ypos4 < 250) { // when fred gets to x,528 and x,250
    dir4 = dir4 * -1; // then change direction
  }
  ypos4 = ypos4 - dir4; // otherwise, keep calm & carry on
}
function daphne() { //sending Daphne from 930,553 to 735, 275. Moves 395 over and 278 up.
  fill(250, 164, 37); // daphne's orange hair
  rect(xpos5, ypos5, 42, 30); // hair rectangle 
  fill(132, 112, 181); // daphne's dress
  rect(xpos5, ypos5 + 55, 42, 92); // dress rectangle
  rect(xpos5, ypos5 + 138, 42, 17); // socks rectangle
  fill(255, 233, 196); // daphne's face
  rect(xpos5, ypos5 + 31, 42, 26); // face rectangle
  rect(xpos5, ypos5 + 139, 42, 16); // leg rectangle
  fill(191, 173, 212); // daphne's headband, dress trim & shoes
  rect(xpos5, ypos5 + 13, 42, 6); // headband rectangle
  rect(xpos5, ypos5 + 107, 42, 6); // trimming rectangle  
  rect(xpos5, ypos5 + 133, 42, 6); // trimming rectangle
  rect(xpos5, ypos5 + 155, 42, 12); // shoe rectangle
  fill(222, 226, 42); // daphne's collar & scarf
  rect(xpos5, ypos5 + 55, 42, 5); // collar rectangle
  quad(xpos5 + 23, ypos5 + 57, xpos5 + 35, ypos5 + 69, xpos5 + 23, ypos5 + 81, xpos5 + 10, ypos5 + 69); // tie quadrangle
  if (xpos5 > 850 || xpos5 < 735) { // when daphne gets to 930, y and 735, y
    dir5 = dir5 * 1; // then change direction
  }
  xpos5 = xpos5 - dir5; // otherwise, keep calm & carry on
  if (ypos5 > 553 || ypos5 < 275) { // when daphne gets to x,553 and x,275
    dir5 = dir5 * -1; // then change direction
  }
  ypos5 = ypos5 - dir5; // otherwise, keep calm & carry on
}
function scooby() { // Moving Scooby from 466, 30 to 466, 308. Moves 278 down.
  fill(198, 138, 15); // Scooby's fur
  rect(466, ypos1, 53, 121); // body rectangle 
  rect(466, ypos1 - 14, 20, 12); // left ear rectangle 
  rect(499, ypos1 - 14, 20, 12); // right ear rectangle 
  rect(453, ypos1 + 74, 12, 60); // tail rectangle 
  rect(466, ypos1 + 122, 24, 12); // left paw 
  rect(495, ypos1 + 122, 24, 12); // left paw 
  fill(0, 28, 45); // Scooby's nose
  rect(483, ypos1 + 20, 21, 13); // nose rectangle  
  fill(247, 154, 171); // Scooby's tongue
  rect(483, ypos1 + 37, 21, 13); // nose rectangle 
  fill(90, 208, 231); // Scooby's collar & tag
  rect(466, ypos1 + 54, 54, 8); // collar rectangle 
  quad(494, ypos1 + 60, 506, ypos1 + 73, 494, ypos1 + 84, 482, ypos1 + 73); // tie quadrangle
  if (ypos1 > 308 || ypos1 < 30) { // when scooby gets to x, 308 or x, 30...
    dir = dir * -1; // then change direction
  }
  ypos1 = ypos1 + dir; // otherwise, keep calm and carry on
} 