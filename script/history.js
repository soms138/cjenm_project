const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const more = document.querySelectorAll('.history > .imgCls')
const desc = document.querySelectorAll('.history .desc')
const history = document.querySelectorAll('.history')
console.log(tab_contents,tab_title,more)
for(let i of tab_contents){i.style.display = 'none'}
tab_contents[0].style.display = 'block'
tab_title.forEach(function(t,i){
    t.addEventListener('click', function(e){
        e.preventDefault()
        for(let i of tab_title){i.classList.remove('active')}
        t.classList.add('active')
        for(let i of tab_contents){i.style.display = 'none'}
        tab_contents[i].style.display = 'block'
    })
})
more.forEach(function(target,index){
    target.addEventListener('click',function(e){
        e.preventDefault()
        desc[index].classList.toggle('show')
        history[index].classList.toggle('active')
    })
})