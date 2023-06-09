const cellCount = 3;

// let d = dist(x1, y1, x2, y2);
let population = [];
let foods = [];
function setup() {
  createCanvas(1400, 700);
  frameRate(10);
  for (let i = 0; i < cellCount; i++) {
    population.push(new Ant());
  }
  for (let x = 0; x <= 160; x = x + 4) {
    for (let y = 0; y <= 100; y = y + 4) {
      foods.push(new Food(x, y));
    }
  }
}
function draw() {
  background(111, 102, 222, 12);
  rect(width / 2, height / 2, 50);
  population.forEach((b) => b.run());
  foods.forEach((b) => b.draw());
  rectMode(CENTER);
}

function mouseClicked() {}
