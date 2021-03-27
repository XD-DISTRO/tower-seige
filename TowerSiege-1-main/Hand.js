class Hand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false, 
          restitution: 0.5,
          friction: 1,
          density: 1.2

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(3)
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
        this.body.position.x = mouseX
      this.body.position.y = mouseY
    }
  }