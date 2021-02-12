const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var background,backgroundImg


function preload() {
//preload the images here
  backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,600,1200,20);
  hero = new Hero(400,300,200);
  rope = new Fly(hero.body,{x:400,y:200});
  block1 = new Block(675,570,50,50);
  block2 = new Block(675,520,50,50);
  block3 = new Block(675,470,50,50);
  block4 = new Block(675,420,50,50);
  block5 = new Block(675,370,50,50);
  block6 = new Block(675,320,50,50);
  block7 = new Block(675,270,50,50);

  block8 = new Block(750,570,50,50);
  block9 = new Block(750,520,50,50);
  block10 = new Block(750,470,50,50);
  block11 = new Block(750,420,50,50);
  block12 = new Block(750,370,50,50);
  block13 = new Block(750,320,50,50);

  block14 = new Block(825,570,50,50);
  block15 = new Block(825,520,50,50);
  block16 = new Block(825,470,50,50);
  block17 = new Block(825,420,50,50);
  block18 = new Block(825,370,50,50);
  block19 = new Block(825,320,50,50);
  block20 = new Block(825,270,50,50);
  block21 = new Block(825,220,50,50);

  block22 = new Block(900,570,50,50);
  block23 = new Block(900,520,50,50);
  block24 = new Block(900,470,50,50);
  block25 = new Block(900,420,50,50);
  block26 = new Block(900,370,50,50);

  monster = new Monster(1100,440,300);

  // create sprites here

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  hero.display();
  rope.display();
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
  block19.display();
  block20.display();
  block21.display();

  
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  monster.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

