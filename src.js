$( '#rock' ).css( 'color', 'red' ); // changes color of element
//$( '#rock' ).remove(); // removes element
$( '#rock' ).html( 'Daniel rocks!' ); // changes text of element
$( '#rock' ).append( ' Olivia does too!' ); // apprends text to end of element
$( '#rock' ).prepend( 'This is cool! ' ); // prepends text to beginning of element

$( '#changeText' ).on( 'click', function() { // changing the text and adding an image upon event (button cliock)
  $( '#rock' ).html( 'Something else!' + '<img src="https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg" />'
  );
});

$( '#hideText' ).on( 'click', function() { //hide whatever element you want
  $( '#stink' ).hide();
});

$( '#makeGreen' ).on( 'click', function() {
  $( '#guys' ).toggleClass( 'green' );
});
