function setup() {
	createCanvas(500, 500);
    noStroke();
    

    createP("Cell size");
    wSlider = createSlider(1, 100, 40);
    wSlider.input(pattern);

    createP("Height");
    heightSlider = createSlider(0, height, 300);
    heightSlider.input(pattern);

    var patternButton = createButton("Pattern");
    patternButton.mousePressed(pattern);

   var saveButton = createButton("Save");
   saveButton.mousePressed(saveImage);

    pattern();
}

function saveImage() {
    save("pattern.png");
}

function pattern() {
    background(51);

    var w = wSlider.value();
    var h = w;

    for (let x = 0; x <= width; x += w) {
        for (let y = 0; y <= height; y += h) {

            let r = random(0, 150);
            let g = random(50, 100);
            let b = random(100, 255);

            if (y > heightSlider.value()) {
                r += random(150, 200);
                g += random(150, 250);
            }

            fill(r, g, b);

            circle(x + random(10), y + random(10), w + random(10), h/2 + random(100));
        }
    }
}