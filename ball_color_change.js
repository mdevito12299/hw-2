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

var x = 30;
var changeInX = 5;


function draw() {
  background(220);
  
  ellipse(x, 200, 40);
  fill(x,24,50);
  x = x + changeInX;
  
  if (x > width) {
    changeInX = -3;
    
   
    
  }
  
  if (x < 0) {
    changeInX = 3;
    
  }
}
