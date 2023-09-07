const tab_contents = document.querySelectorAll('.tab_contents > div')
const slide = document.querySelectorAll('.swiper-slide')
const txt = document.querySelectorAll('.contents > div')
console.log(tab_contents,slide)
$(document).ready(function(){
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrillHorizontally:true
    })
})
for(let i of tab_contents){i.style.display = 'none'}
tab_contents[0].style.display = 'block'
slide.forEach(function(t,i){
    t.addEventListener('click', function(e){
        e.preventDefault()
        for(let i of slide){i.classList.remove('active')}
        t.classList.add('active')
        for(let i of tab_contents){i.style.display = 'none'}
        tab_contents[i].style.display = 'block'
    })
})
const main_slide = new Swiper('#main_slide',{
    slidesPerView: 3,
    direction: 'vertical',
    autoplay:{delay:3000},
    speed:1000,
    loop:true,
    /* breakpoints:{
        834:{
            direction:'horizontal',
            slidesPerView:5,
        },
    }, */
})
console.log(main_slide)