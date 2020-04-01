let canvas;
let ctx;
let canvasWidth = 1500;
let canvasHeight = 700;
let ship;
let keys = [];
let bullets = [];
let asteroids = [];
let shipUp;
let shipupRight;
let shipRight;
let shipRightRight;
let shipDown;
let shipDownRight
let shipLeft;
let shipLeftRight;
let shipImages;
let shipImagesLength;
let shipImagesLoaded;
let currentShip = 0;
let currentBubble = 0;
let background;
let score = 0;
let lives = 5;




let highScore;
let localStorageName = "HighScore";

/*var background = new Image();
background.src = "water-background.jpg";
background.onLoad = function(){
    ctx.drawImage(background,0,0);
} */

document.addEventListener('DOMContentLoaded', SetupCanvas);

function  SetupCanvas(){
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    
    
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //base_image = new Image();
    //base_image.src = "single-ship.png";
    // base_image.onload = function(){
    //     ctx.drawImage(base_image, 0, 0);
        
    // }
    ship1 = new Image();
    ship1.src = "single-ship-1.png"
    ship2 = new Image();
    ship2.src = "single-ship-2.png"
    ship3 = new Image();
    ship3.src = "single-ship-3.png"
    ship4 = new Image();
    ship4.src = "single-ship-4.png"
    ship5 = new Image();
    ship5.src = "single-ship-5.png"
    ship6 = new Image();
    ship6.src = "single-ship-6.png"
    ship7 = new Image();
    ship7.src = "single-ship-7.png"
    ship8 = new Image();
    ship8.src = "single-ship-8.png"
    ship9 = new Image();
    ship9.src = "single-ship-9.png"
    ship10 = new Image();
    ship10.src = "single-ship-10.png"
    ship11 = new Image();
    ship11.src = "single-ship-11.png"
    ship12 = new Image();
    ship12.src = "single-ship-12.png"
    ship13 = new Image();
    ship13.src = "single-ship-13.png"
    ship14 = new Image();
    ship14.src = "single-ship-14.png"
    ship15 = new Image();
    ship15.src = "single-ship-15.png"
    ship16 = new Image();
    ship16.src = "single-ship-16.png"
    ship17 = new Image();
    ship17.src = "single-ship-17.png"
    ship18 = new Image();
    ship18.src = "single-ship-18.png"
    ship19 = new Image();
    ship19.src = "single-ship-19.png"
    ship20 = new Image();
    ship20.src = "single-ship-20.png"
    ship21 = new Image();
    ship21.src = "single-ship-21.png"
    ship22 = new Image();
    ship22.src = "single-ship-22.png"
    ship23 = new Image();
    ship23.src = "single-ship-23.png"
    ship24 = new Image();
    ship24.src = "single-ship-24.png"
    ship25 = new Image();
    ship25.src = "single-ship-25.png"
    ship26 = new Image();
    ship26.src = "single-ship-26.png"
    ship27 = new Image();
    ship27.src = "single-ship-27.png"
    ship28 = new Image();
    ship28.src = "single-ship-28.png"
    ship29 = new Image();
    ship29.src = "single-ship-29.png"
    ship30 = new Image();
    ship30.src = "single-ship-30.png"
    ship31 = new Image();
    ship31.src = "single-ship-31.png"
    ship32 = new Image();
    ship32.src = "single-ship-32.png"
    shipImages = [ship1,ship2,ship3,ship4,ship5,ship6,ship7,ship8,ship9,ship10,ship11,ship12,ship13,ship14,ship15,ship16,ship17,ship18,ship19,ship20,ship21,ship22,ship23,ship24,ship25,ship26,ship27,ship28,ship29,ship30,ship31,ship32];
    shipImagesLength = shipImages.length;
    bubble = new Image();
    bubble.src = "bubble.png";
    bubbles = [bubble];
    straw1 = new Image();
    straw1.src = "straw.png";
    straw2 = new Image();
    straw2.src = "straw2.png";
    straws = [straw1, straw2]
    shipImagesLoaded = 0;
    background = new Image();
    background.src = "water-background.jpg";
    backgrounds = [background];
    lifeship = new Image();
    lifeship.src = "kelp.png"
    lifeships = [lifeship];
    
    shipImages.forEach(function(img){
        img.onload = function(){
            shipImagesLoaded++;
            if(shipImagesLoaded == shipImagesLength){
                runGame();
            }
        }
    })
    bubbles.forEach(function(img){
        img.onload = function(){
            bubbles.Loaded++;
            if(bubbles.Loaded == bubbles.Length){
                runGame();
            }
        }
    })
    
    
    if (localStorage.getItem(localStorageName) == null) {
        highScore = 0;
    } else {
        highScore = localStorage.getItem(localStorageName);
    }
 
    function load(img) {
        return new Promise(function(resolve, reject) {
            img.onload = resolve;
        });
    }

    
    //You would then use the resulting promise like so:
    function runGame(){
        // Do things after onload
        
        ship = new Ship();

        for(let i = 0; i < 4; i++){
            asteroids.push(new Asteroid());
        }
        // document.body.addEventListener("keydown", function(e){
        //     keys[e.keyCode] = true;
        // });
        // document.body.addEventListener("keyup", function(e){
        //     keys[e.keyCode] = false;
        //     if(e.keyCode === 32){
        //         bullets.push(new Bullet(ship.angle));
        //     }
            
        // });
        document.body.addEventListener("keydown", HandleKeyDown);
    document.body.addEventListener("keyup", HandleKeyUp);
        Render();
    }
    
  
   
}
function HandleKeyDown(e){
    keys[e.keyCode] = true;
}
function HandleKeyUp(e){
    keys[e.keyCode] = false;
    if (e.keyCode === 32){
        bullets.push(new Bullet(ship.angle));
    }
}
    
     

class Ship{
    constructor(){
        this.visible = true;
        this.x = canvasWidth / 2 - 25;
        this.y = canvasHeight / 2 - 25;
        this.movingForward = false;
        this.speed = 0.1;
        this.velX = 0;
        this.velY = 0;
        this.rotateSpeed = 0.001;
        this.rotateSpeed = 0.001;
        this.radius = 50;
        this.angle = 0;
        this.counter = 0;
        //this.noseX = canvasWidth / 2 - 50 ;
        //this.noseY = canvasHeight / 2 - 50;
        this.noseX = this.x ;
        this.noseY = this.y ;
        this.strokeColor = 'white';
        console.log(this.noseX)

    }
    Rotate(dir){
        this.angle += this.rotateSpeed * dir;
      
      
       /*if(dir = 1){
           this.counter++;
       }else{
           this.counter--;
       }*/
       
       // console.log(this.rotateSpeed)
        //console.log(dir)
        if(dir == 1){
            //this.counter += 3.27272727272727272727;
            this.counter += 3.30275;
            if(this.counter > 360){
                this.counter = 0;
            }
        }else{
            //this.counter -= 3.27272727272727272727;
            this.counter -= 3.30275;
            if(this.counter < 0){
                this.counter = 360;
            }
            
        }
       
       

        if(this.counter > 354.375 || this.counter < 5.625){
            currentShip = 0; 
        }else if(this.counter > 5.625 && this.counter < 16.875){
            currentShip = 1;
        }else if(this.counter >= 16.875 && this.counter < 28.125){
            currentShip = 2;
        }else if(this.counter >= 28.125 && this.counter < 39.375 ){
            currentShip = 3
        }else if(this.counter >= 39.375 && this.counter < 50.625){
            currentShip = 4;
        }else if(this.counter >= 50.625 && this.counter < 61.875){
            currentShip = 5;
        }else if(this.counter >= 61.875 && this.counter < 73.125){
            currentShip = 6;
        }else if(this.counter >= 73.125 && this.counter <= 84.375){
            currentShip = 7;
        }else if(this.counter >= 84.375 && this.counter <= 95.625){
            currentShip = 8;
        }else if(this.counter >= 95.625 && this.counter <= 106.875){
            currentShip = 9;
        }else if(this.counter >= 106.875 && this.counter <= 118.125){
            currentShip = 10;
        }else if(this.counter >= 118.125 && this.counter <= 129.375){
            currentShip = 11;
        }else if(this.counter >= 129.375 && this.counter <= 140.625){
            currentShip = 12;
        }else if(this.counter >= 140.625 && this.counter <= 151.875){
            currentShip = 13;
        }else if(this.counter >= 151.875 && this.counter <= 163.125){
            currentShip = 14;
        }else if(this.counter >= 163.125 && this.counter <= 174.375){
            currentShip = 15;
        }else if(this.counter >= 174.375 && this.counter <= 185.625){
            currentShip = 16;
        }else if(this.counter >= 185.625 && this.counter <= 196.875){
            currentShip = 17;
        }else if(this.counter >= 196.875 && this.counter <= 208.125){
            currentShip = 18;
        }else if(this.counter >= 208.125 && this.counter <= 219.375){
            currentShip = 19;
        }else if(this.counter >= 219.375 && this.counter <= 230.625){
            currentShip = 20;
        }else if(this.counter >= 230.625 && this.counter <= 241.875){
            currentShip = 21;
        }else if(this.counter >= 241.875 && this.counter <= 253.125){
            currentShip = 22;
        }else if(this.counter >= 253.125 && this.counter <= 264.375){
            currentShip = 23;
        }else if(this.counter >= 264.375 && this.counter <= 275.625){
            currentShip = 24;
        }else if(this.counter >= 275.625 && this.counter <= 286.875){
            currentShip = 25;
        }else if(this.counter >= 286.875 && this.counter <= 298.125){
            currentShip = 26;
        }else if(this.counter >= 298.125 && this.counter <= 309.375){
            currentShip = 27;
        }else if(this.counter >= 309.375 && this.counter <= 320.625){
            currentShip = 28;
        }else if(this.counter >= 320.625 && this.counter <= 331.875){
            currentShip = 29;
        }else if(this.counter >= 331.875 && this.counter <= 343.125){
            currentShip = 30;
        }else if(this.counter >= 343.125 && this.counter <= 354.375){
            currentShip = 31;
        }
        
        
    }
    Update(){
        let radians = this.angle / Math.PI * 180;
        // oldX + cos(radians) * disatnce
        if(this.movingForward){
            this.velX += Math.cos(radians) * this.speed;
            this.velY += Math.sin(radians) * this.speed;
        }
        if(this.x < this.radius - 50){
            this.x = canvas.width;
        }
        if(this.x > canvas.width){
            this.x = this.radius - 50;
        }
        if(this.y < this.radius - 50){
            this.y = canvas.height;
        }
        if(this.y > canvas.height){
            this.y = this.radius - 50;
        }
        this.velX *= 0.99;
        this.velY *= 0.99;

        this.x -= this.velX;
        this.y -= this.velY;
    }
    make_base(){
        let vertAngle = ((Math.PI * 2) / 3);
        let radians = this.angle / Math.PI * 180;
        this.noseX = this.x - this.radius * Math.cos(radians);
        this.noseY = this.y - this.radius * Math.sin(radians);
 
        for (let i = 0; i < 1; i++) {
            ctx.drawImage(shipImages[currentShip], this.x, this.y);
           // ctx.lineTo(this.x - this.radius * Math.cos(vertAngle * i + radians), this.y - this.radius * Math.sin(vertAngle * i + radians));
        }
    }
}
class Bullet{
    constructor(angle) {
        this.visible = true;
        this.x = ship.noseX + 46;
        this.y = ship.noseY + 46;
        this.angle = angle;
        this.height = 4;
        this.width = 4;
        this.speed = 5;
        this.velX = 0;
        this.velY = 0;
    }
    Update(){
        let radians = this.angle / Math.PI * 180;
        this.x -= Math.cos(radians) * this.speed;
        this.y -= Math.sin(radians) * this.speed;
    }
    Draw(){
        ctx.fillStyle = 'blue';
   
        for(let i = 0; i < 1; i++){
        ctx.drawImage(bubbles[0], this.x, this.y);
        }
    }
}
class Asteroid{
    constructor(x,y, radius, level, collisionRadius){
        this.visible = true;
        this.x = x || Math.floor(Math.random() * canvasWidth);
        this.y = y || Math.floor(Math.random() * canvasHeight);
        this.speed = 5;
        this.radius = radius || 45;
        this.angle = Math.floor(Math.random() * 359);
        this.collisionRadius = collisionRadius || 45;
        this.level = level || 1;

    }
    Update(){
        var radians = this.angle / Math.PI * 180;
        this.x += Math.cos(radians) * this.speed;
        this.y += Math.sin(radians) * this.speed;
        if(this.x < this.radius){
            this.x = canvas.width;
        }
        if(this.x > canvas.width){
            this.x = this.radius;
        }
        if(this.y < this.radius){
            this.y = canvas.height;
        }
        if(this.y > canvas.height){
            this.y = this.radius;
        }
    }
    Draw(){
      
            for(let i = 0; i < 1; i++){
                ctx.drawImage(straws[0], this.x, this.y);
                }
        
    }
}
function circleCollison(p1x, p1y, r1, p2x, p2y, r2){
    let radiusSum;
    let xDiff;
    let yDiff;
    radiusSum = r1 + r2;
    xDiff = p1x - p2x;
    yDiff = p1y - p2y;
    if(radiusSum > Math.sqrt((xDiff * xDiff) + (yDiff * yDiff)) ){

        console.log('Player Coord: ' + p1x + ':' + p1y);
        console.log('Enemy Coord: ' + p2x + ':' + p2y);

        return true;
    }else{
        return false;
    }

}

function DrawLifeShips(){
    let startX = 1350;
    let startY = 10;
    let points = [[9, 9], [-9, 9]];
    ctx.strokeStyle = 'white'; // Stroke color of ships
    // Cycle through all live ships remaining
    for(let i = 0; i < lives; i++){
        // Start drawing ship
        ctx.beginPath();
        // Move to origin point
        ctx.moveTo(startX, startY);
        // Cycle through all other points
        for(let j = 0; j < points.length; j++){
            ctx.lineTo(startX + points[j][0], 
                startY + points[j][1]);
        }
        // Draw from last point to 1st origin point
        ctx.closePath();
        // Stroke the ship shape white
        ctx.stroke();
        // Move next shape 30 pixels to the left
        startX -= 30;
    }
}
function Render(){
    

    ship.movingForward = (keys[87]);
    if(keys[68]){
        ship.Rotate(1);
       
    }
    if(keys[65]){
        ship.Rotate(-1);
        
    }
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    ctx.fillStyle = 'white';
    ctx.font = '21px Arial';
    ctx.fillText('SCORE: '+ score.toString(), 20, 35)
    ctx.fillText('LIVES: '+ lives.toString(), 20, 105)
    if(lives <= 0){
        document.body.removeEventListener("keydown", HandleKeyDown);
        document.body.removeEventListener("keyup", HandleKeyUp);
        ship.visible = false;
        ctx.font = "50px Arial";
        ctx.fillText('GAME OVER', canvasWidth / 2 - 150, canvasHeight / 2);
    }
    DrawLifeShips();
    
    if(asteroids.length !== 0){
        for(let k = 0; k < asteroids.length; k++){
            if(circleCollison(ship.x, ship.y, 25, asteroids[k].x, asteroids[k].y, asteroids[k].collisionRadius)){
                ship.x = canvasWidth / 2;
                ship.y = canvasHeight / 2;
                ship.velX = 0;
                ship.velY = 0;
                lives -= 1;
                console.log(lives);
            }
        }
    }

    if(asteroids.length == 0 && score >= 500){
        for(let i = 0; i < 6; i++){
        asteroids.push(new Asteroid());
        }
    }else if(asteroids.length === 0 && score >= 1000){
        for(let i = 0; i < 8; i++){
            asteroids.push(new Asteroid());

        }
    }else if(asteroids.length === 0 && score >= 3000){
        for(let i = 0; i < 10; i++){
            asteroids.push(new Asteroid());
        }
    }
    if (asteroids.length !== 0 && bullets.length != 0){
        loop1:
                for(let l = 0; l < asteroids.length; l++){
                    for(let m = 0; m < bullets.length; m++){
                        if(circleCollison(bullets[m].x, bullets[m].y, 3, asteroids[l].x, asteroids[l].y, asteroids[l].collisionRadius)){
                            // Check if asteroid can be broken into smaller pieces
                            if(asteroids[l].level === 1){
                                asteroids.push(new Asteroid(asteroids[l].x - 5, asteroids[l].y - 5, 45, 2, 45));
                                asteroids.push(new Asteroid(asteroids[l].x + 5, asteroids[l].y + 5, 45, 2, 45));
                            } else if(asteroids[l].level === 2){
                                asteroids.push(new Asteroid(asteroids[l].x - 5, asteroids[l].y - 5, 45, 3, 45));
                                asteroids.push(new Asteroid(asteroids[l].x + 5, asteroids[l].y + 5, 45, 3, 45));
                            }
                            asteroids.splice(l,1);
                            bullets.splice(m,1);
                            score += 20;
         
                            // Used to break out of loops because splicing arrays
                            // you are looping through will break otherwise
                            break loop1;
                        }
                    }
                }
            }
         
    ship.Update();
    ship.make_base();
    

    if (Bullet.length !== 0) {
        for(let i = 0; i < bullets.length; i++){
            bullets[i].Update();
            bullets[i].Draw();
        }
    }
    if (asteroids.length !== 0) {
        for(let j = 0; j < asteroids.length; j++){
            asteroids[j].Update();
            // Pass j so we can track which asteroid points
            // to store
            asteroids[j].Draw(j);
        }
    }
    
    highScore = Math.max(score, highScore);
    localStorage.setItem(localStorageName, highScore);
    ctx.font = '21px Arial';
    ctx.fillText("HIGH SCORE : " + highScore.toString(), 20, 70);

    requestAnimationFrame(Render);
}

