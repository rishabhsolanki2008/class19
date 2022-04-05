// Declare all variables
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

//Load all PNG's & SOUND effect
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

// Create all the srites in function_setup
function setup() {

  //Command to create Canvas 
  createCanvas(600, 600);

  //Command to create TOWER  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  //Command to create GHOST
  ghost = createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.4;
  

  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    drawSprites();
}
