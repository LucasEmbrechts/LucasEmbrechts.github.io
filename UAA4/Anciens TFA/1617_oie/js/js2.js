$( function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 2,
      max: 4,
      value: 2,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  } );