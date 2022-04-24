document.addEventListener("DOMContentLoaded", startup);

const rectWidth = 30;
const rectHeight = 20;

let wX = 20;
let wY = 100;

var beseDistance=0;
var baseImageWidth=0;
var baseImageHeight=0;
var timeoutId;

function clearCanvas(canvas,ctx){
  ctx.fillStyle = "#DDD";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function writeCanvas(ctx){
  ctx.fillStyle = "#000";
  ctx.fillRect(wX, wY, rectWidth * scale, rectHeight * scale);
}

function startup(){
  var canvas = document.getElementById('mainCanvas');
  var ctx = canvas.getContext('2d');

  canvas.ontouchmove = function(event){

    event.preventDefault() ;
    var touches = event.changedTouches ;

    if (touches.length > 1){
      var x1 = touches[0].pageX ;
      var y1 = touches[0].pageY ;
      var x2 = touches[1].pageX ;
      var y2 = touches[1].pageY ;

      //Math.pox:2点間の距離を2乗
      //Math.sqrt:平方根を返す
      var distance = Math.sqrt( Math.pow( x2-x1, 2 ) + Math.pow( y2-y1, 2 ) ) ;
      clearTimeout(timeoutId) ;

      if ( beseDistance && baseImageWidth && baseImageHeight ) {
        var scale = distance / beseDistance ;

        if ( scale && scale != Infinity ) {
         writeCanvas(ctx);
        }

        timeoutId = setTimeout( function () {
          beseDistance = 0 ;
          baseImageWidth = 0 ;
          baseImageHeight = 0 ;
        }, 100 ) ;

      } else {
        beseDistance = distance ;
        baseImageWidth = canvas.width ;
        baseImageHeight = canvas.height ;
      }
    }
  }
}
  canvas.ontouchmove =j

  scale = 1;
  clearCanvas(canvas,ctx);
  writeCanvas(ctx);
}

function clickScale(){
  console.log('call click scale');
  var canvas = document.getElementById('mainCanvas');
  var ctx = canvas.getContext('2d');

  scale += 1;
  clearCanvas(canvas,ctx);
  writeCanvas(ctx);
}

function clickMove(){
  wX += 10;
  var canvas = document.getElementById('mainCanvas');
  var ctx = canvas.getContext('2d');

  clearCanvas(canvas,ctx);
  writeCanvas(ctx);
}
