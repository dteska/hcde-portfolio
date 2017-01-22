function setup() {
  createCanvas(600, 400); // drawing out the canvas
  smooth(); //anti-alias edges
}
function draw() {
  // Setting Maroon base
  strokeWeight(1); //set default stroke weight to 1px
  stroke(245, 214, 219); //setting 1px light pink border
  fill(115, 62, 78); //painting largest swath of color – maroon.
  rect(0, 0, 253, 256); //drawing a rectangle of the largest swath of color

  // Building slim red shapes along left border
  noStroke(); //removing stroke
  fill(181, 0, 43); //setting bright red fill for top circle
  ellipse (-1.5, 69, 15, 99); // drawing ellipse positioned slightly off canvas
  c = color(174, 0, 47, 60); //defines a new red at 60% transparency
  fill(c); //sets the fill of the new object to that red
  ellipse (1, 162, 11, 78); //draws the transparent red ellipse
  value = alpha(c);  // Sets 'value' to alpha of 60
  
  //Building all the maroon tiles for center area
  noStroke(); //removing stroke
  fill(141, 9, 57); // setting marroon shade for rectangle
  rect (50, 14, 68, 220); // drawing rectangle at 85, 125 with a width of 68 and height of 220.
  fill(141, 9, 57); // setting marroon shade for rectangle
  rect (116, 24, 36, 194); // drawing rectangle at 85, 125 with a width of 68 and height of 220.
  fill(124, 15, 53); // setting marroon shade for rectangle
  rect (152, 17, 102, 201); // drawing rectangle at 85, 125 with a width of 68 and height of 220.

  // Adding some organic shapes along bottom
  noStroke(); //removing stroke
  c2 = color(135, 19, 58, 90); //defines a new marroon at 90% transparency
  fill(c2); //sets the fill of the new object to that red
  ellipse (169, 221, 81, 32); //draws the transparent red ellipse
  value = alpha(c2);  // Sets 'value' to alpha of 80
  ellipse (242, 226, 20, 37); //draws the transparent red ellipse

  // Adding the purplish shapes to the center and right side of the canvas
  noStroke(); //removing stroke
  fill(115, 62, 78); //setting color to background
  ellipse (223, 120, 20, 154); // drawing ellipse positioned along the right edge
  rect (159, 33, 7, 176); // drawing tall slim rectangle near center screen
  ellipse (173, 183, 5, 8); // drawing ellipse positioned along the right edge
  ellipse (223, 15, 22, 21); // cutting out the top edge of the red rectangle
  ellipse (166, 16, 65, 12); // cutting out the top edge of the red rectangle
  quad (125, 45, 125, 188, 141, 181, 145, 42);
  
  // Adding more transparent ellipses for depth 
  noStroke(); //removing stroke
  c3 = color(73, 39, 54, 90); //defines a new dark transparent circle 
  fill(c3); //sets the fill of the new object to that red
  ellipse (201, 120, 11, 178); //draws the transparent red ellipse
  value = alpha(c3);  // Sets 'value' to alpha of c3 color  
  ellipse (203, 91, 12, 25); //draws the transparent red ellipse
  ellipse (207, 123, 10, 14); //draws the transparent red ellipse
  
  // Adding dark grey circle along right side
  noStroke(); //removing stroke
  fill(44, 35, 42); //defines a new dark circle 
  ellipse (240, 120, 14, 57); // drawing ellipse positioned along the right edge
  fill(116, 19, 53); //defines a new dark triangle 
  triangle (255, 202, 255, 222, 215, 210); // drawing a triangle positioned along the right edge 
  
  // Adding dark grey circle along right side
  noStroke(); //removing stroke
  fill(118, 29, 60); //defines fill for new rectangle
  rect (76, 46, 15, 130); // drawing rectangle positioned along the left side 
  
  // Adding orange lines & box
  stroke(237, 139, 46); //defines stroke for lines
  line (125, 45, 125, 188); // drawing line
  line (145, 42, 141, 181); // drawing line
  fill(237, 139, 46)
  rect (123, 187, 18, 9);
  
}