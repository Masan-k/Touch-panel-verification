document.addEventListener("DOMContentLoaded", pinch03Startup);

function pinch03Startup(){

  document.addEventListener("click",resetButton());

  let rectWidth = 30;
  let rectHeight = 20;

  let wX = 20;
  let wY = 100;

  var beseDistance=0;
  var baseImageWidth=0;
  var baseImageHeight=0;
  var timeoutId;

  let baseX = wX;
  let baseY = wY;
  let startX, startY;
  let disX
  let disY
  let isPinch;

  let canvas = document.getElementById('pinch03Canvas');
  let ctx = canvas.getContext('2d');

  clearCanvas(canvas, ctx);
  writeCanvas(ctx,1)

  isPinch = false;
  //------
  //pinch
  //------
  canvas.ontouchmove = function(event){

    event.preventDefault();
    var touches = event.changedTouches;

    if(touches.length > 1){
      isPinch = true;
      var x1 = touches[0].pageX ;
      var y1 = touches[0].pageY ;
      var x2 = touches[1].pageX ;
      var y2 = touches[1].pageY ;

      //Math.pox:2点間の距離を2乗
      //Math.sqrt:平方根を返す
      var distance = Math.sqrt( Math.pow( x2-x1, 2 ) + Math.pow( y2-y1, 2 ) ) ;
      clearTimeout(timeoutId) ;

      if ( beseDistance && baseImageWidth && baseImageHeight ) {
        let scale = distance / beseDistance;

        if ( scale && scale != Infinity ) {
          clearCanvas(canvas, ctx);

          rectWidth = baseImageWidth * scale;
          rectHeight = baseImageHeight * scale;

          ctx.fillStyle = "#000";
          ctx.fillRect(wX, wY, rectWidth, rectHeight);
        }

        timeoutId = setTimeout( function () {
          beseDistance = 0 ;
          baseImageWidth = 0 ;
          baseImageHeight = 0 ;
        }, 100) ;

      } else {
        beseDistance = distance ;
        baseImageWidth = rectWidth ;
        baseImageHeight = rectHeight ;
      }
    }
  }

  //------
  //swipe
  //------
  canvas.addEventListener("touchstart",evt => {
    evt.preventDefault(); 
    if(isPinch){return;}
    console.log('[touchstart]evt.changedTouches -> ' + evt.changedTouches.length);
    startX = evt.touches[0].clientX;
    startY = evt.touches[0].clientY;
  },false);

  canvas.addEventListener("touchend", evt => {
    if(isPinch){
      isPinch = false;
    }else{
      console.log('[touchend]evt.changedTouches -> ' + evt.changedTouches.length);
      baseX = baseX + disX;
      baseY = baseY + disY;
    }
    }, false);

  canvas.addEventListener("touchmove", evt => { 
    if(isPinch){return;}
    console.log('[touchmove]evt.changedTouches -> ' + evt.changedTouches.length);
    evt.preventDefault(); 
    let endX = evt.changedTouches[0].clientX;
    let endY = evt.changedTouches[0].clientY;
    disX = endX - startX;
    disY = endY - startY;

    clearCanvas(canvas, ctx);
    wX = baseX + disX;
    wY = baseY + disY;
    ctx.fillStyle = "#000";
    ctx.fillRect(wX, wY, rectWidth, rectHeight);

  }, false);

 function clearCanvas(canvas,ctx){
    ctx.fillStyle = "#DDD";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function writeCanvas(ctx,scale){
    ctx.fillStyle = "#000";
    ctx.fillRect(wX, wY, rectWidth * scale, rectHeight * scale);
  } canvas.addEventListener("touchcancel", evt =>{console.log('cancel');}, false);

 function resetButton(){
    let canvas = document.getElementById('mainCanvas');
    let ctx = canvas.getContext('2d');

    wX = 20;
    wY = 100;
    baseX = wX;
    baseY = wY;

    clearCanvas(canvas, ctx);
    ctx.fillStyle = "#000";
    ctx.fillRect(wX, wY, rectWidth, rectHeight);
  }

}
 
