const tl = new TimelineMax({ delay: 0.6 });
let first = document.querySelector('.first')
let second = document.querySelector('.second')
tl.fromTo(first, 0.5, { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
    .fromTo(second, 0.5, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })