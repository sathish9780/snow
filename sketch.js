var backgroundimg
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10
var snowanimation

function preload() {
  backgroundimg=loadImage("snow3.jpg");
  snowImage=loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
  snow1=createSprite(400, 300, 20, 20);
  snow1=addImage("snowImage");

  snow2=createSprite(450, 350, 20, 20);
  snow2=addImage("snowImage");

  snow3=createSprite(700, 270, 20, 20);
  snow3=addImage("snowImage");

  snow4=createSprite(600, 100, 20, 20);
  snow4=addImage("snowImage");

  snow5=createSprite(750, 129, 20, 20);
  snow5=addImage("snowImage");

  snow6=createSprite(489, 75, 20, 20);
  snow6=addImage("snowImage");

  snow7=createSprite(380, 90, 20, 20);
  snow7=addImage("snowImage");

  snow8=createSprite(426, 327, 20, 20);
  snow8=addImage("snowImage");

  snow9=createSprite(25, 350, 20, 20);
  snow9=addImage("snowImage");

  snow10=createSprite(750, 225, 20, 20);
  snow10=addImage("snowImage");
}

function draw() {
  background(backgroundimg);  
  drawSprites();
}