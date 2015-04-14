$(document).ready(function() {

  function PixelPainter(width, height) {

    // bind 'artboard' as a property
    this.artboard = $('<div id="artboard_div">');
    // bind 'controls' as a property
    this.controls = $('<div id="controls_div">');

    // create the 'controls' which includes the color swatch
    for(var i=0; i<16; i++) {
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

    // create grid with dimensions provided by 
    // the arguments width and height
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

  var pixelPainter = new PixelPainter(12,12);
  $('#controls').append(pixelPainter.controls);
  $('#artboard').append(pixelPainter.artboard);

  // fill color swatch
  $('.swatch_cell.col').each(function(item) {
    var red_color = Math.floor(Math.random()*255);
    var green_color = Math.floor(Math.random()*255);
    var blue_color = Math.floor(Math.random()*255);
    var rgb_color = "rgb(" + red_color + "," + green_color + "," + blue_color+ ")";
    console.log(rgb_color);
    $(this).css({
      "background-color": rgb_color
    });
  });


  // click on swatch_cell and get color
  var bgColor = "";
  $('.swatch_cell.col').click(function() {
    // alert("got swatch!");
    // console.log(this);
    bgColor = $(this).css("background-color");
    console.log(bgColor);
  });

  // click on grid_cell and place color
  $('.grid_cell.col').click(function() {
    // alert("got grid!");
    console.log(this);
    console.log(bgColor);
    $(this).css({
      "background-color": bgColor
    });
  });

  // click on erase button and select cell to clear
  $("#erase_button").on("click", function() {
    $('.grid_cell.col').click(function() {
      // alert("erase grid!");
      console.log(this);
      console.log(bgColor);
      $(this).css({
        "background-color": "#FFFFFF"
      });
    });
  });

  // click on clear button to clear grid
  $("#clear_button").on("click", function() {
    $('.grid_cell.row').each(function(child) {
      $('.grid_cell.col').each(function() {
        $('.grid_cell.col').css({
        "background-color": "#FFFFFF"
        });
      });
    });
  });

});