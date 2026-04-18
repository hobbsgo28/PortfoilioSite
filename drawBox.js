const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight ; // - canvasOffsetY;

let isPainting = false;
let lineWidth = 5; 


// function getMousePos(evt) {
//     const rect = canvas.getBoundingClientRect(); // canvas position & size
//     const scaleX = canvas.width / rect.width;    // handle horizontal scaling
//     const scaleY = canvas.height / rect.height;  // handle vertical scaling

//     return {
//         x: (evt.clientX - rect.left) * scaleX,
//         y: (evt.clientY - rect.top) * scaleY
//     };
// }
// const pos = getMousePos(e);

let startX;
let startY; 



const draw = (e) => {
    if(!isPainting){
        return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();

}


toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear'){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }
});

toolbar.addEventListener('change', e => {
    if (e.target.id === 'stroke'){
        ctx.strokeStyle = e.target.value;
    }

    if (e.target.id === 'lineWidth'){
        lineWidth = e.target.value;
    }
});

canvas.addEventListener('mousedown', e => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);



// function setup(){

//     let canvas = createCanvas(600, 500);
//     canvas.parent("draw-box");
//     // const canvas = document.getElementById('draw-box');
//     const ctx = canvas.getContext('2d');
// }

// function draw(){
//     background(51);    
//     stroke(255);
//     drawbox();
// }

// function drawbox(){
//     let drawing = false;
//     let lastX = 0;
//     let lastY = 0;

//     // Set drawing style
//     ctx.strokeStyle = '#000';
//     ctx.lineWidth = 2;
//     ctx.lineJoin = 'round';
//     ctx.lineCap = 'round';

//     canvas.addEventListener('mousedown', (e) => {
//         drawing = true;
//         [lastX, lastY] = getMousePos(canvas, e);
//     });

//     // Draw while moving
//     canvas.addEventListener('mousemove', (e) => {
//         if (!drawing) return;
//         const [x, y] = getMousePos(canvas, e);
//         ctx.beginPath();
//         ctx.moveTo(lastX, lastY);
//         ctx.lineTo(x, y);
//         ctx.stroke();
//         [lastX, lastY] = [x, y];
//     });

//     // Stop drawing
//     canvas.addEventListener('mouseup', () => drawing = false);
//     canvas.addEventListener('mouseleave', () => drawing = false);

//     // Get mouse position relative to canvas
//     function getMousePos(canvas, evt) {
//         const rect = canvas.getBoundingClientRect();
//         return [
//             evt.clientX - rect.left,
//             evt.clientY - rect.top
//         ];
//     }
// }
