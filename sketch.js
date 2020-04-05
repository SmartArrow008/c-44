var num1,num2;

function setup() {
  createCanvas(500,600);
  num1 = getRandomIntInclusive(1,10);
  num2 = getRandomIntInclusive(1,10);
}

function draw() {
  background(0); 
  fill('white');
  text(num1 + " + "+ num2 + "  =  ?",250,500) ;
  spawn1();
  drawSprites();
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
function spawn1(){
  if(frameCount%60===0){
    var count1 = createSprite(0,250,10,10);
    count1.x = random(10,450);
    count1.velocityY = 2;
  }
}