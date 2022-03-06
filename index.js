//window.onload = function () {
document.addEventListener("DOMContentLoaded", startup);
let ctx1;
let mapImage;
let baseX = 0;
let baseY = 0;
let startX, startY;
let disX
let disY
//------
//pinch
//------

//let pinchImage;
//let pinchCtx;

var divElement;
var imgElement;

// base
var beseDistance = 0 ;
var baseImageWidth = 0 ;
var baseImageHeight = 0 ;

// timeout id
var timeoutId ;

// touchmove

function startup(){
  //------
  //pinch 
  //------
  divElement = document.getElementById("pinchDiv") ;
  imgElement = document.getElementById("pinchImage") ;
  divElement.ontouchmove = function ( event ) {
    console.log('dev ontouchmove');

    event.preventDefault() ;
    var touches = event.changedTouches ;
    if ( touches.length > 1 ) {
      var x1 = touches[0].pageX ;
      var y1 = touches[0].pageY ;

      var x2 = touches[1].pageX ;
      var y2 = touches[1].pageY ;

      var distance = Math.sqrt( Math.pow( x2-x1, 2 ) + Math.pow( y2-y1, 2 ) ) ;

      clearTimeout( timeoutId ) ;

      if ( beseDistance && baseImageWidth && baseImageHeight ) {
              var scale = distance / beseDistance ;

              if ( scale && scale != Infinity ) {
                      imgElement.width = baseImageWidth * scale ;
                      imgElement.height = baseImageHeight * scale ;
              }

              timeoutId = setTimeout( function () {
                      beseDistance = 0 ;
                      baseImageWidth = 0 ;
                      baseImageHeight = 0 ;
              }, 100 ) ;

      } else {
              beseDistance = distance ;
              baseImageWidth = imgElement.width ;
              baseImageHeight = imgElement.height ;

      }
    }
  }  /*
  let pinchEl = document.getElementById("pinchCanvas");
  pinchCtx = pinchEl.getContext('2d');
  pinchMapImage = new Image();
  pinchMapImage.src = "europe.svg";

  pinchMapImage.onload = function() {
    pinchCtx.drawImage(pinchMapImage, baseX, baseY);
  }
  */
 //--------
 //スワイプ
 //--------

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


