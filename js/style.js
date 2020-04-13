


$(document).ready(function(){
    //========================banner part
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
        
    });


    //===================team slider============================


    $('.team').slick({
        dots: false,
        nextArrow: '<i class="fas fa-arrow-right"></i>',
        prevArrow: '<i class="fas fa-arrow-left"></i>',
        infinite:true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            
            {
              
                breakpoint:1019,
                settings:{
                    arrows:false
                }
            },
            

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows:false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows:false
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    arrows:false
                }
            }
        ]
    });

//=================================================CLIENT SLIDER=================
    $('.client-slider').slick({
        dots: false,
        infinite:true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },

            {

                breakpoint:1019,
                settings:{
                    arrows:false
                }
            },


            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows:false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows:false
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    arrows:false
                }
            }
        ]
        
        
    });


    //=======================================activeNav==============================================

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    });

   
    //======================================PROJRCT FILTER PART JS==========================================

    var containerEl = document.querySelector('.project-main');

    var mixer = mixitup(containerEl);
    $('.filtering').on( 'click', '.control', function() {

        $(this).addClass('control-active').siblings().removeClass('control-active');

    });



    //=======================================PROJRCT FILTER PART END=====================================================


    //================================MAGNIFIC POPUP JS=================================================================

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });



    //==============================COUNTER PART JS==============================================================================

    $('.counter').counterUp({
        delay: 40,
        time: 3000
    });

    //========================WOW JS==============================================================================

    new WOW().init();

   
    
});









