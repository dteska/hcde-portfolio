function setup() {
  createCanvas(720, 480);
  smooth();
  strokeWeight(2);
}

function draw() {
  //attaches robot to mouse cursor with offset
  background(205);
  translate(mouseX, mouseY);
  
  // Neck Three Parallel lines
  stroke(102);
  line(266, 257, 266, 162); // draws line from x1,y1 to x2, y2
  line(276, 257, 276, 162); // draws line from x1,y1 to x2, y2
  line(286, 257, 286, 162); // draws line from x1,y1 to x2, y2
  
  // Antennae Three askance lines
  line(276, 155, 246, 112); // draws line from x1,y1 to x2, y2
  line(276, 155, 306, 56);  // draws line from x1,y1 to x2, y2
  line(276, 155, 342, 170); // draws line from x1,y1 to x2, y2
  
  // Body
  noStroke();
  fill(102); // drawing a light grey ellipse first to put underneath body.
  ellipse (264, 377, 66, 66); 
  fill(123,79,91); // drawing a big red box as tall as the neck
  rect(219, 257, 90, 120);
  fill(206,141,55); // drawing a yellow horizontal line on the body on top of the other rectangle
  rect(219, 274, 90, 6);
  
  // Head
  fill(123,79,91); //changing head color to red
  ellipse(276, 155, 90, 90);
  fill(255);
  ellipse (288, 150, 28, 28);
  fill(0);
  ellipse (288, 150, 6, 6)
  fill(153);
  ellipse (263, 148, 10, 10);
  ellipse (296, 130, 8, 8);
  ellipse (305, 162, 6, 6);
}