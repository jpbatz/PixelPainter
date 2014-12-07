$(document).ready(function() {

  // alert("Hello!");

  // create a cell, later - make it user configurable

  $('#controls').attr("style", "background-color: yellow");
  $('#artboard').attr("style", "background-color: white");

  // for(var i=0; i<2; i++) {
  //   var newCell = $('<div>', {
  //     class: "cell", 
  //     css: {
  //       "border": "1px solid black",
  //       "height": "20px", 
  //       "width": "20px"
  //     }
  //   });
  //   this.controls.append(newCell);
  // }

  // $('#controls').append(newCell);
  // $('#artboard').append(newCell);

  // project structure
  function PixelPainter(width, height) {

    // bind 'artboard' as a property
    this.artboard = $('<div id="artboard_div">');
    // bind 'controls' as a property
    this.controls = $('<div id="controls_div">');


// *** TESTING  CONCEPT OF SINGLE CELL ***

// need to make a constructor for cell

    var cell1 = $('<div>', {
      class: "swatch_cell", 
      css: {
        "border": "1px solid black",
        "background-color": "red",
        "height": "20px", 
        "width": "20px"
      }
    });

    this.controls.append(cell1);

    var cell2 = $('<div>', {
      class: "grid_cell", 
      css: {
        "border": "1px solid black",
        "background-color": "white",
        "height": "20px", 
        "width": "20px"
      }
    });

    this.artboard.append(cell2);

//




// ***** END TESTING AREA *****

    // create the 'controls' which includes the color swatch
    //    calls cell

    // this.controls.append(newCell);
    // this.artboard.append(newCell);


    // create a grid (the 'artboard'), uses the width and height arguments
    //    calls cell



    return pixelPainter;

  }  // end PixelPainter()

  var pixelPainter = new PixelPainter(1,1);
  $('#controls').append(pixelPainter.controls);
  $('#artboard').append(pixelPainter.artboard);

})