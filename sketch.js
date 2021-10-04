var path,Runner;
var pathImg,runnerImg;

function preload(){
  //pre-load images
   pathImg = loadImage("path.png");
    RunnerImg1 = loadAnimation("Runner-1.png","Runner-1.png",
                        "Runner-2.png","Runner-1.png");
}

function setup(){
  createCanvas(400,400);
  background("lightgrey");
  
  //Moving backgroung
 path=createSprite(200,200);
 path.addImage(pathImg);
 path.velocityY=4;
 path.scale=1.2;

  //create sprites here
  Runner = createSprite(200,300,20,20);
  Runner.addAnimation("movingRunner",RunnerImg1)
Runner.scale=0.2;

}


function draw() {
  background(0);
path.velocityY = 4;

//code to reset the background
if(path.y > 400){
  path.y = height/2;
}


drawSprites();
}
