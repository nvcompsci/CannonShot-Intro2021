//define objects and properties
let cannon = {}
//x, y, width, height, vy
cannon.x = 50
cannon.y = 200
cannon.width = 100
cannon.height = 75
cannon.vy = 2
cannon.src = "https://lh3.googleusercontent.com/proxy/JsjL8jwcGvSa0SRJnQy2NfbuYzW3sxL1DhvYJkgijDRG2O83Gf1qV3kzvcyXeavV5m1-WR0YQXULIP3OE4fPs3A7v7K2bxw"

let cannonBall = {}

let target = {}

let world = {}

function preload() {
  cannon.img = loadImage(cannon.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  updateAndDraw()
}

function updateAndDraw() {
  //rect(cannon.x, cannon.y, cannon.width, cannon.height)
  image(cannon.img, cannon.x, cannon.y, cannon.width, cannon.height)
  
  //move down, increase y with vy
  cannon.y += cannon.vy
}




