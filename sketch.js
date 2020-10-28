const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg
function preload() {
  polygonImg = loadImage("Polygon.JPG")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    'restitution':0.8,
    'friction':1,
    'density':2
}
  polygon = Bodies.circle(650,200,20,options);
  World.add(world,polygon)
  ground1 = new Ground(400,400,800,10);
  ground2 = new Ground(400,300,200,10);
  ground3 = new Ground(150,200,200,10);
  block1 = new Box(330,265,30,40);
  block2 = new Box(360,265,30,40);
  block3 = new Box(390,265,30,40);
  block4 = new Box(420,265,30,40);
  block5 = new Box(450,265,30,40);
  block6 = new Box(360,230,30,40);
  block7 = new Box(390,230,30,40);
  block8 = new Box(420,230,30,40);
  block9 = new Box(390,200,30,40);
  block10 = new Box(80,195,30,40);
  block11 = new Box(110,195,30,40);
  block12 = new Box(140,195,30,40);
  block13 = new Box(170,195,30,40);
  block14 = new Box(200,195,30,40);
  block15 = new Box(110,135,30,40);
  block16 = new Box(140,135,30,40);
  block17 = new Box(170,135,30,40);
  block18 = new Box(140,115,30,40);
 


  slingshot = new Slingshot(this.polygon,{x:650,y:200})


}

function draw() {
  background("blue");  
  Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
ground1.display();
ground2.display();
ground3.display();
slingshot.display();
imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
      slingshot.fly();
  }
  function keyPressed(){
    if (keyCode === 32){
slingshot.attach(polygon)
    }
  }