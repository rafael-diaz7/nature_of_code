let walker;
function setup() {
  createCanvas(640, 240);
  walker = new Walker('red');
  background(255);
  frameRate(200);
}

function draw() {
  walker.step();
}

class Walker {
  constructor(color) {
    this.color = color;
    this.x = width / 2;
    this.y = height / 2;
    this.xt = random(10);
    this.yt = random(10000);
  }

  show() {
    stroke(this.color);
    point(this.x, this.y);
  }

  step() {
    this.x += map(noise(this.xt), 0, 1, -width/500, width/500);
    this.y += map(noise(this.yt), 0, 1, -height/500, height/500);
    this.xt += 0.1;
    this.yt += 0.1;
    this.show();
  }

}