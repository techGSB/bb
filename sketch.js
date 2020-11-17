var fixedRect, movingRect;
var a;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  a = createSprite(100,100,10,30);
  a.shapeColor = "white";
  a.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);

movingRect.x = mouseX;
movingRect.y = mouseY;


if(isTouching(a,movingRect)){
  movingRect.shapeColor = "red";
  a.shapeColor = "red";

 }else
{
  movingRect.shapeColor = "green";
  a.shapeColor = "green";
}


  drawSprites();
}


