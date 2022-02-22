$(function(){
    

          //cursor
//   $(window).mousemove(function(e){
//     w = $('.cursor').width()/2
//     h = $('.cursor').height()/2

//     gsap.to('.cursor',{
//       x:e.clientX-w,
//       y:e.clientY-h,
//       duration:0.1
//     });
//   });

$('body').mousemove(function(e){
    xx = e.clientX - 50;
    yy = e.clientY - 50;

    gsap.to('.cursor', {
      x:xx,
      y:yy
    })
})

  //cursor hover
  $('.sc_port1 .left_wrap a').mouseover(function(){
    gsap.to('.cursor',{
      scale:1.3,
      backgroundColor:'rgb(21 121 40)',
      duration:0.2
    });
  })
  $('.sc_port2 .left_wrap a').mouseover(function(){
    gsap.to('.cursor',{
      scale:1.3,
      backgroundColor:'#1c7193',
      duration:0.2
    });
  })
  $('.sc_port3 .left_wrap a').mouseover(function(){
    gsap.to('.cursor',{
      scale:1.3,
      backgroundColor:'#F0F8FF',
      duration:0.2
    });
  })
  $('.sc_port4 .left_wrap a').mouseover(function(){
    gsap.to('.cursor',{
      scale:1.3,
      backgroundColor:'#DCDCDC',
      duration:0.2
    });
  })
  $('.sc_port5 .left_wrap a').mouseover(function(){
    gsap.to('.cursor',{
      scale:1.3,
      backgroundColor:'#40181c',
      duration:0.2
    });
  })





  $('.left_wrap a').mouseleave(function(){
    gsap.to('.cursor',{
      scale:1,
      backgroundColor:'transparent',
      duration:0.2
    });
  })


    function txtEvent(){
        gsap.to('.sc_home .txt01',{
            scrollTrigger:{
                trigger:".sc_home",
                start:"top top",
                end:"+=2000",  // +=3000 이렇게하면 스크롤 많이해야 넘어감
                scrub:1,
                // markers:true,
                pin:true,  // 지금 이 모션 끝날때까지 핀 고정
            },
            // opacity:0,
            height:'100%',
            // 'font-size':'100',
            // 'color':'#f9f9f9',
    
        }) 
    } txtEvent();
    
    
    
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() >= Math.ceil($('.sc_home .txt_wrap').offset().top)) {
    //         $('.sc_home .txt_wrap').stop().animate({opacity:'0'},'fast');
    //     } else {
    //         $('.sc_home .txt_wrap').stop().animate({opacity:'1'},'fast');
    //     }
    // });

        
        // gsap.to('.sc_home .txt_wrap',{
        //     scrollTrigger:{
        //         trigger:".sc_home",
        //         start:"top top",
        //         end:"+=5000",  // +=3000 이렇게하면 스크롤 많이해야 넘어감
        //         scrub:1,
        //         // markers:true,
        //         pin:true,  // 지금 이 모션 끝날때까지 핀 고정
        //     },
        //     opacity:0,
        //     // height:'100%',
        //     // 'font-size':'100',
        //     // 'color':'#f9f9f9',
        // })





    // gsap.to('.sc_home .bg',{
    //     scrollTrigger:{
    //         trigger:".sc_home",
    //         start:"top top",
    //         end:"+=1000",
    //         scrub:1,
    //         // markers:true,
    //         pin:true,  // 지금 이 모션 끝날때까지 핀 고정
    //     },
    //     // opacity:0,
    //     height:'100%',
    //     // 'font-size':'100',
    //     // 'color':'#f9f9f9',
    // })


    // gsap.to('.sc_home .title',{
    //     scrollTrigger:{
    //         trigger:".sc_port1",
    //         start:"top 100%",
    //         end:"top 100%",
    //         scrub:0.1,
            // markers:true,
    //     },
    //     'visibility': 'hidden',
    // })



    // sc_port1 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port1",
            start:"20% 20%",
            //원랜 20에 50이였음
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        // 'background': '#427f3e',
        'background': '#63b45b',
    })


    // sc_port2 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port2",
            start:"top 20%",
            //원랜 20에 50이였음
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        // 'background': '#c5aa9e',
        'background':'#0158a8',
    })


    // sc_port3 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port3",
            start:"top 20%",
            //원랜 20에 50이였음
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        // 'background': '#F0F8FF',
        'background':'#335c64',
    })


    // sc_port4 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port4",
            start:"top 20%",
            //원랜 20에 50이였음
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        // 'background': '#b19595',
        // 'background': '#f0ccd0',
        // 'background': '#DCDCDC',
        'background':'#111',
    })


    // sc_port5 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port5",
            start:"top 20%",
            //원랜 20에 50이였음
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        // 'background': '#eff4e7',
        // 'background': '#fef5f3',
        'background':'#450003',
    })



    $('.motion').each(function(index,item){
        target = $(this).find('.right_wrap');
    
        gsap.to(target,{
            scrollTrigger:{
            trigger:item,
            start:"50% 100%",
            end:"bottom top",
            scrub:1,
            // markers:true,
            },
            'bottom':'-5%',
        })

    })
    $('.motion1').each(function(index,item){
        target = $(this).find('.right_wrap');
    
        gsap.to(target,{
            scrollTrigger:{
            trigger:item,
            start:"50% 100%",
            end:"bottom top",
            scrub:1,
            // markers:true,
            },
            'bottom':'15%',
        })
    })


    $('.motion').each(function(index,item){
        target = $(this).find('.left_wrap');
    
        gsap.to(target,{
            scrollTrigger:{
            trigger:item,
            start:"50% 100%",
            end:"bottom top",
            scrub:1,
            // markers:true,
            },
            yPercent:-5,
        })
        
    })


    $('.motion').each(function(index,item){
        target = $(this).find('.title');
    
        gsap.from(target,{
            scrollTrigger:{
            // duration:5,
            trigger:item,
            start:"20% 50%",
            end:"bottom bottom",
            scrub:1,
            // markers:true,
            },
            opacity:0,
            'bottom':'-8%'
        })
    })

    $('.motion1').each(function(index,item){
        target = $(this).find('.title');
    
        gsap.from(target,{
            scrollTrigger:{
            // duration:5,
            trigger:item,
            start:"20% 50%",
            end:"bottom bottom",
            scrub:1,
            // markers:true,
            },
            opacity:0,
            'bottom':'12%'
        })
    })


    $('.close').click(function(e){
        e.preventDefault();
        
        if($('.close i').hasClass('on')){
            $(this).children('i').removeClass('on');
            $(this).siblings('nav').removeClass('on');
        } else {
            $(this).children('i').addClass('on');
            $(this).siblings('nav').addClass('on');
        }

    })
    

    $(window).scroll(function(){

        let bgTop = $('.wrapper').offset().top;

        if($(window).scrollTop() > bgTop){
            $('header, .top_btn').addClass('on');
        }else{
            $('header, .top_btn').removeClass('on');
        }
    })


    $('ul.gnb > li').mouseover(function(){
        $(this).children('.sub_gnb').addClass('on');
    })
    $('ul.gnb > li').mouseout(function(){
        $(this).children('.sub_gnb').removeClass('on');
    })


    //top 이동
    $( '.top_btn' ).click( function(e) {
        e.preventDefault();
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    } );


})
