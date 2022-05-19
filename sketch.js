const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImage;
var ground;
var mycanon;
var canonball;

function preload() {
  backgroundImage = loadImage("./assets/background.gif");
}

function setup() {
  createCanvas(1000, 700);

  engine = Engine.create();
  world = engine.world;

  //creating tower

  tower = new Tower(100, 420, 160, 420);
  ground = new Ground(500, 650, width, 30);

  var angle = -PI / 4;
  mycanon = new Canon(130, 160, 20, 100, angle);
  canonball = new CanonBall(mycanon.x, mycanon.y, 25);
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  tower.display();

  ground.display();
  mycanon.display();
  canonball.display();
}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    canonball.shoot();
  }
}
