$(document).ready(function(){
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        draggable: true,
        infinite: true,
        asNavFor: '.slider__dots-inner',
        prevArrow: '<img class="prev-arrow" src="img/prev-arrow.png" alt="prev">',
        nextArrow: '<img class="next-arrow" src="img/next-arrow.png" alt="next">',
        
    });
    $('.slider__dots-inner').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider__inner',
        responsive: [
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 5,
              }
            },
            {
                breakpoint: 781,
                settings: {
                  slidesToShow: 4,
                }
              },
            {
                breakpoint: 630,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 481,
                settings: {
                  slidesToShow: 2,
                }
            },
          ]
    });

    $('.burger__btn').on('click', function(){
        $('.header__menu ul').slideToggle();
    });
  });