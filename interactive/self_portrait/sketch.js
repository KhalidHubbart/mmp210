// position variables
var x;
var y = 180;

// size variables
var s = 200;

function setup() {
	createCanvas(800, 360);
    x = width/2;
}

function draw() {
	background(255, 204, 0);

    // shapes with xy coordinate + size

    fill('blue');
    stroke(0);
    strokeWeight(3);
     
    // face area
    x = mouseX;
    y = mouseY;
	ellipse(200, 180, 200); // face

	fill('0, 81, 82, 127');
	stroke(0, 81, 82);
	circle(x + 220, y + 160, 30); // right eye
	circle(x + 160, y + 160, 30, 10); // left eye

    // mouth
	stroke('Black');
	strokeWeight(2);
	fill('white');
	arc(x + 200, y +  230, 80, 80, 0, PI + QUARTER_PI, CHORD);

    // right ear
    fill('blue');
	arc(x + 290, y + 180, 40, 60, -HALF_PI, HALF_PI);
	arc(x + 290, y + 180, 30, 50, -HALF_PI, HALF_PI);

    // shapes that are only xy points

    // Hat
    fill('black');
    arc(x + 160, y + 80, 80, 80, PI * 0.75, PI * 0.1, OPEN);

    // nose
    fill('DARKTURQUOISE');
    noStroke();
    triangle(x + 200, x + 180, y + 180, x + 200, x + 220, y + 190);
}