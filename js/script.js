/**
 * The Squirrel class is a blueprint for all squirrel class animals used on the page
 * @author Dennis Cupp & Adam Knee
 * @version 1.0, November 2015
 *
 * @param id    string - id of the animal
 * @param aClass string - class of the animal
 * @param xPos  int - horizontal starting position
 * @param yPos  int - vertical starting position
 * @param upNum int - number used to track squirrel's position relative to the top of the grid
 * @param downNum int - number used to track squirrel's position relative to the bottom of the grid
 * @param leftNum int - number used to track squirrel's position relative to the left side of the grid
 * @param rightNum int - number used to track squirrel's position relative to the right side of the grid
 */

function Squirrel(id, aClass,xPos, yPos, upNum, downNum, leftNum, rightNum){
    //properties to let each animal store its own x/y position
    this.x = xPos;
    this.y = yPos;
    //properties to track the position of the animal on the movement grid
    this.upCounter = upNum;
    this.downCounter = downNum;
    this.leftCounter = leftNum;
    this.rightCounter = rightNum;
    //the ID of the animal
    this.id = id;
    //randomly generated number that is passed to squirrelBehavior function
    this.number = 0; 
    //property that keeps track of the item on the screen
    this.animal_on_page;
    //array for storing animal behavioral functions
    this.behaveArray = new Array();
    //number of behavioral functions the animal is able to use for the current movement action
    this.behaveIndex = 0;
    var thisObject;
    
    /**
    * The create method put a visual of the animal on the screen
    */
    this.create = function(){
        this.animal_on_page = document.createElement("div");
        this.animal_on_page.className = aClass;
        this.animal_on_page.id = this.id;
        this.animal_on_page.style.left = this.x + "px";
        this.animal_on_page.style.top = this.y + "px";
        //put the div on the page as a child of the body
        document.body.appendChild(this.animal_on_page);
        thisObject = this;
        thisObject.moveInt =setInterval(function(){
            thisObject.squirrelBehavior(); 
        },(Math.floor((Math.random()*3000)+2000)));
    }//end function create();
	
    /**
    *   The moveUpRight method makes the object move up and to the right on the movement grid
    */
    this.moveUpRight = function(){
        for(i=0;i<50;i++){
            $("#"+this.id).animate({left:'+=2px'},1); //squirrel object moves to the right 2px
            $("#"+this.id).animate({top:'-=2px'},1); //squirrel object moves up 2px
        }
        this.rightCounter++;
        this.leftCounter--;
        this.upCounter++;
        this.downCounter--;
        console.log("I moved up and to the right");
    }
    
    /**
    *   The moveUpLeft method makes the object move up and to the left on the movement grid
    */
    this.moveUpLeft = function(){
        for(i=0;i<50;i++){
            $("#"+this.id).animate({left:'-=2px'},1); //squirrel object moves to the left 2px
            $("#"+this.id).animate({top:'-=2px'},1); //squirrel object moves up 2px
        }
        this.rightCounter--;
        this.leftCounter++;
        this.upCounter++;
        this.downCounter--;
        console.log("I moved up and to the left");
    }
    
    /**
    *   The moveDownRight method makes the object move down and to the right on the movement grid
    */
    this.moveDownRight = function(){
        for(i=0;i<50;i++){
            $("#"+this.id).animate({left:'+=2px'},1); //squirrel object moves to the right 2px
            $("#"+this.id).animate({top:'+=2px'},1); //squirrel object moves down 2px
        }
        this.rightCounter++;
        this.leftCounter--;
        this.upCounter--;
        this.downCounter++;
        console.log("I moved down and to the right");
    }
    
    /**
    *   The moveDownLeft method makes the object move down and to the left on the movement grid
    */
    this.moveDownLeft = function(){
        for(i=0;i<50;i++){
            $("#"+this.id).animate({left:'-=2px'},1); //squirrel object moves to the left 2px
            $("#"+this.id).animate({top:'+=2px'},1); //squirrel object moves down 2px
        }
        this.rightCounter--;
        this.leftCounter++;
        this.upCounter--;
        this.downCounter++;
        console.log("I moved down and to the left");
    }
    
    /**
    * The moveRight method makes the object move to the right on the movement grid
    */
	this.moveRight = function(){
        $("#"+this.id).animate({left:'+=100px'},1250); //squirrel object moves to the right 100px
        this.rightCounter++;
        this.leftCounter--;
        console.log("I moved right");
    }
    
    /**
    * The moveLeft method makes the object move to the left on the movement grid
    */
    this.moveLeft = function(){
        $("#"+this.id).animate({left:'-=100px'},1250); //squirrel object moves to the left 100px
        this.leftCounter++;
        this.rightCounter--;
        console.log("I moved left");
    }
	
    /**
    * The moveUp method makes the object move up on the movement grid
    */
    this.moveUp = function(){
        $("#"+this.id).animate({top:'-=100px'},1250); //squirrel object moves up 100px
        this.upCounter++;
        this.downCounter--;
        console.log("I moved up");
    }
    
    /**
    * The moveDown method makes the object move down on the movement grid
    */
    this.moveDown = function(){
        $("#"+this.id).animate({top:'+=100px'},1250); //squirrel object moves down 100px
        this.downCounter++;
        this.upCounter--;
        console.log("I moved down"); 
    }
    
    /**
    * The squirrelBehavior method checks the values of the movement variables and builds the behaveArray array based upon their values. 
    * If the conditions are met for the if statements, that particular movement function is made available to the object.
    * A random number is then generated based upon the length of the of the behaveArray array.
    * ??
    */
    this.squirrelBehavior = function(){
         if (this.leftCounter < 3) {
            this.behaveArray.push(1);
         }
        if (this.rightCounter < 3) {
            this.behaveArray.push(2);
        }
        if (this.upCounter < 3) {
            this.behaveArray.push(3);
        }
        if (this.downCounter < 3) {
            this.behaveArray.push(4);
        }
        if (this.upCounter < 3 && this.rightCounter < 3) {
            this.behaveArray.push(5);   
        }
        if (this.upCounter < 3 && this.leftCounter < 3) {
            this.behaveArray.push(6);   
        }
        if (this.downCounter < 3 && this.rightCounter < 3) {
            this.behaveArray.push(7);   
        }
        if (this.downCounter < 3 && this.leftCounter < 3) {
            this.behaveArray.push(8);   
        }
    
        this.behaveIndex = (Math.floor(Math.random()*this.behaveArray.length));

        console.log('ba2:'+this.behaveIndex);
        switch(this.behaveArray[this.behaveIndex]) {
            case 1:
                this.moveLeft();
            break;
            case 2:
                this.moveRight();
            break;
            case 3:
                this.moveUp();
            break;
            case 4:
                this.moveDown();
            break;
            case 5:
                this.moveUpRight();
            break;
            case 6:
                this.moveUpLeft();
            break;
            case 7:
                this.moveDownRight();
            break;
            case 8:
                this.moveDownLeft();
            break;
            default:
            break;
        }
    
    console.log("Behave Array #: "+this.behaveArray, "Behave Index #: "+this.behaveIndex);
    console.log("Up Counter: "+this.upCounter);
    console.log("Down Counter: "+this.downCounter);
    console.log("Left Counter: "+this.leftCounter);
    console.log("Right Counter: "+this.rightCounter);
    
    this.behaveArray = [];
    this.behaveIndex = 0;
    }
}
