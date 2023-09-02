const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const culture_title = document.querySelectorAll('.culture_title > div > div')
const culture_bg1 = document.querySelector('.culture_title > div > .bg1')
const culture_contents = document.querySelectorAll('.culture_contents > div')
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
// culture transformY
$(document).ready(function(){
    $("power_bg>.more").click(function(){
        $(this).prev("div").toggleClass("show");
    });
});
for(let i of culture_title){i.firstElementChild.lastElementChild.style.filter = 'opacity(0)'}
for(let i of culture_contents){i.style.display = 'none'}
culture_contents[0].style.display = 'flex'
culture_title.forEach(function(t,i){
    t.lastElementChild.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of culture_title){
            i.classList.remove('active')
            i.firstElementChild.lastElementChild.style.filter = 'opacity(1)'
        }
        t.classList.add('active')
        for(let i of culture_contents){i.style.display = 'none'}
        culture_contents[i].style.display = 'flex'
    })
})