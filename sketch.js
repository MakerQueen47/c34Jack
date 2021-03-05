const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, box1, ball1, rope1;

function setup(){

    createCanvas(1000,600);


    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(2000);
    box1 = new box(900,100);
    box2 = new box(900,100);
    box3 = new box(900,100);
    box4 = new box(900,100);
    box5 = new box(900,100);
    box6 = new box(800,100);
    box7 = new box(800,100);
    box8 = new box(800,100);
    box9 = new box(800,100);
    box10 = new box(800,100);
    box11 = new box(700,100);
    box12 = new box(700,100);
    box13 = new box(700,100);
    box14 = new box(700,100);
    box15 = new box(700,100);

    ball1 = new ball(100,350);

    rope1 = new rope(ball1.body, {x:200,y:100});


}

function draw(){
    background("lightblue");
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();   
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    ball1.display();

    rope1.display();

}

function mouseDragged(){

    Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});
}