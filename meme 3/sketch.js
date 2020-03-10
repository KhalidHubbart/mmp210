var remImage;
var jamesImage;
var smithImage;
var jackieImage;
var whatImage;

var remSize;
var remSizeSpeed = 5;

function preload() {
    remImage = loadImage("rem.jpg");
    jamesImage = loadImage("james.jpg");
    smithImage = loadImage("smith.jpg");
    jackieImage = loadImage("jackie.jpg");
    whatImage = loadImage("what.jpg");
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.drawingContext.miterLimit = 2;

    x = width - 150;
    y = height - 100;

    remSize = width;
}

function draw() {
    background("lightblue");

    if(mouseIsPressed){
        if (mouseX > width/2 && mouseY > height/2) {
            image(remImage, width/2, height/2, width/2, height/2);
        } else if (mouseX < width/2 && mouseY > height/2) {
            image(jamesImage,0, height/2, width/2, height/2);
        } else if (mouseX > width/2 && mouseY < height/2) {
            image(smithImage, width/2, 0, width, height/2);
        } else {
            image(jackieImage,0, 0, width/2, height/2);
        }

        image(remImage, width/2, height/2, remSize, remSize);

        remSize += remSizeSpeed;
        if (remSize > width * 2 || remSize < width - remSizeSpeed) {
            remSizeSpeed *= -1;
        }
    }

    textSize(40);
    fill('white');
    stroke('black');
    strokeWeight(20);
    textStyle(ITALIC);
    textFont('Segoe UI');
    textAlign(CENTER, TOP);

    var welcome = 'When Nobody';
    text(welcome.substring(0, end), 250, 0);

    textSize(40);
    strokeWeight(20);
    textStyle(ITALIC);
    textAlign(CENTER, TOP);

    var welcome = 'Knows The Answer';
    var end = map(frameCount, 0, 200, 0, welcome.length);
    text(welcome.substring(0, end), 250, 400);
}
