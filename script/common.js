const menu = document.querySelector('.nav_open')
const menuBtn = document.querySelector('.m_nav')
const lang = document.querySelectorAll('.lang > a')
const header = document.querySelector('header')
const section = document.querySelectorAll('main > .section')
const aside = document.querySelectorAll('aside .bar_wrap')
const body = document.querySelector('body,html')
const navActive = document.querySelectorAll('.nav_wrap > li > a')
const navSub = document.querySelectorAll('.sub > li')
const subActive = document.querySelectorAll('.sub > li > a')
const navSub2 = document.querySelectorAll('.sub2 > li')
let boolean = true
console.log(menu,menuBtn,lang,header,section,aside,body,navActive,navSub,navSub2,subActive)

/* for(let i of navActive){
    i.addEventListener('click', function(e){
        e.preventDefault()
        i.classList.add('active')
        for(let j of navSub){j.classList.toggle('block')}
    })
} */

lang.forEach(function(t){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of lang){i.classList.remove('active')}
        t.classList.add('active')
    })
})
menu.style.transition = 'all 1s ease';
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
menuBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(boolean == true){
        this.firstElementChild.style.transform = 'translateY(8.5px) rotate(45deg)'
        this.lastElementChild.style.transform = 'translateY(-8.5px) rotate(-45deg)'
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
window.addEventListener('scroll',function(e){
    e.preventDefault()
    aside.forEach(function(target,index){
        target.addEventListener('click',function(e){
            e.preventDefault()
            window.scrollTo(0,section[index].offsetTop)
        })
        if(body.scrollTop >= section[index].offsetTop){
            for(let j of aside){j.classList.remove('active')}
            target.classList.add('active')
        }
    })
})
