
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var stone,SlingShot,boy
var engine,world,tree

function preload()
{

boyimage=loadImage("boy.png")	
	treeimage=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 500);
	


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	platform = new Ground(150, 305, 300, 170);
	
	mango1=new Mango(600,170,30,30)
	mango2=new Mango(650,200,30,30)
	mango3=new Mango(700,210,30,30)
	mango4=new Mango(620,260,30,30)
	mango5=new Mango(750,270,30,30)
	
	stone=new Stone(100,100)
	slingshot=new Slingshot(stone.body,{x:200,y:200})
	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
	image(boyimage,100,300,100,200)
	image(treeimage,500,100,300,400)

  ground.display();
  stone.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  slingshot.display()
  	detectollision(stone,mango1)
	detectollision(stone,mango2)
	detectollision(stone,mango3)
	detectollision(stone,mango4)
	detectollision(stone,mango5)






}


function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

slingshot.fly()

}

function keyPressed(){

if (keyCode===32){
Matter.Body.setPosition(stone.body,{x:235,y:420})
slingshot.attach(stone.body)
}

}


function detectollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position


	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.x)
	if(distance<=lmango.width/2+lstone.width/2){

		Matter.Body.setStatic(lmango.body,false)

	}
}





