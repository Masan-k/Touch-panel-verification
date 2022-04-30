document.addEventListener("DOMContentLoaded", startup);
//----------------------------------------------
//スワイプによる画像移動
//----------------------------------------------
let ctx1;
let mapImage;
let baseX = 0;
let baseY = 0;
let startX, startY;
let disX;
let disY;

function startup(){
  let el = document.getElementById("mainCanvas");

  el.addEventListener("touchstart",evt => {
    console.log('call start');
    evt.preventDefault(); 
    startX = evt.touches[0].clientX;
    startY = evt.touches[0].clientY;
  } , false);

  el.addEventListener("touchend", evt => {
    baseX = baseX + disX;
    baseY = baseY + disY;
  }, false);

  el.addEventListener("touchmove", evt => { 
    let endX = evt.changedTouches[0].clientX;
    let endY = evt.changedTouches[0].clientY;
    evt.preventDefault(); 
    disX = endX - startX;
    disY = endY - startY;

    ctx1.clearRect(0, 0, 640, 480);
    ctx1.drawImage(mapImage, baseX + disX, baseY + disY);
  }, false);
  el.addEventListener("touchcancel", evt =>{console.log('cancel');}, false);

  var canvas1 = document.getElementById('mainCanvas');
  if ( ! canvas1 || ! canvas1.getContext ) {
    return false;
  }

  ctx1 = canvas1.getContext('2d');
  mapImage = new Image();
  mapImage.src = "europe.svg";

  mapImage.onload = function() {
    ctx1.drawImage(mapImage, baseX, baseY);
  }
} 
