$(document).ready(function() {

  // alert("Hello!");

  function PixelPainter(width, height) {

    // bind 'artboard' as a property
    this.artboard = $('<div id="artboard_div">');
    // bind 'controls' as a property
    this.controls = $('<div id="controls_div">');


    // create the 'controls' which includes the color swatch
    for(var i=0; i<12; i++) {
      var swatchRowCell = $('<div>', {
        class: "swatch_cell row"
      });

      for(var j=0; j<8; j++) {
        var swatchColCell = $('<div>', {
          class: "swatch_cell col"
        });
        swatchRowCell.append(swatchColCell);
      }
      this.controls.append(swatchRowCell);
    }

    var eraseButton = $('<button>', {
      id: "erase_button",
      type: "button",
      text: "erase"
    });

    var clearButton = $('<button>', {
      id: "clear_button",
      type: "button",
      text: "clear"
    });

    this.controls.append(eraseButton);
    this.controls.append(clearButton);


    // create grid with dimensions provided by arguments width and height
    for(var i=0; i<height; i++) {
      var gridRowCell = $('<div>', {
        class: "grid_cell row"
      });

      for(var j=0; j<width; j++) {
        var gridColCell = $('<div>', {
          class: "grid_cell col"
        });
        gridRowCell.append(gridColCell);
      }
      this.artboard.append(gridRowCell);
    }


    return pixelPainter;

  }  // end PixelPainter()

  var pixelPainter = new PixelPainter(5,5);
  $('#controls').append(pixelPainter.controls);
  $('#artboard').append(pixelPainter.artboard);



// click on swatch_cell and get color
  $('.swatch_cell.row').click(function() {
    alert("got swatch!");
  });

// click on grid_cell and place color
  $('.grid_cell.row').click(function() {
    alert("got grid!");
  });


})