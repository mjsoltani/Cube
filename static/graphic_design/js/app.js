$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    // gsap animation
const tl = new TimelineMax({ delay: 0.6 });
let logo = document.querySelector('.nav-logo');
let button = document.querySelector('.nav-button');
let text = document.querySelector('.text-header ');
let video = document.querySelector('.header-background');
tl.fromTo(logo, 0.5, { x: 50, opacity: 0 }, { x: 0, opacity: 1 });
tl.fromTo(button, 0.5, { x: 50, opacity: 0 }, { x: 0, opacity: 1 });
tl.fromTo(text, 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
tl.fromTo(video, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
// init AOS
AOS.init();