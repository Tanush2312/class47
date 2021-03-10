var bg,player,bulletg,rocketg
var score=0
function preload() {
  bg=loadImage("sprite_0.png")
  playerimg=loadImage("player.jpg")
  bulletimg= loadImage("lazer.png")
  rocketimg=loadImage("spaceship.png") 
}

function setup() {
  createCanvas(1200,400);
  bulletg=new Group()
  rocketg=new Group()
player=createSprite(200,327,400,400);
player.addImage(playerimg)
player.scale=0.32;
}

function draw() {
  background(bg); 
  for(var i=0;i <rocketg.maxDepth();i++){
    if(rocketg.get(i)!==undefined && bulletg.isTouching(rocketg.get(i))){
      console.log("insideifcondition")
      rocketg.get(i).destroy()
      score=score+10
    }

  }
  //if(bulletg.isTouching(rocketg) ){
  //  rocketg.destroyEach()
  //}
  if (keyDown(RIGHT_ARROW)){
    player.velocityX=5;
  }
if (keyDown(LEFT_ARROW)){
    player.velocityX=-5;
  }
  if (keyDown("space")){
  createbullet()
  }
  edges=createEdgeSprites()
player.collide(edges[1]);
player.collide(edges[0]); 
  spawnrockets()
  drawSprites();
  textSize(20)
  text("score:"+score,100,100)
}
function createbullet(){
  if(frameCount%10===0){
  var bullet= createSprite(100,262,10,10)
  bullet.addImage(bulletimg)
  bullet.x = player.x 
  bullet.velocityY=-10
  bullet.debug=true
  bullet.lifetime=100
  bulletg.add(bullet)
  console.log(bulletg)
  }
}

function spawnrockets (){
  if(frameCount%80===0){
    var rocket=createSprite(100,random(50,100),10,10)
    var rand=Math.round(random(1,2))
    rocket.addImage(rocketimg)
    rocket.scale=0.25
    rocket.setCollider("rectangle",0,35,500,50) 
    rocket.debug=true
    if(rand===1){
      rocket.x=0
      rocket.velocityX=2
    }
  
    if (rand===2){
      rocket.velocityX=-2
      rocket.x=1200
    }
  
   rocketg.add(rocket)
   console.log(rocketg)
  }
}
