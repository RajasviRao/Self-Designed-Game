//storing sprites and images in variable
var bgImg;
var rocket, rocketImg;
var earth, earthImg;
var planet, planetImg;
var asteroid, asteroidImg;
var spaceStation, spaceStationImg;
var obstacle1,obstacle2;//obstacle3;
var obstacle1Img,obstacle2Img,obstacle3Img;
var wall1,wall2;

function preload(){
  bgImg=loadImage("pictures/background img.jpg")
  rocketImg=loadImage("pictures/rocket Img.png")
  earthImg=loadImage("pictures/earthImg.png")
  planetImg=loadImage("pictures/planetImg.png")
  asteroidImg=loadImage("pictures/asteroidImg.png")
  spaceStationImg=loadImage("pictures/spaceStationImg.png")
  obstacle1Img=loadImage("pictures/obstacle 1.png")
  obstacle2Img=loadImage("pictures/obstacle 2.png")
  //obstacle3Img=loadImage("pictures/obstacle 3.png")
}


function setup() {
  createCanvas(1200,1400);
  //creating rocket sprite and adding image
  rocket=createSprite(50,150,20,40);
  rocket.addImage(rocketImg)
  rocket.scale=0.3
  
  //creating earth sprite and adding image
  earth=createSprite(50,220,20,40);
  earth.addImage(earthImg)
  earth.scale=0.2

  //creating spaceStation
  spaceStation=createSprite(500,50,20,40);
  spaceStation.addImage(spaceStationImg);
  spaceStation.scale=0.3;

  obstacle1=createSprite(250,300,20,40)
  obstacle1.addImage(obstacle1Img)
  obstacle1.scale=0.1;
    
  obstacle2=createSprite(350,250,20,40)
  obstacle2.addImage(obstacle2Img)
  obstacle2.scale=0.3

  /*obstacle3=createSprite(170,110,20,40)
  obstacle3.addImage(obstacle3Img)
  obstacle3.scale=0.2*/

 //creating planets sprite and adding image
  planet=createSprite(280,100,20,40);
  planet.addImage(planetImg)
  planet.scale=0.1;

  // creating asteroids
  asteroid=createSprite(200,200,20,40);
  asteroid.addImage(asteroidImg)
  asteroid.scale=0.2;

  //creating wall1
  wall1=createSprite(100,1,800,2)
  wall1.visible=false;

  //creating wall2
  wall2=createSprite(100,358,800,2)
  wall2.visible=false;

  obstacle1.velocityY=7
    obstacle1.valocityY=-7
    obstacle2.velocityY=7
    obstacle2.velocityY=-7
    //obstacle3.velocityY=7
   // obstacle3.velocityY=-7
    planet.velocityY=7
    planet.velocityY=-7
    asteroid.velocityY=7
    asteroid.velocityY=-7


  
}



function draw() {
  background(0)
   image(bgImg,0,0)

   //giving rocket controls to player
   if(keyDown("right")){
    rocket.rotation=90
    rocket.x=rocket.x+7
  }
  if(keyDown("left")){
    rocket.x=rocket.x-7
  }
  if(keyDown("up")){
    rocket.y=rocket.y-7
 }
  if(keyDown("down")){
    rocket.y=rocket.y+7
  }
  
  if(rocket.isTouching(obstacle1)){
   textSize(20)
   stroke(10)
   fill("white")
    text("Oops! You Lost..", 200,200)
    
    }

    if(rocket.isTouching(obstacle2)){
      textSize(20)
      stroke(10)
      fill("white")
       text("Oops! You Lost..", 200,200)
       }
   
      /* if(rocket.isTouching(obstacle3)){
        textSize(20)
        stroke(10)
        fill("white")
         text("Oops! You Lost..", 200,200)
         }*/
     
         if(rocket.isTouching(planet)){
          textSize(20)
          stroke(10)
          fill("white")
           text("Oops! You Lost..", 200,200)
           }
       
           if(rocket.isTouching(asteroid)){
            textSize(20)
            stroke(10)
            fill("white")
             text("Oops! You Lost..", 200,200)
             }
  
    if(rocket.isTouching(spaceStation)){
      textSize(20)
      stroke(10)
      fill("white")
      text("Congratulations! You Won!!", 200,200)
      obstacle1.visible=false
      obstacle2.visible=false
      //obstacle3.visible=false
      planet.visible=false
      asteroid.visible=false
      rocket.x=rocket.x+0
      rocket.y=rocket.y+0
    }

    obstacle1.bounceOff(wall1)
    obstacle1.bounceOff(wall2)
    obstacle2.bounceOff(wall1)
    obstacle2.bounceOff(wall2)
   // obstacle3.bounceOff(wall1)
    //obstacle3.bounceOff(wall2)
    planet.bounceOff(wall1)
    planet.bounceOff(wall2)
    asteroid.bounceOff(wall1)
    asteroid.bounceOff(wall2)

    
  drawSprites();
}



  















