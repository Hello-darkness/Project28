
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mangobodyposition, stonebodyposition;
var boy1, stone1, sling;
var tree1, image;
function preload() {
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
    tree1 = new tree(650, 350, 5);

    mango1 = new mango(400, 250, 50);
    mango2 = new mango(500, 250, 50);
    mango3 = new mango(600, 200, 50);
    mango4 = new mango(650, 230, 50);
    mango5 = new mango(700, 200, 50);
    mango6 = new mango(750, 170, 50);
    mango7 = new mango(800, 270, 50);
    mango8 = new mango(850, 300, 50);
    boy1 = new boy(150, 550, 10); 
    stone1 = new stone(170, 650, 10);
    sling = new SlingShot(stone1.body, { x: 120, y: 490 });
   	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
    tree1.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    sling.display();
    boy1.display();
    stone1.display();
    detectcollision(stone1, mango1);
    detectcollision(stone1, mango2);
    detectcollision(stone1, mango3);
    detectcollision(stone1, mango4);
    detectcollision(stone1, mango5);
    detectcollision(stone1, mango6);
    detectcollision(stone1, mango7);
    detectcollision(stone1, mango8);
    drawSprites();

}


function mouseDragged() {
    Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    sling.fly();
}

function keyPressed() {
    if (keyCode === 32) {

        sling.attach(stone1.body);
    }

}

function detectcollision(lstone, lmango) {
    mangobodyposition = lmango.body.position
    stonebodyposition = lstone.body.position

    var distance = dist(stonebodyposition.x, stonebodyposition.y, mangobodyposition.x, mangobodyposition.y)
    if (distance <= lmango.r + lstone.r) {
        Matter.Body.setStatic(lmango.body, false);
    }


}


