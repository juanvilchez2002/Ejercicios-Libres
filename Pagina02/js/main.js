document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show')
});

/*
    adicionando el efecto para que pueda aparecer de poco a poco  las secciones en la pagina
*/

ScrollReveal().reveal('.showcase', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.new-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});