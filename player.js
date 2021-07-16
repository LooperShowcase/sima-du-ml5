class Player {
  constructor() {
    this.size = 120;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 2.2;
  }
  show() {
    image(playerImg, this.x - 100, this.y, this.size, this.size);
  }
  jump() {
    if (this.y === height - this.size) this.velocityY = -25;
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(obscheck) {
    let iscolliding = collideRectRect(
      this.x,
      this.y,
      this.size - 130,
      this.size - 50,
      obscheck.x,
      obscheck.y,
      obscheck.size,
      obscheck.size
    );
    return iscolliding;
  }
}
