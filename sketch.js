let cannon = {}
//x, y, width, height, vy
cannon.x = 0
cannon.y = 200
cannon.width = 100
cannon.height = 75
cannon.vy = 2
cannon.vx = 0
cannon.charge = 0
cannon.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/cannon.png"

let cannonBall = {}
cannonBall.x = 50
cannonBall.y = 100
cannonBall.width = 30
cannonBall.height = 30
cannonBall.vy = 3
cannonBall.vx = 0
cannonBall.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/cannonball.png"

let target = {}
target.x = 350
target.y = 300
target.width = 50
target.height = 50
target.vy = 2
target.vx = 0
target.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/target.png"

let world = {}
world.gravity = 0.2

function preload() {
  //cannon.img = loadImage(cannon.src)
  //cannonBall.img = loadImage(cannonBall.src)
  //target.img = loadImage(target.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  updateAndDraw(cannon)
  updateAndDraw(cannonBall)
  updateAndDraw(target)
  
  applyGravity(cannonBall)
  
  if (mouseIsPressed == true) {
    cannon.charge += 2
  }
}

function applyGravity(sprite) {
  sprite.vy += world.gravity
}

function updateAndDraw(sprite) {
  rect(sprite.x, sprite.y, sprite.width, sprite.height)
  //image(sprite.img, sprite.x, sprite.y, sprite.width, sprite.height)
  
  //move down, increase y with vy
  sprite.y += sprite.vy
  sprite.x += sprite.vx
  
  
  if (sprite.y > 400 - sprite.height ||
     sprite.y < 10) {
    sprite.vy = -sprite.vy
  }
}

function fireCannon() {
  cannonBall.x = cannon.x
  cannonBall.y = cannon.y
  cannonBall.vy = cannon.vy
  cannonBall.vx = cannon.charge
  cannon.charge = 0
}

function mouseReleased() {
  fireCannon()
}




