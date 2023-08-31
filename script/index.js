const c_slide = new Swiper('#c_slide',{
    slidesPerView: 'auto',
    direction: 'horizontal',
    autoplay:{delay:3000},
    // effect:'Virtual',
    speed:1000,
    loop:true,
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
    slidesPerView: 3,
    direction: 'horizontal',
    autoplay:{delay:3000},
    speed:1000,
    loop:true,
})
const section = document.querySelectorAll('.section')
const nextBtn = document.querySelector('.news_container .swiper-button-next')
const prevBtn = document.querySelector('.news_container .swiper-button-prev')
const small = document.querySelectorAll('#small_slide .swiper-slide')
small.forEach(function(t,i){
    nextBtn.addEventListener('click',function(){
        t.
    })
})