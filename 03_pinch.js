document.addEventListener("DOMContentLoaded", startup);

const rectWidth = 30;
const rectHeight = 20;

let wX = 20;
let wY = 100;
let scale;

function clearCanvas(canvas,ctx){
  ctx.fillStyle = "#DDD";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function writeCanvas(ctx){
    ctx.fillStyle = "#000";
    ctx.fillRect(wX,wY,rectWidth * scale, rectHeight * scale);
}
function startup(){
  var canvas = document.getElementById('mainCanvas');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    scale = 1;
    clearCanvas(canvas,ctx);
    writeCanvas(ctx);
  }
}

function clickScale(){
  console.log('call click scale');
  var canvas = document.getElementById('mainCanvas');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    scale += 1;
    clearCanvas(canvas,ctx);
    writeCanvas(ctx);
  }
}
function clickMove(){
  wX += 10;
  var canvas = document.getElementById('mainCanvas');
  var ctx = canvas.getContext('2d');
  clearCanvas(canvas,ctx);
  writeCanvas(ctx);
}
