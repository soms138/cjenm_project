const menu = document.querySelector('.nav_open')
const menuBtn = document.querySelector('.m_nav')
const lang = document.querySelectorAll('.lang > a')
const body = document.querySelector('body,html')
const navActive = document.querySelectorAll('.nav_wrap > .sub_open')
const site_btn = document.querySelector('.btm_right .site_btn')
const site_open = document.querySelector('.btm_right .site_open')
const header = document.querySelector('header')
const title = document.querySelector('main > .title')
let boolean = true
console.log(menu,menuBtn,lang,body,navActive,site_btn,site_open,boolean,header,title)
header.style.transition = 'all 0.3s linear'
header.style.background = 'none'
window.addEventListener('scroll',function(){
    console.log(window.pageYOffset)
    if(window.pageYOffset > title.offsetTop+200){
        header.style.backgroundColor = 'rgba(0,0,0,0.8)'
    }else{
        header.style.background = 'none'
    }
})
$(".sub_open>a").click(function(){
    $(this).next("ul").toggleClass("show");
});
$(".sub>li>a").click(function(){
    $(this).next("ul").toggleClass("show");
});
for(let i of navActive){
    i.firstElementChild.addEventListener('click', function(e){
        e.preventDefault()
        i.firstElementChild.classList.toggle('active')
    })
}
lang.forEach(function(t){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of lang){i.classList.remove('active')}
        t.classList.add('active')
    })
})
menu.style.transition = 'all 1s ease';
menuBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(boolean == true){
        this.firstElementChild.style.transform = 'translateY(11px) rotate(45deg)'
        this.lastElementChild.style.transform = 'translateY(-11px) rotate(-45deg)'
        this.lastElementChild.previousElementSibling.style.display = 'none'
        menu.style.transform = 'translateX(0)';
        
        boolean = false
    }else{
        this.firstElementChild.style.transform = 'none'
        this.lastElementChild.style.transform = 'none'
        this.lastElementChild.previousElementSibling.style.display = 'flex'
        menu.style.transform = 'translateX(100%)';

        boolean = true
    }
})
site_btn.addEventListener('click',function(e){
    e.preventDefault()
    this.lastElementChild.classList.toggle('rotate')
    site_open.classList.toggle('show')
})