let cur = 0;
function setup() {
  createCanvas(400, 400);
  background(220);
  strokeWeight(0);
}

function draw() {
  /**
   * for drawing shapes and stuff,
   * called every framebuffer (?)
   */
  if (mouseIsPressed === true) {
    fill(cur);
    circle(mouseX, mouseY, 100);
  }
}

function doubleClicked() {
  cur = (cur === 0) ? 255 : 0;
}
