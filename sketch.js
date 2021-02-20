var fixedRect, movingRect;
var object1, object2, object3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(300,100,50,50)
  object1.shapeColor="blue"
  object2=createSprite(500,350,100,350)
  object2.shapeColor="green"
  object3=createSprite(450,310,50,90)
  object3.shapeColor="orange"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,object1)){
   // movingRect.shapeColor = "red";
  object1.shapeColor = "red";

 
  }
  else{
    object1.shapeColor = "orange";
  //movingRect.shapeColor = "blue";
  }

  drawSprites();
}
function isTouching(p1,p2){
  if (pl.x - p2.x < p2.width/2 + pl.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y -p1.y < p2.height/2 + p1.height/2) {
      
  return true
}
else {
  return false
  
}
}