var dog,sadDog,happyDog,dot;
var fdog,adog,foodObj,dogName;
var database,lastFed,foodStock = foodObj.foodStore;

function preload(){
  sadDog = loadImage("Images/Dog.png");
  happyDog = loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  
  dog = createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  foodObj = new Food(2);

  fdog = createButton("Feed the dog");
  fdog.position(700,95);
  fdog.mousePressed(feedDog);

  adog = createButton("Add food");
  adog.position(800,95);
  adog.mousePressed(addFood);

  dogName = createInput();
  dogName.position(500,95);
}

function draw() {
  background(46,139,87);
  foodObj.display();
  foodObj.getFoodStock();

  getTime();
  drawSprites();
  textSize(15);
  fill("yellow");
  text("Dog's name :",200,30);
  if(dot){
  textSize(15);
  fill("yellow");
  text(dogName.value()+" : "+dot,820,140);
  }
}

function feedDog(){
dog.addImage(happyDog);
foodObj.deductFood();
foodObj.updateFoodStock(foodStock);
dot="Thank you!";  
}

function addFood(){
dog.addImage(sadDog);
foodObj.addFood();
foodObj.updateFoodStock(foodStock);
dot="I am hungry";  
}

async function getTime(){
  var link1= await fetch("http://worldclockapi.com/api/json/est/now");
  var link1j= await link1.json();
  var dt= link1j.currentDateTime;
  var hr= dt.slice(11,13);

  console.log(hr);
}


