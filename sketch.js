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

let cannonball = {}
cannonball.x = 50
cannonball.y = 100
cannonball.width = 30
cannonball.height = 30
cannonball.vy = 3
cannonball.vx = 0
cannonball.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/cannonball.png"

let target = {}
target.x = 350
target.y = 300
target.active = true
target.width = 50
target.height = 50
target.vy = 2
target.vx = 0
target.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/target.png"

let world = {}
world.top = 0
world.bottom = 400
world.gravity = 0.5

let score = 0

function preload() {
  cannon.img = loadImage(cannon.src)
  target.img = loadImage(target.src)
  cannonball.img = loadImage(cannonball.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  
  updateAndDraw(cannon)
  if (target.active == true) {
    updateAndDraw(target)
    cballVsTarget(cannonball, target)
  }
  
  updateAndDraw(cannonball)
  
  applyGravity(cannonball)
  text("Score: "+score,5,20)
  
  
  if (mouseIsPressed && cannon.charge <= 12) {
      cannon.charge += 0.5
  }
}

function applyGravity(sprite) {
  sprite.vy += world.gravity
}

function updateAndDraw(sprite) {
  image(sprite.img, sprite.x, sprite.y, sprite.width, sprite.height)
  //rect(sprite.x, sprite.y, sprite.width, sprite.height)
  //increase y by vy
  sprite.y += sprite.vy
  sprite.x += sprite.vx
  
  collideWorldBounds(sprite)
}

function collideWorldBounds(sprite) {
  if (sprite.y > world.bottom ||
     sprite.y < world.top) {
    sprite.vy = -sprite.vy
  }
}

function mousePressed() {
  //background("green")
}

function mouseReleased() {
  //console.log("click")
  //background("red")
  fireCannon()
}

function fireCannon() {
  cannonball.x = cannon.x + 5
  cannonball.y = cannon.y
  cannonball.vx = cannon.charge
  cannonball.vy = cannon.vy
  
  cannon.charge = 0
}

function cballVsTarget(c, t) {
  if (dist(c.x, c.y, t.x, t.y) < c.width/2 + t.width/2) {
    console.log("hit")
    t.active = false
    score += 10
  }
}
