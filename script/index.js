const big_slide = new Swiper('#big_slide',{
    slidesPerView: 1,
    direction: 'horizontal',
    autoplay:{delay:3000},
    effect : 'fade',
    speed:1000,
    loop:true,
    on:{
        init:function(e){
            e.preventDefault()
            this.slides[this.activeIndex].querySelector('.swiper-slide .big_txt').style.opacity = '1';
        },
        slideChange:function(e){
            e.preventDefault()
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
    navigation: {
        nextEl: '.news_container .swiper-button-next',
        prevEl: '.news_container .swiper-button-prev'
    }
})
const section = document.querySelectorAll('.section')