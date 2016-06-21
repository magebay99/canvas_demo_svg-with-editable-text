'use strict';

(function(){

  // Define your SVG elements
  // You can read these from the DOM or from a web api

  var SquareSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">'+
  '<g>'+
  '<rect width="100" height="100" fill="#fff" />'+
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

  // Sharp edged solid rectangular chat bubble with bottom right pointer
  var ChatBubbleSVG_1 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path fill="#fff" stroke="#000" stroke-width="0.5"  d="M 24,1 0,1 0,18 14.101695,18 18.305085,22.399136 18.338983,18 24,18 z"/>'+
  '<text text-anchor="middle" x="12" y="10" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // Sharp edged solid rectangular chat bubble with bottom center pointer
  // Based on http://iconmonstr.com/speech-bubble-21/
  var ChatBubbleSVG_2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path fill="#fff" stroke="#000" stroke-width="0.5"  d="M24 1h-24v17h8l4 5.111 4-5.111h8z"/>'+
  '<text text-anchor="middle" x="12" y="10" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // Sharp edged solid rectangular chat bubble with top center pointer
  // Based on http://iconmonstr.com/speech-bubble-21/
  var ChatBubbleSVG_2f = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path fill="#fff" stroke="#000" stroke-width="0.5"  d="m 0,23.111 24,0 0,-17 -8,0 L 12,1 8,6.111 l -8,0 z"/>'+
  '<text text-anchor="middle" x="12" y="15" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // Sharp edged solid rectangular chat bubble with bottom left pointer
  // Based on http://iconmonstr.com/speech-bubble-15/
  var ChatBubbleSVG_3 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path fill="#fff" stroke="#000" stroke-width="0.5"  d="M24 1h-24v16.981h4v5.019l7-5.019h13z"/>'+
  '<text text-anchor="middle" x="12" y="10" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // Sharp edged solid rectangular chat bubble with top left pointer
  // Based on http://iconmonstr.com/speech-bubble-15/
  var ChatBubbleSVG_3f = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path fill="#fff" stroke="#000" stroke-width="0.5"  d="M 24,23 H 0 V 6.019 H 4 V 1 l 7,5.019 h 13 z"/>'+
  '<text text-anchor="middle" x="12" y="15" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // Sharp edged solid rectangular chat bubble with bottom right pointer
  // Based on http://iconmonstr.com/speech-bubble-15/
  var ChatBubbleSVG_4 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path fill="#fff" stroke="#000" stroke-width="0.5"  d="M 0,1 H 24 V 17.981 H 20 V 23 L 13,17.981 H 0 z"/>'+
  '<text text-anchor="middle" x="12" y="10" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // Sharp edged solid rectangular chat bubble with top right pointer
  // Based on http://iconmonstr.com/speech-bubble-15/
  var ChatBubbleSVG_4f = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path fill="#fff" stroke="#000" stroke-width="0.5"  d="M 0,23 H 24 V 6.019 H 20 V 1 L 13,6.019 H 0 z"/>'+
  '<text text-anchor="middle" x="12" y="10" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';



  // Rounded chat bubble with bottom left pointer
  // Based on http://iconmonstr.com/speech-bubble-1/
  var ChatBubbleSVG_5 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path  fill="#fff" stroke="#000" stroke-width="0.5"  d="M.054 23c.971-1.912 2.048-4.538 1.993-6.368-1.308-1.562-2.047-3.575-2.047-5.625 0-5.781 5.662-10.007 12-10.007 6.299 0 12 4.195 12 10.007 0 6.052-6.732 11.705-15.968 9.458-1.678 1.027-5.377 2.065-7.978 2.535z"/>'+
  '<text text-anchor="middle" x="12" y="12" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // Rounded chat bubble with bottom left pointer
  // Based on http://iconmonstr.com/speech-bubble-1/
  var ChatBubbleSVG_6 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path  fill="#fff" stroke="#000" stroke-width="0.5"  d="M 0.054,1 C 1.025,2.912 2.102,5.538 2.047,7.368 0.739,8.93 0,10.943 0,12.993 0,18.774 5.662,23 12,23 18.299,23 24,18.805 24,12.993 24,6.941 17.268,1.288 8.032,3.535 6.354,2.508 2.655,1.47 0.054,1 z"/>'+
  '<text text-anchor="middle" x="12" y="13" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // Rounded chat bubble with bottom right pointer
  // Based on http://iconmonstr.com/speech-bubble-1/
  var ChatBubbleSVG_7 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path  fill="#fff" stroke="#000" stroke-width="0.5"  d="M 23.946,23 C 22.975,21.088 21.898,18.462 21.953,16.632 23.261,15.07 24,13.057 24,11.007 24,5.226 18.338,1 12,1 5.701,1 0,5.195 0,11.007 c 0,6.052 6.732,11.705 15.968,9.458 1.678,1.027 5.377,2.065 7.978,2.535 z"/>'+
  '<text text-anchor="middle" x="12" y="12" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // Rounded chat bubble with top right pointer
  // Based on http://iconmonstr.com/speech-bubble-1/
  var ChatBubbleSVG_8 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">'+
  '<g>'+
  '<path  fill="#fff" stroke="#000" stroke-width="0.5"  d="M 23.946,1 C 22.975,2.912 21.898,5.538 21.953,7.368 23.261,8.93 24,10.943 24,12.993 24,18.774 18.338,23 12,23 5.701,23 0,18.805 0,12.993 0,6.941 6.732,1.288 15.968,3.535 17.646,2.508 21.345,1.47 23.946,1 z"/>'+
  '<text text-anchor="middle" x="12" y="13" font-family="Verdana" font-size="3">'+
  '  Hello BBC  '+
  '</text>'+
  '</g>'+
  '</svg>';

  // ----------------- End of shape definitions ------------------------------ //
  

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
  // Use any one of the SVG elements: SquareSVG, CircleSVG, ChatBubbleSVG, ChatBubble2SVG, ChatBubble3SVG
  var path = fabric.loadSVGFromString( ChatBubbleSVG_4,function(objects, options) {

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
