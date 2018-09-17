function setup() {
  createCanvas(400, 400);

}

var x = 10;
var changeInX = 3;
var w = 120; // second ball 
var changeInW = 4;
var d = 30 // third ball 
var changeInD = 6


function draw() {
  background(225);


  ellipse(x, 200, 40);
  fill(x, 24, 50);
  x = x + changeInX;

  if (x > width) {
    changeInX = -3;

  }
  if (x < 0) {
    changeInX = 3;

  }


  ellipse(w, 100, 130);
  fill(200);
  w = w + changeInW
  if (w > width) {
    changeInW = -4
  }
  if (w < 0) {
    changeInW = 4
  }
  
 ellipse(d,300,50);
  fill(40,430,0);
  d=d+ changeInD
  
  if (d > width) {
    changeInD = -6 
  }
if (d <0) {
  changeInD = 6
}

}
