$(function(){
   
$('.menu__btn').on('click', function() {
	$('.menu__list').toggleClass('menu__list--active')
});

$('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 1,
    }
});



 $('.heroes__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-text',
  prevArrow: '<button class="slick-btn slick-prev"><img src="images/content/left.png"></button>',
  nextArrow: '<button class="slick-btn slick-next"><img src="images/content/rrr1.png"></button>'
  
});
$('.heroes__slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-img',
   fade: true,
   arrows:false,
});

});

