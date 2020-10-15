//define objects and properties
let cannon = {}
//x, y, width, vy
cannon.x = 0
cannon.y = 200
cannon.width = 75
cannon.height = 25
cannon.vx = 0
cannon.vy = 2
cannon.charge = 0
cannon.src = "https://cdn.iconscout.com/icon/premium/png-512-thumb/cannon-18-569875.png"

let target = {}
target.x = 350
target.y = 50
target.width = 40
target.height = 40
target.vx = 0
target.vy = -2
target.src = "https://lh3.googleusercontent.com/proxy/6ZjCcwfnvCXCKx4HQaWkjAl1o_D1XoDFFGJSBL03-aztsfaQcShoRG8kLHZzoZCwkUf4wRNnsQnJveeG_b2ABv-rD0bbseVDvCJRB2hkJGtuobjEEb6Yj4i16U9iYIim78LJmJWY0PAs-PjCndNxsPgC0vQt4l-u"


let cannonball = {}
cannonball.x = -100
cannonball.y = -100
cannonball.width = 30
cannonball.height = 30
cannonball.vy = 0
cannonball.vx = 0
cannonball.src = "https://cdn4.iconfinder.com/data/icons/pirate-3/512/as_1119-512.png"

let world = {}
world.top = 0
world.bottom = 400
world.gravity = 0.5

function preload() {
  cannon.img = loadImage(cannon.src)
  //target.img = loadImage(target.src)
  cannonball.img = loadImage(cannonball.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  
  updateAndDraw(cannon)
  updateAndDraw(target)
  updateAndDraw(cannonball)
  
  applyGravity(cannonball)
  
  cballVsTarget(cannonball, target)
  
  if (mouseIsPressed && cannon.charge <= 12) {
      cannon.charge += 0.5
  }
}

function applyGravity(sprite) {
  sprite.vy += world.gravity
}

function updateAndDraw(sprite) {
  //image(sprite.img, sprite.x, sprite.y, sprite.width, sprite.height)
  rect(sprite.x, sprite.y, sprite.width, sprite.height)
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
  if (dist(c.x, c.y, t.x, t.y) < c.width + t.width) {
    console.log("hit")
  }
}
