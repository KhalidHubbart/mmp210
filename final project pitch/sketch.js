var currentSlide = 0;
var numberOfSlides = 3;

// next slide button
var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;

// prev slide button
var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;

function setup() {
    createCanvas(960, 720);
}

function draw() {
    background(51);

    // text('slide ' + currentSlide, 100, 100);

    var title; // the title of the slide
    var description;
    

    // setup each slide
    if (currentSlide == 0) {
        title = "Aviod the circles";
        description = "A interactive game on the page that plays music that is pick for it and the user choose.";
    } 
    else if (currentSlide == 1) {
        title = "How to play";
        description = "The user would play as a square using the arrow keys to avoid getting hit from the circles. The user would also be able to change the music in the game.";
    } 
    else if (currentSlide == 2) {
        title = "What going to be in it";
        description = "The game would use p5 shapes like circles and squares. The backgorund would have music that plays.";

       circle(750, 500, 150);
       square(200, 450, 150); 
    }

    // display title
    textSize(80);
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    text(title, 20, 20);

    // display description
    textSize(40);
    text(description, 20, 200, width - 40);

    // slide button display
    // button background design
    fill('blue');
    stroke(255);
    strokeWeight(2);
    
    if (currentSlide < numberOfSlides - 1) {
        rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5); // next
    }

    if (currentSlide > 0) {
        rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5); // prev
    }
    
    
    // text design
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
    // detecting mouse collision with the next button
    if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
        mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
        if (currentSlide < numberOfSlides - 1) {
            currentSlide++;
        }
        
    }

    // detect mouse collision with prev button
    if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
        mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
        if (currentSlide > 0) {
            currentSlide--;
        }
    }
}