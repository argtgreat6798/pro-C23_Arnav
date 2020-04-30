const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var body,head

function setup() {
  createCanvas(800,400);
  body = new Body(200,350,30,100);
  head = new Head(250,250,30,30);
}

function draw() {
  background(255,255,255);  
  body.display();
  head.display();
  drawSprites();
}