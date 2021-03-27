class Chain {
    constructor() {  
       var options ={
           bodyA: han.body,
           bodyB: rock.body,
           stiffness: 0.04,
           length: 10
           }
           this.chain = Constraint.create(options);
           World.add(World, this.Chain);
       }
       display() {
           var pointA=this.chain.bodyA.position;
           var pointB=this.chain.bodyB.position;
           strokeWeight(4);
           line(pointA.x,pointA.y,pointB.x,pointB.y)
       }
       
   
   }