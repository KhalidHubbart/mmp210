var remImage;

function preload() {
    remImage = loadImage("rem.jpg");
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    background('lightblue');

    image(remImage, 0, 0, width, height);

    textSize(40);
    fill('white');
    stroke('black');
    strokeWeight(20);
    textStyle(ITALIC);
    textFont('Segoe UI');
    textAlign(CENTER, TOP);

    var welcome = 'Trying to remember';
    var end = map(frameCount, 0, 200, 0, welcome.length);
    text(welcome.substring(0, end), 250, 100);

    textSize(40);
    strokeWeight(20);
    textStyle(ITALIC);
    textAlign(CENTER, TOP);

    var welcome = 'what you just said';
    var end = map(frameCount, 0, 200, 0, welcome.length);
    text(welcome.substring(0, end), 250, 350);
}
