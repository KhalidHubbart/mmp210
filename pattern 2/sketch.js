function setup() {
	createCanvas(500, 500);
}

function draw() {
    background(51);

    var w = 100;
    var h = w;

    for (let x = 0; x <= width; x += w){
        for (let y = 0; y <= height; y += h){

    fill('blue');
    stroke(0);
    strokeWeight(3);
    ellipse(x + w/2, y + h/2, w); 

    fill('yellow');
    stroke(0);
    circle(x+ w/2 + 2, y+ h/2 + 6, w/3); 

    fill('blue');
    stroke(0);
    circle(x+ w/2 + 2, y+ h/2 +6 , w/ 10); 
        }
    }
}