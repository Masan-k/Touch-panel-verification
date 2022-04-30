document.addEventListener("DOMContentLoaded", swipe2Startup);

function swipe2Startup(){
  let canvas = document.getElementById('swaip02Canvas');

  canvas.addEventListener("touchstart",evt => {
    evt.preventDefault(); 
    startX = evt.touches[0].clientX;
    startY = evt.touches[0].clientY;
  } , false);

  canvas.addEventListener("touchend", evt => {
    baseX = baseX + disX;
    baseY = baseY + disY;
  }, false);

  canvas.addEventListener("touchmove", evt => {
    evt.preventDefault();

    let endX = evt.changedTouches[0].clientX;
    let endY = evt.changedTouches[0].clientY;

    disX = endX - startX;
    disY = endY - startY;
    mapImage.src = "europe.svg";
    ctx.clearRect(0, 0, 640, 480);
    ctx.drawImage(mapImage, baseX + disX, baseY + disY);
  }, false);

  canvas.addEventListener("touchcancel", evt =>{console.log('cancel');}, false);

  let baseX = 0,baseY = 0;
  let startX, startY;
  let disX,disY;
  let ctx;
  let mapImage;

  ctx = canvas.getContext('2d');
  mapImage = new Image();
  
  mapImage.src = "europe.svg";
  mapImage.onload = function() {
    ctx.drawImage(mapImage, baseX, baseY);
  }
} 
