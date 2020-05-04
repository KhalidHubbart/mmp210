var music;
var sonicImage;
var eggImage;
var dashSound, hitSound, ringSound;
var ringImage;
var bugImage;
var ballImage;


function preload() {
    music = loadSound("file select.mp3");
    sonicImage = loadImage("sonic.jpg");
    eggImage = loadImage("egg.jpg");
    ringImage = loadImage("ring.jpg");
    bugImage = loadImage("bug.jpg");
    ballImage = loadImage("ball.jpg");
    dashSound = loadSound("dash.wav");
    hitSound = loadSound("hit.wav");
    ringSound = loadSound("ring.wav");
}

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background('blue')
    if (music.isPlaying()) { 
        image(sonicImage, 250, 0 , 400 ,400);
    } else {
        background('red');
        image(eggImage, 250, 0 , 400, 400);
    }   
    if(ringSound.isPlaying()) {
        image(ringImage, 0, 0 , 100, 100);
    }
    if(dashSound.isPlaying()) {
        image(ballImage, 0, 100 , 100, 100);
    }
    if(hitSound.isPlaying()) {
        image(bugImage, 0, 200 , 100, 100);
    }
}

function keyPressed() {
    //music
    if (keyCode == 32) {
        if (music.isPlaying()) {
            music.pause();
        } else {
            music.play();
        }
    } 

    //sound effects
    if (keyCode == 82) {  //r
        ringSound.play();
    }

    if (keyCode == 68){  //d
        dashSound.play();
    }

    if (keyCode == 72){ //h
        hitSound.play();
    }
}