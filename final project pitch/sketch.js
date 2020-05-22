var currentSlide = 0;
var numberOfSlides = 3;

var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;

var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;

function setup() {
    createCanvas(960, 720);
}

function draw() {
    background(51);

    var title; 
    var description;
    
    if (currentSlide == 0) {
        title = "Aviod the circles";
        description = "A interactive game on the page that plays music that is pick for it and the user choose.";
    } 
    else if (currentSlide == 1) {
        title = "How to play";
        description = "The user would play as a blue cicle using the arrow keys to avoid getting hit from the red circles. The user would also be able to change the music in the game.";
    } 
    else if (currentSlide == 2) {
        title = "What going to be in it";
        description = "The game would use p5 circles. The backgorund would have music that plays.";

       circle(750, 500, 150);
       circle(200, 450, 150); 
    }

    textSize(80);
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    text(title, 20, 20);

    textSize(40);
    text(description, 20, 200, width - 40);

    fill('blue');
    stroke(255);
    strokeWeight(2);
    
    if (currentSlide < numberOfSlides - 1) {
        rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5); // next
    }

    if (currentSlide > 0) {
        rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5); // prev
    }
    
    fill(255);
    textSize(25);
    noStroke();
    textAlign(CENTER, CENTER);

    if (currentSlide < numberOfSlides - 1) {
        text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
    }
    
    if (currentSlide > 0) {
        text("Previous", prevButtonX, prevButtonY, prevButtonW, prevButtonH);
    }
    
}

function mousePressed() {
    if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
        mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
        if (currentSlide < numberOfSlides - 1) {
            currentSlide++;
        }
        
    }

     if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
        mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
        if (currentSlide > 0) {
            currentSlide--;
        }
    }
}