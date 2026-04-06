var angle = 0;
var length = 0;
var slider;
var slider2;

function setup(){
    let canvas = createCanvas(600, 500);
    canvas.parent("tree-container");
    slider = createSlider(0, PI, PI/4, PI/32);
    slider.parent("tree-slider1");
    slider2 = createSlider(10, 150, 75, 5);
    slider2.parent("tree-slider2");
}

function draw(){
    background(51);    
    angle = slider.value();
    length = slider2.value();
    stroke(255);
    translate(300, height);
    line(0, 0, 0, -length);
    branch(length);
}

function branch(length) {
    line(0, 0, 0, -length);
    translate(0, -length);
    if (length > 4){
        push();
        rotate(angle);
        branch(length * .7);
        pop();

        push();
        rotate(-angle);
        branch(length * .7);
        pop();
        length = length * .7;
    }

}