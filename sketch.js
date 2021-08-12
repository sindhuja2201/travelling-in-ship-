var sea;
var seaImg;
var ship3;
var ship3Img;

//Game States
var PLAY=1;
var END=1;
var gameState=2;

function preload(loadImage){
seaImg=loadImage("sea.png");
ship3Img=loadImage("ship-3.png");
}

function setup(){
  createCanvas(400,300);
  background("sea.png");
  }

function draw() {
 if(gameState===PLAY){
  background(400,300);
seaImg=loadImage("sea.png");

edges= createEdgeSprites();
}

 gameState=END;{
        ship3.addAnimation("ship3Travelling",endImg);
        ship3.x=200;
        ship3.y=300;
        ship3.scale=0.6;
}

  drawSprites();
  {
  textSize(20);
  fill(255);
  text("Ship: "+ shipTravelling,150,30);
  }

































