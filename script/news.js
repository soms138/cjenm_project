const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
console.log(tab_contents,tab_title)
for(let i of tab_contents){i.style.display = 'none'}
tab_contents[0].style.display = 'flex'
tab_title.forEach(function(t,i){
    t.addEventListener('click', function(e){
        e.preventDefault()
        for(let i of tab_title){i.classList.remove('active')}
        t.classList.add('active')
        for(let i of tab_contents){i.style.display = 'none'}
        tab_contents[i].style.display = 'flex'
    })
})