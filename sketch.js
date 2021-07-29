let player;
let playerImg;
let obstacleImg;
let backgroundImg;
let obstacle = [];
let wordClassifier;

function preload() {
  playerImg = loadImage("player.png");
  obstacleImg = loadImage("obstacle.png");
  backgroundImg = loadImage("br.png");
  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1000, 600);
  player = new Player();
  wordClassifier.classify(heardWord);
}
function heardWord(error, results) {
  let word = results[0].label;
  if (word == "up") {
    player.jump();
  }
  console.log(results[0].label, results[0].confidence);
}

function keyPressed() {
  if (key === " ") {
    player.jump();
    console.log("up");
  }
}

function draw() {
  if (random(1) < 0.01) {
    obstacle.push(new Obstacle());
  }

  background(backgroundImg);
  player.show();
  player.move();

  for (let obs of obstacle) {
    obs.show();
    obs.move();
    if (player.collided(obs) == true) {
      console.log("game over");
      noLoop();
    }
  }
}
