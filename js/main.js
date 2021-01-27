/* const loader = document.querySelector('.loader');

window.addEventListener('load', ()=>{

    loader.classList.add('fondu-out');
}); */



//contact closed button
let contactLink = document.querySelector('.contactLink');
let contactForm = document.querySelector('.contact');
let closeBtn = document.querySelector('.close');

contactLink.addEventListener('click', function(){
    contactForm.classList.add('closed');
});

closeBtn.addEventListener('click', function(){
    contactForm.classList.remove('closed');
});



//slider el-flako 
var mySwiper = new Swiper('.swiper-container', {
    //slidesPerView: 1,
    //spaceBetween: 30,
    //loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// scroll - reveal
//root: zone d'affichage qui détecte element est visible ou non, ici Ecran
// threshold: à quel moment votre system intersection va détecter--- .1 : dès que 
//10% des elements sont visible on va déclancher des choses
const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        } 
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r);
})
