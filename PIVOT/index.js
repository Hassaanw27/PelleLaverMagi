$(".scroller").click(function() {
    $('.eksil').animate({
      right: '1px',
      top: '100px',
      opacity: '1',
      height: '800px',
      width: '290px'
    });
  });


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


  if ($("video").prop('muted', true)){
    $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10776.svg)");
  }

$("#mute").click( function (){
  if( $("video").prop('muted') ) {
    $("video").prop('muted', false);
    $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10430.svg)");
  } else {
    $("video").prop('muted', true);
    $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10776.svg)");
  }
});
