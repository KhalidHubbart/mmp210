var remImage;
var jamesImage;
var smithImage;
var jackieImage;
var whatImage;


function preload() {
    remImage = loadImage("rem.jpg");
    jamesImage = loadImage("james.jpg");
    smithImage = loadImage("smith.jpg");
    jackieImage = loadImage("jackie.jpg");
    whatImage = loadImage("what.jpg");
}
function setup() {
    var canvas = createCanvas(500, 500);
}

function draw() {
    background("lightblue");

    textSize(40);
    fill('white');
    stroke('black');
    strokeWeight(20);
    textStyle(ITALIC);
    textFont('Segoe UI');
    textAlign(CENTER, TOP);

    var welcome = 'That one kid';
    text(welcome.substring(0, end), 250, 0);

    textSize(40);
    strokeWeight(20);
    textStyle(ITALIC);
    textAlign(CENTER, TOP);

    var welcome = 'with no Answer';
    var end = map(frameCount, 0, 200, 0, welcome.length);
    text(welcome.substring(0, end), 250, 400);

    image(remImage,0, 400, 100, 100);
    image(jamesImage, 0, 0, 100, 100);
    image(jackieImage,400, 0, 100, 100);
    image(whatImage,400, 400, 100, 100);

    translate(width/2, height/2);

    var r = frameCount * PI /150;
    rotate(r);

    
    image(smithImage, 0, 0, 100, 100);


    }

