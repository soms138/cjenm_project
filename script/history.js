const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const more = document.querySelectorAll('.history > .imgCls')
const active = document.querySelector('.active > .desc')
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
/* $(document).ready(function(){
    $(".history>.imgCls").click(function(){
        $(".tab_contents>div>div").toggleClass("active")
        if($(".tab_contents>div>div").hasClass("active") === true){
            $(".desc").toggleClass("show")
        }
    });
}); */
for(let j of more){
    j.addEventListener('click', function(e){
        e.preventDefault()
        j.parentElement.classList.toggle('active')
        j.parentElement.forEach(function(t,i){
            true = j.parentElement.classList.toggle('active')
            if(true){
                t[i].classList.toggle('show')
            }
        })
    })
}