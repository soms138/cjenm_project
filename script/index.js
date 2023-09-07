$(document).ready(function(){
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrillHorizontally:true
    })
})
const big_slide = new Swiper('#big_slide',{
    slidesPerView: 1,
    direction: 'horizontal',
    autoplay:{delay:3000},
    effect : 'fade',
    speed:1000,
    loop:true,
    on:{
        init:function(){
            this.slides[this.activeIndex].querySelector('.swiper-slide .big_txt').style.opacity = '1';
        },
        slideChange:function(){
            this.slides.forEach(target => {
                target.querySelector('.swiper-slide .big_txt').style.opacity = '0';
                target.querySelector('.swiper-slide .big_txt').style.transform = 'translateX(30%)';
            })
            this.slides[this.activeIndex].querySelector('.swiper-slide .big_txt').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.swiper-slide .big_txt').style.transform = 'translateX(0)';
        }
    },
    navigation: {
        nextEl: '.news_container .swiper-button-next',
        prevEl: '.news_container .swiper-button-prev'
    }
})
const small_slide = new Swiper('#small_slide',{
    slidesPerView: 1,
    direction: 'horizontal',
    autoplay:{delay:3000},
    speed:1000,
    loop:true,
    breakpoints:{
        400:{slidesPerView:2},
        700:{slidesPerView:3},
        1060:{slidesPerView:4},
        1200:{slidesPerView:5},
        1360:{slidesPerView:3},
    },
    navigation: {
        nextEl: '.news_container .swiper-button-next',
        prevEl: '.news_container .swiper-button-prev'
    }
})
console.log(big_slide,small_slide)