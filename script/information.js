const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const culture_title = document.querySelectorAll('.culture_title > div')
const culture_contents = document.querySelectorAll('.culture_contents > div')
const power = document.querySelectorAll('.power')
console.log(tab_contents,tab_title,culture_contents,culture_title,power)
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
for(let i of culture_contents){i.style.display = 'none'}
culture_contents[0].style.display = 'flex'
power.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        culture_title[i].classList.toggle('active')
        for(let i of culture_contents){i.style.display = 'none'}
        culture_contents[i].style.display = 'flex'
    })
})