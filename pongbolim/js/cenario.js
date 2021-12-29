function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function desenhaCenario() {
  fill(255)
  circle(300, 200, 3);
  circle(75, 200, 3);
  circle(525, 200, 3);
  noFill();
  circle(300, 200, 120);
  line(300, 10, 300, 390);
  rect(10, 10, 580, 380);
  rect(10, 90, 90, 220);
  rect(500, 90, 90, 220);
  rect(10, 130, 30, 140);
  rect(560, 130, 30, 140);
  arc(66, 200, 120, 120, 5.32, 0.96);
  arc(534, 200, 120, 120, 2.18, 4.1);
  arc(10, 10, 14, 14, 0, 1.57);
  arc(590, 10, 14, 14, 1.57, 3.14);
  arc(10, 390, 14, 14, 4.71, 0);
  arc(590, 390, 14, 14, 3.14, 4.71);
}