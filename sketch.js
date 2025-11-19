let scene='menu'; 
let sceneHistory=[]
let babyPhoto; 
let flower; 
let mirror; 
let bike; 
let house; 
let car; 
let singlet; 
let star; 
let cup; 
let originX; 
let originY; 
let x; 
let y; 
let backArrow; 
let SCIACsvid;
let singletStarted = false;
let pinkSwirl; 
let pinkStar; 
let oliviaSunrise;
let trophy; 
let purpleHat; 
let xcMapImg;
let preNatsCourse; 
let scope1; 
let baldySunset;
let scope2;
let scope3; 
let scope4; 
let scope5; 
let jTree; 
let moon; 
let montanaField; 

function preload(){
  babyPhoto=loadImage('babyPhoto.jpeg'); 
  flower=loadImage('flower.jpg'); 
  mirror=loadImage('mirror.jpg'); 
  bike=loadImage('bike.jpg');
  house=loadImage('house.jpg');
  car=loadImage('car.jpg');
  singlet=loadImage('singlet.jpg');
  star=loadImage('star.jpg'); 
  cup=loadImage('cup.jpg');
  backArrow=loadImage('backArrow.jpg');
  SCIACsvid=createVideo(['SCIACsvid.mov']); 
  pinkSwirl=loadImage('pinkSwirl.jpg'); 
  pinkStar=loadImage('pinkStar.jpg'); 
  oliviaSunrise=loadImage('oliviaSunrise.jpg');
  trophy=loadImage('trophy.jpg');
  purpleHat=loadSound('purpleHat.m4a'); 
  xcMapImg=loadImage('xcMap.jpg');
  preNatsCourse=loadImage('preNatsCourse.png');
  scope1=loadImage('scope1.jpg');
  baldySunset=loadImage('baldySunset.jpg');
  scope2=loadImage("scope2.jpg"); 
  garden=loadImage("garden.jpg");
  scope3=loadImage("scope3.jpg");
  scope4=loadImage("scope4.jpg"); 
  scope5=loadImage("scope5.jpg");
  jTree=loadImage('jTree.jpg');
  moon=loadImage('moon.jpg');
  montanaField=loadImage('montanaField.jpg')
}

function setup() {
  userStartAudio();
  createCanvas(500, 400);
  imgFlower= new Button(270, 80, 60, 60, flower, () =>
    goToScene('flower')); 
  imgMirror= new Button(80, 250,60, 75, mirror, () => goToScene('mirror')); 
  imgBike=new Button(380, 300, 90, 60, bike, () => goToScene('bike')); 
  imgHouse=new Button(50, 80, 60, 70, house, () => goToScene('house')); 
  imgCar= new Button(230, 220, 120, 70, car, () => goToScene('car'));
  imgSinglet= new Button(400, 50, 60, 100, singlet, () => {
    goToScene('singlet');
  }); 
  imgStar= new Button(400, 200, 40, 40, star, () => goToScene('star')); 
  imgCup= new Button(140, 170, 50, 50, cup, () => goToScene('cup'));
  imgPinkSwirl=new Button(25, 25, 45, 45, pinkSwirl, () => goToScene('trackSunrise')); 
  trophyButton= new Button(60, 150, 80, 110, trophy, () => goToScene('trophySong'));
  imgPinkStar=new Button(440, 150, 45, 45, pinkStar, () => goToScene('xcMap'));
  scope1Button= new Button(50, 50, 260, 220, scope1, () => goToScene('scope1ButtonScene')); 
  scope2Button= new Button(250, 80, 200, 160, scope2, () => goToScene('scope2ButtonScene')); 
  scope3Button= new Button(25, 40, 170, 120, scope3, () => goToScene('scope3ButtonScene'));
  scope4Button= new Button(150, 190, 220, 170, scope4, () => goToScene('scope4ButtonScene'));
  scope5Button= new Button(250, 200, 200, 160, scope5, () => goToScene('scope5ButtonScene'));
  moonButton=new Button(300, 60, 40, 50, moon, ()=> goToScene('moonScene'));
  backButton = new Button(460, 360, 30, 30, backArrow, () => {
  if (scene === 'singlet') {
    SCIACsvid.stop();
    SCIACsvid.hide();
    singletStarted = false;
  }

  if (sceneHistory.length > 0) {
    scene = sceneHistory.pop(); // return to last scene
  }
});
 SCIACsvid.hide(); 
}

function draw() {
  background(220);
  
    
  if(scene=='menu') menuScene(); 
  else if(scene=='flower') flowerScene();
  else if(scene=='trackSunrise') trackSunriseScene(); 
  else if(scene=='trophySong') trophySongScene();
  else if(scene=='xcMap') xcMapScene(); 
  else if(scene=='scope1ButtonScene') scope1ButtonScene(); 
  else if(scene=='scope2ButtonScene') scope2ButtonScene(); 
  else if(scene=='singlet') singletScene(); 
  else if(scene=='star') starScene();
  else if(scene=='scope3ButtonScene') scope3ButtonScene();
  else if(scene=='scope4ButtonScene') scope4ButtonScene();
  else if(scene=='scope5ButtonScene') scope5ButtonScene();
  else if(scene=='moonScene') moonScene();
  else if(scene=='cup') cupScene(); 
  else if(scene=='car') carScene();
  else if(scene=='house') houseScene(); 
  else if(scene=='bike') bikeScene(); 
  else if(scene=='mirror') mirrorScene();
  if(scene != 'menu') {
    backButton.show();
  }  
  
}


//-----------------SCENE FUNCTIONS------------------------------------

function menuScene(){
  image(babyPhoto, 0, 0, 500, 400);
  imgFlower.show(); 
  imgMirror.show();
  imgBike.show();
  imgHouse.show();
  imgCar.show();
  imgSinglet.show();
  imgStar.show();
  imgCup.show();
}

function flowerScene(){

}

function singletScene(){
  SCIACsvid.hide();
  background('#FFEB3B');
  if (!singletStarted) {
    SCIACsvid.loop();
    SCIACsvid.volume(0); 
    singletStarted = true;
  }
  image(SCIACsvid, 50, 50, 400, 300);
  imgPinkSwirl.show(); 
  imgPinkStar.show();
}

function trackSunriseScene(){
  background('#FFEB3B'); 
  noStroke();
  fill('#FDBCD2'); 
  rect(40, 130, 120, 150);
  rect(180, 10, 290, 370);
  image(oliviaSunrise, 200, 20, 250, 350);
  trophyButton.show();
}
  
function trophySongScene(){
  background('#FFEB3B'); 
  purpleHat.play();
  noStroke();
  fill('#FDBCD2'); 
  rect(40, 130, 120, 150);
  rect(180, 10, 290, 370);
  image(oliviaSunrise, 200, 20, 250, 350);
  image(trophy, 60, 150, 80, 110); 
}

function xcMapScene(){
  background('#FDBCD2'); 
  image(xcMapImg, 25, 75, 450, 250);
}

function starScene(){
  image(preNatsCourse, 0, 0, width, height);  
  scope1Button.show();
  scope5Button.show();
}

function scope1ButtonScene(){
  background("#607D8B"); 
  noStroke();
  fill('#F6F4E7'); 
  rect(20, 50, 450, 300);
  image(baldySunset, 50, 30, 270, 350); 
  scope2Button.show();
}

function scope2ButtonScene(){
  background("#FFC107");
  image(garden, 10, 10, 480, 380); 
  scope3Button.show();
  scope4Button.show();
}

function scope3ButtonScene(){
  
}

function scope4ButtonScene(){
  
}

function scope5ButtonScene(){
  background("#795548")
  image(montanaField, 10, 10, 480, 380);
  noStroke(); 
  fill("#ADA5A2"); 
  rect(125, 20, 280, 370);
  image(jTree, 140, 30, 250, 350);
  moonButton.show();
  
}

function moonScene(){
  
}

function mirrorScene(){
  
}

function bikeScene(){
  
}

function houseScene(){
  
}

function carScene(){
  
}

function cupScene(){
  
}



//-------------------CLASS DEFINITION--------------------------------
class Button{
  constructor(originX, originY, x, y, pic, onClick){
    this.originX=originX
    this.originY=originY
    this.x=x
    this.y=y
    this.pic=pic
    this.onClick=onClick
  }
  
  
  isMouseOver(){
    return mouseX > this.originX && mouseX < this.originX + this.x &&
           mouseY > this.originY && mouseY < this.originY + this.y;  
  }
  
  show(){
    image(this.pic, this.originX, this.originY, this.x, this.y);
  }
  
  handleClick() {
    if (this.isMouseOver() && this.onClick){
      this.onClick();
    }
  }
}

//---------------OTHER FUNCTIONS --------------------------
function mousePressed() {
  if (scene == 'menu') {
    imgFlower.handleClick();
    imgMirror.handleClick();
    imgBike.handleClick();
    imgHouse.handleClick();
    imgCar.handleClick();
    imgSinglet.handleClick();
    imgStar.handleClick();
    imgCup.handleClick();
    
  } 
  else if(scene=='singlet'){
    imgPinkSwirl.handleClick();
    imgPinkStar.handleClick();
    backButton.handleClick();
  }
  else if(scene=='trackSunrise'){
    trophyButton.handleClick(); 
    backButton.handleClick();
  }
  else if(scene=='xcMap'){
    backButton.handleClick();
  }
  else if(scene=='star'){
    scope1Button.handleClick();
    scope5Button.handleClick();
    backButton.handleClick();
  }
  else if(scene=='scope1ButtonScene'){
    scope2Button.handleClick();
    backButton.handleClick();
  }
  else if(scene=='scope2ButtonScene'){
    scope3Button.handleClick(); 
    scope4Button.handleClick(); 
    backButton.handleClick();
  }
  else if(scene=='scope5ButtonScene'){
    moonButton.handleClick();
    backButton.handleClick();
  }
  else if(scene=='mirrorScene'){
    backButton.handleClick();
  }
  else if(scene=='bikeScene'){
    backButton.handleClick();
  }
  else if(scene=='houseScene'){
    backButton.handleClick();
  }
  else if(scene=='carScene'){
    backButton.handleClick();
  }
  else if(scene=='cupScene'){
    backButton.handleClick();
  }
    else{
    backButton.handleClick();
  }
}

function goToScene(newScene){
  sceneHistory.push(scene); 
  scene=newScene;
  
  if (scene === 'singlet') {
    SCIACsvid.show();
    singletStarted=false; 
  } else {
    SCIACsvid.hide();
  }
}
