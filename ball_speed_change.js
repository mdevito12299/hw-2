function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
}function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(400, 400);
}

var x = 10;
var changeInX = 9;
var y = x + 17

function draw() {
  background(220);
  
  ellipse(x, y, 40);
  fill(x,24,50);
  x = x + changeInX;
  
  if (x > width) {
    changeInX = -9;
    
   
    
  }
  
  if (x < 0) {
    changeInX = 9;
    
  }
}
