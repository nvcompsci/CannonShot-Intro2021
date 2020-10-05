let cannon = {}
cannon.x = 0
cannon.y = 200
cannon.width = 100
cannon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZggUW1fatrwIxecH0HAw6R7k08yQWM9Q7JeW8qKS5SLtgRBM%3Aclipart-library.com%2Fimage_gallery%2F585873.png&usqp=CAU"

let cball = {}

let target = {}

let world = {}

function preload() {
  cannon.img = loadImage(cannon.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');
  image(cannon.img, cannon.x, cannon.y, cannon.width, cannon.width / 2)
  
  update(cannon)
}

function update(sprite) {
  sprite.y += 2
}
