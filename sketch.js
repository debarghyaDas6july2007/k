var sky, skying
var run, runner
var rock, rocking
var coin, coins
var invisibleGround
var score

function preload(){
skying=loadImage("sky.png.jpg")
runner=loadAnimation("k.png","k2.png","k3.png","k4.png","k5.png","k6.png")
rocking=loadImage("k7.png")
coins = loadAnimation("p.png","p1.png","p2.png","p3.png","p4.png","p5.png","p6.png","p7.png","p8.png","p9.png")
}

function setup() {
 createCanvas(600,600)
 sky=createSprite(300,300)
 sky.scale=0.6
 sky.addImage("sky.png.jpg",skying)
 sky.velocityX=-6
 sky.x=width/3

 run=createSprite(100,500,100,100)
 run.addAnimation("k.png","k2.png","k3.png","k4.png","k5.png","k6.png",runner)

 invisibleGround = createSprite(300,500,600,10);
 invisibleGround.visible = false;

 run.setCollider("rectangle",0,0,run.width,run.height);
 run.debug = true;

 score = 0;

 coinsGroup = createGroup();
 rocksGroup = createGroup();
}

function draw() {
 background("white")

 text("Score: "+ score,300,300);
 fill("red")
 score = score + Math.round(getFrameRate()/60);
 
 if(sky.x<20){
    sky.x=500
 }

 if(run.x>560){
  run.x=200

 }

 if(keyDown("space")&& run.y >= 100) {
    run.velocityY = -14;
   
 }

 run.velocityY = run.velocityY + 0.4

 run.collide(invisibleGround);

 if(rocksGroup.isTouching(run)){
  rocksGroup.destroyEach()
 }

if(coinsGroup.isTouching(run)){
  coinsGroup.destroyEach()
 }




 spawnCoins()
 spawnRocks()

 drawSprites()
}

function spawnRocks() {

  if(frameCount%120===0){
    var rock=createSprite(520,520,60,60)
    rock.addImage("rock",rocking)
    rock.scale=0.3
    rock.velocityX=-5
    rock.lifetime=110;
    rocksGroup.add(rock)
    var select_rocks = Math.round(random(1,4));
  }
}

function spawnCoins() {

  if(frameCount%120===0){
    coin=createSprite(420,320,20,20)
    coin.addAnimation("p.png","p1.png","p2.png","p3.png","p4.png","p5.png","p6.png","p7.png","p8.png","p9.png",coins)
    coin.velocityX=-4
    coin.lifetime=110
    coinsGroup.add(coin)

    
  }
}









