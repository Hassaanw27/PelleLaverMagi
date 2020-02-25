$(document).ready(function(){
    $("button").click(function(){
      $("iframe").animate({
        right: '250px',
        opacity: '1',
        height: '800px',
        width: '300px'
      });
    });
  });



//var fixmeTop = $('.scroller').offset().top;       // get initial position of the element

//$(window).scroll(function() {                  // assign scroll event listener

    //var currentScroll = $(window).scrollTop(); // get current position

    //if (currentScroll >= fixmeTop) {           // apply position: fixed if you
      //  $('.scroller').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            right: '0',

        });
    //} else {                                   // apply position: static
        //$('.scroller').css({                      // if you scroll above it
            position: 'static'
        });
    }

});
