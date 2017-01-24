function setup() {
  createCanvas(600, 800); //  drawing out the canvas
  smooth(); // anti-alias edges
}

function draw() {
  // Setting Maroon base
  strokeWeight(1); // set default stroke weight to 1px
  stroke(245, 214, 219); // setting 1px light pink border
  fill(115, 62, 78); // painting largest swath of color – maroon.
  rect(0, 0, 253, 256); // drawing a rectangle of the largest swath of color

  // Building slim red shapes along left border
  noStroke(); // removing stroke
  fill(181, 0, 43); // setting bright red fill for top circle
  ellipse (-1.5, 69, 15, 99); // drawing ellipse positioned slightly off canvas
  c = color(174, 0, 47, 60); // defines a new red at 60% transparency
  fill(c); // sets the fill of the new object to that red
  ellipse(1, 162, 11, 78); // draws the transparent red ellipse
  value = alpha(c);  //  Sets 'value' to alpha of 60
  
  // Building all the maroon tiles for center area
  fill(141, 9, 57); //  setting marroon shade for rectangle
  rect(50, 14, 68, 220); //  drawing rectangle at 85, 125 with a width of 68 and height of 220.
  fill(141, 9, 57); //  setting marroon shade for rectangle
  rect(116, 24, 36, 194); //  drawing rectangle at 85, 125 with a width of 68 and height of 220.
  fill(124, 15, 53); //  setting marroon shade for rectangle
  rect(152, 17, 102, 201); //  drawing rectangle at 85, 125 with a width of 68 and height of 220.

  //  Adding some organic shapes along bottom
  c2 = color(135, 19, 58, 90); // defines a new marroon at 90% transparency
  fill(c2); // sets the fill of the new object to that red
  ellipse(169, 221, 81, 32); // draws the transparent red ellipse
  value = alpha(c2);  //  Sets 'value' to alpha of 80
  ellipse(242, 226, 20, 37); // draws the transparent red ellipse

  //  Adding the purplish shapes to the center and right side of the canvas
  fill(115, 62, 78); // setting color to background
  ellipse(223, 120, 20, 154); // drawing ellipse positioned along the right edge
  rect(159, 33, 7, 176); // drawing tall slim rectangle near center screen
  ellipse(173, 183, 5, 8); //  drawing ellipse positioned along the right edge
  ellipse(223, 15, 22, 21); //  cutting out the top edge of the red rectangle
  ellipse(166, 16, 65, 12); //  cutting out the top edge of the red rectangle
  quad(125, 45, 125, 188, 141, 181, 145, 42);
  
  //  Adding more transparent ellipses for depth 
  c3 = color(73, 39, 54, 90); // defines a new dark transparent circle 
  fill(c3); // sets the fill of the new object to that red
  ellipse(201, 120, 11, 178); // draws the transparent red ellipse
  value = alpha(c3);  //  Sets 'value' to alpha of c3 color  
  ellipse(203, 91, 12, 25); // draws the transparent red ellipse
  ellipse(207, 123, 10, 14); // draws the transparent red ellipse
  
  //  Adding dark grey circle along right side
  fill(44, 35, 42); // defines a new dark circle 
  ellipse(240, 120, 14, 57); //  drawing ellipse positioned along the right edge
  fill(116, 19, 53); // defines a new dark triangle 
  triangle(255, 202, 255, 222, 215, 210); //  drawing a triangle positioned along the right edge 
  
  //  Adding dark grey circle along right side
  fill(118, 29, 60); // defines fill for new rectangle
  rect(76, 46, 15, 130); //  drawing 15x130 rectangle positioned at 76, 46
  
  //  Adding orange lines & box
  stroke(237, 139, 46); // defines stroke for lines
  line(125, 45, 125, 188); //  drawing line
  line(145, 42, 141, 181); //  drawing line from 145,42 to 141,181
  fill(237, 139, 46); //  setting fill for orange rectangle same as lines
  rect(123, 187, 18, 9); //  drawing 18x9 rectangle at 123,187
  
  //  And now to the fun stuff – two complex shapes. Dark, small one first...
  noStroke(); // removing stroke
  beginShape(); // telling it there will be a shape
  fill(75, 32, 47); // pretty color. not really, mostly black.
  vertex(118, 107); // telling the shape where to start
  bezierVertex(118, 107, 137, 205, 118, 107); // anchor pt 1
  bezierVertex(112, 134, 120, 144, 120, 144); // moving down 
  bezierVertex(107, 203, 149, 177, 107, 203); // right edge
  bezierVertex(93, 197, 106, 189, 106, 189); // curving to the left
  bezierVertex(96, 182, 98, 196, 96, 182); //  bump 1
  bezierVertex(124, 179, 111, 153, 111, 153); // bump 2
  bezierVertex(118, 107, 118, 107, 118, 107); // back to the start
  endShape();
  
  //  ...and the orange twisty complicated one.
  beginShape(); // it's on.
  fill(237, 139, 46); // setting the color for the shape
  vertex(53, 16); // giving the shape a starting point
  bezierVertex(46, 17, 53, 16, 53, 16); // starting at the upper left
  bezierVertex(43, 42, 52, 36, 52, 36); // second anchor point (going counter clockwise)
  bezierVertex(49, 60, 52, 56, 52, 56); // third anchor point along left
  bezierVertex(50, 88, 52, 93, 50, 88); // fourth anchor point along left
  bezierVertex(58, 106, 55, 102, 56, 92); // fifth anchor point, ducks under
  bezierVertex(58, 106, 56, 114, 58, 106); // sixth directly under
  bezierVertex(57, 137, 51, 141, 57, 137); // seventh directly under
  bezierVertex(57, 137, 49, 151, 57, 153); // eight – a little bounce
  bezierVertex(57, 137, 62, 202, 54, 185); // ninth – getting closer
  bezierVertex(59, 239, 59, 239, 59, 239); // tenth – bottom left edge
  bezierVertex(63, 224, 63, 224, 63, 224); // eleventh – and up
  bezierVertex(65, 234, 75, 233, 65, 234); // twelfth – and back down
  bezierVertex(67, 218, 72, 222, 72, 222); // thirteenth -bottom right edge
  bezierVertex(71, 207, 79, 205, 71, 207); // fourteenth 
  bezierVertex(68, 193, 79, 205, 75, 197); // fifteenth 
  bezierVertex(59, 166, 65, 172, 65, 172); // Sixteenth  
  bezierVertex(68, 122, 68, 122, 68, 128); // seventeenth 
  bezierVertex(68, 106, 78, 105, 68, 106); // eighteenth 
  bezierVertex(82, 114, 82, 114, 82, 114); // ninteenth 
  bezierVertex(85, 106, 86, 93, 85, 106); // twentieth 
  bezierVertex(72, 96, 72, 96, 72, 96); // 21st
  bezierVertex(61, 80, 61, 80, 61, 80); // 22nd
  bezierVertex(47, 40, 59, 56, 59, 56); // 23nd 
  bezierVertex(64, 43, 70, 50, 64, 43); // 24nd 
  bezierVertex(81, 65, 96, 75, 81, 65); // 25nd 
  bezierVertex(91, 58, 87, 45, 91, 58); // 26nd 
  bezierVertex(112, 48, 112, 48, 112, 48); // 27nd 
  bezierVertex(102, 23, 117, 37, 117, 37); // 28nd 
  bezierVertex(131, 32, 150, 34, 131, 32); // 29nd 
  bezierVertex(154, 11, 170, 26, 154, 11); // 30nd 
  bezierVertex(160, 14, 182, 19, 182, 19); // 31nd rightmost edge
  bezierVertex(148, 30, 154, 6, 154, 6); // 32nd 
  bezierVertex(121, 24, 121, 24, 121, 24); // 33nd 
  bezierVertex(113, 14, 113, 14, 113, 14); // 34th 
  bezierVertex(101, 8, 102, 17, 102, 17); // 35th 
  bezierVertex(78, 11, 102, 17, 102, 17); // 36th 
  bezierVertex(23, 16, 53, 16, 53, 16); // giving the shape an ending point
  endShape(); // and done.
}