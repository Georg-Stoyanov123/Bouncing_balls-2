
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(outerWidth, outerHeight);
	console.log(outerWidth)
	console.log(outerHeight)
	engine = Engine.create();
	world = engine.world;


	//1920 1040
	//Create the Bodies Here.
	var wall_ops = {
		isStatic: true
	}
	var ball_ops ={
		frictionAir: 0.01,
		restitution: 0.1,
		isStatic: false
	}
	wall1 = Bodies.rectangle(400, 905, 3100, 10, wall_ops)
	World.add(world, wall1)

	wall2 = Bodies.rectangle(1520, 700, 20, 400, wall_ops)
	World.add(world, wall2)


	wall3 = Bodies.rectangle(1120, 700, 20, 400, wall_ops)
	World.add(world, wall3)

	ball = Bodies.circle(40, 0.5, 30, ball_ops)
	World.add(world, ball)

	wall1 = Bodies.rectangle
	Engine.run(engine);
}

//aa
function draw() {
  rectMode(CENTER);
  background(0);
  fill("yellow")
  rect(400, 905, 3100, 10)
  rect(1520, 700, 20, 400)
  rect(1120, 700, 20, 400)
  fill("green")
  ellipse(ball.position.x,ball.position.y,30);
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.15,y:0});
	}
}

