var Stark;
var Arrow;
var StarkAnm, StarkImg, ArrowAnm;

function preload() {
  StarkAnm=loadAnimation("assets/P1.png","assets/P2.png","assets/P3.png","assets/P4.png","assets/P5.png","assets/P6.png","assets/P7.png");
  StarkAnm.playing = true;
  StarkAnm.looping = false;
  StarkImg = loadImage("assets/P0.png");
  
}




function setup() {
  createCanvas(1536,864);
  Stark = createSprite(500,600,1,1);
  Stark.addImage(StarkImg);
  Stark.scale=1.4;
}

function draw() {
  background(220);
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    Stark.x-=10;
  }
  if(keyDown(RIGHT_ARROW)){
    Stark.x+=10;
  }
}