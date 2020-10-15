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

let cball = {}
cball.x = 50
cball.y = 100
cball.width = 30
cball.height = 30
cball.vy = 3
cball.vx = 0
cball.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/cannonball.png"

let target = {}
target.x = 350
target.y = 300
target.width = 50
target.height = 50
target.vy = 2
target.vx = 0
target.src = "https://raw.githubusercontent.com/nvcompsci/CannonShot-Intro2021/main/target.png"

let world = {}

function preload() {
  cannon.img = loadImage(cannon.src)
  cball.img = loadImage(cball.src)
  target.img = loadImage(target.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  
  updateAndDraw(cannon)
  updateAndDraw(cball)
  updateAndDraw(target)
}

function updateAndDraw(sprite) {
  image(sprite.img, sprite.x, sprite.y, sprite.width, sprite.height)
  //rect(sprite.x, sprite.y, sprite.width, sprite.height)
  //increase y by vy
  sprite.y += sprite.vy
}
