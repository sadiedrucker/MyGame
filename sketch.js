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
let elmTreeBike; 
let yellowStar1; 
let yellowStar2; 
let bikeTimelapse;
let yellowStarBSceneStarted=false; //for bike timelapse video
let bikeWithSal; 
let yellowStarASceneStarted=false; //for biking with Sally video
let bikeSelfie; 
let bikeMirror; 
let bikeCollage; 
let cereal; 
let chocolateCake; 
let bowl; 
let burrito; 
let garden; 
let mealAtWork; 
let meal; 
let coffeeSpill; 
let teaTime;
let dormCourtyard; 
let dormHallway; 
let yellowStar; 
let dormDoor;
let peek; 
let closet; 
let bed; 
let TV; 
let windowPic; 
let rileyDisco; 
let scClouds; 
let scSara; 
let drinks;
let backInThe; 
let natalieNunn;
let bird; 
let turtle;
let betterThan;
let alaska;
let goldenHour;
let treePose;
let frog; 
let ocean; 
let sbWindow; 
let iman;
let mirrorPic;
let music;

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
  montanaField=loadImage('montanaField.jpg'); 
  elmTreeBike=loadImage('elmTreeBike.png');
  yellowStar1=loadImage('yellowStar1.jpg'); 
  yellowStar2= loadImage('yellowStar2.jpg');
  bikeTimelapse= createVideo(['bikeTimelapse.mov']); 
  dormCourtyard=loadImage('dormCourtyard.png'); 
  // hallway=loadImage('hallway.png');
  bikeWithSal=createVideo(['bikeWithSal.mov']); 
  bikeSelfie=loadImage('bikeSelfie.jpg'); 
  bikeMirror=loadImage('bikeMirror.jpg');
  bikeCollage=loadImage('bikeCollage.jpg');
  cereal=loadImage('cereal.PNG'); 
  chocolateCake=loadImage('chocolateCake.PNG');
  bowl=loadImage('bowl.PNG'); 
  burrito=loadImage('burrito.PNG'); 
  mealAtWork=loadImage("mealAtWork.jpg"); 
  meal=loadImage("meal.jpg");
  coffeeSpill=loadImage("coffeeSpill.jpg");
  teaTime=loadImage('teaTime.jpg'); 
  dormCourtyard=loadImage('dormCourtyard.png');
  dormHallway=loadImage('dormHallway.png');
  yellowStar=loadImage('yellowStar.png');
  dormDoor=loadImage('dormDoor.png'); 
  peek=loadImage('peek.png'); 
  closet=loadImage('closet.png'); 
  bed=loadImage('bed.png');
  TV=loadImage('TV.png'); 
  windowPic=loadImage('window.png');
  bed=loadImage('bed.png');
  rileyDisco= loadImage('rileyDisco.png');
  scClouds= loadImage('scClouds.png');
  scSara=loadImage('scSaraHugs.png');
  drinks=loadImage('drinks.png');
  backInThe=loadSound('backInThe.mp3');
  natalieNunn=loadSound('natalieNunn.mp3');
  bird=loadImage('bird.jpeg');
  turtle=loadImage('turtle.JPEG');
  betterThan=loadSound('betterThan.mp3')
  alaska=loadSound('alaska.mp3');
  goldenHour=loadSound('goldenHour.mp3'); 
  treePose=loadImage('treePose.png');
  frog=loadImage('frog.png'); 
  ocean=loadImage('ocean.png'); 
  sbWindow=loadImage('sbWindow.png');
  iman=loadImage('imanMirrorSelfie.png');
  mirrorPic=loadImage('mirrorPic.png'); 
  music=loadImage('music.png');
  SCIACsvid.hide(); 
  bikeTimelapse.hide(); 
  bikeWithSal.hide();
}


function setup() {
  
  userStartAudio();
  createCanvas(500, 400);
  imgFlower= new Button(270, 80, 60, 60, flower, () =>
    goToScene('flower')); 
  imgMirror= new Button(80, 250,60, 75, mirror, () => goToScene('mirror')); 
  imgBike=new Button(380, 300, 90, 60, bike, () => goToScene('bikeScene')); 
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
  yellowStarAButton = new Button(300, 100, 70, 70, yellowStar1, () => goToScene('yellowStarAScene')); 
  yellowStarBButton = new Button(200, 200, 60, 60, yellowStar2, () => goToScene('yellowStarBScene')); 
  yellowStarCButton= new Button(400, 50, 30, 30, yellowStar1, () => goToScene('yellowStarCScene')); 
  cakeButton= new Button(50, 30, 150, 150, chocolateCake, () => goToScene('cakeScene')); 
  burritoButton= new Button(170, 150, 130, 170, burrito, ()=> goToScene('burritoScene'));
  bowlButton=new Button(20, 250, 130, 130, bowl, () => goToScene('bowlScene'));
  cerealButton= new Button(280, 40, 250, 250, cereal, ()=> goToScene('cerealScene'));
  yellowStarButton= new Button(420, 200, 50, 50, yellowStar, ()=> goToScene('dormDoorScene'));
  dormDoorButton= new Button(350, 70, 60, 60, yellowStar2, () => goToScene('firstPeek'));
  windowButton= new Button(280, 80, 50, 50, yellowStar1, () => goToScene('windowScene'));
  TVButton= new Button(40, 130, 40, 40, yellowStar, () => goToScene('TVScene'));
  closetButton=new Button(400, 300, 30, 30, yellowStar2, () => goToScene('closetScene'));
  saraButton= new Button(400, 60, 60, 60, pinkSwirl, () => goToScene('discoScene'));
 
  backButton = new Button(460, 360, 30, 30, backArrow, () => {
  if (scene === 'singlet') {
    SCIACsvid.stop();
    SCIACsvid.hide();
    singletStarted = false;
  }
  if(scene=='trophySong'){
    purpleHat.stop();
  }
  if(scene=='discoScene'){
    backInThe.stop();
  }
  if(scene=='yellowStarCScene'){
    natalieNunn.stop();
  }
  if(scene=='moonScene'){
    betterThan.stop();
  }
  if(scene=='scope3ButtonScene'){
    alaska.stop();
  }
  if(scene=='scope4ButtonScene'){
    goldenHour.stop();
  }

  if (sceneHistory.length > 0) {
    scene = sceneHistory.pop(); // return to last scene
  }
});  
  SCIACsvid.hide(); 
  bikeTimelapse.hide(); 
  bikeWithSal.hide();
  
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
  else if(scene=='cakeScene') cakeScene();
  else if(scene=='bowlScene') bowlScene(); 
  else if(scene== 'cerealScene') cerealScene();
  else if(scene=='burritoScene') burritoScene();
  else if(scene=='car') carScene();
  else if(scene=='house') houseScene(); 
  else if(scene=='bikeScene') bikeScene();
  else if(scene=='yellowStarAScene') yellowStarAScene(); 
  else if(scene=='yellowStarBScene') yellowStarBScene();
  else if(scene=='yellowStarCScene') yellowStarCScene();
  else if(scene=='dormDoorScene') dormDoorScene();
  else if(scene=='firstPeek') firstPeek();
  else if(scene=='windowScene') windowScene();
  else if(scene=='TVScene') TVScene();
  else if(scene=='closetScene') closetScene();
  else if(scene=='discoScene') discoScene();
  
  
  else if(scene=='mirror') mirrorScene();
  if(scene !== 'menu') {
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
  background('#709176');
  image(scClouds, 25, 25, 225, 300);
  image(scSara, 215, 50, 225, 300);
  saraButton.show();
}

function discoScene(){
  background('#CF4D6F');
  image(rileyDisco, 225, 50, 225, 300);
  image(drinks, 50, 25, 225, 300);
  if(!backInThe.isPlaying()){
    backInThe.play();
    }
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
  if(!purpleHat.isPlaying()){
    purpleHat.play();
  }
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
  background("#A44A3F");
  image(treePose, 50, 25, 200, 300);
  image(frog, 200, 60, 200, 300);
  if(!alaska.isPlaying()){
    alaska.play();
    }
  
}

function scope4ButtonScene(){
  background("#CBDFBD");
  image(sbWindow, 25, 50, 200, 300);
  image(ocean, 250, 25, 250, 300);
  if(!goldenHour.isPlaying()){
    goldenHour.play();
    }
}

function scope5ButtonScene(){
  background("#795548");
  image(montanaField, 10, 10, 480, 380);
  noStroke(); 
  fill("#ADA5A2"); 
  rect(125, 20, 280, 370);
  image(jTree, 140, 30, 250, 350);
  moonButton.show();
  
  
}

function moonScene(){
  background('#CF4D6F');
  noStroke();
  fill('#FCEEF1');
  rect(25, 25, 450, 300);
  image(turtle, 50, 150, 150, 150);
  image(bird,250, 50, 200, 200);
  if(!betterThan.isPlaying()){
    betterThan.play();
    }
  
  
}

function mirrorScene(){
  background("#8E8358");
  image(iman, 50, 50, 200, 300);
  image(mirrorPic, 280, 25, 200, 300);
  
}

function bikeScene(){
  background("#8E8358"); 
  image(elmTreeBike, 25, 25, 300, 350);
  yellowStarAButton.show(); 
  yellowStarBButton.show(); 
  yellowStarCButton.show(); 
  
}
function yellowStarAScene(){
  background('#009688')
  if(!yellowStarASceneStarted) {
    bikeWithSal.loop();
    bikeWithSal.volume(0); 
    yellowStarASceneStarted = true;
  }
  image(bikeWithSal, 25, 50, 300, 300);
  image(bikeSelfie, 250, 25, 150, 250);
  image(bikeMirror, 370, 200, 130, 150);
  
}
function yellowStarBScene(){
  bikeTimelapse.hide();
  background('#FFEB3B');
  if (!yellowStarBSceneStarted) {
    bikeTimelapse.loop();
    bikeTimelapse.volume(0); 
    yellowStarBSceneStarted = true;
  }
  image(bikeTimelapse, 50, 50, 400, 300);
}

function yellowStarCScene(){
  background('#875C74'); 
  image(bikeCollage, 25, 50, 450, 300);
  if(!natalieNunn.isPlaying()){
    natalieNunn.play();

  }
  
}


function houseScene(){
  background("#B36A5E"); 
  image(dormHallway, 25, 50, 200, 300);
  image(dormCourtyard, 250, 50, 200, 300);
  yellowStarButton.show();
}

function dormDoorScene(){
  background("#B36A5E"); 
  noStroke();
  fill('#E6D5D2')
  rect(150, 25, 250, 350);
  image(dormDoor, 180, 50, 200, 300);
  dormDoorButton.show();
}

function firstPeek(){
  background("#B36A5E"); 
  image(peek, 25, 50, 200, 300);
  image(bed, 250, 50, 200, 300);
  windowButton.show();
  TVButton.show();
  closetButton.show();
}

function windowScene(){
  background("#B36A5E");
  image(windowPic, 180, 50, 200, 300); 
  dormDoorButton.show(); 
  
}

function TVScene(){
  background("#B36A5E");
  image(TV, 180, 50, 200, 300); 
  dormDoorButton.show(); 
  
}

function closetScene(){
  background("#B36A5E"); 
  image(closet, 180, 50, 200, 300);
  dormDoorButton.show();
}

function carScene(){
  background('#875C74');
  image(music, 25, 25, 450, 350);
  
}

function cupScene(){
  background("#AFBC88");  
  cakeButton.show(); 
  burritoButton.show(); 
  bowlButton.show(); 
  cerealButton.show(); 
  
}

function cakeScene(){
  background("#F19C79");
  image(teaTime, 25, 50, 450, 300);
  
}

function burritoScene(){
  background("#CBDFBD");
  image(meal, 25, 50, 450, 300);
}

function cerealScene(){
  background("#F6F4D2");
  image(mealAtWork, 25, 50, 450, 300);
}

function bowlScene(){
  background("#A44A3F");
  image(coffeeSpill, 25, 50, 450, 300);
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
    yellowStarAButton.handleClick(); 
    yellowStarBButton.handleClick(); 
    yellowStarCButton.handleClick(); 
  }
  else if(scene=='yellowStarAScene'){
    backButton.handleClick();
  }
  else if(scene=='yellowStarBScene'){
    backButton.handleClick();
  }
  else if(scene=='yellowStarCScene'){
    backButton.handleClick();
  }
  
  else if(scene=='house'){
    backButton.handleClick();
    yellowStarButton.handleClick();
  }
  else if(scene=='dormDoorScene'){
    backButton.handleClick();
    dormDoorButton.handleClick();
  }
  else if(scene=='firstPeek'){
    windowButton.handleClick();
    TVButton.handleClick();
    closetButton.handleClick();
    backButton.handleClick();
  }
  else if(scene=='windowScene'){
    dormDoorButton.handleClick();
    backButton.handleClick();
  }
  else if(scene=='TVScene'){
    dormDoorButton.handleClick(); 
    backButton.handleClick();
  }
  else if(scene=='closetScene'){
    dormDoorButton.handleClick(); 
    backButton.handleClick();
  }
  else if(scene=='carScene'){
    backButton.handleClick();
  }
  else if(scene=='cup'){
    cakeButton.handleClick(); 
    burritoButton.handleClick(); 
    bowlButton.handleClick(); 
    cerealButton.handleClick();
    backButton.handleClick();
  }
  else if(scene=='flower'){
    backButton.handleClick();
    saraButton.handleClick();
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

