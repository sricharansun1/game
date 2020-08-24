var canvas;
var starterImg,proImg,legendImg;
var starter,legend,pro;
var back;
function preload(){

starterImg = loadImage("home/starter.png") ;
proImg = loadImage("home/pro.png") ;
legendImg = loadImage("home/legends.png") ;
backImg = loadImage("home/back.jpg") ;
back2Img = loadImage("back/back2.jpg") ;
back3Img = loadImage("back/back3.jpg") ;






}
function setup(){
    createCanvas(600,400);
    background(backImg)
    
     starter = createSprite(300,125,20,20);
    starter.addImage("starter",starterImg);
    starter.scale = 0.7;
     pro = createSprite(300,190,20,20);
    pro.addImage("pro",proImg);
    pro.scale = 1;
     legend = createSprite(300,255,20,20);
    legend.addImage("legend",legendImg);
    legend.scale = 1.4;
    back = createSprite(210,200,800,400)
    back.addImage("background",back2Img);
    back.scale = 2.6;
    back.velocityX = -2;
    back.x = back.width/2;
    back.visible = false;
}
function draw(){
    

    if(mousePressedOver(starter)){
      play();
      back.visible = true;
      if(back.x < 0){
     back.x = back.width/2;

      }
      
    }
    if(mousePressedOver(pro)){
        pros();
      }
    drawSprites();
    
}
function play(){
 //background(back2Img);

 //back.x = back.width/2;
 
 starter.visible = false;
 pro.visible = false;
 legend.visible = false;

console.log(back.x);
}
function pros(){
    //background(back2Img);

    var back2 = createSprite(210,200,800,400)
    back2.addImage("background",back3Img);
    back2.scale = 2.6;
    back2.velocityX = -2;
    //back.x = back.width/2;
    if(back2.x < 0){
        back2.x = 400
   
    }
    starter.visible = false;
    pro.visible = false;
    legend.visible = false;
   
   console.log(back2.x);
   }