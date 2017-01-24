var mic;
var vol;
function setup() {
  createCanvas(800, 900); // drawing out the canvas
  smooth(); //anti-alias edges
  background(255);
  mic = new p5.AudioIn();
  mic.start
}

function draw() {
  background(255);
  vol = mic.getLevel(); // 0-1
  var newVol = map(vol,0,1,50,5000);
  face();
  eyes();
  pupils();
//  hair();
//  ears();
  nose();
  mouth();
}

function face() {
  fill(255, 233, 196);
  ellipse(400, 400, 600, 500);
}
function eyes() {
  strokeWeight (1);
  stroke(0);
  fill(255);
  ellipse(325, 350, newVol, 150);
  
  ellipse(500, 350, 150, 150);
}
function pupils() {
  fill (0);
  ellipse (310, 350, 80, 90); // left pupil
  ellipse (480, 350, 80, 90); // right pupil 
  noStroke();
  fill(255);
  ellipse (325, 340, 50, 50);
  ellipse (500, 340, 50, 50);
}

function nose(){
  stroke(0);
  strokeWeight(1);
  noFill();
  arc(435, 420, 30, 30, HALF_PI, HALF_PI+PI);
}
function mouth(){
  stroke(0);
  strokeWeight(1);
  noFill();
  arc(420, 510, 100, 40, 0, PI);
}

