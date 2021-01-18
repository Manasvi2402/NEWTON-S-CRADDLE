
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new roof(600,50,800,30);

	bobObject1 = new bob(400,300,50);
	bobObject2 = new bob(500,300,50);
	bobObject3 = new bob(600,300,50);
	bobObject4 = new bob(700,300,50);
	bobObject5 = new bob(800,300,50);


	rope1 = new rope(bobObject1.body,roof.body,-200,0);
	rope2 = new rope(bobObject2.body,roof.body,-100,0);
	rope3 = new rope(bobObject3.body,roof.body,0,0);
	rope4 = new rope(bobObject4.body,roof.body,100,0);
	rope5 = new rope(bobObject5.body,roof.body,200,0);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
 
  
}
function keyPressed(){
	if (keyCode === LEFT_ARROW ){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:100});
	}
}



