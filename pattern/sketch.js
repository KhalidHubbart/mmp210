
// loop repeats
for (let i = 100; i >= 1; i--) {
    console.log('i',i);
}

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background('lightblue');

    for (let x= 0; x <= width; x += 100) {
        let r,g,b;
        if (random(1)  > 0.5){
           // Blue
            r = random(150);
            g = random(100, 200);
            b = random(200, 250);
        } else {
            //Yellow
            r = random(150, 200);
            g = random(200, 250);
            b = random(200);
        }

        stroke(r, g, b);
        strokeWeight(4);
        line(x, 0, x + 100, height);
        line(x + 100, 0, x, height);

        let s = random(40, 120);
        let y = random(s/2, height - s/2);
    }

    
}