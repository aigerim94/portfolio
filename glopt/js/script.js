<<<<<<< HEAD
$(document).ready(function(){
    $('.center').slick({
        speed: 1200,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right_arrow.png"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1,
              dots: true
            }
          }
        ]
    });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.promo__menu'),
  menuItem = document.querySelectorAll('.promo__menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('promo__menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('promo__menu_active');
      })
  })
=======
$(document).ready(function(){
    $('.center').slick({
        speed: 1200,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right_arrow.png"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1,
              dots: true
            }
          }
        ]
    });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.promo__menu'),
  menuItem = document.querySelectorAll('.promo__menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('promo__menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('promo__menu_active');
      })
  })
>>>>>>> 9c2cea4ec588566ac078e74b0b6d1338d67bcd18
})