(function($) {
    "use strict";

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1000);

    /* sticky header - start*/

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.header-nav').addClass("sticky")
        } else {
            $('.header-nav').removeClass("sticky")
        }
    });
    /* sticky header - end */

    /* bg parallax - start */

    $('[data-parallax]').parallax({
        speed: .6,
    });
    /* bg parallax - end */

    /* hero sec start sec end */
    $('.hero-slider-wrap').slick({
        dots: false,
        speed: 1000,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        pauseOnHover: true,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        rtl: $('body').hasClass('rtl') ? true : false
    });

    /* hero sec start sec end */

    /* review sec start start */

    $('.review-card-items-wrap').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: ".main-left-arrow",
        nextArrow: ".main-right-arrow",
        rtl: $('body').hasClass('rtl') ? true : false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });
    /* review sec start sec end */

    /* counter */
    $('.counter-box[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');

        $this.countdown(finalDate, function(event) {
            var $this = $(this).html(event.strftime('' +
                '<div class="days"><strong class="day2 countdown_num">%D</strong><span class="d-block clock_label">' + $(this).data('days') + '</span></div>' +
                '<div class="hours"><strong class="hours2 countdown_num">%H</strong><span class="d-block clock_label">' + $(this).data('hours') + '</span></div>' +
                '<div class="minutes"><strong class="min2 countdown_num">%M</strong><span class="d-block clock_label">' + $(this).data('minutes') + '</span></div>' +
                '<div class="seconds"><strong class="sec2 countdown_num">%S</strong><span class="d-block clock_label">' + $(this).data('seconds') + '</span></div>'));
        });
    });
    /* counter */


    /*----------------------------------------------------*/
    /*	Single Image Lightbox
    /*----------------------------------------------------*/

    if ($('.image-link').length > 0) {
        $('.image-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            }
        });
    }


    /*----------------------------------------------------*/
    /*	Video Link #1 Lightbox
    /*----------------------------------------------------*/

    if ($('.video-link').length > 0) {
        $('.video-link').each(function() {
            var videoUrl = $(this).attr('href');
            $(this).magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                            index: 'youtube.com',
                            src: videoUrl
                        }
                    }
                }
            });
        });
    }

    /* count control */
    $(document).on('click', '.count-control', function() {
        var $quantity_input = $(this).closest('.quantity').find('.qty');
        var old = parseInt($quantity_input.val());
        if ($(this).hasClass('plus')) {
            if (parseInt($quantity_input.attr('max')) != -1) {
                if ((parseInt($quantity_input.attr('max')) - 1) >= old) {
                    $quantity_input.val(old + 1);
                }
            } else {
                $quantity_input.val(old + 1);
            }

        } else {
            if (old > 1) {
                $quantity_input.val(old - 1);
            }
        }

        $(this).closest('form').find('button[type="submit"]').prop('disabled', false);
        return false;
    });



    AOS.init({

    });

    $(document).ready(function() {
        $('.zoom-gallery').magnificPopup({
            delegate: '.image-link',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function(element) {
                    return element.find('img');
                }
            }
        });
    });

    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="fas fa-arrow-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });


})(jQuery);