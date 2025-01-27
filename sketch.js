let webcam;
let boxSystem = [];

function setup(){
  createCanvas(400,400);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(400, 400);
  webcam.hide();
  for(x = 0; x < 500; x++){
    rx = random(15, width - 15);
    ry = random(15, height - 15);
    rr = random(10, 30);
    boxSystem[x] = new Box(rx, ry, rr);
  }
}

function draw(){
  background(220);
  image(webcam, 0, 0);
  filter(INVERT);
  for (x = 0; x < boxSystem.length; x++){
    boxSystem[x].move();
    boxSystem[x].show();
    boxSystem[x].checkEdges();
  }
}

class Box{
  
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random (-100, 100);
    this.y = this.y + random (-100, 100);
  }
  
  show(){
    let pixelColour = webcam.get(this.x, this.y);
    fill(pixelColour[0], pixelColour[1], pixelColour[2]);
    noStroke();
    rect(this.x, this.y, this.r);
  }

  checkEdges(){
    if(this.x < 30){
      this.x = 30;
    } else if (this.x > width - 30){
      this.x = width - 30;
    }
    if(this.y < 30){
      this.y = 30;
    } else if (this.y > height - 30){
      this.y = height - 30;
    }
  }

}