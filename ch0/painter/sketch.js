function setup() {
  createCanvas(640, 240);
  background(255);
  noStroke();
  // frameRate(5);
}

function draw() {
  const sliderPercentage = mouseX / 640;
  const x = randomGaussian(320, 106.67 * sliderPercentage);
  const y = randomGaussian(120, 40 * sliderPercentage);
  const r = randomGaussian(127, 42.3);
  const g = randomGaussian(127, 42.3);
  const b = randomGaussian(127, 42.3);
  fill(r, g, b, 200);
  circle(x, y, 12);
}
