class Food {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.type = "food";
  }
  draw() {
    push();
    noStroke();
    translate(this.pos.x, this.pos.y);
    fill(255, 255, 0);
    rect(0, 0, 2, 2);
    pop();
  }
}
