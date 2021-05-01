function setup() {
  createCanvas(800,400);
  red=createSprite(400, 200, 50, 50);
  red.shapeColor="red"
  green=createSprite(600, 200, 50, 50);
  green.shapeColor="green"
  red.velocityX=3;
  green.velocityX=-2;        
  yellow=createSprite(400, 300, 50, 50);
  yellow.shapeColor="yellow"
  blue=createSprite(600, 300, 50, 50);
  blue.shapeColor="blue"
  yellow.velocityX=3;
  blue.velocityX=-2;     
}
function draw() {
 bouceoff(red,green)
 bouceoff(blue,yellow)
  background(0);  
  drawSprites();
}
