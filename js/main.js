$(function (){
  $('.slider .carousel-item').height($(window).height() - (($('.upper-bar').innerHeight()) + ($('.navbar').innerHeight())));
  //shuffleimg add active class
  $('.featuredwork ul li').on('click',function(){ $(this).addClass('active').siblings().removeClass('active');
   if ($(this).data('class') === 'All') {
   	$('.shuffelimg .col-md').css('opacity',1);
   } else {
   	$('.shuffelimg .col-md').css('opacity','.2');
   	$($(this).data('class')).parent().css('opacity',1);
   }

}); 

});
