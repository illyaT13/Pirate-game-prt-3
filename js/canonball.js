class CanonBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true,
    };

    this.body = Matter.Bodies.circle(
      this.x,
      this.y,
      this.r,

      options
    );
    World.add(world, this.body);
    this.CanonBallImage = loadImage("./assets/cannonball.png");
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //rectMode(CENTER);
    //rect(0, 0, this.w, this.h);
    imageMode(CENTER);
    image(this.CanonBallImage, 0, 0, this.r, this.r);
    pop();
  }
  shoot() {
    var velocity = p5.Vector.fromAngle(mycanon.angle);
    velocity.mult(5);

    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
}
