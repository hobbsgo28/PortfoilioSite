

function setup(){

    let canvas = createCanvas(600, 500);
    canvas.parent("draw-box");
    // const canvas = document.getElementById('draw-box');
    const ctx = canvas.getContext('2d');
}

function draw(){
    background(51);    
    stroke(255);
    drawbox();
}

function drawbox(){
    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    // Set drawing style
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        [lastX, lastY] = getMousePos(canvas, e);
    });

    // Draw while moving
    canvas.addEventListener('mousemove', (e) => {
        if (!drawing) return;
        const [x, y] = getMousePos(canvas, e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        [lastX, lastY] = [x, y];
    });

    // Stop drawing
    canvas.addEventListener('mouseup', () => drawing = false);
    canvas.addEventListener('mouseleave', () => drawing = false);

    // Get mouse position relative to canvas
    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return [
            evt.clientX - rect.left,
            evt.clientY - rect.top
        ];
    }
}
