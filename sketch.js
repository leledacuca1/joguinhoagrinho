let x = 200;
let y = 200;
let speed = 2;
var img;
var img2;
let jogo = false;

function preload(){
  img = loadImage("Castinho.png")
}

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(img);
  if(jogo==false){
  background(img);
  circle(mouseX, mouseY, 10)
  text(mouseX+":"+mouseY,39,20)
  if(mouseX>=30 && mouseY>=40 && mouseX<=180 && mouseY<=160){
    noFill();
    stroke("black");
    strokeWeight(6);
    rect(30,40,150,120)
    
    if(mouseIsPressed){
      fill(0,0,180)
      rect(30,40,150,120)
      jogo = true;
    }
  }
  }
  
  else{
    background(200)
  }
  if (keyIsDown(LEFT_ARROW) && keyIsDown(32) || keyIsDown (65) && keyIsDown(32)) {
    x-= speed * 2;
  } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
    x-= speed;
  }
  if (keyIsDown(RIGHT_ARROW) && keyIsDown(32) || keyIsDown(68) && keyIsDown(32)) {
    x += speed * 2;
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    x += speed;
  }
  
  if (keyIsDown(UP_ARROW) && keyIsDown(32) || keyIsDown(87) && keyIsDown(32)){
    y -= speed * 2;
  } else if (keyIsDown(UP_ARROW) || keyIsDown(87)){
    y -= speed;
  }
  
  if (keyIsDown(DOWN_ARROW) && keyIsDown(32) || keyIsDown(83) && keyIsDown(32)){
    y += speed * 2; 
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    y += speed;
  }
  rect(x, y, 30, 30);
}


