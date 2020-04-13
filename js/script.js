






$(document).ready(function(){
    
    //===============pre loader
    
    //preloader js
    
    
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



    //=================================================CLIENT SLIDER=================
    $('.voters-slider').slick({
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


    


    
    //====================================BACK TO TOP

    $(window).scroll(function(){

        var scrollto = $(window).scrollTop();

        //back top btn

        if(scrollto> 200){
            $('.backto-top').fadeIn(1000);   
        }else{
            $('.backto-top').fadeOut(1000); 
        }



    })

    $('.backto-top').click(function(){
        $('html, body').animate({
            scrollTop: 0                    
        },500)
    })


});









