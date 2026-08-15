const canvas = document.getElementById('drawing-board');
// const rect = canvas.getBoundingClientRect(); 

const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');
var slider;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
ctx.strokeStyle = '#000000';

let startX;
let startY;



function setup(){
  let canvas = createCanvas();
  canvas.parent("drawing-board");
  slider = createSlider(1, 50, 5, 2);
  slider.parent("lineWidth");
  slider2 = createSlider(10, 150, 75, 5);
  slider2.parent("tree-slider2");
}

const draw = (e) => {
  if(!isPainting){
    return;
  }
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
    // ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // const scaleX = canvas.width / rect.width;
  // const scaleY = canvas.height / rect.height;

  // const canvasX = mouseX * scaleX;
  // const canvasY = mouseY * scaleY;

  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();
}

toolbar.addEventListener('click', e => {
  if (e.target.id === 'clear'){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

toolbar.addEventListener('change', e => {
  if (e.target.id === 'stroke'){
    // stroke = e.target.value;
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

