$(function () {
    $('.hamburger').on('click', function () {
        $('header').toggleClass('open');
    });

    $('#nav a').on('click', function () {
        $('header').removeClass('open');
    });

    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });

    function beansSliderSetting() {
        let windowWidth = $(window).width();
        let breakpoint = 800;

        if (windowWidth <= breakpoint) {
            if (!$('.beans-list').hasClass('slick-initialized')) {
                $('.beans-list').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                });
            }
        } else {
            if ($('.beans-list').hasClass('slick-initialized')) {
                $('.beans-list').slick('unslick');
            }
        }
    }
    beansSliderSetting();
    $(window).resize(function () {
        beansSliderSetting();
    });

    function menuSliderSetting() {
        let windowWidth = $(window).width();
        let breakpoint = 800;

        if (windowWidth <= breakpoint) {
            $('.menu-list').each(function () {
                if (!$(this).hasClass('slick-initialized')) {
                    $(this).slick({
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '10%', 
                        dots: false,
                        arrows: true,
                        prevArrow: '<button type="button" class="slick-prev custom-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
                        nextArrow: '<button type="button" class="slick-next custom-arrow"><i class="fa-solid fa-chevron-right"></i></button>'
                    });
                }
            });
        } else {
            $('.menu-list').each(function () {
                if ($(this).hasClass('slick-initialized')) {
                    $(this).slick('unslick');
                }
            });
        }
    }
    menuSliderSetting();
    $(window).resize(function () {
        menuSliderSetting();
    });
});