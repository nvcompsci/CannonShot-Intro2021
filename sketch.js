let cannon = {}
//x, y, width, height, vy
cannon.x = 0
cannon.y = 200
cannon.width = 100
cannon.height = 75
cannon.vy = 2
cannon.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/cannon.png"

let cannonBall = {}
cannonBall.x = 50
cannonBall.y = 100
cannonBall.width = 30
cannonBall.height = 30
cannonBall.vy = 3
cannonBall.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/cannonball.png"

let target = {}
target.x = 350
target.y = 300
target.width = 50
target.height = 50
target.vy = 2
target.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/target.png"

let world = {}

function preload() {
  cannon.img = loadImage(cannon.src)
  cannonBall.img = loadImage(cannonBall.src)
  target.img = loadImage(target.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  updateAndDraw(cannon)
  updateAndDraw(cannonBall)
  updateAndDraw(target)
}

function updateAndDraw(sprite) {
  //rect(cannon.x, cannon.y, cannon.width, cannon.height)
  image(sprite.img , sprite.x, sprite.y, sprite.width, sprite.height)
  
  //move cannon: y increases by vy
  sprite.y += sprite.vy
  
  //bounce off top and bottom
  if (sprite.y > height - sprite.height ||
     sprite.y < 0) {
    sprite.vy = -sprite.vy
  }
}
