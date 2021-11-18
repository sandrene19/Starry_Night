var shootingStar;
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  shootingStar = new ShootingStar(); 
}
// backgrond color
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
      else if (axis == "X") {  // Left to right gradient
      for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}
function draw() { 
    var color1 = color(0, 0, 153);
    var color2 = color(404, 51, 0);
    background(220);
    setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
    shootingStar.draw();
      // Draw a moon ellipse loacation
    fill("#F5A943");
    noStroke();
    ellipse(620,100,100,100);
  // Create circle
    circle(mouseX, mouseY, 30);  
    // Display position
    text("Position of mouseX relative to canvas: "
            + mouseX, 30, 40);

function Star() {
   function Star() {
   this.x = random(windowWidth);
   this.y = random(windowHeight-200);
}
}
  Star.prototype.draw = function() {
   function Star() {
   this.x = random(windowWidth);
   this.y = random(windowHeight-200);
  snoStroke();
  fill(255, 255, 0);
  ellipse(this.x, this.y, 2, 2);
  this.x += (random(10) - 5);
  this.y += (random(10) - 5);
}
}
// star location goes here
  for (var i = 0; i < 50; i++) {
   // Code goes here
   var x = random(windowWidth);
  var y = random(windowHeight-200);
  //Star code here
  noStroke();
  fill(255, 255, 0);
  ellipse(x, y, 2, 2);
  //star speed location
  frameRate(1);
}
}
function ShootingStar() {
  this.x = random(windowWidth-200);
  this.y = random(windowHeight-400);
  this.w = 6;
  this.h = 4;
}
ShootingStar.prototype.draw = function() {
  noStroke();
  fill(255, 255, 0);
  ellipse(this.x, this.y, this.w, this.h);
  if (this.h > 0) {
    this.h -= 0.5;
  }
  this.w += 7;
  this.x += 5;
}
function mousePressed(){
}
