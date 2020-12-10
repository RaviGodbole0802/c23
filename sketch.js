const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine,ground;
var box1,box2
var ground


function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world
box1=new Box(200,100,50,50)
box2 = new Box(220,50,50,100)
ground = new Ground(200,390,400,20)
}

function draw() {
  background("blue");  
  Engine.update(engine);
 box1.display();
 box2.display();
 ground.display();
}