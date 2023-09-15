const tab_contents = document.querySelectorAll('.tab_contents > div')
const slide = document.querySelectorAll('.swiper-slide')
const txt = document.querySelectorAll('.contents > div')
const nav = document.querySelectorAll('#fp-nav ul li')
console.log(tab_contents,slide,txt,nav)
$('#fullpage').fullpage({
    autoScrolling:true,
    scrillHorizontally:true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Contents','tvN','Mnet','OCN','Tooniverse'],
    
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
    direction: 'horizontal',
    autoplay:{delay:3000},
    speed:1000,
    loop:true,
    breakpoints:{
        834:{
            direction:'vertical',
            slidesPerView:5,
        },
        600:{
            direction:'horizontal',
            slidesPerView:4,
        },
        400:{
            direction:'horizontal',
            slidesPerView:3,
        },
    },
})
console.log(main_slide)
for(let i of nav){i.lastElementChild.style.display = 'none'}