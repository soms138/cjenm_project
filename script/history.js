const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const more = document.querySelectorAll('.history > .imgCls')
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
// history desc toggle
$(document).ready(function(){
    $(".history>.imgCls").click(function(){
        $(".active>.desc").toggleClass("show");
    });
});
for(let i of more){
    i.addEventListener('click', function(e){
        e.preventDefault()
        i.parentElement.classList.toggle('active')
    })
}