document.addEventListener("DOMContentLoaded", pinch03startup);

function pinch03startup(){
  console.log('call pinch03startup!!!!');
  //----------------------------------------------
  //ピンチアウト・ピンチインによる画像拡大・縮小
  //----------------------------------------------
  var divElement;
  var imgElement;

  var beseDistance = 0 ;
  var baseImageWidth = 0 ;
  var baseImageHeight = 0 ;
  var timeoutId ;

  divElement = document.getElementById("pinchDiv") ;
  imgElement = document.getElementById("pinchImage") ;

  imgElement.ontouchmove = function ( event ) {
    event.preventDefault() ;
    var touches = event.changedTouches ;

    if ( touches.length > 1 ) {
      var x1 = touches[0].pageX ;
      var y1 = touches[0].pageY ;
      var x2 = touches[1].pageX ;
      var y2 = touches[1].pageY ;

      //Math.pox:2点間の距離を2乗
      //Math.sqrt:平方根を返す
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
  }
} 
