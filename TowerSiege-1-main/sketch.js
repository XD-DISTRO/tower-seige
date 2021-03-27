const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1, rect2, rect3, rect4, rect5;
var rect6, rect7, rect8, rect9;
var rect10, rect11, rect12;
var land, sideL, sideR
var han, rock
var hey
var chan


function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

    hey = new Ground(750, 600, 300, 10)

	rect1 = new Rectangle(700, 500, 50, 50);
    rect2 = new Rectangle(750, 500, 50,50)
    rect3 = new Rectangle(800, 500, 50, 50)
    rect4 = new Rectangle(650, 500, 50, 50)
    rect5 = new Rectangle(850, 500, 50, 50)

    rect6 = new Rectangle(675, 450, 50, 50)
    rect7 = new Rectangle(725, 450, 50, 50)
    rect8 = new Rectangle(775, 450, 50, 50)
    rect9 = new Rectangle(825, 450, 50, 50)

    rect10 = new Rectangle(700, 400, 50, 50)
    rect11 = new Rectangle(750, 400, 50, 50)
    rect12 = new Rectangle(800, 400, 50, 50)

    land = new Ground(500, 990, 1000, 10)
    sideL = new Ground(990, 500, 10, 1000)
    sideR = new Ground(10, 500, 10, 1000)

    han = new Hand(30, 30, 60, 60)
    rock = new Rectangle(20, 20, 100, 50)

    chan =new Chain(han.body,rock.body)
	
  
}


function draw() {
  
  background("white");
  Engine.update(engine)

  hey.display()

  rect1.display()
  rect2.display()
  rect3.display()
  rect4.display()
  rect5.display()

  rect6.display()
  rect7.display()
  rect8.display()
  rect9.display()

  rect10.display()
  rect11.display()
  rect12.display()

  land.display()
  sideL.display()
  sideR.display()

  han.display()
  rock.display()

  chan.display()


}


