var angle = 0;
var slider;

function setup(){
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI/4, PI/16);
}

function draw(){
    background(51);    
    angle = slider.value();
    stroke(255);
    translate(200, height);
    line(0, 0, 0, -100);
    branch(100);
}

function branch(length) {
    line(0, 0, 0, -100);
    translate(0, -length);
    if (length > 4){
        push();
        rotate(angle);
        branch(length * .6);
        pop();
        push();
        rotate(-angle);
        branch(length * .6);
        pop();
        // length = length * .6;
    }

}