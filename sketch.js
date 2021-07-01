const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var comp, compBase;
var player, playerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  //Create Player Base and Computer Base Object
  compBase = new ComputerBase(windowWidth - 200, random(480, height - 300), 180, 150);
  comp = new Computer((windowWidth - 200) + 15, compBase.body.position.y - 153, 50, 180);

  playerBase = new ComputerBase(300, random(480, height - 300), 180, 150);
  player = new Computer(285, playerBase.body.position.y - 153, 50, 180);

}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Display Playerbase and computer base 
  playerBase.show();
  compBase.show();

  //display Player and computerplayer
  player.show();
  comp.show();

}
