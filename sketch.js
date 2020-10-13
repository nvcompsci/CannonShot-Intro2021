//define objects and properties
let cannon = {}
//x, y, width, vy
cannon.x = 0
cannon.y = 200
cannon.width = 75
cannon.height = 25
cannon.vy = 2
cannon.src = "https://cdn.iconscout.com/icon/premium/png-512-thumb/cannon-18-569875.png"

let target = {}
target.x = 350
target.y = 50
target.width = 40
target.height = 40
target.vy = -2
target.src = "https://lh3.googleusercontent.com/proxy/6ZjCcwfnvCXCKx4HQaWkjAl1o_D1XoDFFGJSBL03-aztsfaQcShoRG8kLHZzoZCwkUf4wRNnsQnJveeG_b2ABv-rD0bbseVDvCJRB2hkJGtuobjEEb6Yj4i16U9iYIim78LJmJWY0PAs-PjCndNxsPgC0vQt4l-u"

let cannonball = {}
cannonball.x = 0
cannonball.y = 0
cannonball.width = 30
cannonball.height = 30
cannonball.vy = 1
cannonball.vx = 2
cannonball.src = "https://cdn4.iconfinder.com/data/icons/pirate-3/512/as_1119-512.png"

let world = {}
world.top = 0
world.bottom = 400

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
  updateAndDraw(target)
  updateAndDraw(cannonball)
}

function updateAndDraw(sprite) {
  image(sprite.img, sprite.x, sprite.y, sprite.width, sprite.height)
  //increase y by vy
  sprite.y += sprite.vy
  
  collideWorldBounds(sprite)
}

function collideWorldBounds(sprite) {
  if (sprite.y > world.bottom ||
     sprite.y < world.top) {
    sprite.vy = -sprite.vy
  }
} 
