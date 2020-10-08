//define objects and properties
let cannon = {}
//x, y, width, height, vy
cannon.x = 50
cannon.y = 200
cannon.width = 100
cannon.height = 75
cannon.vy = 2
cannon.src = "https://previews.123rf.com/images/djahan/djahan1703/djahan170300001/74016322-cartoon-illustration-of-cannon-with-cannonballs-weapon-icon-contains-transparency-.jpg"

let cannonBall = {}
cannonBall.x = 100
cannonBall.y = 20
cannonBall.width = 30
cannonBall.height = 30
cannonBall.vy = 3

let target = {}

let world = {}

function preload() {
  //cannon.img = loadImage(cannon.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  updateAndDraw(cannon)
  updateAndDraw(cannonBall)
}

function updateAndDraw(sprite) {
  rect(sprite.x, sprite.y, sprite.width, sprite.height)
  //image(sprite.img, sprite.x, sprite.y, sprite.width, sprite.height)
  
  //move down, increase y with vy
  sprite.y += sprite.vy
}
