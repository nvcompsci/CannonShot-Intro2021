let cannon = {}
//x, y, width, height, vy
cannon.x = 0
cannon.y = 200
cannon.width = 100
cannon.height = 75
cannon.vy = 2
cannon.src = "https://lh3.googleusercontent.com/proxy/NHk0ci0zbqVYB_R5EIjvaeRiTAgCfeFkgmXuE9AjXG87U6jE-18QAgXPBTmp_bRQ7E55bvVxLnUb8FzeDqRCoozgPHBnvo8"

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
  image(cannon.img , cannon.x, cannon.y, cannon.width, cannon.height)
  
  //move cannon: y increases by vy
  cannon.y += cannon.vy
}





