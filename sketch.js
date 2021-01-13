const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ground;
var paper;



function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
  ground=new Ground(600,height,1200,20);  
  dustbin=new Dustbin(1000,380);
  paper=new Paper(150,20,30);

    Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  ground.display();
  dustbin.display();
  paper.display();

 
}

function keyPressed(){

  if(keyCode===UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
  }

}


