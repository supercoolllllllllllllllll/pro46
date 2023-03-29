var horse, horseAnimation, police1, police2, policeImage1, policeImage2
var money, moneyBag, moneyImg, moneyBagImg;
var invsGround
var bgImg, bg;
var policeGroup, moneyBagGroup, moneyGroup;


var score;





function preload(){
  horseAnimation = loadAnimation("assets/horse1.png", "assets/horse2.png");
  policeImage1 = loadImage("assets/car1.png");

  moneyImg = loadImage("assets/moneydollars.png");
  moneyBagImg = loadImage ("assets/moneybag.png");
  bgImg = loadImage("assets/track.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  score = 0;

  bg = createSprite(width/2, height/100, 10, 900);
  bg.addImage(bgImg);
  bg.scale = 1.2


  horse = createSprite(height - 100 ,height*3.7,10,10);
  horse.addAnimation('running', horseAnimation);


moneyGroup = new Group;
moneyBagGroup = new Group;
policeGroup = new Group;
  


}

function draw() {
background("white");

for(i = 0;i<moneyGroup.length; i++){
  if(horse.isTouching(moneyGroup[i])){
    moneyGroup[i].remove();
    score += 1;
  }
}




if (keyDown (UP_ARROW)){
  horse.y += -15
}


if (keyDown (RIGHT_ARROW)){
  horse.x += 15
}


if (keyDown (LEFT_ARROW)){
  horse.x += -15
}





  camera.position.y = horse.position.y;
  spawnPolice();
  spawnMoney();
  spawnMoneyBags();

  drawSprites();

  fill("black"); 
  textSize(22)
text ("MONEY:" + score,  700, horse.y - 500);
}


  function spawnPolice(){
  if (frameCount % 200 == 0){

    police2 = createSprite(horse.x + 200,500,10,40);
  police2.addImage(policeImage1);
  police2.scale = 0.4;
police2.velocityY = 2
policeGroup.add(police2);

police2.y = Math.round(random(horse.y -100,0));
police2.x = Math.round(random(600,1400));
policeGroup.add(police2);


  }

}



function spawnMoney(){
  if (frameCount % 10 == 0){
    money = createSprite (horse.x + 200, 500, 10, 10);
    money.addImage(moneyImg);
    money.scale = 0.2;
    money.y = Math.round (random(0,horse.y - 100));
    money.x = Math.round(random(600,1400))
    moneyGroup.add(money);


  }
}

function spawnMoneyBags(){
  if (frameCount % 100 == 0){
    moneyBag = createSprite (horse.x + 200, 500, 10, 10);
    moneyBag.addImage(moneyBagImg);
    moneyBag.scale = 0.2;
moneyBag.y = Math.round (random(0,horse.y-100));
moneyBag.x = Math.round(random(600,1400));
moneyBagGroup.add(moneyBag);
  }
}