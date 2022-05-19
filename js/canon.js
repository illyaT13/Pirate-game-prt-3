class Canon {
    constructor(x, y, w, h, angle) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.angle = angle
  
      var options = {
        isStatic: true,
      };
  
      this.body = Matter.Bodies.rectangle(
        this.x,
        this.y,
        this.w,
        this.h,
        options
      );
      World.add(world, this.body);
      
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      if(keyIsDown(RIGHT_ARROW) && this.angle<= 1.5){

        this.angle+=0.01
      }

      if(keyIsDown(LEFT_ARROW) && this.angle>= -0.5){

        this.angle-=0.01
      }


  
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
    
      pop();

      arc(100,230,150,155,PI,TWO_PI)
    }
  }
  