$(document).ready(function() {
  $("button").click(function() {
    $("iframe").animate({
      right: '250px',
      opacity: '1',
      height: '800px',
      width: '300px'
    });
  });
});

$(document).ready(function() {
  $(window).bind('scroll', function() {
    var distance = 500;
    if ($(window).scrollTop() > distance) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });
});
