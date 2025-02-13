$(document).ready(function () {
    $('.carousel__container').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prevArrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/nextArrow.svg" alt=""></button>',
        draggable: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    }
    );
});

