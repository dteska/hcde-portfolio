// Created by Danielle Teska
// Last edited February 24, 2017
// This program shows a bubble chart visualization comparing the count of expletives in the first 
// six episodes of "Real Time with Bill Maher" during the beginning of both Trump and Obama's presidencies.
// The expletive counts are fake. 

var page = 0 // sets page to 0
var axisX = 200; // Starting x value for the axis set at 200
var axisY = 650; // Starting y value for the axis set at 650
circleSize = 5; // Width of dots
var table; // This is used to load the table. 
var episodeData = []; // Rows contain expletive counts. Columns are episode numbers.
var obamaEra = []; // This is used to make up the 6 episodes of the Obama era array. 
var trumpEra = []; // This is used to make up the 6 episodes of the Trump era array. 

function preload() { // This loads the table. 
  table = loadTable("Expletives.csv"); // This calls the CSV file. 
}

function setup() {
  createCanvas(1170, 800); // Creates a canvas 1200x750
  var colCount = 6; // Column count set at 6 since there are 6 episodes
  episodeData = []; // This makes the episodeData array
  obamaBlue = color(41, 100, 220); // sets up colors to use later
  obamaBluePressed = color(15, 66, 168); // sets up colors to use later
  trumpOrange = color(250, 145, 10); // sets up colors to use later
  trumpOrangePressed = color(223, 114, 6); // sets up colors to use later
  for (var i = 0; i < colCount; i++) { // This loop forms the array.  
    trumpEra[i] = table.getNum(0, i); // This is for the first row, 2017 presidency. 
    obamaEra[i] = table.getNum(1, i); // This is for the second row, 2009 presidency.
  }
}

function draw() {
  background(244); // This makes the background gray. 
  graphAxes(axisX, axisY); // This makes the axis at the defined x and y position. 
  labels(axisX, axisY); // This makes the axis labels at the defined x and y position. 
  prezToggleObama(); // This draws the Obama button
  prezToggleTrump(); // This draws the Trump button
  if (page === 0) { // for the default chart (just Trump)
    trumpSwears(); // This graphs the actual values. 
    stroke(trumpOrangePressed); //sets stroke to dark orange
    fill(trumpOrangePressed); // sets color to dark orange
    rect(530, 70, 129, 43); // Trump toggle
    stroke(obamaBluePressed); // Obama blue button border
    fill(obamaBlue); // sets color to light blue
    rect(662, 70, 129, 43); // Obama toggle
    fill(255); // sets color to white for font
    text("Trump era", 600, 98); // text on the button
    text("Obama era", 718, 98); // text on the button
  } else { // toggles to Obama values
    obamaSwears(); // This graphs the actual values. 
    stroke(obamaBluePressed); // Obama blue circles
    fill(obamaBluePressed); //Sets fill to dark blue
    rect(662, 70, 129, 43); // Obama toggle
    stroke(trumpOrangePressed); // Obama blue circles
    fill(trumpOrange); // sets color to light orange
    rect(530, 70, 129, 43); // Trump toggle
    fill(255); // text color to white
    text("Obama era", 718, 98); // text on the button
    text("Trump era", 600, 98); // text on the button
  }
}

// This function creates text on the axes, label, and title. 
function labels() {
  fill(124); // sets text color to light grey
  textSize(15); // sets font size to 15
  textAlign(CENTER); // centers text
  for (i = 25; i > 0; i -= 5) { // creates a loop that draws the tick marks
    text(i, axisX - 35, axisY + 5 - i * 20);
  }
  text("1", axisX + 100, axisY + 30); // adds label to bottom for episode 1
  text("2", axisX + 250, axisY + 30); // adds label to bottom for episode 2
  text("3", axisX + 400, axisY + 30); // adds label to bottom for episode 3
  text("4", axisX + 550, axisY + 30); // adds label to bottom for episode 4
  text("5", axisX + 700, axisY + 30); // adds label to bottom for episode 5
  text("6", axisX + 850, axisY + 30); // adds label to bottom for episode 6
  textStyle(NORMAL); // resets font style to normal
  textSize(28); // changes font size to 28 for header
  text("Expletive Count per episode of 'Real Time with Bill Maher'", axisX + 490, axisY - 610);
  textSize(14); // changes font size to 28 for header
  text("for the first six episodes of the beginning of each presidency", axisX + 490, axisY - 590);
  textSize(16); // changes font size to 16 for the axes labels
  text("EPISODES", axisX + 470, axisY + 70); // x axis label
  text("EXPLETIVES", axisX - 130, axisY - 300); // y axis label
}

// This function makes the x axis, y axis, and marks along both.
function graphAxes(axisX, axisY) { // pipes in the parameter
  stroke(124);
  line(axisX, axisY, axisX + 950, axisY); // Drawing the x-axis 
  line(axisX + 100, axisY, axisX + 100, axisY + 10); // First marker on the x axis
  line(axisX + 250, axisY, axisX + 250, axisY + 10); // Second marker on the x axis
  line(axisX + 400, axisY, axisX + 400, axisY + 10); // Third marker on the x axis
  line(axisX + 550, axisY, axisX + 550, axisY + 10); // Fourth marker on the x axis
  line(axisX + 700, axisY, axisX + 700, axisY + 10); // Fifth marker on the x axis
  line(axisX + 850, axisY, axisX + 850, axisY + 10); // Sixth marker on the x axis
  line(axisX, axisY - 510, axisX, axisY); // Drawing the y-axis 
  line(axisX - 10, axisY - 100, axisX + 10, axisY - 100); // First marker on the y axis
  line(axisX - 10, axisY - 200, axisX + 10, axisY - 200); // Second marker on the y axis
  line(axisX - 10, axisY - 300, axisX + 10, axisY - 300); // Third marker on the y axis
  line(axisX - 10, axisY - 400, axisX + 10, axisY - 400); // Fourth marker on the y axis
  line(axisX - 10, axisY - 500, axisX + 10, axisY - 500); // Fifth marker on the y axis 
}

// This function brings the values for expletives in the trump era in the form of dot plot
function trumpSwears() {
  for (i = 0; i <= 6; i++) { // create for loop to draw each value
    stroke(trumpOrangePressed); // trump orange circles
    fill(trumpOrange); // trump orange circles
    ellipse(300 + i * 150, 650 - trumpEra[i] * 100 / 5, trumpEra[i] * circleSize, trumpEra[i] * circleSize); // draws circles at each of the episode tick marks, spacing them equidistant. Then, draws a dot using the value in the spreadsheet using a formula that calculates the position based on the value in the spreadsheet and the distance between the tick marks (distance between episode ticks is 150. Distance between every 5 expletives is 100).  
  }
}

// This function brings the values for expletives in the obama era in the form of dot plot
function obamaSwears() {
  for (i = 0; i <= 6; i++) { // create for loop to draw each value
    stroke(obamaBluePressed); //obama blue circles
    fill(obamaBlue); // obama blue circles
    ellipse(300 + i * 150, 650 - obamaEra[i] * 100 / 5, obamaEra[i] * circleSize, obamaEra[i] * circleSize); // draws circles at each of the episode tick marks, spacing them equidistant. Then, draws a dot using the value in the spreadsheet using a formula that calculates the position based on the value in the spreadsheet and the distance between the tick marks (distance between episode ticks is 150. Distance between every 5 expletives is 100).
  }
}

// This function creates a button that displays or hides the Obama data
function prezToggleObama() {
  stroke(obamaBluePressed); // Obama blue circles
  if ((mouseX > 662 && mouseX < 787) && (mouseY > 70 && mouseY < 113)) { // if mouse hovers within button
    fill(obamaBluePressed); // set button to dark blue
  } else {
    fill(obamaBlue); // otherwise keep it light blue
  }
  rect(662, 70, 129, 43); // Obama toggle
  fill(255); // text color to white
  noStroke(); // removes stroke
  textStyle(BOLD); // changes text to bold
  text("Obama Era", 718, 98); // text on the button
}

// This function creates a button that displays or hides the Trump data
function prezToggleTrump() {
  stroke(trumpOrangePressed); // changes stroke to dark orange
  fill(trumpOrangePressed); // fills with dark orange fill
  if ((mouseX > 530 && mouseX < 647) && (mouseY > 70 && mouseY < 113)) { // if mouse hovers within button
    fill(trumpOrangePressed); // set button to dark orange      
  } else {
    fill(trumpOrange); // otherwise keep it light orange
  }
  rect(530, 70, 129, 43); // Trump toggle
  fill(255); // text color to white
  noStroke(); // removes stroke
  textStyle(BOLD); // sets font to bold
  text("Trump era", 600, 98); // text on the button
}

// This function controls the button functionality
function mousePressed() {
  if ((mouseX > 530 && mouseX < 647) && (mouseY > 70 && mouseY < 113)) { // checks if mouse is within button dimensions
    page = 1 - page; // switches state
  }
  if ((mouseX > 662 && mouseX < 787) && (mouseY > 70 && mouseY < 113)) { // same for the second button
    page = 1 + page; // switches state
  }
}