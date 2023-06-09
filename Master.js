class Ball {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.connectedBalls = [];
    this.id = random(999999999999);
  }
  draw() {
    push();
    noStroke();
    fill(0, 0, 0);
    circle(this.x, this.y, this.d);
    pop();
  }
}
