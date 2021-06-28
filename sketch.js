var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image; 
var blastImage;                  
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles; 
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadAnimation("./assets/greengirl1.png","./assets/greengirl2.png","./assets/greengirl3.png","./assets/greengirl4.png","./assets/greengirl5.png","./assets/greengirl6.png");
  car2_img = loadAnimation("./assets/boy1.png","./assets/boy2.png","./assets/boy3.png","./assets/boy4.png","./assets/boy5.png","./assets/boy6.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/cop2.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png"); 
  obstacle2Image = loadImage("./assets/obstacle2.png"); 
  blastImage = loadImage("./assets/blast.png"); 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
