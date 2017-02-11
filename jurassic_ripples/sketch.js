var mic;
var vol;
var rippleSize = 10
var x = 200
var y = 200

function setup() {
  createCanvas(1000, 1000); // draw 1000x1000 canvas
  background(88, 163, 232); // set background to light blue
  mic = new p5.AudioIn(); // says to mic to listen to new noises
  mic.start(); // and begin
}

function draw() {
  background(88, 163, 232); // set background to light blue
  vol = mic.getLevel(); // 0-1
  ripple(x, y); // call ripple function
  ripple(x + 400, y + 200); // call another ripple function 400 to the right and 200 down
  ripple(x + 100, y + 500); // call another ripple function 100 to the right and 500 down
}

// draw concentric circles that immitate a puddle ripple when sound is played. 
function ripple(x, y) {
  var newVol = map(vol, 0, 2, 50, 1000);
  var newVol2 = map(vol, 0, 2, 50, 1000);
  var newVol3 = map(vol, 0, 1, 50, 1000);
  noFill();
  if (vol < .01) {
    stroke(88, 163, 232); // if very little sound, set circles to same color as background
  } else {
    stroke(39, 109, 179); // otherwise, set them to dark blue
  }
  ellipse(x, y, (rippleSize * 70) + newVol, (rippleSize * 70) + newVol);
  ellipse(x, y, (rippleSize * 34) + newVol, (rippleSize * 34) + newVol);
  ellipse(x, y, (rippleSize * 20) + newVol2, (rippleSize * 20) + newVol2);
  ellipse(x, y, (rippleSize * 14) + newVol2, (rippleSize * 14) + newVol2);
  ellipse(x, y, (rippleSize * 10) + newVol3, (rippleSize * 10) + newVol3);
  ellipse(x, y, (rippleSize * 4) + newVol3, (rippleSize * 4) + newVol3);
  ellipse(x, y, (rippleSize * 1) + newVol3, (rippleSize * 1) + newVol3);
}