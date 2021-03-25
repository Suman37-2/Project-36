class Food{
constructor(foodStore){
this.img=loadImage("Images/Milk.png");
this.foodStore=foodStore;
}

getFoodStock(){
var foodStockRef = database.ref('foodStock');
foodStockRef.on("value",function(data){
foodStore = data.val();   
})
}

updateFoodStock(food){
database.ref('/').update({
foodStore : food   
})

}

addFood(){
this.foodStore = this.foodStore + 1;    
}

deductFood(){
if(this.foodStore>0){    
this.foodStore = this.foodStore - 1;
}
}

display(){
var x=80,y=100;

imageMode(CENTER);
image(this.img,720,720,70,70);

if(this.foodStock!=0){
for(var i=0;i<this.foodStore;i++){
if(i%10===0){
x=80;
y=y+50;    
}
image(this.img,x,y,50,50);
x=x+30;    
}    
}
}
}