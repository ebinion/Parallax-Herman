$(document).ready(function(){
  $("[data-parallax]").each(function(i){
    window.console.log(i);
  });

  var $h1 = $("#headingScroll"), $window = $(window);

  $h1.css('position', 'relative');

  $window.scroll(function(){
    var headlineOffset = $window.scrollTop() / 3;
    var opacity = 1 - (headlineOffset / 100)

    $h1.css({
      'top': headlineOffset,
      'opacity': opacity
    });
    $("article section").css('margin-top', $window.scrollTop() / -3);
  });
});