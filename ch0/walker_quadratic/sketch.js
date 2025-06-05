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
    const step = 10
    const xstep = step * this.qualify_quadratic();
    const ystep = step * this.qualify_quadratic();
    console.log(xstep, ystep);
    this.x += xstep;
    this.y += ystep;
    this.show();
  }

  qualify_quadratic() {
    while (true) {
      const delta = random (-1, 1);
      const p = random(1);
      if (p > 1 - delta ** 2) {
        return delta;
      }
    }
  }
}