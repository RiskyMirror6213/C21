var fixedRect, movingRect;
var s1, s2;
var i1, i2;
function preload(){
  i2 = loadImage("sprite_.png");
  i1 = loadImage("sprite_0.png");
}
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  s1 = createSprite(0, 400, 50, 80);
  s2 = createSprite(1200, 400, 50, 80);
  s1.addImage(i1);
  s2.addImage(i1);
  s1.scale = 1;
  s2.scale = 1;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  s1.velocityX = +5;
  s2.velocityX = -5;
  s1.shapeColor = "lightblue"
  s2.shapeColor = "blue"
  s1.debug = true;
  s2.debug = true;
  fixedRect.addImage(i2);
  movingRect.addImage(i2);

}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect, fixedRect);
  bounceOff(s1, s2)
  drawSprites();
}
function bounceOff(arg1, arg2){
  if (arg1.x - arg2.x < arg2.width/2 + arg1.width/2
    && arg2.x - arg1.x < arg2.width/2 + arg1.width/2) {
    arg1.velocityX = arg1.velocityX * (-1);
    arg2.velocityX = arg2.velocityX * (-1);
  }
  if (arg1.y - arg2.y < arg2.height/2 + arg1.height/2
    && arg2.y - arg1.y < arg2.height/2 + arg1.height/2){
    arg1.velocityY = arg1.velocityY * (-1);
    arg2.velocityY = arg2.velocityY * (-1);
  }
}