const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,30,400,15)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
}