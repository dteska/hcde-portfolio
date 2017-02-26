// Created by Danielle Teska
// Last edited February 24, 2017
// This program shows a bubble chart visualization comparing the count of expletives in the first 
// six episodes of "Real Time with Bill Maher" during the beginning of both Trump and Obama's presidencies.
// The expletive counts are fake. 


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
  for (var i = 0; i < colCount; i++) { // This loop forms the array.  
    trumpEra[i] = table.getNum(0, i); // This is for the first row, 2017 presidency. 
    obamaEra[i] = table.getNum(1, i); // This is for the second row, 2009 presidency.
  }
}

function draw() {
  background(244); // This makes the background gray. 
  graphAxes(axisX, axisY); // This makes the axis at the defined x and y position. 
  labels(axisX, axisY); // This makes the axis labels at the defined x and y position. 
  values(); // This graphs the actual values. 

  // This function creates text on the axes, label, and title. 
  function labels() {
    fill(124);
    textSize(15);
    textAlign(CENTER);
    for (i = 25; i > 0; i -= 5) {
      text(i, axisX - 35, axisY + 5 - i * 20);
    }
    text("1", axisX + 100, axisY + 30);
    text("2", axisX + 250, axisY + 30);
    text("3", axisX + 400, axisY + 30);
    text("4", axisX + 550, axisY + 30);
    text("5", axisX + 700, axisY + 30);
    text("6", axisX + 850, axisY + 30);
    textSize(16);
    text("EPISODES", axisX + 470, axisY + 70);
    text("EXPLETIVES", axisX - 130, axisY - 300);
    textSize(28);
    text("Expletive Count per episode of 'Real Time with Bill Maher'", axisX + 490, axisY - 610);
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
  
  // This function brings the values in the form of dot plot
  function values() {
    for (i = 0; i <= 6; i++) { // create for loop to draw each value
      stroke(223, 114, 6); // trump orange circles
      fill(250, 145, 10);  // trump orange circles
      ellipse(300 + i * 150, 650 - trumpEra[i] * 100 / 5, trumpEra[i] * circleSize, trumpEra[i] * circleSize); // draws circles at each of the episode tick marks, spacing them equidistant. Then, draws a dot using the value in the spreadsheet using a formula that calculates the position based on the value in the spreadsheet and the distance between the tick marks (distance between episode ticks is 150. Distance between every 5 expletives is 100).  
      stroke(15, 66, 168); //obama blue circles
      fill(41, 100, 220); // obama blue circles
      ellipse(300 + i * 150, 650 - obamaEra[i] * 100 / 5, obamaEra[i] * circleSize, obamaEra[i] * circleSize); // draws circles at each of the episode tick marks, spacing them equidistant. Then, draws a dot using the value in the spreadsheet using a formula that calculates the position based on the value in the spreadsheet and the distance between the tick marks (distance between episode ticks is 150. Distance between every 5 expletives is 100).
      }
    }
  }