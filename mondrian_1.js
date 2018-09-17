function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  line(mouseX, 0, mouseY, 255); //move the mouse across the canvas 
  line(90, mouseY, 230, mouseY); // move mouse across canvas 

  noStroke();

  let red = color(0,134,40);

  let blue = color(0, 10, 255);
  let yellow = color(270, 25, 0);


  let leftLineX = 90;
  leftlLineX= random(10, 60);  
  let lowerLineY = 320;
  let rightLineX =  320;
  rightLineX= random(50, 80);
  let upperShortLineY = 150;
  let lowerShortLineY = 360;
 
  
  fill(blue);
  rect(0, lowerLineY, leftLineX, height - lowerLineY);

  fill(red);
  rect(leftLineX, 0, width - leftLineX, lowerLineY);

  fill(yellow);
  rect(rightLineX, lowerShortLineY, width - rightLineX, height - lowerShortLineY);

  stroke(0);
  strokeWeight(10);
  strokeCap(SQUARE);
  line(leftLineX, 0, leftLineX, height);
  line(0, lowerLineY, width, lowerLineY);
  line(rightLineX, lowerLineY, rightLineX, height);

  

  strokeWeight(20);
  line(0, upperShortLineY, leftLineX, upperShortLineY);

  strokeWeight(15);
  line(rightLineX, lowerShortLineY, width, lowerShortLineY);
  line(mouseX, 0, mouseY, 255); //move the mouse
}
