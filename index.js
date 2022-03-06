//window.onload = function () {
document.addEventListener("DOMContentLoaded", startup);
let ctx;
let mapImage;
let baseX = 0;
let baseY = 0;
function startup(){
  console.log('call DOM contentloaded');

  var el = document.getElementById("mainCanvas");
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);

  var canvas = document.getElementById('mainCanvas');
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  ctx = canvas.getContext('2d');
  mapImage = new Image();
  mapImage.src = "europe.svg";

  mapImage.onload = function() {
    ctx.drawImage(mapImage, baseX, baseY);
  }
} 

let startX, startY;
function clearCanvas(){
  ctx.clearRect(0, 0, 640, 480);
}
function handleStart(evt){
  console.log('call start');
  evt.preventDefault(); 
  startX = evt.touches[0].clientX;
  startY = evt.touches[0].clientY;
}
function handleMove(evt){
  evt.preventDefault(); 

  let endX = evt.changedTouches[0].clientX;
  let endY = evt.changedTouches[0].clientY;
  let disX = endX - startX;
  let disY = endY - startY;

  console.log('x:y ... ' + disX + ':' + disY);

  baseX = disX;
  baseY = disY;

  ctx.clearRect(0, 0, 640, 480);
  ctx.drawImage(mapImage, baseX, baseY);
}
function handleEnd(evt){
}
function handleCancel(){
}
