const menu = document.querySelector('.nav_open')
const menuBtn = document.querySelector('.m_nav')
const lang = document.querySelectorAll('.lang > a')
let boolean = true
lang.forEach(function(t){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of lang){i.classList.remove('active')}
        t.classList.add('active')
    })
})
menu.style.transform = 'translateX(100%)';
menu.style.transition = 'all 1s ease';
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
