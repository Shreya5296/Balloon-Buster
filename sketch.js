var bow , arrow,  scene, redB, greenB, pinkB, blueB;

var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;
var redGroup,greenGroup,pinkGroup,blueGroup,arrowGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  arrowGroup = new Group(); 
  redGroup = new Group ();
  greenGroup = new Group ();
  pinkGroup = new Group ();
  blueGroup = new Group ();
  
}

function draw() {
 background(0);
  
  // moving ground
    scene.velocityX = -3;
    if (scene.x < 0){
        scene.x = scene.width/2;
      }
  //moving bow
    bow.y = World.mouseY;
  
   // release arrow when space key is pressed
    if (keyDown("space")) {
      createArrow();
    }
  
  //creating continous enemies
    var select_balloon = Math.round(random(1,4));

    if (World.frameCount % 100 == 0) {
      if (select_balloon == 1) {
        red_Balloon();
      } else if (select_balloon == 2) {
        green_Balloon();
      } else if (select_balloon == 3) {
        blue_Balloon();
      } else {
        pink_Balloon();
      }
    }

    if(arrowGroup.isTouching(redGroup)){  
     redGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;   
    }

     if(arrowGroup.isTouching(greenGroup)){ 
     greenGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }

      if(arrowGroup.isTouching(pinkGroup)){ 
     pinkGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;   
    }

    if(arrowGroup.isTouching(blueGroup)){ 
     blueGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;   
    }  

    drawSprites();
    text("Score: "+ score, 300,50);
  }


  // Creating  arrows for bow
   function createArrow() {
    arrow= createSprite(100, 100, 60, 10);
    arrow.addImage(arrowImage);
    arrow.x = 360;
    arrow.y=bow.y;
    arrow.velocityX = -4;
    arrow.lifetime = 100;
    arrow.scale = 0.3;
    arrowGroup.add(arrow);
  }

function red_Balloon() {
  redB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redB.addImage(red_balloonImage);
  redB.velocityX = 3;
  redB.lifetime = 150;
  redB.scale = 0.1;
  redGroup.add (redB);
}

function blue_Balloon() {
  blueB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blueB.addImage(blue_balloonImage);
  blueB.velocityX = 3;
  blueB.lifetime = 150;
  blueB.scale = 0.1;
  blueGroup.add(blueB);
}

function green_Balloon() {
  greenB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenB.addImage(green_balloonImage);
  greenB.velocityX = 3;
  greenB.lifetime = 150;
  greenB.scale = 0.1;
  greenGroup.add(greenB);
}

function pink_Balloon() {
  pinkB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkB.addImage(pink_balloonImage);
  pinkB.velocityX = 3;
  pinkB.lifetime = 150;
  pinkB.scale = 1;
  pinkGroup.add(pinkB);
}
