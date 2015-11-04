var number = 0; //randomly generated number that is passed to ghostBehavior function
var counter = 0; //conditional number for ghostBehavior function while loop
var behaveArray = new Array(); // array for storing animal behavioral functions
var behaveIndex = 0; //number of behavioral functions the animal is able to use for the current movement action

//postional variables
var upCounter = 0; //variable used to track object's position relative to the top of the movement grid
var downCounter = 0; //variable used to track object's position relative to the bottom of the movement grid
var leftCounter = 0; //variable used to track object's position relative to the left of the movement grid
var rightCounter = 0; //variable used to track object's position relative to the right of the movement grid

function moveRight(){
    $("#ghost").animate({right:'-=100px'},500); //ghost object moves to the right 100px
    rightCounter++;
    leftCounter--;
}

function moveLeft(){
    $("#ghost").animate({right:'+=100px'},500); //ghost object moves to the left 100px
    leftCounter++;
    rightCounter--;
}

function moveUp() {
    $("#ghost").animate({top:'-=100px'},500); //ghost object moves up 100px
    upCounter++;
    downCounter--;
}

function moveDown() {
    $("#ghost").animate({top:'+=100px'},500); //ghost object moves down 100px
    downCounter++;
    upCounter--;
}

function ghostBehavior() {
    if (leftCounter < 3) {
        behaveArray.push(1);
    }
    
    if (rightCounter < 3) {
        behaveArray.push(2);
    }
    
    if (upCounter < 3) {
        behaveArray.push(3);
    }
    
    if (downCounter < 3) {
        behaveArray.push(4);
    }
    
    behaveIndex = (Math.floor(Math.random()*behaveArray.length + 1));
    
    console.log("counter is: "+counter);
    console.log("leftCounter is: "+leftCounter);
    console.log("rightCounter is: "+rightCounter);
    console.log("upCounter is: "+upCounter);
    console.log("downCounter is: "+downCounter);
    console.log("behaveIndex is: "+behaveIndex);
    
    switch(behaveIndex) {
        case 1:
            moveRight();
        break;
        case 2:
            moveLeft();
        break;
        case 3:
            moveUp();
        break;
        case 4:
            moveDown();
        break;
        default:
        break;
    }
    
    behaveIndex = 0;
    behaveArray = [];
}

onload=init;

function init(){
    
    while(counter<10){
        ghostBehavior();
        counter++;
    }
    
//    console.log(upCounter);
//    console.log(downCounter);
//    console.log(leftCounter);
//    console.log(rightCounter);
    
};