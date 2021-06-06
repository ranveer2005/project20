var cat,mouse
var catImg,mouseImg,backImg

function preload() {
    catImg = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    mouseImgtease = loadImage("images/mouse3.png");
    mouseImg = loadImage("images/mouse2.png");
    mouseImglast = loadImage("images/mouse1.png");
    bgimg = loadImage("images/garden.png");    
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    cat = createSprite(0.9*windowWidth,7*windowHeight/8);
    cat.scale = 0.2;
    mouse = createSprite(0.1*windowWidth,7*windowHeight/8);
    mouse.scale = 0.2;
    cat.addAnimation("cat normal",catImg);
    mouse.addAnimation("mouse normal",mouseImg);

}

function draw() {

    background(bgimg);
  if (cat.x - mouse.x < cat.width/2){
      cat.velocityX = 0
      cat.addAnimation("stopped",catImg)
      cat.changeAnimation("stopped",catImg)
      mouse.addAnimation("stopped",mouseImglast)
      mouse.changeAnimation("stopped",mouseImglast)
  }   
    cat.display();
    mouse.display();
      drawSprites();
}


function keyPressed(){
    if (keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouse teasing", mouseImgtease);
        mouse.changeAnimation("mouse teasing", mouseImgtease)
    }
    if ( keyCode === LEFT_ARROW){
        cat.addAnimation("cat walking", catImg2,catImg3);
        cat.changeAnimation("cat walking", catImg2,catImg3);
        cat.velocityX = -4
    }


}
