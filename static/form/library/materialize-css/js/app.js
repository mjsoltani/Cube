document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});






const tl = new TimelineMax({ delay: 0.6 });
let formContainer = document.querySelector('.form-container');
let leftBackground = document.querySelector('.left-background');
let container = document.querySelector('.container');
let button = document.querySelector('.button');
tl.fromTo(formContainer, 0.4, { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo(leftBackground, 0.4, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(container, 0.4, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo(button, 0.4, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })