$(function(){
    
    gsap.to('.sc_home .txt01',{
        scrollTrigger:{
            trigger:".sc_home",
            start:"top top",
            end:"+=1000",  // +=3000 이렇게하면 스크롤 많이해야 넘어감
            scrub:1,
            markers:true,
            pin:true,  // 지금 이 모션 끝날때까지 핀 고정
        },
        // opacity:0,
        height:'100%',
        // 'font-size':'100',
        // 'color':'#f9f9f9',
    })


    gsap.to('.sc_home .bg',{
        scrollTrigger:{
            trigger:".sc_home",
            start:"top top",
            end:"+=1000",
            scrub:1,
            markers:true,
            pin:true,  // 지금 이 모션 끝날때까지 핀 고정
        },
        // opacity:0,
        height:'100%',
        // 'font-size':'100',
        // 'color':'#f9f9f9',
    })


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



    // sc_port2 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port2",
            start:"top 50%",
            end:"bottom 80%",
            scrub:1,
            // markers:true,
        },
        'background': '#c5aa9e',
    })


    // sc_port3 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port3",
            start:"20% 50%",
            end:"bottom 80%",
            scrub:1,
            // markers:true,
        },
        'background': '#F0F8FF',
    })


    // sc_port4 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port4",
            start:"20% 50%",
            end:"bottom 80%",
            scrub:1,
            // markers:true,
        },
        // 'background': '#b19595',
        // 'background': '#f0ccd0',
        'background': '#DCDCDC',
    })


    // sc_port5 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port5",
            start:"20% 50%",
            end:"bottom 80%",
            scrub:1,
            // markers:true,
        },
        // 'background': '#eff4e7',
        'background': '#fef5f3',
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
            start:"50% 50%",
            end:"bottom bottom",
            scrub:1,
            // markers:true,
            },
            opacity:0,
            'bottom':'-8%'
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
    


})
