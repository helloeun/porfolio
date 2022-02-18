$(function(){

    var swiper1 = new Swiper(".slide01", {
        slidesPerView: 1,
        // spaceBetween: 43,
        loop: true, //true 예정
        autoplay: {
            delay: 2000, // 슬라이드 넘어가는 duration
        }, // true 예정
        pagination: {
          el: "#news .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: "#news .swiper-button-next",
          prevEl: "#news .swiper-button-prev",
        },
    });

    $('#news .start').click(function(){
        $(this).css({'display':'none'})
        $('#news .stop').css({'display':'block'})
    })
    $('#news .stop').click(function(){
        $(this).css({'display':'none'})
        $('#news .start').css({'display':'block'})
    })

    $('#news .start').on('click', function(){
        swiper1.autoplay.start();
        return false; //리턴을 쓰면 스타트 버튼기능만 수행하게 함 나머지 기능은 하지않음
    })

    $('#news .stop').on('click', function(){
        swiper1.autoplay.stop();
        return false;
    })






    var swiper2 = new Swiper(".slide02", {
        slidesPerView: 1,
        // spaceBetween: 43,
        loop: true, //true 예정
        autoplay: {
            delay: 2000, // 슬라이드 넘어가는 duration
        }, // true 예정
        pagination: {
          el: "#part .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: "#part .swiper-button-next",
          prevEl: "#part .swiper-button-prev",
        },
    });

      
    $('#part .start').click(function(){
        $(this).css({'display':'none'})
        $('#part .stop').css({'display':'block'})
    })
    $('#part .stop').click(function(){
        $(this).css({'display':'none'})
        $('#part .start').css({'display':'block'})
    })

    $('#part .start').on('click', function(){
        swiper2.autoplay.start();
        return false; //리턴을 쓰면 스타트 버튼기능만 수행하게 함 나머지 기능은 하지않음
    })

    $('#part .stop').on('click', function(){
        swiper2.autoplay.stop();
        return false;

    })

  


    




    var swiper3 = new Swiper(".slide03", {
        slidesPerView: 3,
        spaceBetween: 43,
        loop: false, //true 예정
        autoplay: {
            delay: 2000, // 슬라이드 넘어가는 duration
        }, // true 예정
        pagination: {
          el: ".slide03 .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".slide03 .swiper-button-next",
          prevEl: ".slide03 .swiper-button-prev",
        },
    });

    $('.sc_slide .start').click(function(){
        $(this).css({'display':'none'})
        $('.sc_slide .stop').css({'display':'block'})
    })
    $('.sc_slide .stop').click(function(){
        $(this).css({'display':'none'})
        $('.sc_slide .start').css({'display':'block'})
    })


    $('.sc_slide .start').on('click', function(){
        swiper3.autoplay.start();
        return false; //리턴을 쓰면 스타트 버튼기능만 수행하게 함 나머지 기능은 하지않음
    })

    $('.sc_slide .stop').on('click', function(){
        swiper3.autoplay.stop();
        return false;
    })


    /* tab_menu */

    $('.tab_nav a').click(function (e) { 
        e.preventDefault();

        target = $(this).attr('href');
        $(this).addClass('on').siblings().removeClass('on');
        $(target).addClass('on').siblings().removeClass('on');
    });



    
    // $('.sc_site .gnb > li button').click(function (e) { 
    //     e.preventDefault();

    //     sub = $(this).siblings('.sub');

    //     h = sub.outerHeight();
        
    //     if($(this).siblings('.sub').hasClass('on')){
    //         $('.sub').removeClass('on');
    //         $(this).siblings('.sub').removeClass('on');
    //     } else {
    //         $('.sub').removeClass('on');
    //         $(this).siblings('.sub').addClass('on');
    //     }


    // });



    $('.sc_site .gnb > li button').click(function (e) { 
        e.preventDefault();

        sub = $(this).siblings('.sub_wrap');

        h = sub.children('ul').outerHeight();
        
        if( $(this).hasClass('on') ){
            $('.sub_wrap').stop().animate({height:0},300);
        //    sub.stop().animate({height:0},500);
        sub.stop().animate({height:0},300);
            $('.sc_site .gnb > li button').removeClass('on');
        } else {
            $('.sub_wrap').stop().animate({height:0},300);
            sub.stop().animate({height:h},300);
            $('.sc_site .gnb > li button').removeClass('on');
            $(this).addClass('on');
            // $('.sub').stop().animate({height:0},500);
            // sub.stop().animate({height:h},500);
        }


    });



})