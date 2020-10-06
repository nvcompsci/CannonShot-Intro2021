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
target.src = "https://lh3.googleusercontent.com/proxy/15Uuw1SvhtOANNTvx1O0gLDowL8ZUftQBU2AR7zs14pap2GPSDn68Cj8izOQbFO_X6QfuihvcygXjDyPAE4RiJdxyrcSwLPrWvQvP57MFiN4FpPP4ZcFJABhOyEijVkczPF5c5FiqRyxenIaM9cLaOrzZW68000P"

let world = {}
world.top = 0
world.bottom = 400

function preload() {
  cannon.img = loadImage(cannon.src)
  target.img = loadImage(target.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  
  updateAndDraw(cannon)
  updateAndDraw(target)
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
