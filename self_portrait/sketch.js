function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(255, 204, 0);

    // shapes with xy coordinate + size

    fill('blue');
    stroke(0);
    strokeWeight(3);
     
    // face area
	ellipse(200, 180, 200); // face

	fill('0, 81, 82, 127');
	stroke(0, 81, 82);
	circle(220, 160, 30); // right eye
	circle(160, 160, 30, 10); // left eye

    // mouth
	stroke('Black');
	strokeWeight(2);
	fill('white');
	arc(200, 230, 80, 80, 0, PI + QUARTER_PI, CHORD);

    // right ear
    fill('blue');
	arc(290, 180, 40, 60, -HALF_PI, HALF_PI);
	arc(290, 180, 30, 50, -HALF_PI, HALF_PI);

    // shapes that are only xy points

    // Hat
    fill('black');
    arc(160, 80, 80, 80, PI * 0.75, PI * 0.1, OPEN);
    
    fill('white');
    quad(100 + 60, 31 + 60, 86 + 60, 20 + 60, 69 + 60, 63 + 60, 30 + 60, 76 + 60);

    // nose
    fill('DARKTURQUOISE');
    noStroke();
    triangle(200, 180, 180, 200, 220, 190);
}