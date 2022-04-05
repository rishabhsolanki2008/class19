//Declare all the variables
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg,ghostImg2;
var invisibleBlockGroup, invisibleBlock;
var gameState = play
var PLAY = 1

// Create function_preload and load all the PNG's & SOUND effect
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  ghostImg2 = loadImage("ghost-jumping.png"); 
}

// Create function_setup and create all sprites
function setup() {

  //Create canvas
  createCanvas(600, 600);

  //Create TOWER
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  //Create GHOST 
  ghost = createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.4

  //Declare all the GROUPs
 doorsGroup = new Group();
 climbersGroup = new Group();

  
}

// Command to create function_draw
        function draw() {

//Create background
        background(200);
        
       
//create GAMEsTATE PLAY[]
       
      
    if(gameState===PLAY) {

      edges= createEdgeSprites();
      ghost.collide(edges[1]);
      ghost.collide(edges[2]);
     
     
      //Giving velocity to TOWER
      if(tower.y > 400){
      tower.y = 300
      } 
    

     //command to create SPACE KEY to move UPWARD
      if(keyDown("space")) {
      ghost.velocityY = -3;
      }

      //Command to create RIGHT KEY to move RIGHT_SIDE
      if(keyDown("RIGHT_ARROW")) {
      ghost.velocityX = 3;
      }

      //Command to create LEFT KEY to move LEFT_SIDE
      if(keyDown("LEFT_ARROW")) {
      ghost.velocityX = -3;
      }

      
      

     

      //Giving gravity to GHOST
      ghost.velocityY= ghost.velocityY + 0.2
    
      
      //Call the functions
      spwanDoor()
      drawSprites() 
    }
  }
  


 





 

    


function spwanDoor() {
  if(frameCount % 60 === 0) {
    door = createSprite(200,-10);
    door.addImage("door",doorImg);
    door.velocityY = 2
    door.x = Math.round(random(20,400));

      //adjust the depth
      door.depth = ghost.depth;
      ghost.depth = ghost.depth + 1;

     
    
    //Create collider
    if(frameCount % 60 === 0) {
    climber = createSprite(200,0);
    climber.addImage("climber",climberImg);
    climber.velocityY = 2
    climber.x = Math.round(random(120,400));
    climber.collide(door);
    }
 
  }
}

