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


function preload() {
  cannon.img = loadImage(cannon.src)
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  
  updateAndDraw()
}

function updateAndDraw() {
  image(cannon.img, cannon.x, cannon.y, cannon.width, cannon.height)
  //increase y by vy
  cannon.y += cannon.vy
}
