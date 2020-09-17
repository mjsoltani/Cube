/*gsap animation*/
const tl = new TimelineMax({ delay: 0.6 });
let border = document.querySelector('.header-title');
let paragraph1 = document.querySelector('#paragraph1');
let paragraph2 = document.querySelector('#paragraph2');
let items = document.querySelector('.header-items');
let ArrowDownButton = document.querySelector('.arrow-down');
let backButton = document.querySelector('.back-button')
tl.fromTo(border, 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
    .fromTo(paragraph1, 0.6, { opacity: 0, x: 50 }, { opacity: 1, x: 0 })
    .fromTo(paragraph2, 0.6, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
    .fromTo(items, 0.6, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
    .fromTo(ArrowDownButton, 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
    .fromTo(backButton, 0.6, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })

/*INITIALIZE AOS*/
AOS.init();