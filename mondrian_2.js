function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);


  noStroke();

  fill(255, 204, 0);
  rect(mouseX, 270, 50, 333);

  fill(220, 0, 0);
  rect(0, 0, 180, 170);

  fill(0, 0, 255);
  rect(180, 270, 120, 110);

  stroke(0);
  strokeWeight(11);

  strokeCap(SQUARE);
  line(180, 0, 180, 400);


  strokeWeight(10);

  line(400, 170, 0, 170);


  strokeWeight(10);
  line(50, 270, 50, 400);

  strokeWeight(10);
  line(400, 270, 0, 270);


  strokeWeight(10);
  line(300, 270, 300, 400);


  strokeWeight(10);
  line(305, 380, 180, 380);



}
