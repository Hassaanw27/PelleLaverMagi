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

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

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
