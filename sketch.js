function setup() {
  createCanvas(480,800);

  ground = new Ground(100, 100, 480, 30);

}

function draw() {
  background(0);  

  ground.display();

  drawSprites();
}