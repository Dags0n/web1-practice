const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const buttonClear = document.getElementById('clean-canvas');

let painting = false;

canvas.addEventListener('mousedown', (e) => {
  painting = true;
  draw(e); 
});

canvas.addEventListener('mouseup', () => {
  painting = false;
  ctx.beginPath();
});

canvas.addEventListener('mousemove', (e) => {
  if (!painting) return;

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

buttonClear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});