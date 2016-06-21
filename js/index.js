'use strict';

(function(){

  // Define your SVG elements
  // You can read these from the DOM or from a web api
  var ChatBubbleSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">'+
  '<g>'+
  '<path d="M88.912,0L10.615,0.02C4.728,0.227,0,5.066,0,11.003v46.953c0,6.07,4.936,11.005,11.003,11.005h17.516v26.436  c0,1.156,0.662,2.21,1.703,2.714c0.417,0.2,0.864,0.299,1.31,0.299c0.668,0,1.332-0.221,1.874-0.653l33.233-28.795h22.273  c6.068,0,11.006-4.935,11.006-11.005V11.003C99.918,4.936,94.98,0,88.912,0z M94.179,57.956c0,2.905-2.362,5.266-5.267,5.266H65.577  c-0.023-0.006-0.958-0.013-1.534-0.017l-29.498,25.95V71.474v-2.299v-5.976c-2.223,0.007-3.608,0.015-3.647,0.022H11.003  c-2.902,0-5.264-2.36-5.264-5.266V11.003c0-2.902,2.362-5.264,5.264-5.264h77.909c2.904,0,5.267,2.362,5.267,5.264V57.956z">'+
  '</path>'+
  '<text text-anchor="middle" x="50" y="40" font-family="Verdana" font-size="12">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  var CircleSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">'+
  '<g>'+
  '<circle cx="50" cy="50" r="50" fill="#fff" />'+
  '<text text-anchor="middle" x="50" y="55" font-family="Verdana" font-size="12">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  function allowShapeTransformation(shape, isAllowed) {
    isAllowed = !isAllowed;

    shape.lockMovementX = isAllowed;
    shape.lockMovementY = isAllowed;
    shape.lockRotation = isAllowed;
    shape.lockScalingFlip = isAllowed;
    shape.lockScalingX = isAllowed;
    shape.lockScalingY = isAllowed;
    shape.lockSkewingX = isAllowed;
    shape.lockSkewingY = isAllowed;
    shape.lockUniScaling = isAllowed;
  }

  function editShapeText(shape){
    var _originalText = shape.paths[1].text;
    try
    {
      var _canvas = shape.canvas;
      shape.paths[1].text = "";

      // Stop the shape from moving about the canvas
      shape.selectable = false;


      var iText = new fabric.IText(_originalText,
       {
        'type':                     'text',
        'originX':                  'left',
        'originY':                  'top',
        'fill':                     'rgb(0,0,0)',
        'stroke':                   null,
        'strokeWidth':              1,
        'strokeDashArray':          null,
        'strokeLineCap':            'butt',
        'strokeLineJoin':           'miter',
        'strokeMiterLimit':         10,
        'scaleX':                   1,
        'scaleY':                   1,
        'angle':                    0,
        'flipX':                    false,
        'flipY':                    false,
        'opacity':                  1,
        'shadow':                   null,
        'visible':                  true,
        'clipTo':                   null,
        'fontSize':                 12 * shape.scaleX,
        'fontWeight':               'normal',
        'fontFamily':               'Times New Roman',
        'fontStyle':                '',
        'lineHeight':               1.3,
        'textDecoration':           '',
        'textAlign':                'left',
        'backgroundColor':          '',
        'textBackgroundColor':      'yellow',
        'fillRule':                 'nonzero',
        'globalCompositeOperation': 'source-over',
        'skewX':                    0,
        'skewY':                    0,
        'transformMatrix':          null,
        styles:                     { },

        // Try to position the overlay somewhere near the center of the shape
        'left':                     shape.left - (shape.currentWidth/3),
        'top':                      shape.top - (shape.currentHeight/4),
        'width':                    shape.currentWidth  * 0.75,
        'height':                   shape.currentHeight * 0.75
      });

      allowShapeTransformation(iText, false);

      iText.on("editing:exited", function(e) {
        console.log("Text has been changed to -" + this.text);
        shape.paths[1].text = this.text;
        _canvas.remove(this);
        shape.selectable = true;
        _canvas.setActiveObject(shape);
      });

      _canvas.add(iText).setActiveObject(iText);
      iText.enterEditing();
      _canvas.renderAll();

    }
    catch (ex) {
      console.log(ex);
      shape.paths[1].text = _originalText;
    }

  }

  // Note: We will be using the Canvas Extension class to create our canvas container
  var canvas = new fabric.CanvasEx('canvas_container');
  canvas.backgroundColor = 'rgb(150,150,150)';

  fabric.Object.prototype.originX = true;
  fabric.Object.prototype.originY = true;


  // Add SVG element to canvas
  // You can use a chat bubble by using the ChatBubbleSVG in stead of CircleSVG
  var path = fabric.loadSVGFromString(CircleSVG,function(objects, options) {

    var _shape = fabric.util.groupSVGElements(objects, options);

    _shape.scaleToHeight(canvas.height-10)
      .set({ left: canvas.width/2, top: canvas.height/2 })
      .setCoords();

    _shape.hasBorders = true;

    // Attach a double click event to the shape object
    _shape.on('object:dblclick', function (options) {
      editShapeText(this);
    });

    canvas.add(_shape).renderAll();

  });
  // End of shape addition

})();
