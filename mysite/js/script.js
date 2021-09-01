const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__raitings_counter'),
      lines = document.querySelectorAll('.skills__raitings_line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
   
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

    $('#form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn();
            $('#form').trigger('reset');
            
        });
        return false;
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});