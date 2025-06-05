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
  }

  show() {
    stroke(this.color);
    point(this.x, this.y);
  }

  step() {
    const dir = random(1);
    const step_size = randomGaussian(3, 1.08)
    if (dir < 0.25) {
      this.x += step_size;
    }
    else if (dir < 0.5) {
      this.x -= step_size;
    }
    else if (dir < 0.75) {
      this.y += step_size;
    }
    else {
      this.y -= step_size;
    }
    this.show();
  }
}