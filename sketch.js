
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plain;
var stone;
var iron;
var hammer;
var sand1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;


plain=new Plain(600,600,1200,20);
stone=new Stone(700,320);
iron=new Iron(500,50);
hammer=new Hammer(300,300);
sand1=new Sand (505,450,10);
sand2=new Sand (515,450,10);
sand3=new Sand (525,450,10);
sand4=new Sand (535,450,10);
rubber=new Rubber(200,80,100);
//Engine.run(engine);
  
}


function draw() {
  background("#b5f4ff");
Engine.update(engine);
  plain.display();
  stone.display();
  iron.display();
  hammer.display();
  sand1.display();
  sand2.display();
   sand3.display();
  sand4.display();
  rubber.display();
   
 // console.log(stone)
 
}



