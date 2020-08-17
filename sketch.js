
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var dustimg;
var part1,part2,part3;

function preload()
{
	dustimg = loadImage ("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
     part1 =  new Dustbin(760,635,10,100);
     part2 = new Dustbin(630,680,260,10)
     part3 = new Dustbin(500,635,10,100);
     paper1 = new Paper(100,100,70)
     ground1 = new Ground(400,690,800,10);
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
   
  imageMode(CENTER);
  image (dustimg,630,520);
  paper1.display();
  ground1.display();
  // part1.display();
  // part2.display();
  // part3.display();
  drawSprites();
  
 
}
function keyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100 , y:-500})
  }
}



