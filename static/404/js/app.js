const tl = new TimelineMax({ delay: 0.6 });
let paragraf = document.querySelectorAll('p');
let symbol = document.querySelector('.symbol')
let button = document.querySelector('button')
let ArrayParagraph = Array.from(paragraf)
let p1 = ArrayParagraph[0];
let p2 = ArrayParagraph[1];
let p3 = ArrayParagraph[2];

tl.fromTo(symbol, 0.4, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(p1, 0.4, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
    .fromTo(p2, 0.4, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
    .fromTo(p3, 0.4, { opacity: 0, y: -50 }, { opacity: 1, y: 0 })
    .fromTo(button, 0.4, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })