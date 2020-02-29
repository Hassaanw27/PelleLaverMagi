$(document).ready(function() {
  $("button").click(function() {
    $('.eksil').animate({
      right: '1px',
      top: '100px',
      opacity: '1',
      height: '800px',
      width: '290px'
    });
  });
});

//$(document).ready(function() {
  //$(window).bind('scroll', function() {
    //var distance = 500;
    //if ($(window).scrollTop() > distance) {
    //  $('nav').addClass('scrolled');
    //} else {
    //  $('nav').removeClass('scrolled');
  //  }
  //});
//});
//$(document).ready(function() {
  //$(window).bind('scroll', function() {
    //var distance = 500;
    //if ($(window).scrollTop() > distance) {
      //$('logo').addClass('scrolled');
      //console.log("sutrøv")
    //} else {
    //  $('logo').removeClass('scrolled');
  //  }
  //});
//});
