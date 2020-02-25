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