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
    const rand = random(1);
    let xstep, ystep;
    if (rand < 0.5) {
      xstep = mouseX > this.x ? 1 : -1;
      ystep = mouseY > this.y ? 1 : -1;
    }
    else {
      xstep = random(-1, 1);
      ystep = random(-1, 1);
    }
    this.x += xstep;
    this.y += ystep;
    this.show();
  }
}