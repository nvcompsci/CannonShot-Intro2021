let cannon = {}
//x, y, width, height, vy
cannon.x = 0
cannon.y = 200
cannon.width = 100
cannon.height = 75
cannon.vy = 2
cannon.src = "https://lh3.googleusercontent.com/proxy/HdmhTrrAWPEqA1TdOBijRVjHbVunqQ70xtUJE0UscOBxlRNfUPiqWdDpVNtkSU4kw8OhULr1optoRabVCebCyxC6cd0w-v0"

let cannonBall = {}
cannonBall.x = 50
cannonBall.y = 100
cannonBall.width = 30
cannonBall.height = 30
cannonBall.vy = 3
cannonBall.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/153aa662-fcaf-413e-a31c-893bdd6f9629/dbrh1u0-c5bd1786-58c8-4f22-b0bb-93704a687da1.png/v1/fill/w_400,h_468,strp/cannonball_by_crazyfilmmaker_dbrh1u0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00NjgiLCJwYXRoIjoiXC9mXC8xNTNhYTY2Mi1mY2FmLTQxM2UtYTMxYy04OTNiZGQ2Zjk2MjlcL2RicmgxdTAtYzViZDE3ODYtNThjOC00ZjIyLWIwYmItOTM3MDRhNjg3ZGExLnBuZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1zeb-ST3vqrF0QbtvjImEAXKOGv4TysLk6m0h0V8ZGg"

let target = {}
target.x = 350
target.y = 300
target.width = 50
target.height = 50
target.vy = 2
target.src = "https://smeonline.net/wp-content/uploads/target-clipart-target.png"

let world = {}

function preload() {
  cannon.img = loadImage(cannon.src)
  cannonBall.img = loadImage(cannonBall.src)
  target.img = loadImage(target.src)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  updateAndDraw(cannon)
  updateAndDraw(cannonBall)
  updateAndDraw(target)
}

function updateAndDraw(sprite) {
  //rect(cannon.x, cannon.y, cannon.width, cannon.height)
  image(sprite.img , sprite.x, sprite.y, sprite.width, sprite.height)
  
  //move cannon: y increases by vy
  sprite.y += sprite.vy
  
  //bounce off top and bottom
  if (sprite.y > height - sprite.height ||
     sprite.y < 0) {
    sprite.vy = -sprite.vy
  }
}



