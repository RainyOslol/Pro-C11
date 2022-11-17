var ship, ship_swiming;
var sea;

function preload(){
  ship_swiming = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,190,400,400);
  sea.addImage(seaimage);
  sea.scale=0.5;
  sea.velocityX=-5;
  ship = createSprite(100,280,20,20);
  ship.addAnimation("swim",ship_swiming);
  ship.scale=0.1;
  
}

function draw() {
  background("blue");

  if(sea.x< 100){
    sea.x= 600;
  }

  drawSprites();
}