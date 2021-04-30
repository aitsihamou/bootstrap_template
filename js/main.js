// adapt the section height with the screen
$(function () {
  $('.slider .carousel-item').height($(window).height() - (($('.upper-bar').innerHeight()) + ($('.navbar').innerHeight())));

});
//shuffleimg add active class
// function hide picture in phone size and other device change opacity 
var x = window.matchMedia("(max-width: 576px)")
function myFunction(x) {
  if (x.matches) { // If media query matches
    $('.featuredwork ul li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      if ($(this).data('class') === 'All') {
        $('.shuffelimg .col-md').css('display', '');
      } else {
        $('.shuffelimg .col-md').css('display', 'none');
        $($(this).data('class')).parent().css('display', '');
      }
    });
  } else {
    $('.featuredwork ul li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      if ($(this).data('class') === 'All') {
        $('.shuffelimg .col-md').css('opacity', 1);
      } else {
        $('.shuffelimg .col-md').css('opacity', '.2');
        $($(this).data('class')).parent().css('opacity', 1);
      }
    });
  }
}
myFunction(x) // Call listener function at run time


//-------------------------
$('.Count').counterUp({
  delay: 10,
  time: 1000
});




 