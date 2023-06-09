class Ant {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = p5.Vector.random2D();
    this.trail = [];
    this.type = "foodseeker";
    this.turnCycle = Math.floor(random(10, 20));
    this.hasfood = false;
    this.step = 0;
    this.goinghome = false;
  }
  draw() {
    push();
    noStroke();
    translate(this.pos.x, this.pos.y);
    rectMode(CENTER);
    rotate(this.vel.heading());
    noStroke();
    fill(0, 0, 0);
    rect(0, 0, 6, 2);
    fill(220, 220, 220);
    if (this.hasfood) {
      ellipse(3, 0, 3, 3);
    }
    pop();
  }
  travel() {
    let turn = random(10, 45);

    if (this.goinghome) {
      this.vel.rotate(this.trail[this.step + 1] + 180).setMag(14);
      this.step--;
    } else {
      this.trail.push(turn);
      console.log(this.trail);
      this.step++;
      this.vel.rotate(turn).setMag(14);
    }
  }
  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width - 3 || this.pos.x < 3) {
      this.vel.rotate(180).setMag(14);
      this.goinghome = true;
      console.log("turning");
    }
    if (this.pos.y > height - 2 || this.pos.y < 2) {
      this.vel.rotate(180).setMag(14);
      this.goinghome = true;
      console.log("turning");
    }
  }
  lookFood() {}
  run() {
    if (frameCount % this.turnCycle == 0) {
      this.travel();
    }
    this.move();
    this.lookFood();
    this.draw();
  }
}
