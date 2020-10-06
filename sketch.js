//define objects and properties
let cannon = {}
cannon.x = 0
cannon.y = 200
cannon.width = 75
cannon.height = 25
cannon.vy = 2
cannon.src = "https://cdn.iconscout.com/icon/premium/png-512-thumb/cannon-18-569875.png"

let target = {}

let cball = {}
cball.x = 0
cball.y = 200
cball.width = 20
cball.height = 20
cball.vx = 2
cball.vy = 2
cball.src = "https://cdn4.iconfinder.com/data/icons/pirate-3/512/as_1119-512.png"

let world = {}

function preload() {
  cannon.img = loadImage(cannon.src)
  cball.img = loadImage(cball.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  
  updateAndDraw(cannon)
  updateAndDraw(cball)
}

function updateAndDraw(sprite) {
  image(sprite.img, sprite.x, sprite.y, sprite.width, sprite.height)
  //rect(sprite.x, sprite.y, sprite.width, sprite.height)
  //increase y by vy
  sprite.y += sprite.vy
}






