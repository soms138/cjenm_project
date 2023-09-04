const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const culture_title = document.querySelectorAll('.culture_title > div')
const culture_contents = document.querySelectorAll('.culture_contents > div')
const more = document.querySelectorAll('.power_bg > .more')
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
/* for(let i of culture_contents){i.style.display = 'none'}
culture_contents[0].style.display = 'flex'
more.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of culture_title){i.classList.remove('active')}
        culture_title[i].classList.add('active')
        for(let i of culture_contents){i.style.display = 'none'}
        culture_contents[i].style.display = 'flex'
    })
}) */
for(let i of culture_contents){i.style.display = 'none'}
culture_contents[0].style.display = 'flex'
more.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        culture_title[i].classList.toggle('active')
        for(let i of culture_contents){i.style.display = 'none'}
        culture_contents[i].style.display = 'flex'
    })
})