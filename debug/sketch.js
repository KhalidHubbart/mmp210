/*
    debug exercise
*/

var faceSize = "one hundred" * 3;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(50);
    fill("lightblue");
    ellipse(350, 300, 300); // face

    fill(0, 0, 0);
    ellipse(450, 300, 100); // right eye
    ellipse(350, 300, 100); // left eye
    ellipse(350, 400, 100, 50, 50); // mouth

    fill("white");
    noStroke();
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont("monospace");
    text("Nice work!", 65, 110);
}
