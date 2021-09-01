<<<<<<< HEAD
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.png"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
    });
=======
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.png"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
    });
>>>>>>> 9c2cea4ec588566ac078e74b0b6d1338d67bcd18
});